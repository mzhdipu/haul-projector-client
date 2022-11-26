import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Root/Contexts/AuthProvider";
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { GoogleAuthProvider } from "firebase/auth";

const SignUp = () => {
  const { createUser, updateUserProfile, signInWithGoogle } = useContext(AuthContext);
  const [accountType, setAccountType] = useState(null);

  const handleChange = (event) => {
    setAccountType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = event.target.image.files[0]
    const formData = new FormData()
    formData.append('image', image)
    const url = `https://api.imgbb.com/1/upload?key=e8113438b493c08f866834de8b0ebd8e`
    console.log(url)
    fetch(url, {
        method: 'POST',
        body: formData,
      })
      .then(res => res.json())
      .then(imageData=>{
      const pic = imageData.data.display_url 

      const accountInfo = {
        accountType,
        name,
        email,
        pic
      }
        // Create new user
        createUser(email, password)
        .then(result =>{
            const user = result.user
            
            // POST FORM DATA
            fetch(`http://localhost:5000/users`,{
              method:'POST',
                headers:{
                  'content-type': 'application/json'
                },
                body:JSON.stringify(accountInfo)
            })
            .then(res=> res.json())
            .then(data => {
              toast.success('Save user info in Database')
            })
          
            toast.success(`User Created Successfully`)
        })
      })
     
  };

  const handleGoogle = () =>{
    const googleProvider = new GoogleAuthProvider()
    signInWithGoogle(googleProvider)
    .then((result)=>{
      // console.log(result.user?.displayName)
      const userGoogle = result.user
      const displayName = userGoogle?.displayName
      const email = userGoogle?.email
      const photoURL = userGoogle?.photoURL

      const userSigninGoogleInfo = {
        displayName,
        email,
        photoURL
      }
      
      
       // POST FORM DATA
       fetch(`http://localhost:5000/users`,{
        method:'POST',
          headers:{
            'content-type': 'application/json'
          },
          body:JSON.stringify(userSigninGoogleInfo)
      })
      .then(res=> res.json())
      .then(data => {
        toast.success('Save user info in Database')
      })


     }).catch((error)=>{
      console.log(error);
    })
  }


  return (
    <section className="relative py-10 sm:py-16 lg:py-24">
      <div className="relative max-w-lg px-4 mx-auto sm:px-0">
        <div className="overflow-hidden bg-white rounded-md shadow-md">
          <div className="px-4 py-6 sm:px-8 sm:py-7">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">
                Create an account
              </h2>

              <p className="mt-2 text-base text-gray-600">
                {" "}
                Already joined?{" "}
                <Link
                  to="/signin"
                  className="text-blue-600 transition-all duration-200 hover:underline hover:text-blue-700"
                >
                  {" "}
                  Sign in now{" "}
                </Link>
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              method="POST"
              className="mt-8 text-left"
            >
              <div className="space-y-5">
                <select
                  onChange={handleChange}
                  className="select select-bordered w-full"
                  value={accountType}
                >
                  <option disabled selected>
                    Account Type
                  </option>
                  <option value="Saler Account" selected>User</option>
                  <option value="Saler Account">Saler Account</option>
                  <option value="Buyer Account">Buyer Account</option>
                </select>

                <div>
                  <label for="" className="text-base font-medium text-gray-900">
                    {" "}
                    First & Last name{" "}
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="name"
                      id=""
                      placeholder="Enter your full name"
                      className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <label for="" className="text-base font-medium text-gray-900">
                    {" "}
                    Email address{" "}
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id=""
                      placeholder="Enter email to get started"
                      className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <label for="" className="text-base font-medium text-gray-900">
                    {" "}
                    Password{" "}
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="password"
                      name="password"
                      id=""
                      placeholder="Enter your password"
                      className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <label for="" className="text-base font-medium text-gray-900">
                    {" "}
                    Upload Profile Picture{" "}
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="file"
                      name="image"
                      id=""
                      accept="image/*"
                      placeholder="Enter your full name"
                      className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                  >
                    Sign up
                  </button>
                </div>

                <div>
                  <button
                    onClick={handleGoogle}
                    type="button"
                    className="
                                    relative
                                    inline-flex
                                    items-center
                                    justify-center
                                    w-full
                                    px-4
                                    py-4
                                    text-base
                                    font-semibold
                                    text-gray-700
                                    transition-all
                                    duration-200
                                    bg-white
                                    border-2 border-gray-200
                                    rounded-md
                                    hover:bg-gray-100
                                    focus:bg-gray-100
                                    hover:text-black
                                    focus:text-black focus:outline-none
                                "
                  >
                    <div className="absolute inset-y-0 left-0 p-4">
                      <FaGoogle/>
                    </div>
                    Sign up with Google
                  </button>

                  <button
                    type="button"
                    className="
                                    relative
                                    inline-flex
                                    items-center
                                    justify-center
                                    w-full
                                    px-4
                                    py-4
                                    mt-2
                                    text-base
                                    font-semibold
                                    text-gray-700
                                    transition-all
                                    duration-200
                                    bg-white
                                    border-2 border-gray-200
                                    rounded-md
                                    hover:bg-gray-100
                                    focus:bg-gray-100
                                    hover:text-black
                                    focus:text-black focus:outline-none
                                "
                  >
                    <div className="absolute inset-y-0 left-0 p-4">
                      <FaGithub/>
                    </div>
                    Sign up with Facebook
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;

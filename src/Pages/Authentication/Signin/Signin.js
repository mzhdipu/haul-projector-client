import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Root/Contexts/AuthProvider";

const Signin = () => {
    const {signInWithGoogle, signin} = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider()
    const navigate = useNavigate();
    const location = useLocation(); 
    const from = location.state?.from?.pathname || '/'

    const handleGoogle = () =>{
      signInWithGoogle(googleProvider)
      .then(result =>{
        const user = result.user;
        navigate(from, {replace: true})
      })
      .catch(error=>{
        console.log(error) 
      })
    }
    const handleSubmit = (event) =>{
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value

        signin(email, password)
          .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            form.reset();
            toast.success('Login Successfully')
          })
          .catch(e => {
            console.error(e);
            toast.error(e.message);
        });
    }
    
  return (
    <div>
      <section className="relative py-10 sm:py-16 lg:py-24">
        <div className="relative max-w-lg px-4 mx-auto sm:px-0">
          <div className="overflow-hidden bg-white rounded-md shadow-md">
            <div className="px-4 py-6 sm:px-8 sm:py-7">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900">Login Now</h2>
                <p className="mt-2 text-base text-gray-600">
                  Did't Have an Account?{" "}
                  <Link to="/signup" title="" className="text-blue-600 transition-all duration-200 hover:underline hover:text-blue-700">
                    Sign up now
                  </Link>
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                method="POST"
                className="mt-8 text-left"
              >

                <div className="space-y-5">

                  <div>
                    <label
                      for=""
                      className="text-base font-medium text-gray-900"
                    >
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
                    <label
                      for=""
                      className="text-base font-medium text-gray-900"
                    >
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
    </div>
  );
};

export default Signin;

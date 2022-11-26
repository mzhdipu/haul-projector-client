import React from "react";
import toast from "react-hot-toast";
import SectionTitle from "../../Components/Shared/SectionTitle/SectionTitle";

const AddProducts = () => {
    
    const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const productName = form.productName.value;
    const description = form.description.value;
    const resalePrice = form.resalePrice.value;
    const originalPrice = form.originalPrice.value;
    const yearOfUse = form.yearOfUse.value;
    const location = form.location.value;
    const postedDate = form.postedDate.value;
    const condition = form.condition.value;
    const yearOfPurchase = form.yearOfPurchase.value;
    const image = event.target.image.files[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `${process.env.REACT_APP_IMGBB}`;
    console.log(url);
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        const pic = imageData.data.display_url;

        const addProductDB = {
          pic,
          productName,
          description,
          resalePrice,
          originalPrice,
          yearOfUse,
          location,
          postedDate,
          condition,
          yearOfPurchase,
        };

        fetch(`${process.env.REACT_APP_server}/products`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(addProductDB),
        })
          .then((res) => res.json())
          .then((data) =>
            toast.success('Product Added Successfully')
          );

          form.reset()
      });
  };
  return (
    <div className="section-container">
      <SectionTitle>Add Products</SectionTitle>

      <div className="w-2/4 mx-auto mb-12">
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            name="image"
            id=""
            accept="image/*"
            placeholder="Enter your full name"
            className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
          />
          <input
            name="productName"
            type="text"
            placeholder="Product Name"
            className="input input-bordered w-full m-2"
          />
          <textarea
            name="description"
            placeholder="Product description"
            id=""
            cols="30"
            rows="10"
            className="input input-bordered w-full m-2"
          ></textarea>
          <input
            name="resalePrice"
            type="text"
            placeholder="Resale price"
            className="input input-bordered w-full m-2"
          />
          <input
            name="originalPrice"
            type="text"
            placeholder="Original price"
            className="input input-bordered w-full m-2"
          />
          <input
            name="yearOfUse"
            type="text"
            placeholder="Years of use"
            className="input input-bordered w-full m-2"
          />
          <input
            name="location"
            type="text"
            placeholder="Location"
            className="input input-bordered w-full m-2"
          />
          <input
            name="postedDate"
            type="text"
            placeholder="Posted Date"
            className="input input-bordered w-full m-2"
          />
          <input
            name="condition"
            type="text"
            placeholder="Condition"
            className="input input-bordered w-full m-2"
          />
          <input
            name="yearOfPurchase"
            type="text"
            placeholder="Year of purchase"
            className="input input-bordered w-full m-2"
          />

          <button
            type="submit"
            className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
          >
            {" "}
            Add Product{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;

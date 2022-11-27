import React from "react";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  const {
    _id,
    category,
    name,
    description,
    pic,
    sellerName,
    location,
    resalePrice,
    originalPrice,
    yearsOfUse,
    postDate,
  } = product;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={pic} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        
        <p>
          {description.length > 10
            ? description.slice(0, 50)
            : description.length}
        </p>

        <div className="card-actions justify-center">
          <button className="btn btn-primary"><Link to={`/product/${product._id}`}>Read More</Link></button>
          <label htmlFor="my-modal-3" className="btn btn-primary">Buy Now</label>
        </div>
      </div>
    </div>
  );
};

export default Card;

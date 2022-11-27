import React from "react";

const Card = ({ product }) => {
  const {
    _id,
    category,
    title,
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
        <h2 className="card-title">{title}</h2>
        
        <p>
          {description.length > 10
            ? description.slice(0, 50)
            : description.length}
        </p>
        
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;

import React from "react";
import { Link } from "react-router-dom";
import { FiEye } from 'react-icons/fi';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const AdsItems = ({ adsProduct }) => {
  const {
    _id,
    category,
    productName,
    description,
    pic,
    sellerName,
    location,
    resalePrice,
    originalPrice,
    yearsOfUse,
    postDate,
  } = adsProduct;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={pic} alt={productName} />
      </figure>

      <div className="card-body text-left">
        <h2 className="card-title">{productName}</h2>
        <p>
          {description.length > 10
            ? description.slice(0, 50)
            : description.length}
        </p>

        <div className="card-actions justify-between w-1/2 m-auto">
          <button className="btn btn-primary"><Link to={`/adsProduct/${adsProduct._id}`}><FiEye/></Link></button>
          <label htmlFor="my-modal-3" className="btn btn-primary"><AiOutlineShoppingCart/></label>
        </div>
      </div>
    </div>
  );
};

export default AdsItems;

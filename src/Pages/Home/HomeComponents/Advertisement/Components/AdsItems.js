import React from 'react';
import { Link } from 'react-router-dom';

const AdsItems = ({adsProduct}) => {
    const {_id, category, title, description, picture, sellerName, location, resalePrice, originalPrice, yearsOfUse, postDate} = adsProduct

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={picture} alt={title} />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{
            description.length > 10 ? description.slice(0, 50) : description.length
        }</p>
        <Link to={`/adsProduct/${adsProduct._id}`}>Continue Reading</Link>

        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
    );
};

export default AdsItems;
import React from "react";
import SectionTitle from "../../../../Components/Shared/SectionTitle/SectionTitle";
import "./Advertisement.css";

const Advertisement = () => {
  return (
    <div className="section-container">

        <SectionTitle>Advertisement Products</SectionTitle>

      <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5">

        {
            [...Array(4)].map(test => 
            
                <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                  <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Shoes!
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                  </div>
                </div>
              </div>
            )
        }
        
      </div>
    </div>
  );
};

export default Advertisement;

import React, { useEffect, useState } from "react";
import SectionTitle from "../../../../Components/Shared/SectionTitle/SectionTitle";
import "./Advertisement.css";
import AdsItems from "./Components/AdsItems";


const Advertisement = () => {
  const [adsProducts, setAdsProducts] = useState([]);

  useEffect(()=>{
    fetch(`${process.env.REACT_APP_server}products`) 
      .then(res => res.json())
      .then(data => setAdsProducts(data))
  }, [])

  return (
    <div className="section-container">

        <SectionTitle>Advertisement Products</SectionTitle>

      <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5">

        {
            adsProducts.map(adsProduct => <AdsItems key={adsProduct._id} adsProduct = {adsProduct}></AdsItems>)
        }
        
      </div>
    </div>
  );
};

export default Advertisement;

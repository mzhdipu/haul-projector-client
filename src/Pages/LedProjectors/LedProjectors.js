import React, { useEffect, useState } from "react";
import SectionTitle from "../../Components/Shared/SectionTitle/SectionTitle";
import Card from "../Home/HomeComponents/AllProducts/Components/Card/Card";
import "./LedProjectors.css";

const LedProjectors = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_server}/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="section-container">
      <SectionTitle>LED Projectors</SectionTitle>

      <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5 mb-24">
        {products.map((product) => (
          <Card key={product._id} product={product}></Card>
        ))}
      </div>
    </div>
  );
};

export default LedProjectors;

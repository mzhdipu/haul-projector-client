import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../../../../Components/Shared/SectionTitle/SectionTitle";
import Card from "./Components/Card/Card";
import Modal from "./Components/Card/Modal";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://halu-projector.vercel.app/products`) 
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="section-container">
      <SectionTitle>All Products</SectionTitle>

      <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5">
            {
                products.map(product => <Card key={product._id} product = {product}></Card>)
            }
      </div>
      
      <Modal></Modal>
    </div>
  );
};

export default AllProducts;

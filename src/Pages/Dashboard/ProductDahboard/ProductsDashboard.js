import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Components/Shared/SectionTitle/SectionTitle";

const ProductsDashboard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://halu-projector.vercel.app/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5">
        {products.map((product) => (
          <div key={product._id}>
            <p>{product.productName}</p>
            <button className="btn btn-primary m-2">Update</button>
            <button className="btn btn-secondary m-2">Ads</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsDashboard;

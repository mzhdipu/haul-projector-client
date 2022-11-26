import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../../../Components/Shared/SectionTitle/SectionTitle';
import './ProductCategories.css'

const ProductCategories = () => {
    const [products, setProducts] = useState([])
    
    useEffect(()=>{
        fetch(`http://localhost:5000/products`)
            .then(res => res.json())
            .then(data => setProducts(data))
    },[])

    const getCategoryData = (products, category) =>{
        let productsCat = products.map(product => {
            return product[category]
        })

        productsCat = ["All", ...new Set(productsCat)]
        return productsCat
        
    }
    const categoryOnlyData = getCategoryData(products, "category")
    return (
        <div className='section-container'>
           <SectionTitle>All Products</SectionTitle>

           <div className='flex'>
                <div className="category-menu w-1/4">
                    
                    <span className="menu bg-base-100 w-56">
                        {
                            // categoryOnlyData.map((categoryOnlyCat, i) => <Link key={categoryOnlyCat.i}>{categoryOnlyCat}</Link>)
                        }
                    </span>
                </div>

                <div className='w-3/4'>
                    <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro commodi, eveniet alias necessitatibus optio nisi sunt repellat aperiam sapiente voluptates praesentium id dolorum, adipisci officiis odio voluptatibus. Ipsam, molestiae quaerat?</h1>
                </div>
           </div>
        </div>
    );
};

export default ProductCategories;
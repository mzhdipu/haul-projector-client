import React from 'react';
import SectionTitle from '../../../../Components/Shared/SectionTitle/SectionTitle';
import './ProductCategories.css'

const ProductCategories = () => {
    return (
        <div className='section-container'>
           <SectionTitle>All Products</SectionTitle>

           <div className='flex'>
                <div className="category-menu w-1/4">
                    <ul className="menu bg-base-100 w-56">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>

                <div className='w-3/4'>
                    <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro commodi, eveniet alias necessitatibus optio nisi sunt repellat aperiam sapiente voluptates praesentium id dolorum, adipisci officiis odio voluptatibus. Ipsam, molestiae quaerat?</h1>
                </div>
           </div>
        </div>
    );
};

export default ProductCategories;
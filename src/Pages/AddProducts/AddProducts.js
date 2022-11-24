import React from 'react';
import SectionTitle from '../../Components/Shared/SectionTitle/SectionTitle';

const AddProducts = () => {
    return (
        <div className='section-container'>
            <SectionTitle>Add Products</SectionTitle>

            <div className='w-2/4 mx-auto mb-12'>
                <form>
                    <input type="text" placeholder="Product Name" className="input input-bordered w-full" />
                </form>
            </div>
        </div>
    );
};

export default AddProducts;
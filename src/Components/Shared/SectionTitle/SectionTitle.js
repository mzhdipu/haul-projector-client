import React from 'react';
import './SectionTitle.css'

const SectionTitle = ({children}) => {
    return (
        <div className='my-20'>
            <h1 className="text-5xl font-bold">{children}</h1>
        </div>
    );
};

export default SectionTitle;
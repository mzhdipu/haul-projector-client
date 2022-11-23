import React, { useState } from 'react';
import Loader from '../../Components/Shared/Loader/Loader';

const Home = () => {
    const [loading, setLoading] = useState(true)
    return (
        <>
        {
            loading && <div>
                <h1 className='text-6xl'>React Application</h1>
                
            </div>
        }
        </>
    );
};

export default Home;
import React, { useState } from 'react';
import useTitle from '../../Hooks/useTitle';
import About from '../About/About';
import Advertisement from './HomeComponents/Advertisement/Advertisement';
import AllProducts from './HomeComponents/AllProducts/AllProducts';
import Banner from './HomeComponents/Banner/Banner';

const Home = () => {
    const [loading, setLoading] = useState(true)

    useTitle('Home')
    
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Advertisement></Advertisement>
            <AllProducts></AllProducts>
        </div>
    );
};

export default Home;
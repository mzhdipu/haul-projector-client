import React, { useState } from 'react';
import Loader from '../../Components/Shared/Loader/Loader';
import useTitle from '../../Hooks/useTitle';
import About from '../About/About';
import Advertisement from './HomeComponents/Advertisement/Advertisement';
import Banner from './HomeComponents/Banner/Banner';
import ProductCategories from './HomeComponents/ProductCategories/ProductCategories';

const Home = () => {
    const [loading, setLoading] = useState(true)
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Advertisement></Advertisement>
            <ProductCategories></ProductCategories>
        </div>
    );
};

export default Home;
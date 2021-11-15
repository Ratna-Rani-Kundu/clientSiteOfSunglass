import React from 'react';

import Products from '../../Products/Products/Products';

import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Review from "../Review/Review"

const Home = () => {
    return (
        <div>
            <Navigation/>
            <Banner/>
           <Products/>
           <Review/>
            
            <Footer/>
        </div>
    );
};

export default Home;
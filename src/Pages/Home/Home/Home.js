import React from 'react';

import Products from '../../Products/Products/Products';

import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import DisplayReview from '../DisplayReview/DisplayReview';


import Trends from '../Trends/Trends';

const Home = () => {
    return (
        <div>
            <Navigation/>
            <Banner className="mb-4"/>
            <h1 className="align-center m-4">Our <span className="text-info ">Collections</span></h1>
           <Products />
         <Trends/>
         <h1 className="align-center m-4">Happy Client <span className="text-info ">Says</span></h1>
           <DisplayReview/>
            
            <Footer/>
        </div>
    );
};

export default Home;
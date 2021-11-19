import React, { useEffect, useState } from 'react';
import {  Row } from 'react-bootstrap';
import Product from '../Products/Product/Product';

import Navigation from '../Shared/Navigation/Navigation';




const Explore = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch('https://murmuring-lowlands-25266.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div >
           <Navigation/>
          
           < Row  xs={1} sm={2} md={3} lg={3}className="g-4 m-2 ">
             {
               products.map(product=><Product
                key={product._id}
                product={product}></Product>
                )
            }
             </Row>
             
             </div>
    );
};

export default Explore;
import React, { useEffect, useState } from 'react';
import {  Row } from 'react-bootstrap';

import Product from '../Product/Product';



const Products = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch('https://murmuring-lowlands-25266.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>{
            const slicedData = data.slice(0,6);
            setProducts(slicedData)
        })
    },[])
    return (
        <div >
            
          
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

export default Products;
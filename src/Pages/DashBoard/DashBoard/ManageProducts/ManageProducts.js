import React, { useEffect,useState } from 'react';
// import { Row } from 'react-bootstrap';

const ManageProducts = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch('http:localhost:5000/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    })
    return (
        <>
        <h2>manage product</h2>
        {products.map(pd=><div key={pd._id}>
            <h2>{pd?.name}</h2>
        </div>)}
            
      
      </>
    );
};

export default ManageProducts;
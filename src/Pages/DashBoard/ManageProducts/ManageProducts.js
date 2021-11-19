
import React,{useEffect,useState} from 'react';
import { Row } from 'react-bootstrap';




const ManageProducts = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch('https://murmuring-lowlands-25266.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

     const handleDelete=id=>{
      const url=`https://murmuring-lowlands-25266.herokuapp.com/products/${id}`
      fetch(url,{
        method:"DELETE"
      })
      .then(res=>res.json())
      .then(data=>{
       if(data.deletedCount){
         alert('Are you sure to Delete this product?')
        const remaining=products.filter(product=>product._id !== id)
        setProducts(remaining)
       }
      })
     }
    return (
      <>
     
      <Row xs={1} sm={2} md={3} lg={3}className="g-4 m-2 border ">
      {
        products.map(product=><div
         key={product._id}
         product={product}>
           <h6>{product.name}</h6>
           <button onClick={()=>handleDelete(product._id)}>Delete</button>
         </div>
         )
     }
      </Row>
      
      </>
    );
};

export default ManageProducts;
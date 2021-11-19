import React,{ useEffect, useState }  from 'react';
import {  Row,Col,Button } from 'react-bootstrap';

import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import useAuth from '../../../hooks/useAuth';

const ProductDetails = () => {
 
 
  const {user}=useAuth()
  
     const [product,setProduct]=useState({}) 
     //single product is a object
     
     const {id}=useParams() //getting the id of single product info
     useEffect(()=>{
         const url=`http://localhost:5000/products/${id}`  //server
         fetch(url)
         .then(res=>res.json())
         .then(data=>setProduct(data))
     },[id])
     

    const handleOnBlur=(e)=>{
     const field= e.target.name
     const value= e.target.value
     
      e.preventDefault()
    }
    const handlePurchaseSubmit=(id)=>{
      //data collection
      const purchase={
        
        

      }
console.log(purchase)
    }
    
    return (
    
     <Row>
       <Col>
      <img className=" img-fluid w-50"  src={product?.img} alt="" /></Col>
     <Col >
      
     <form onSubmit={} className=" mt-4 ">    

<input name="productName" onBlur={handleOnBlur}   type="text" className="form-control mt-2" defaultValue={product?.name}  placeholder="product name"/>
<input name="displayName" onBlur={handleOnBlur}   type="text" className="form-control mt-2" defaultValue={user?.displayName}  placeholder="User Name"/>
    <input  name="email" onBlur={handleOnBlur}  type="email" className="form-control mt-2" defaultValue={user?.email}  placeholder="Enter email"  />
    <input onBlur={handleOnBlur} name="quantity" type="number"className="form-control mt-2"  defaultValue="1"   placeholder="quantity" />
  

    <input  onBlur={handleOnBlur} name="address" type="text" className="form-control mt-2"    placeholder="Address"/>

  
    <input  onBlur={handleOnBlur}  name="phone"type="number" className="form-control mt-2" placeholder="Phone Number" />
    <Button onClick={()=>handlePurchaseSubmit(id)} className=" mt-2"  type="submit" variant="primary">Purchase</Button>

</form> 

  <Link to="/"><Button  variant="secondary">Close</Button></Link>
     

    </Col>
      
    
 
    
 
     </Row>
    
  
    );
};

export default ProductDetails;
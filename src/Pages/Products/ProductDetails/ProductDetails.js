import React,{ useEffect, useState }  from 'react';
import {  Modal,Button } from 'react-bootstrap';
// import { FloatingLabel, Form } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const ProductDetails = () => {
 
  const {user}=useAuth()
  
     const [product,setProduct]=useState({}) //single product is a object

     const {id}=useParams() //getting the id of single product info
     useEffect(()=>{
         const url=`http://localhost:5000/products/${id}`  //server
         fetch(url)
         .then(res=>res.json())
         .then(data=>setProduct(data))
     },[id])

    //delete product
    // const handleDelete=(id)=>{
    //   const url=`http://localhost:5000/products/${id}`
    
    //   fetch(url,{
    //   method:"DELETE"
    // })
 
    // .then(res=>res.json())
    // .then(data=>{
    //   if(data?.deletedCount){
    //     const remaining=products.filter(product=>product._id !== id)
    //     setProducts(remaining)
    //   }
    // })
    //  }
 
    //  const handleEmailChange=(e)=>{
    //     const updatedEmail=e.target.value;
    //    const updatedProduct={email:email}
    //    setProduct(updatedProduct)
    //   e.preventDefault()
    //  }


    //  const handleSubmit=(e)=>{
    //     // akhane put method hbe
    //     const url=`https://jsonplaceholder.typicode.com/users/${id}`  //server
    //      fetch(url)
    //      .then(res=>res.json())
    //      .then(data=>setProduct(data))
  
    //       e.preventDefault()
    //  }
    return (
     
         <Modal.Dialog className="mt-4" >
  <Modal.Header>
    <Modal.Title >{product?.name}</Modal.Title>
  </Modal.Header>

  <Modal.Body>
  <form  className=" mt-4 ">    
  <div className="form-row">
    <div className="col">
      <input type="text"className="form-control mt-2"  defaultValue={id}   placeholder="Name" />
    </div>
    <div>
      <input type="email" className="form-control mt-2" defaultValue={user?.email}  placeholder="Enter email"/>
    </div>
    <div className="col">
      <input type="text" className="form-control mt-2" defaultValue={product?.website}   placeholder="Address"/>
    </div>
    <div className="col">
      <input type="text" className="form-control mt-2" placeholder="Post Office"  />
    </div>
    <div className="col">
      <input type="number" className="form-control mt-2" placeholder="Phone Number" />
    </div> 
  </div>
  </form> 
  </Modal.Body>

  <Modal.Footer>
    <Button  variant="secondary">Close</Button>
    <Button  type="submit" variant="primary">Purchase</Button>
  </Modal.Footer>
</Modal.Dialog>
  
    );
};

export default ProductDetails;
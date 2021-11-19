import React,{ useEffect, useState }  from 'react';
import {  Modal,Button } from 'react-bootstrap';
// import { FloatingLabel, Form } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
// import TextField from '@mui/material/TextField';
const ProductDetails = () => {
 
 
  const {user}=useAuth()
  
     const [product,setProduct]=useState({}) 
     //single product is a object
     
     const {id}=useParams() //getting the id of single product info
     useEffect(()=>{
         const url=`https://murmuring-lowlands-25266.herokuapp.com/products/${id}`  //server
         fetch(url)
         .then(res=>res.json())
         .then(data=>setProduct(data))
     },[id])
     const initialInfo={ 
      quantity:'',address:'',phone:''}
     
     const [purchaseInfo,setPurchaseInfo]=useState(initialInfo)
     console.log(purchaseInfo)
    const handleOnBlur=(e)=>{
     const field= e.target.name
     const value= e.target.value
     const newInfo={...purchaseInfo}
     newInfo[field]=value
      console.log(newInfo)
     setPurchaseInfo(newInfo)
      e.preventDefault()
    }
    const handlePurchaseSubmit=()=>{
      //data collection
      const purchase={
        ...purchaseInfo
        

      }
console.log(purchase)
    }
    
    return (
    
     <>
     
     {/* useEffect(()=>{
        const url=`https://murmuring-lowlands-25266.herokuapp.com/products/${id}`  //server
        fetch(url)
        .then(res=>res.json())
       .then(data=> {
        axios.post(url,data)
        .then(res=>{
    
          if(res.data.insertedId){
            alert('added successfully')
            reset();
          }
    
    })
    },[id]) */}
















  

     <div >
       <h1>{product?.name}</h1>
      <img className=" img-fluid"  src={product?.img} alt="" />
      
     

    </div>
         <Modal.Dialog className="mt-4"  >
  <Modal.Header>
    <Modal.Title > <h3>Price: ${product?.price}</h3></Modal.Title>
  </Modal.Header>

  <Modal.Body>
    
  <form  className=" mt-4 ">    

  <input name="displayName" onBlur={handleOnBlur}   type="text" className="form-control mt-2" defaultValue={user?.displayName}  placeholder="User Name"/>
      <input  name="email" onBlur={handleOnBlur}  type="email" className="form-control mt-2" defaultValue={user?.email}  placeholder="Enter email"  />
      <input onBlur={handleOnBlur} name="quantity" type="number"className="form-control mt-2"  defaultValue="1"   placeholder="quantity" />
    
  
      <input  onBlur={handleOnBlur} name="address" type="text" className="form-control mt-2"    placeholder="Address"/>

    
      <input  onBlur={handleOnBlur}  name="phone"type="number" className="form-control mt-2" placeholder="Phone Number" />
      <Button onClick={()=>handlePurchaseSubmit} className=" mt-2"  type="submit" variant="primary">Purchase</Button>
 
  </form> 
  </Modal.Body>

  <Modal.Footer>
    <Link to="/"><Button  variant="secondary">Close</Button></Link>
    
  </Modal.Footer>
</Modal.Dialog> 
     </>
    
  
    );
};

export default ProductDetails;
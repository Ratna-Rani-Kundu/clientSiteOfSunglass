import React, {useState,useEffect}from 'react';

import { useForm } from "react-hook-form";
import axios from 'axios';

import Button from '@mui/material/Button';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';
import { Col, Row } from 'react-bootstrap';


const Purchase = () => {
    
    
    const {id}=useParams() //getting the id of single product info
    const{user}=useAuth();
    const [product,setProduct]=useState({})
    useEffect(()=>{
        const url=`https://murmuring-lowlands-25266.herokuapp.com/products/${id}` 
       
        fetch(url)
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[id])
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
  const onSubmit = data => {
    axios.post("https://murmuring-lowlands-25266.herokuapp.com/orders",data)

    .then(res=>{

      if(res.data.insertedId){
        alert('added successfully')
        reset();
      }
   })
  }
    return (
      <>
      <Navigation/>
        <Row className="add-service container ">
                 
            <Col>
                <h1 className="text-center  text-primary mt-4"> Details</h1>
            <p>{product?.name}</p>
            <img className="w-50" src={product?.img} alt="" />
            </Col>
               <Col className="  text-primary mt-4">
               <form onSubmit={handleSubmit(onSubmit)}>
      
                  <input  {...register("name")}  defaultValue={user?.displayName} required placeholder='Name'/>
                  <input  {...register("productName")}  defaultValue={product?.name} required placeholder='product Name'/>
                  <input  {...register("email")} defaultValue={user?.email} required placeholder='Email'/>
                  
                  <input type="number" {...register("phone" )} placeholder='Phone' />
                  <textarea className=" mb-4" {...register("address" )} placeholder='Write your Address'/>
                  
                  {errors.exampleRequired && <span>This field is required</span>}
                 <Button variant="contained"  type="submit">Purchase</Button>
                  
            </form>
               </Col>
        </Row>
        </>
    );
};

export default Purchase;
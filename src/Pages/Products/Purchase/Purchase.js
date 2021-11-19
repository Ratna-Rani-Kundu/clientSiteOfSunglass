import React, {useState,useEffect}from 'react';

import { useForm } from "react-hook-form";
import axios from 'axios';

import Button from '@mui/material/Button';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';


const Purchase = () => {
    
    
    const {id}=useParams() //getting the id of single product info
    const{user}=useAuth();
    const [product,setProduct]=useState({})
    useEffect(()=>{
        const url=`http://localhost:5000/products/${id}` 
       
        fetch(url)
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[id])
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
  const onSubmit = data => {
    axios.post("http://localhost:5000/orders",data)

    .then(res=>{

      if(res.data.insertedId){
        alert('added successfully')
        reset();
      }
   })
  }
    return (
        <div className="add-service container ">
            <div>
                <h1 className="text-center  text-primary mt-4"> Details</h1>
            <p>{product?.name}</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
      
                  <input  {...register("name")}  defaultValue={user?.displayName} required placeholder='Name'/>
                  <input  {...register("productName")}  defaultValue={product?.name} required placeholder='Name'/>
                  <input  {...register("email")} defaultValue={user?.email} required placeholder='Email'/>
                  
                  <input type="number" {...register("phone" )} placeholder='Phone' />
                  <textarea className=" mb-4" {...register("address" )} placeholder='Write your Address'/>
                  
                  {errors.exampleRequired && <span>This field is required</span>}
                 <Button variant="contained"  type="submit">Review</Button>
                  
            </form>
        </div>
    );
};

export default Purchase;
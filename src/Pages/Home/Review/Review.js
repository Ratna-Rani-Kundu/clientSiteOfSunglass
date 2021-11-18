import React from 'react';
import "./Review.css";
import { useForm } from "react-hook-form";
import axios from 'axios';



const AddReview = () => {
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data)
    axios.post("http://localhost:5000/products",data)
    .then(res=>{

      if(res.data.insertedId){
        alert('added successfully')
        reset();
      }
   })
  }
    return (
        <div className="add-service container ">
            <h1 className="text-center  text-danger mt-4"> Add Product</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
      
                  <input  {...register("name")} required placeholder='Name'/>
                  
                  <input type="number" {...register("price",{ min: 1, max: 5 } )} placeholder='Ratings' />
                  <textarea {...register("description" )} placeholder='Write your review'/>
                  
                  {errors.exampleRequired && <span>This field is required</span>}
                  <input type="submit" />  
                  
            </form>
        </div>
    );
};

export default AddReview;
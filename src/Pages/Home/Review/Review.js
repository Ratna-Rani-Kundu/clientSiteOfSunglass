import React from 'react';
import "./Review.css";
import { useForm } from "react-hook-form";
import axios from 'axios';
import ReviewsIcon from '@mui/icons-material/Reviews';
import Button from '@mui/material/Button';


const Review = () => {
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data)
    axios.post("http://localhost:5000/reviews",data)
    .then(res=>{

      if(res.data.insertedId){
        alert('added successfully')
        reset();
      }
   })
  }
    return (
        <div className="add-service container ">
            <h1 className="text-center  text-primary mt-4"> Add Review</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
      
                  <input  {...register("name")} required placeholder='Name'/>
                  
                  <input type="number" {...register("price",{ min: 1, max: 5 } )} placeholder='Ratings' />
                  <textarea className=" mb-4" {...register("description" )} placeholder='Write your review'/>
                  
                  {errors.exampleRequired && <span>This field is required</span>}
                 <Button variant="contained"  type="submit"><ReviewsIcon/>Review</Button>
                  
            </form>
        </div>
    );
};

export default Review;
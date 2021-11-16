// import React from 'react';
// import "./AddReview.css"
// import { useForm } from "react-hook-form";
// // import axios from 'axios';
// const AddReview = () => {
//     //
//     const { register,  handleSubmit,reset, formState: { errors } } = useForm();
//   const onSubmit = (e) => {
   
//    app.post("/addService",async(req,res)=>{
  
//    })
//     .then(res=>{

//       if(res.data.insertedId){
//         alert('successfully added');
//         reset();
//       }
//    })
//    e.preventDefault()
//   }
//     return (
//         <div className="add-service container ">
//             <h1 className="text-center  text-danger mt-4">Please Add Review</h1>
//            <form onSubmit={handleSubmit()} > 
           
      
//                   <input  {...register("name")} required placeholder='Name'/>
//                   <input {...register("img")} placeholder='Img url'/>
//                   <input type="number" {...register("price" )} placeholder='Price' />
//                   <textarea {...register("description" )} placeholder='Description'/>
                  
//                   {errors.exampleRequired && <span>This field is required</span>}
//                   <input type="submit" />  
                  
//             </form>
//         </div>
//     );
// };

// export default AddReview;
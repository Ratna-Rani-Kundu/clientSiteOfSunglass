import React,{ useEffect, useState }  from 'react';
import { Container } from 'react-bootstrap';
// import { FloatingLabel, Form } from 'react-bootstrap';
import { useParams } from 'react-router';

const ProductDetails = () => {
     const [product,setProduct]=useState({}) //single product is a object

     const {id}=useParams() //getting the id of single product info
     useEffect(()=>{
         const url=`https://jsonplaceholder.typicode.com/users/${id}`  //server
         fetch(url)
         .then(res=>res.json())
         .then(data=>setProduct(data))
     },[])

    //  const handleEmailChange=(e)=>{
    //     const updatedEmail=e.target.value;
    //    const updatedProduct={email:email}
    //    setProduct(updatedProduct)
    //   e.preventDefault()
    //  }


    //  const handleSubmit=(e)=>{
        // akhane put method hbe
        // const url=`https://jsonplaceholder.typicode.com/users/${id}`  //server
        //  fetch(url)
        //  .then(res=>res.json())
        //  .then(data=>setProduct(data))
  
    //       e.preventDefault()
    //  }
    return (
       <Container>
            <form  className="w-50 mt-4 ">
        <div class="form-group align-center">
          <label for="exampleInputEmail1">Email address</label>  
         
          <input type="email"  value={product?.email} class="form-control mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
        
          <small id="emailHelp" class="form-text  mt-2">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input  type="password" class="form-control mt-4" id="exampleInputPassword1" value={product.name} placeholder="Password"/>
        </div>
      
          
        <button  type="submit" class="btn btn-primary mt-4">Submit</button>
      </form>
       </Container>
    );
};

export default ProductDetails;
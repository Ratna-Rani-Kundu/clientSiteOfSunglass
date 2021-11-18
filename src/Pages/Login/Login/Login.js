import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth'



// import login from '../../../images/login.png'
import { NavLink,useLocation,useHistory,} from 'react-router-dom';
import { Button, Form, Spinner, Row,Col,Alert } from 'react-bootstrap';
import Navigation from '../../Shared/Navigation/Navigation';

const Login = () => {
  const [loginData,setLoginData,]=useState({})
  const {loginUser,googleSignIn,user,authError,isLoading}=useAuth()
  const location=useLocation()
  const history =useHistory()
  
  const handleOnChange=e=>{
    const field=  e.target.name;
    const value =e.target.value;
    const newLoginData={...loginData}
    newLoginData[field]=value;
    setLoginData(newLoginData)
    
  }
  const handleLoginSubmit =(e)=>{
  
    loginUser(loginData.email,loginData.password,location,history)
    e.preventDefault()
  }
  const handleGoogleSignIn=()=>{
    googleSignIn(location,history)
  }
    return (
      <>
      <Navigation/>
          
         <Row>
           <Col variant="success">
                     <img style={{width:'100%'}} src='https://images.unsplash.com/photo-1556015048-4d3aa10df74c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c3VuZ2xhc3Nlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' alt="" />
                   </Col> 
        
           <Col className='p-4' >
               <h2 className="text-success" >Login</h2> 
            <form onSubmit={handleLoginSubmit} >
             <Form.Group className="mb-3" >
          
              
               <Form.Control
               className=" mb-2"
            
                 name="email"
                onChange={handleOnChange}
                placeholder="your email"
                type="email" 
              />
             <Form.Control
            
             
             name="password"
             onChange={handleOnChange}
             placeholder="your password"
             type="password"
              />
            </Form.Group>
            
      
                 <Button   type="submit"  variant="success">Submit</Button>
                   <  NavLink to="/register">
                      <Button 
                        style={{ textDecoration: "none"}}
                        variant="text"
                        className="text-danger"
                        >New User? Pleaser Register</Button>
                   </NavLink>
                   {isLoading &&
                    <Button variant="dark" disabled>
                    <Spinner
                      as="span"
                      animation="grow"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                    Loading...
                  </Button> 
                   }
                   {user?.email && 
                      <Alert variant="success">
                         This is a  Successfully Log In!
                       </Alert>
                    } 
                {authError && <Alert variant="danger" >
                    {authError}
                     </Alert>}
           </form>
                 <p>-----------------------------------</p> 
                  <Button onClick={handleGoogleSignIn} 
                        style={{ textDecoration: "none"}}
                        variant="success">Google Sign In</Button>  
         </Col>
              
        
        
        </Row>
     </>
    );
};

export default Login;
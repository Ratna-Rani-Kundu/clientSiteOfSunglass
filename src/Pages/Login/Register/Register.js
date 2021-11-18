import React, { useState } from 'react';
// import login from '../../../images/login.png'
import { NavLink ,useHistory} from 'react-router-dom';

import useAuth from '../../../hooks/useAuth'
import { Button, Form, Spinner, Row,  Col,Alert } from 'react-bootstrap';
import Navigation from '../../Shared/Navigation/Navigation';

const Register = () => {
             const [loginData,setLoginData]=useState({})
    
              const history= useHistory();
              const {registerUser,user,authError,isLoading}=useAuth()

  
              const handleOnBlur=e=>{
                         const field=  e.target.name;
                         const value =e.target.value;
                         const newLoginData={...loginData}
                         newLoginData[field]=value;
                         setLoginData(newLoginData)
                         console.log(field,value)
                       }
           const handleLoginSubmit =(e)=>
                          {
                           if (loginData.password !== loginData.password2){
                              alert('Password is not matching')
                              return
                           }
           registerUser(loginData.email,loginData.password,loginData.name,history)
           e.preventDefault()
  }
    return (
        <>
        <Navigation/>
            <Row >
               <Col variant="success">
                     <img style={{width:'100%'}} src='https://images.unsplash.com/photo-1556015048-4d3aa10df74c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c3VuZ2xhc3Nlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' alt="" />
                   </Col> 
              <Col className='p-4' >
                   <h2  className="text-success">Registration</h2>
                     {!isLoading && 
                     <form onSubmit={handleLoginSubmit}>
                     <Form.Group className="mb-3" controlId="formBasicEmail">
                           <Form.Control
                               sx={{width:"75%",m:1}}
                               id="standard-basic" 
                               label="Your name" 
                               name='name'
                               placeholder="Name"
                               defaultValue={user?.displayName}
                               onBlur={handleOnBlur}
                               variant="standard" />
                           <Form.Control
                              
                               label="Your Email" 
                               name='email'
                               type="email"
                               placeholder="Email"
                               defaultValue={user?.email}
                               onBlur={handleOnBlur}
                              />
                           <Form.Control
                             
                             
                              label="Your password" 
                              name="password"
                              onBlur={handleOnBlur}
                              placeholder="Password"
                              type="password" />
                           
                           <Form.Control
                             
                               label=" Retype Your password" 
                               name="password2"
                               onBlur={handleOnBlur}
                               placeholder="Retype password"
                               type="password" />
                               </Form.Group>
                           
                               <Button type="submit"  variant="success">Submit</Button>
                               <NavLink to="/login">
                                 <Button 
                                     style={{ textDecoration : "none"}}
                                     variant="text"
                                     className="text-danger">Already Registered? Please Login
                                 </Button>
                               </NavLink>
                      </form>}
                   { isLoading && 
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
                      <Alert className="success" variant="success">Register Successful!</Alert>
                      
                    } 
                    {authError &&
                      <Alert variant="danger" severity="error">
                         {authError}
                       </Alert>
                    }
           </Col>
                  
        </Row>
  </>
    );
};

export default Register;
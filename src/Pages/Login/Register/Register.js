import React, { useState } from 'react';
// import login from '../../../images/login.png'
import { NavLink ,useHistory} from 'react-router-dom';

import useAuth from '../../../hooks/useAuth'
import { Button, Form, Spinner, Row,  Col,Alert } from 'react-bootstrap';

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
   
            <Row >
              <Col className='p-4' >
                   <h2>Registration</h2>
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
                                     variant="text">Already Registered? Please Login
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
                   <Col variant="success">
                     <img style={{width:'100%'}} src='https://images.unsplash.com/photo-1568054043324-86c349f926d0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGpld2Vscnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' alt="" />
                   </Col> 
        </Row>
  
    );
};

export default Register;
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth'



// import login from '../../../images/login.png'
import { NavLink,useLocation,useHistory,} from 'react-router-dom';
import { Button, Form, Spinner, Row, Container, Col,Alert } from 'react-bootstrap';


const Login = () => {
  const [loginData,setLoginData,]=useState({})
  const {loginUser,signInWithGoogle,user,authError,isLoading}=useAuth()
  const location=useLocation()
  const history =useHistory()
  
  const handleOnChange=e=>{
    const field=  e.target.name;
    const value =e.target.value;
    const newLoginData={...loginData}
    newLoginData[field]=value;
    setLoginData(newLoginData)
    console.log(field,value)
  }
  const handleLoginSubmit =(e)=>{
  
    loginUser(loginData.email,loginData.password,location,history)
    e.preventDefault()
  }
  const handleGoogleSignIn=()=>{
    signInWithGoogle(location,history)
  }
    return (
       <Container>
           {/* container spacing={2} */}
         <Row>
         {/* sx={{mt:8}} item xs={12} md={6} */}
           <Col  >
               <h3 >Login</h3> 
            <form onSubmit={handleLoginSubmit} >
             <Form.Group className="mb-3" >
          
               <Form.Control
               className="w-75 m-2"
            
                 name="email"
                onChange={handleOnChange}
                placeholder="your email"
                type="email" 
              />
             <Form.Control
             className="w-75 m-2"
             
             name="password"
             onChange={handleOnChange}
             placeholder="your password"
             type="password"
              />
            </Form.Group>
            
      
                 <Button   type="submit"  variant="warning">Submit</Button>
                   <  NavLink to="/register">
                      <Button 
                        style={{ textDecoration: "none"}}
                        variant="text"
                        className="text-info"
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
                    Successfully Log In!
                       </Alert>
                    } 
                {authError && <Alert variant="danger" >
                    {authError}
                     </Alert>}
           </form>
                 <p>-----------------------------------</p> 
                 <Button onClick={handleGoogleSignIn} 
                        style={{ textDecoration: "none"}}
                        variant="warning">Google Sign In</Button>   
         </Col>
               <Col>
                 <img style={{width:'100%'}} src='https://images.unsplash.com/photo-1568054043324-86c349f926d0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGpld2Vscnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' alt="" />
               </Col>
        
        
        </Row>
       </Container>
    );
};

export default Login;
import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (

        <div className='p-5 bg-dark text-light text-right' >
         <Container >
            <Row>
                
                <Col>
                   <img src="https://cdn.shopify.com/s/files/1/1811/9385/files/logo_3afeb311-69a5-48c2-bc5c-3f9885c05965_300x300.png?v=1613038705" alt="" />
                   <p>Wonderfull website to give you amazing expeience</p>
                </Col>
               <Col>
               <h3>Contact Us</h3>
               <p>Location : 21 Shyamoli, Mirpur Road, Dhaka-1207, Bangladesh</p>
                      <p>Phone : 10633, +8809666700100</p>
                      <p> Email:   info.jewelmart@gmail.com</p>
               </Col>
               <Col>
               <h3>Support</h3>
               <ul  >
                     <li className='text-dark ' >
                       <Link style={{textDecoration:'none'}} className='text-light' to="/">Home</Link>
                     </li>
                     <li className='text-dark'>
                       <Link style={{textDecoration:'none'}}  className='text-light' to="/about">About</Link>
                     </li>
                     <li className='text-dark'>
                       <Link style={{textDecoration:'none'}} className='text-light' to="/service">Services</Link>
                     </li>
                     </ul>
               </Col>
               <Col>
               <h3>Payment Method</h3>
                    <img className="img-fluid" src="data:image/png;base64,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" alt="" />
                    <img className="img-fluid" src="data:image/png;base64,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" alt="" />
                    <img className="img-fluid" src="data:image/png;base64,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" alt="" />
               </Col>
           </Row>
      </Container>

           <hr />
           <p className="text-center">Copyright © 2021 jewel-mart.com</p>
        </div>
    );
};

export default Footer;
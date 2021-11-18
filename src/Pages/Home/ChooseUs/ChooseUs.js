import React from 'react';
import {   Container, Row } from 'react-bootstrap';
import Option from '../../Home/Option/Option'
import "./CooseUs.css"
const chooseOption=[
  {id:1,
    name: 'Free Delivery',
    description:'If an item in your order is unavailable, we will ship you the part of your order that is available. '
  },
  {id:2,
    name: '24/7 Customer Service',
    description:'Customers are valueable for Us .we are her to serve you 24/7 .Whenever you need any service,just knock us'
  },
  {id:3,
    name: 'Return Goods',
    description:'Your problem is also ours.We understand your situation.If the product is not well,you will reutrn it'
  }
]


const ChooseUs = () => {
    return (
        <div className="chooseUs p-2 mt-4 " >
           <Container>
           <h1 className="align-center m-4"> <span className="text-dark ">Why You Choose Us</span></h1>  
           <Row xs={1} sm={1} md={3} lg={3} className="g-4">
             {chooseOption.map(option=><Option
             key={option.id}
             option={option}></Option>)}
           
           
             </Row>
           </Container>
        </div>
    );
};

export default ChooseUs;
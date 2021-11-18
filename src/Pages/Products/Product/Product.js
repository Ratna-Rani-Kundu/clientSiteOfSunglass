import React from 'react';
import { Card, Col, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Product = ({product}) => {
    const {img,name,description,_id,price}=product
    return (
        <div classname="sunglass">
            

    <Col >
      <Card >
        <Card.Img variant="top" style={{ height: '20rem'}} src={img} />
        <Card.Body>
          <Card.Title>
            <h2>{name}</h2>
             </Card.Title>
          <Card.Text>
            {description} 
          <h1> ${price}</h1>
          <Link className="align-left" to={`/products/${_id}`}><Button variant="warning">Purchase</Button></Link>
          </Card.Text>
         
        </Card.Body>
    
      </Card>
    </Col>
    
        </div>
    );
};

export default Product;
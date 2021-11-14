import React from 'react';
import { Card, Col, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    const {img,name,description,id,price}=product
    return (
        <>
            

    <Col>
      <Card>
        <Card.Img variant="top" style={{width: '22rem' ,height: '20rem'}} src={img} />
        <Card.Body>
          <Card.Title>
            <h2>{name}</h2>
             </Card.Title>
          <Card.Text>
           <p>Details: {description} </p>
          <h1>Price: ${price}</h1>
          </Card.Text>
         
        </Card.Body>
        <Card.Footer>
         
       <Link to={`/products/${id}`}><Button variant="primary">Purchase</Button></Link>
    </Card.Footer>
      </Card>
    </Col>
        </>
    );
};

export default Product;
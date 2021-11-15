import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import reviews from "../../../image/reviewers/reviwer-1.png"
const Review = () => {
    return (
        <div  className="mt-4">
            <h1 className="text-warning">Happy Client Says</h1>
            <hr/>
         <Container>
         <Row xs={1} sm={2} md={3} lg={5}className="g-4">
            
            <Col>
      <Card>
        <Card.Img variant="top" style={{ }} src={reviews} />
        <Card.Body>
          <Card.Title>
          Awesome Ring
             </Card.Title>
          <Card.Text>
          Beautiful Diamond Jewelry, Engagement Rings  More. Shop in Store Today! Continental Diamond: Best Jewelers in Minneapolis, MN. 4.9 on Google Reviews. MN Bride Best Jeweler. 4.9 on Wedding Wire. Jewelers Since 1981. Top Brands. Styles: Princess, Cushion, Marquise, Asscher, Radiant, Pear, Emerald, Heart, Oval.
          
          </Card.Text>
         
        </Card.Body>
        
      </Card>
    </Col>
             </Row>
         </Container>
        </div>
    );
};

export default Review;
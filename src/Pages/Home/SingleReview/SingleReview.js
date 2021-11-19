import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';


    const SingleReview = ({review}) => {
        const{name,price,description}=review
        return (
         <>
             <Col>
               <Card>
                <p className="align-items-center  pt-2 "><AccountCircleIcon/></p>
                 <Card.Body>
                   <Card.Title>
                     {name}
                      </Card.Title>
                   <Card.Title>
                   {description} 
                      </Card.Title>
                   <Card.Text>
                    
                  <Rating emptySymbol="far fa-star"
                     fullSymbol="fas fa-star"
                     starHalf="fas fa-star-half"
                     readonly
                     initialRating={price}
                  > 
              
                  </Rating>  
                   
                   </Card.Text>
                  
                 </Card.Body>
             
               </Card>
             </Col>
    
            </>
        );
    };
    
    export default SingleReview;







import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StarIcon from '@mui/icons-material/Star';
import React from 'react';
import { Card, Col } from 'react-bootstrap';


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
                    
                   {price}<StarIcon/>
                   
                   </Card.Text>
                  
                 </Card.Body>
             
               </Card>
             </Col>
    
            </>
        );
    };
    
    export default SingleReview;







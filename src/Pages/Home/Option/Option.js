import React from 'react';
import "./Option.css"
import {  Card, Col} from 'react-bootstrap';
const Option = ({option}) => {
    const{name,description}=option
    return (
        <div >
          <Col  >
               <Card className="choose">
                 <Card.Body>
                   <Card.Title>
                       {name}
                      </Card.Title>
                   <Card.Text>
                    {description}
                  
                   </Card.Text>
                  
                 </Card.Body>
    
               </Card>
           </Col>  
        </div>
    );
};

export default Option;
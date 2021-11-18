import React,{useState,useEffect} from 'react';

import SingleReview from '../SingleReview/SingleReview';
import { Row } from 'react-bootstrap';
const DisplayReview = () => {
    const [reviews,setReviews]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    return (
        <div>
            < Row xs={1} sm={1} md={3} lg={4}className="g-4 m-2 ">
           
           { reviews.map(review=><SingleReview
           key={reviews._id}
           review={review}></SingleReview>)}
           </Row>
        </div>
    );
};

export default DisplayReview;
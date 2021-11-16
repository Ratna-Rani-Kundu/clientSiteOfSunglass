import React from 'react';
import {  Row } from 'react-bootstrap';

import Trend from '../Trend/Trend';
const trendyCollections=[ {
    id:1,
    name:'Teeth Orthodonics',
    time:'08.00 AM - 09.00AM',
    description:'Jewellery or jewelry consists of decorative items worn for personal adornment, such as brooches, rings, necklaces, earrings, pendants, bracelets, and cufflinks. Jewellery may be attached to the body or the clothes. From a western perspective, the term is restricted to durable ornaments, excluding flowers for example.',
    img:'https://www.alaminjewellers.com/wp-content/uploads/2021/03/AL-AMIN-JEWELLERS-AAJ-1-NECKLACE-92-scaled.jpg',
    price:100
},
{
    id:2,
    name:'Cosmetic Dentistry',
    time:'09.00 AM - 10.00AM',
    description:'Jewellery or jewelry consists of decorative items worn for personal adornment, such as brooches, rings, necklaces, earrings, pendants, bracelets, and cufflinks. Jewellery may be attached to the body or the clothes. From a western perspective, the term is restricted to durable ornaments, excluding flowers for example.',
    img:'https://images.unsplash.com/photo-1568219396383-6c8e87dadbe0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGpld2Vscnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    price:800
},
{
    id:3,
    name:'Cosmetic Dentistry',
    time:'09.00 AM - 10.00AM',
    description:'Jewellery or jewelry consists of decorative items worn for personal adornment, such as brooches, rings, necklaces, earrings, pendants, bracelets, and cufflinks. Jewellery may be attached to the body or the clothes. From a western perspective, the term is restricted to durable ornaments, excluding flowers for example.',
    img:'https://images.unsplash.com/photo-1568219396383-6c8e87dadbe0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGpld2Vscnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    price:890
},
{
    id:4,
    name:'Cosmetic Dentistry',
    time:'09.00 AM - 10.00AM',
    description:'Jewellery or jewelry consists of decorative items worn for personal adornment, such as brooches, rings, necklaces, earrings, pendants, bracelets, and cufflinks. Jewellery may be attached to the body or the clothes. From a western perspective, the term is restricted to durable ornaments, excluding flowers for example.',
    img:'https://images.unsplash.com/photo-1568219396383-6c8e87dadbe0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGpld2Vscnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    price:832
}]
const Trends = () => {
    return (
        <div>
           <h1 className="align-center m-4">Shopping on the <span className="text-warning ">Trend</span></h1>  
           <Row xs={1} sm={2} md={3} lg={3}className="g-4">
           {trendyCollections.map(trend=><Trend
           key={trend.id}
           trend={trend}
           />)}
             </Row>
        </div>
    );
};

export default Trends;
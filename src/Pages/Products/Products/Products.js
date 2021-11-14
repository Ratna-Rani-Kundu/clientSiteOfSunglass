import React from 'react';
import {  Row } from 'react-bootstrap';
import Navigation from '../../Shared/Navigation/Navigation';
import Product from '../Product/Product';

const products=[
    {
        id:1,
        name:'Teeth Orthodonics',
        time:'08.00 AM - 09.00AM',
        description:'Jewellery or jewelry consists of decorative items worn for personal adornment, such as brooches, rings, necklaces, earrings, pendants, bracelets, and cufflinks. Jewellery may be attached to the body or the clothes. From a western perspective, the term is restricted to durable ornaments, excluding flowers for example.',
        img:'https://images.unsplash.com/photo-1583484370773-c1af4e528d5e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG5lY2tsYWNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
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
    },
    {
        id:5,
        name:'Cosmetic Dentistry',
        time:'09.00 AM - 10.00AM',
        description:'Jewellery or jewelry consists of decorative items worn for personal adornment, such as brooches, rings, necklaces, earrings, pendants, bracelets, and cufflinks. Jewellery may be attached to the body or the clothes. From a western perspective, the term is restricted to durable ornaments, excluding flowers for example.',
        img:'https://images.unsplash.com/photo-1568219396383-6c8e87dadbe0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGpld2Vscnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        price:845
    },
    {
        id:6,
        name:'Cosmetic Dentistry',
        time:'09.00 AM - 10.00AM',
        description:'Jewellery or jewelry consists of decorative items worn for personal adornment, such as brooches, rings, necklaces, earrings, pendants, bracelets, and cufflinks. Jewellery may be attached to the body or the clothes. From a western perspective, the term is restricted to durable ornaments, excluding flowers for example.',
        img:'https://images.unsplash.com/photo-1568219396383-6c8e87dadbe0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGpld2Vscnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        price:845
    },
    {
        id:7,
        name:'Cosmetic Dentistry',
        time:'09.00 AM - 10.00AM',
        description:'Jewellery or jewelry consists of decorative items worn for personal adornment, such as brooches, rings, necklaces, earrings, pendants, bracelets, and cufflinks. Jewellery may be attached to the body or the clothes. From a western perspective, the term is restricted to durable ornaments, excluding flowers for example.',
        img:'https://images.unsplash.com/photo-1568219396383-6c8e87dadbe0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGpld2Vscnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        price:822
    },
    {
        id:8,
        name:'Cosmetic Dentistry',
        time:'09.00 AM - 10.00AM',
        description:'Jewellery or jewelry consists of decorative items worn for personal adornment, such as brooches, rings, necklaces, earrings, pendants, bracelets, and cufflinks. Jewellery may be attached to the body or the clothes. From a western perspective, the term is restricted to durable ornaments, excluding flowers for example.',
        img:'https://images.unsplash.com/photo-1568219396383-6c8e87dadbe0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGpld2Vscnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        price:811
    },
    {
        id:9,
        name:'Cosmetic Dentistry',
        time:'09.00 AM - 10.00AM',
        description:'Jewellery or jewelry consists of decorative items worn for personal adornment, such as brooches, rings, necklaces, earrings, pendants, bracelets, and cufflinks. Jewellery may be attached to the body or the clothes. From a western perspective, the term is restricted to durable ornaments, excluding flowers for example.',
        img:'https://images.unsplash.com/photo-1618403088890-3d9ff6f4c8b1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmVja2xhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        price:888
    },
    {
        id:10,
        name:'Cosmetic Dentistry',
        time:'09.00 AM - 10.00AM',
        description:'Jewellery or jewelry consists of decorative items worn for personal adornment, such as brooches, rings, necklaces, earrings, pendants, bracelets, and cufflinks. Jewellery may be attached to the body or the clothes. From a western perspective, the term is restricted to durable ornaments, excluding flowers for example.',
        img:'https://images.unsplash.com/photo-1615197419794-52a6f5da9df0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZWFycmluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        price:899
    },
    {
        id:11,
        name:'Cosmetic Dentistry',
        time:'09.00 AM - 10.00AM',
        description:'Jewellery or jewelry consists of decorative items worn for personal adornment, such as brooches, rings, necklaces, earrings, pendants, bracelets, and cufflinks. Jewellery may be attached to the body or the clothes. From a western perspective, the term is restricted to durable ornaments, excluding flowers for example.',
        img:'https://images.unsplash.com/photo-1615655114865-4cc1bda5901e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZWFycmluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        price:855
    },
    {
        id:12,
        name:'Teeth Cleaning',
        time:'10.00 AM - 11.00 AM',
        description:'Jewellery or jewelry consists of decorative items worn for personal adornment, such as brooches, rings, necklaces, earrings, pendants, bracelets, and cufflinks. Jewellery may be attached to the body or the clothes. From a western perspective, the term is restricted to durable ornaments, excluding flowers for example.',
        img:'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGRpYW1vbmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        price:1045
    }
]
const Products = () => {
    return (
        <div className="mt-4">
            <Navigation></Navigation>
          
             <Row xs={1} sm={2} md={3} lg={4}className="g-4">
             {
               products.map(product=><Product
                key={product.id}
                product={product}></Product>)
            }
             </Row>
           
             </div>
    );
};

export default Products;
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
const MyOrders = () => {
    const [orders,setOrders]=useState([])
    const{user}=useAuth()
    useEffect(()=>{
        const url=`http://localhost:5000/orders?email=${user?.email}`
     fetch(url)
     .then(res=>res.json())
     .then(data=>setOrders(data))
    },[user?.email])
    const handleDelete=id=>{
        const url='http://localhost:5000/orders'
        fetch(url,{
          method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
         if(data.deletedCount){
           alert('Are you sure to Delete this product?')
          const remaining=orders.filter(product=>product._id !== id)
          setOrders(remaining)
         }
        })
       }
    return (
        <div>
            
      <Row xs={1} sm={2} md={3} lg={3}className="g-4 m-2 border ">
      {
       orders.map(order=><div
         key={order._id}
         product={order}>
           <h6>{order.name}<br/>
           {order.address}<br/>
           {order.quantity}<br/>
           </h6>
           <button onClick={()=>handleDelete(order._id)}>Delete</button>
         </div>
         )
     }
      </Row>
        </div>
    );
};

export default MyOrders;
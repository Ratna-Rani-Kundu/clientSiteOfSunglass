import {  Alert, TextField } from '@mui/material';
import React, {  useState } from 'react';
import Button from '@mui/material/Button';

const MakeAdmin = () => {
    const [email,setEmail]=useState('')
     const [success, setSuccess] = useState(false);
    const handleOnBlur=(e)=>{

    setEmail( e.target.value)
    
    }
    const handleAdminSubmit=(e)=>{
        const user= { email };
       
        fetch('http://localhost:5000/users/admin',{
            method:'PUT',
            headers:{
                'content-type':"application/json"
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setEmail('')
                    setSuccess(true);
                }
            })
          e.preventDefault()
    }
    return (
        <div>
          
            <h1>Make a admin</h1>
        <form onSubmit={handleAdminSubmit}>
        <TextField onBlur={handleOnBlur}  label="Email" type="email" variant="standard" />
        <Button type="submit" variant="contained">Make Admin</Button>
        </form>
         {success && <Alert severity="success">Make Admin Successfully</Alert>} 
        </div>
    );
};

export default MakeAdmin;
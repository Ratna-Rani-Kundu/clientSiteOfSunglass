import {  Alert, TextField } from '@mui/material';
import React, {  useState } from 'react';
import Button from '@mui/material/Button';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
const MakeAdmin = () => {
    const [email,setEmail]=useState('')
     const [success, setSuccess] = useState(false);
     
    const handleOnBlur=(e)=>{

    setEmail( e.target.value)
    
    }
    const handleAdminSubmit=(e)=>{
        const user= { email };
       
        fetch('https://murmuring-lowlands-25266.herokuapp.com/users/admin',{
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
        <Button type="submit" variant="contained"><AdminPanelSettingsIcon/> Make Admin</Button>
        </form>
         {success && <Alert severity="success">Make Admin Successfully</Alert>} 
        </div>
    );
};

export default MakeAdmin;
import React from 'react'
import { Navigate } from 'react-router-dom';

export default function PrivateRoutes({children}) {
    const token = localStorage.getItem('token');
    
    if(token){
        return children
    }else{
       alert('login first')
       return <Navigate to="/users/login"/>
    }
 
}

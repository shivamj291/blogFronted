import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Profile() {
    const[state,setState] = useState([]);

    useEffect(()=>{
        profile();
    },[])

    async function profile(){
        const id = localStorage.getItem('UserId');
        const token = localStorage.getItem('token')
        try{
            let data = await axios.get(`http://localhost:4000/users/profile/${id}`,{ 
                headers: { 
                    "Authorization": "Bearer " + token
                }
            })
            console.log(data.data.result);
            setState(data.data.result);
        }catch{
            console.log('error')
        }
      

    }
   


  return (
    <div style={{background:'yellow',width:'70%',margin:'auto',textAlign:'left',padding:'0px 30px'}}>
        <h1>Name:{state[0]?.name}</h1>
        <h1>Email:{state[0]?.email}</h1>
        <h1>Gender:{state[0]?.gender}</h1>
    </div>
  )
}

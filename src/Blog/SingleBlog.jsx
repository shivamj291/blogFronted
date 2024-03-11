import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
export default function SingleBlog() {
    const[state,setState] = useState([])
   useEffect(()=>{
    single()
   },[])
   const {id} = useParams();
    async function single(){

        const token = localStorage.getItem('token');
       
        try{
    
                let data = await axios.get(`http://localhost:4000/posts/single/${id}`,{ 
                    headers: { 
                        "Authorization": "Bearer " + token
                    }
                });
                console.log(data.data.result);
                setState(data.data.result);
                return data;
            
        }
        catch{
            console.log('error')
        }
       
      
    }
  return (
    <div>
       <div style={{width:'60%',margin:'auto',background:'teal',height:'100vh',color:'white',textAlign:'left',padding:'0 30px'}}>
                
                <h1>Title: {state[0]?.title}</h1>
                <p>{state[0]?.blog}</p>
              
       </div>
    </div>
  )
}

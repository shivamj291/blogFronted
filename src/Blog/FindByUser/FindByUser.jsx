import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
export default function FindByUser() {
    const[state,setState] = useState([])
   useEffect(()=>{
    findByUser()
   },[])
    
   async function deletePost(id){
    const token = localStorage.getItem('token');
    console.log(id,token)
    try{

        let data = await axios.delete(`http://localhost:4000/posts/delete/${id}`,{ 
            headers: { 
                "Authorization": "Bearer " + token
            }
        })
        findByUser();
        return data;
    }catch{
        console.log('error')
    }
  

   }
   
    async function findByUser(){

        const id = localStorage.getItem('UserId');
        const token = localStorage.getItem('token');
      
        try{
    
                let data = await axios.get(`http://localhost:4000/posts/${id}`,{ 
                    headers: { 
                        "Authorization": "Bearer " + token
                    }
                });
                console.log(data);
                setState(data.data.result);
                return data;
            
        }
        catch{
            console.log('error')
        }
       
      
    }
  return (
    <div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:'20px',margin:'20px auto',width:'80%'}}>
        {
            state?.map((ele)=>{
                
                return  <div style={{background:'teal',padding:'20px'}}>
                            <Link to={`/single/${ele._id}`}>

                            <div style={{background:'yellow',color:'black',padding:'20px'}}>
                                 <div style={{width:'350px',overflow:'hidden',whiteSpace:'nowrap',textOverflow:'ellipsis'}}>
                                    <h3>{ele.title}</h3>
                                    <p style={{fontSize:'22px'}}>{ele.blog}</p>
                                </div>
                                 </div>
                               
                            </Link>

                           <div style={{display:'flex',justifyContent:'space-around'}}>
                             <Link to={`/update/${ele._id}`}><h6 style={{cursor:'pointer'}} >Edit</h6></Link>
                             <h6 onClick={()=>deletePost(ele._id)} style={{cursor:'pointer'}}>Delete</h6>
                           </div>
                           
                       </div>
                
                 
            })
        }
        
       </div>
    </div>
  )
}

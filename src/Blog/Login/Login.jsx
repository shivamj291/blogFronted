import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function LogIn() {
    const[input,setInput] = useState({
        name:'',
        email:'',
        password:'',
        gender:''
    })
    const navigate = useNavigate();
    
    async function login(e){
        e.preventDefault();
        try{
          const response = await axios.post('http://localhost:4000/users/login', input);
       

          if(response.data.token){
            localStorage.setItem('token',response.data.token)
            localStorage.setItem('UserId',response.data.obj._id);
            alert('login succesfull')
            console.log('login successful:', response.data);
            navigate('/')
          }else{
            alert('email or password')
          }
         
        }catch{
          console.log('error in login')
        }
        
    }
  return (
    <div>
      <h1 style={{color:'teal'}}>Log in</h1>
      <form action="" onSubmit={(e)=>login(e)} style={{display:'flex',justifyContent:'center',flexDirection:'column',padding:'20px',background:'teal',width:'30%',margin:'50px auto'}}>
        <input type="text" email="" placeholder='Enter Email' id="" onChange={(e)=>setInput({...input,email:e.target.value})} style={{padding:'10px'}}/>
        <input type="text" password="" placeholder='Enter Password' id="" onChange={(e)=>setInput({...input,password:e.target.value})} style={{padding:'10px'}}/>
        <input type="submit" name="" id="" style={{padding:'10px',background:'gray',border:'none',cursor:'pointer'}}/>
    
      </form>

     
    </div>
  )
}

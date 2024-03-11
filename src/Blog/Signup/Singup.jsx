import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default function Singup() {
    const[input,setInput] = useState({
        name:'',
        email:'',
        password:'',
        gender:''
    })
   
    async function sign(e){
        e.preventDefault();
        try{
          const response = await axios.post('http://localhost:4000/users/register', input);
          console.log('Signup successful:', response.data);
          alert('sign up successfull')
        }catch{
          console.log('error')
        }
       
    }
  return (
    <div>
      <h1 style={{color:'teal'}}>Sign Up</h1>
      <form action="" onSubmit={(e)=>sign(e)} style={{display:'flex',justifyContent:'center',flexDirection:'column',padding:'20px',background:'teal',width:'30%',margin:'50px auto'}}>
        <input type="text" name="" id="" placeholder='Enter Name' onChange={(e)=>setInput({...input,name:e.target.value})} style={{padding:'10px'}}/>
        <input type="text" email="" id="" placeholder='Enter Email' onChange={(e)=>setInput({...input,email:e.target.value})} style={{padding:'10px'}}/>
        <input type="text" password="" id="" placeholder='Enter Password' onChange={(e)=>setInput({...input,password:e.target.value})}style={{padding:'10px'}}/>
        <input type="text" gender="" id="" placeholder='Enter Gender' onChange={(e)=>setInput({...input,gender:e.target.value})}style={{padding:'10px'}}/>
        <input type="submit" name="" id="" style={{padding:'10px',background:'gray',border:'none',cursor:'pointer'}}/>
      </form>
    </div>
  )
}

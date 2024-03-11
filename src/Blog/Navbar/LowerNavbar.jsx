import React from 'react'
import { Link } from 'react-router-dom'

export default function LowerNavbar() {
   
  return (
    <div>

        <div style={{display:'flex',justifyContent:'space-around',position:'fixed',width:'100%',fontSize:'20px',background:'teal',fontSize:'20px'}}>
         <Link to='/newpost' style={{textDecoration:'none',color:'white',cursor:'pointer'}}>Add Post</Link>
         <Link to='/profile' style={{textDecoration:'none',color:'white',cursor:'pointer'}}>Profile</Link>
      </div>
    </div>
  )
}

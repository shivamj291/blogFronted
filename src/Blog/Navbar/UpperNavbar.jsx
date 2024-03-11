import React from 'react'
import { Link, useNavigate} from 'react-router-dom';
import getreqAction from '../../Redux/Action';

import { useDispatch, useSelector } from 'react-redux';
export default function UpperNavbar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    function logout(){
      localStorage.setItem('UserId','');
      localStorage.setItem('token','')
      navigate('/users/login');
  
    }
  return (
    <div>
        <div style={{display:'flex',justifyContent:'space-around',padding:'20px',background:'teal',fontSize:'20px',}}>
         <Link to='/' style={{textDecoration:'none',color:'white',cursor:'pointer'}} onClick={()=>dispatch(getreqAction(false))}>DashBoard</Link>
    {
      localStorage.getItem('token') ?  <a onClick={()=>logout()} style={{textDecoration:'none',color:'white',cursor:'pointer'}} >Log out</a>
         :  <Link to='/users/login' style={{textDecoration:'none',color:'white',cursor:'pointer'}} onClick={()=>dispatch(getreqAction(false))}>LogIn</Link>
    }   
         <Link to='/users/register' style={{textDecoration:'none',color:'white',cursor:'pointer'}} onClick={()=>dispatch(getreqAction(false))}>SignUp</Link>
         <Link to='user' style={{textDecoration:'none',color:'white',cursor:'pointer'}} onClick={()=>dispatch(getreqAction(true))}>Your Blogs</Link>
      </div>
    </div>
  )
}

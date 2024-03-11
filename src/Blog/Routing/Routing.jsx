import React from 'react'

import { Link, Route, Routes} from 'react-router-dom';
import SingleBlog from '../SingleBlog';
import DashBoard from '../DashBoard/DashBoard';
import LogIn from '../Login/Login';
import FindByUser from '../FindByUser/FindByUser';
import NewPost from '../NewPost/NewPost';
import Signup from '../Signup/Singup'
import PrivateRoutes from '../../PrivateRoutes/PrivateRoutes';
import Profile from '../FindByUser/Profile';
import UpdatePost from '../FindByUser/EditPost';
export default function Routing() {
  return (
    <div>
       <Routes>
            <Route path="/single/:id" element={<SingleBlog/>} />

            <Route path='/' element = {<PrivateRoutes><DashBoard/></PrivateRoutes>}/>
            <Route path='/users/register' element ={<Signup/>}/>
            <Route path='/users/login' element = {<LogIn/>}/>
            <Route path='/user' element = {<PrivateRoutes><FindByUser/></PrivateRoutes>}/>
            <Route path='/newpost' element = {<NewPost/>}/>
            <Route path='/profile' element = {<Profile/>}/>
            <Route path='/update/:id' element = {<UpdatePost/>}/>
      </Routes>
    </div>
  )
}

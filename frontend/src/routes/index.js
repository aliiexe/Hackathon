import {createBrowserRouter} from 'react-router-dom'
import GuestLayout from '../layouts/GuestLayout'
import Home from '../pages/Home'
import SignUp from '../pages/SignUp/SignUp'
import Login from '../pages/Login/login'

export const router=createBrowserRouter([
    {Component:GuestLayout,children:[{path:"/",Component:Home},
    {path:'/Register',Component:SignUp }
,{path:'/Login',Component:Login}]}
])
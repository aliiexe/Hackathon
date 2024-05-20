import {createBrowserRouter} from 'react-router-dom'
import GuestLayout from '../layouts/GuestLayout'
import Home from '../pages/Home'
import SignUp from '../pages/SignUp/SignUp'

export const router=createBrowserRouter([
    {Component:GuestLayout,children:[{path:"/",Component:Home},
    {path:'/Register',Component:SignUp }]}
])
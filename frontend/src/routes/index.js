import {createBrowserRouter} from 'react-router-dom'
import GuestLayout from '../layouts/GuestLayout'
import Home from '../pages/Home'

export const router=createBrowserRouter([
    {Component:GuestLayout,children:[{path:"/",Component:Home}]}
])
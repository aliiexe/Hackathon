import {createBrowserRouter} from 'react-router-dom'
import GuestLayout from '../layouts/GuestLayout'
import Landing from '../pages/Landing.jsx'
import AdminLayout from '../layouts/AdminLayout.jsx'

export const router=createBrowserRouter([
    {Component:GuestLayout,children:[{path:"/",Component:Landing}]},
    {Component:AdminLayout,children:[{path:"/",Component:Landing}]}
])
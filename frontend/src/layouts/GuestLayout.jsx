import  {Outlet} from 'react-router-dom'
export default function GuestLayout(){
    return(
        <>
        <div>GuestLayout</div>

        <Outlet></Outlet>
        <div>GuestLayout</div>
        </>
    )
}
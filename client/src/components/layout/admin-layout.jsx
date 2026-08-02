import { Navigate, NavLink, Outlet } from "react-router-dom"
import { HiUsers } from "react-icons/hi2";
import { FaCommentDots } from "react-icons/fa6";
import { FaRegRectangleList } from "react-icons/fa6";
import { IoHomeSharp } from "react-icons/io5";
import { useAuth } from "../../store/auth";
export const AdminLayout = () => {
    const{userr}=useAuth();
    const{isLoading}=useAuth();
   //console.log("adminuser",userr.isAdmin);
   if(isLoading || userr === null){
    return<h1>Loading...</h1>
   }
   if(!userr.isAdmin){
    return <Navigate to="/" />
   }
   
    return(
        <>
        <header className="admin-head container">
            <nav>
                <ul>
                    <li><NavLink to="/admin/users"><HiUsers/> Users</NavLink></li>
                    <li><NavLink to="/admin/contacts"><FaCommentDots/> Contacts</NavLink></li>
                    <li><NavLink to="/service"><FaRegRectangleList/> Services</NavLink></li>
                    <li><NavLink to="/"><IoHomeSharp/> Home</NavLink></li>
                </ul>
            </nav>
        </header>
        <div className="container" >
        <Outlet/>
        </div>
       
        </>
    )
}
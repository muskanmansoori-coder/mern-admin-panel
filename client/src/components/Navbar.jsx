import { NavLink } from "react-router-dom"
import "./Navbar.css"
import { useAuth } from "../store/auth"
export const Navbar = () => {
    const {isLoggedIn}=useAuth();
    return(
        <>
        <header>
            <div className="containerr navv">
                <div className="logo">
                    <NavLink to="/">
                    <h1>Muskan</h1></NavLink>
                  </div>
                <div>
                    <nav  >
<ul className="">
    <li className=""><NavLink  to="/">Home</NavLink></li> 
    <li className=""><NavLink   to="/about">About</NavLink></li>
    <li className=""><NavLink   to="/service">Services</NavLink></li>
    <li className=""><NavLink   to="/contact">Contact</NavLink></li>
    {
       isLoggedIn? (
            <li className=""><NavLink   to="/logout">Logout</NavLink></li>
        ):(
            <>
            <li className=""><NavLink   to="/login">Login</NavLink></li>
            <li className=""><NavLink   to="/register">Sign Up</NavLink></li>
            </>
        )
    }
  
    

</ul>
                    </nav>
                </div>
            </div>
        </header>
        </>
    )
}
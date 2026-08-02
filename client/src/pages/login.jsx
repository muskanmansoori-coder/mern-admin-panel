import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from 'react-toastify';
export const Login = () => {
 const navigate= useNavigate()
 const { storeTokenInLS}= useAuth();
  const [user, setUser]= useState({
    email:'',
    password:""
  })
  //handleChange
  const handleChange= (e) => {
const name=e.target.name;
const value=e.target.value;

setUser({
  ...user,
  [name]:value
})

  }
  ///handleSubmit
  const handleSubmit = async(e) => {
e.preventDefault();
console.log("Login", user);
try {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`,{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(user)

    
  })
  console.log("login-res", response);
  const login_data=await response.json();
  console.log("login_data", login_data);
  if(response.ok){
    toast.success("login successfull")
   
    storeTokenInLS(login_data.token)
    setUser({
       email:'',
    password:""
    })
    navigate("/")
  }else{
    toast.error(login_data.extraDetails?login_data.extraDetails:login_data.message);
    console.log("login error");
    
  }
} catch (error) {
  toast.warn(error)
  console.log("login error", error);
  
}
  }
    return(
        <section>
      <main>
        <div>
            <div className="container grid-two--cols">
                <div>
                    <img src="/images/login.png" width="400" height="400" alt="login page"/>
                </div>
                
  <div className="bg-amber-700">
<h1 className="text-2xl reg">Login form</h1>
  <br/>
  <form  onSubmit={handleSubmit} autoComplete="off">
    <div className="form">
      <label htmlFor="email">email</label>
      <input type="email" value={user.email} onChange={handleChange}  name="email" placeholder="Enter email" id="email" autoComplete="off" required/>
    </div>

    <div className="form">
      <label htmlFor="password">password</label>
      <input type="password"  autoComplete="new-password"  value={user.password} onChange={handleChange}  name="password" placeholder="Enter password" id="password"  required/>
    </div>
    <br/>
    <button type="submit">Login</button>
  </form>
    
  </div>
  
                </div>
            </div>
        
      </main>
        </section>
    )
}
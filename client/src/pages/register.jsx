import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {useAuth} from "../store/auth"

import { toast } from 'react-toastify';
export const Register = () => {
  const [user, setUser]= useState({
    username:"",
    email:'',
    phone:"",
    password:""
  })
 const navigate= useNavigate();
 const {storeTokenInLS}=useAuth()

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
  const handleSubmit =async (e) => {
e.preventDefault();
console.log("register", user);
try {
  const response= await fetch(`${import.meta.env.VITE_API_URL}/api/auth/register`,{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(user)
  });
  console.log("register-res", response);
  const register_data=await response.json();
  if(response.ok){
    toast.success("register successfully")

   // console.log("reg_data", register_data);
    //localStorage.setItem("Token", register_data.token)
    storeTokenInLS(register_data.token)
    setUser({
      username:"",
      email:'',
      phone:"",
      password:""
    })
    navigate("/")
  }else{
    toast.error(register_data.extraDetails?register_data.extraDetails:register_data.message)
    console.log("invalid credentials");
    
  }
  
} catch (error) {
  console.log(error);
  
}
  }
    return(
        <section>
      <main>
        <div>
            <div className="container grid-two--cols">
                <div>
                    <img src="/images/signup.png" width="400" height="400" alt="resgister page"/>
                </div>
                
  <div className="bg-amber-700">
<h1 className="text-2xl reg">Registration form</h1>
  <br/>
  <form  onSubmit={handleSubmit} autoComplete="off">
    
    <div className="form">
      <label htmlFor="username">username</label>
      <input type="text" value={user.username} onChange={handleChange} name="username"  placeholder="Enter username" id="username" autoComplete="off" required/>
    </div>

    <div className="form">
      <label htmlFor="email">email</label>
      <input type="email" value={user.email} onChange={handleChange}  name="email" placeholder="Enter email" id="email" autoComplete="off" required/>
    </div>

    <div className="form">
      <label htmlFor="phone">phone</label>
      <input type="number"  value={user.phone} onChange={handleChange}  name="phone" placeholder="Enter phone" id="phone" autoComplete="off" required/>
    </div>

    <div className="form">
      <label htmlFor="password">password</label>
      <input type="password"  autoComplete="new-password"  value={user.password} onChange={handleChange}  name="password" placeholder="Enter password" id="password"  required/>
    </div>
    <br/>
    <button type="submit">Register Now!</button>
  </form>
    
  </div>
  
                </div>
            </div>
        
      </main>
        </section>
    )
}
import { useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from 'react-toastify';
export const Contact = () => {

    const[user, setUser] =useState({
        username:'',
        email:"",
        message:""
    })
    const[userData, setUserData]=useState(true)
    const {userr}=useAuth();
    if(userData && userr){
      setUser({
        username:userr.username,
        email:userr.email,
        message:"",
      }) 
      setUserData(false)
    }
    //handleChange
    const handleChange = (e) =>{
const name=e.target.name;
const value=e.target.value;
setUser({
    ...user,
    [name]:value
})
    }
    //handleSubmit
    const handleSubmit = async(e) => {
e.preventDefault();
console.log(user);
try {
  const response=await fetch("http://localhost:3000/api/form/contact",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(user)
  });
  console.log("contact-res",response);
  if(response.ok){
    setUser({
    username:'',
    email:"",
    message:""
  })
  const data=await response.json();
  console.log("contact_data", data);
  
  toast.success("message sent successfully")
  }
} catch (error) {
  console.log(error);
  toast.error("message is not sent")
}



    }
    return(
        <section>
      <main>
        <div>
            <div className="container grid-two--cols">
                <div>
                    <img src="/images/contact.png" width="400" height="400" alt="login page"/>
                </div>
                
  <div className="bg-amber-700">
<h1 className="text-2xl reg">Contact form</h1>
  <br/>
  <form onSubmit={handleSubmit}>
  <div className="form">
      <label htmlFor="username">username</label>
      <input type="text" value={user.username} onChange={handleChange}   name="username" placeholder="Enter username" id="username" autoComplete="off" required/>
    </div>
    <div className="form">
      <label htmlFor="email">email</label>
      <input type="email" value={user.email}  onChange={handleChange} name="email" placeholder="Enter email" id="email" autoComplete="off" required/>
    </div>
    <div className="form">
      <label htmlFor="message">message</label>
      <textarea  value={user.message}  onChange={handleChange}  name="message" rows={10} cols={1} id="message" autoComplete="off" required/>
    </div>
    
    <br/>
    <button type="submit">Submit!</button>
  </form>
    
  </div>
  
                </div>

                <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112333.62510316257!2d79.33953794311743!3d28.376205066146987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a007334d02998d%3A0x5b9d44cf31ee87f!2sBareilly%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1784900052382!5m2!1sen!2sin"
                 width="100%"
  height="450"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"></iframe>
                </div>
            </div>
        
      </main>
        </section>
    )
}
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useAuth } from "../store/auth"
import { toast } from "react-toastify"

export const AdminUpdateUser = () => {
    const[data, setData]=useState({
        username:"",
        email:"",
        phone:'',
    })
const params=useParams()
const {authToken}=useAuth();
    const getUpdatedUser = async() => {
        
       try {
        const response=await fetch(`${import.meta.env.VITE_API_URL}/api/admin/users/${params.id}`,{
            method:"GET",
            headers:{
                Authorization:authToken,
            }
        })
        const single_data=await response.json();
        console.log("single_data",single_data);
        if(response.ok){
setData(single_data)
        }
        
       } catch (error) {
        console.log(error);
        
       }
    }
  
    useEffect(()=>{
        getUpdatedUser();
    },[])
    //handleChange
    const handleChange =(e) => {
        const { name, value } = e.target;

setData({
  ...data,
  [name]:value

})
    }


      //handleSubmit
      const handleSubmit= async(e) => {
        e.preventDefault();
        console.log(data);
        try {
            const response=await fetch(`${import.meta.env.VITE_API_URL}/api/admin/users/update/${params.id}`,{
                method:"PATCH",
                headers:{
                    Authorization:authToken,
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(data)
            })
            const updated_data=await response.json();
            console.log("updated_data", updated_data);
            if(response.ok){
                setData(updated_data)
                toast.success("user is updated successfully")
                setData({
                    username:"",
                    email:"",
                    phone:'',
                })
            }else{
                toast.error(updated_data.extraDetails?updated_data.extraDetails:updated_data.message)
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
                 
    <div className="bg-amber-700">
  <h1 className="text-2xl reg">Contact form</h1>
    <br/>
    <form onSubmit={handleSubmit}>
    <div className="form">
        <label htmlFor="username">username</label>
        <input type="text" value={data.username} onChange={handleChange}   name="username" placeholder="Enter username" id="username" autoComplete="off" required/>
      </div>
      <div className="form">
        <label htmlFor="email">email</label>
        <input type="email" value={data.email}  onChange={handleChange} name="email" placeholder="Enter email" id="email" autoComplete="off" required/>
      </div>
      <div className="form">
        <label htmlFor="phone">Phone</label>
        <input type="phone" value={data.phone}  onChange={handleChange} name="phone" placeholder="Enter phone" id="phone" autoComplete="off" required/>
      </div>
      
      <br/>
      <button type="submit">Update</button>
    </form>
      
    </div>
    
                  </div>
  
                 
              </div>
          
        </main>
          </section>
    )
}
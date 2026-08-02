import { useEffect, useState } from "react"
import { useAuth } from "../store/auth"
import { toast } from "react-toastify";
import { FaRegUserCircle } from "react-icons/fa";

export const AdminContacts =()=>{
const[cont,setCont]=useState([]);
    const {authToken}=useAuth();
    const  getAdminContact = async() => {
        try {
            const response=await fetch("http://localhost:3000/api/admin/contacts",{
                method:"GET",
                headers:{
                    Authorization:authToken,
                }
            })
            const contact_data=await response.json();
            if(response.ok){
                setCont(contact_data)
            }
        } catch (error) {
            console.log(error);
            
        }
    }
  
    //deleteAdminContact
    const deleteAdminContact = async(id) => {
console.log("admincontact",id);
try {
    const response=await fetch(`http://localhost:3000/api/admin/contact/delete/${id}`,{
        method:"DELETE",
        headers:{
            Authorization:authToken,
        }
    })
    const deletecont_data=await response.json();
    console.log("deletecont_data", deletecont_data);
    if(response.ok){
toast.success("contact delete successfully")
getAdminContact();
    }else{
        toast.error(deletecont_data.extraDetails?deletecont_data.extraDetails:deletecont_data.message)
    }
} catch (error) {
    console.log(error);
    
}

    }
    useEffect(()=>{
        getAdminContact();
    },[])
    return(
        <section className="container">
        <h1>admin contacts panel</h1>
       
               <div className="grid-four--cols cont ">
{cont.map((curCont, index)=>{
    return(
        <div key={index} className="cont-div">
            <h2><FaRegUserCircle/> {curCont.username}</h2>
            <h3>Email: {curCont.email}</h3>
            <h4>Message: {curCont.message}</h4>
            <button onClick={()=>deleteAdminContact(curCont._id)}  className="delete-btn btn-cont">
                    Delete
                  </button>
        </div>
    )
})}
               </div>
          
        </section>
    )
}
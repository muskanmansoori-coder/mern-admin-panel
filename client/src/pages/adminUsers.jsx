import { useEffect, useState } from "react"
import { useAuth } from "../store/auth"
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";


export const AdminUsers =()=>{
  
    const[users, setUsers]=useState([])
  const{authToken}=useAuth()
    // getAllUsersData
    const  getAllUsersData = async() => {
        
try {
    const response=await fetch(`${import.meta.env.VITE_API_URL}/api/admin/users`,{
        method:"GET",
        headers:{
Authorization:authToken,
        }
    })
    const alluser_data=await response.json();
    console.log("getalluserdata",alluser_data);
    if(response.ok){
        setUsers(alluser_data);
    }
    
} catch (error) {
    console.log("error from getallusersdata", error);
    
}
    }
    useEffect(()=>{
        getAllUsersData();
    },[])
    //deleteUser
    const deleteUser = async(id) => {
        try {
            console.log("deleteuser", id);
            const response=await fetch(`${import.meta.env.VITE_API_URL}/api/admin/users/delete/${id}`,{
                method:"DELETE",
            headers:{
                Authorization:authToken,
            } 
          
        })  
        const delete_data=await response.json();
        console.log("deletedata", delete_data);
        if(response.ok){
            toast.success("user deleted succeesfull");
            getAllUsersData();
        }else{
            toast.error("user data is not deleted");
        }
        
        } catch (error) {
            console.log(error);
            
        }





    }
    return(
        <section className="admin-users-section">
        <h1>admin users panel</h1>
        <div className="admin-table-container">
        <table className="admin-users-table">
        <thead>
                    <tr>
                        <th>icon</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
        {users.map((curUser, index)=>{
            return(

         
              
                    <tr key={index}>
                       
                        <td><div className="avatar">
  {curUser?.username?.charAt(0).toUpperCase()}
</div></td>
                        <td>{curUser.username}</td>
                        <td>{curUser.email}</td>
                        <td>{curUser.phone}</td>
                        <td> 
                 <Link to={`/admin/users/${curUser._id}/edit`}className="update-btn">Update</Link>
                </td>
                        <td><button onClick={()=>deleteUser(curUser._id)} className="delete-btn">
                    Delete
                  </button></td>
                    </tr>
        
              
     
               
            )
           
        })}
                </tbody>
                 </table>
                 </div>
        </section>
    )
}
import { useEffect, useState } from "react";
import { createContext, useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
 
    const[userr, setUserr]=useState(null)
    const[servicedata, setServicedata]=useState([]);
    const[isLoading, setIsLoading]=useState(true);
    const[token, setToken]=useState(localStorage.getItem("Token")) //ye token logout ke liyai bnaya h 
     const authToken=`Bearer ${token}`
    //storetokenls
    const  storeTokenInLS = (serverToken) => {
 localStorage.setItem("Token", serverToken);
setToken(serverToken)
    }
    //logoutuser
    const LogoutUser = () => {
setToken("");
return localStorage.removeItem("Token")
    }
    //logedin
    const isLoggedIn=!! token;
    //userAuthentication
    const userAuthentication = async() => {
try {
  setIsLoading(true)
   const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/user`,{
    method:"GET",
    headers:{
        Authorization: authToken,
    }

    
   })
   //console.log("user_response", response);
   if(response.ok){
    const user_data=await response.json();
    setIsLoading(false)
 //console.log("user_data", user_data);
setUserr(user_data.message)
   }else{
    setUserr(null);
   }
} catch (error) {
    console.log("error fetching data");
    setUserr(null);
    
}finally {
  setIsLoading(false);
}
    }

    // getserviceData

    const  getserviceData =async()=>{
        try{
          const response=await fetch(`${import.meta.env.VITE_API_URL}/api/data/service`,{
            method:"GET",
          }) 
          if(response.ok){
            const service_data=await response.json();
            //console.log("servicedata",service_data);
            
            setServicedata(service_data.message);
          }
        } catch (error) {
            console.log("error fetching service data");
        }
    }
    useEffect(() => {
        getserviceData();
        if (token) {
          userAuthentication();
        } else {
          setUserr(null);
        }
      }, [token]);
    {/*useEffect(()=>{
        userAuthentication();
    },[])*/}
return (
 <AuthContext.Provider value={{storeTokenInLS, LogoutUser, isLoggedIn,userr,servicedata,authToken,isLoading}}>
    {children}
</AuthContext.Provider>
);
}

export const useAuth = () => {
    const contextValue= useContext(AuthContext);

    if(!contextValue){
        throw new Error ("useAuth used outside of the Provider")
    }
    return contextValue;
}
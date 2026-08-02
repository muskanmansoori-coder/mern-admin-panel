import {BrowserRouter, Route, Routes} from "react-router-dom"
import { Home } from "./pages/home"
import { About } from "./pages/about"
import { Contact } from "./pages/contact"
import { Service } from "./pages/service"
import { Register } from "./pages/register"
import { Login } from "./pages/login"
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import { ErrorPage } from "./pages/Error"
import { Logout } from "./pages/Logout"

import {AdminUsers} from "./pages/adminUsers"
import { AdminContacts } from "./pages/adminContacts"
import { AdminLayout } from "./components/layout/admin-layout"
import { AdminUpdateUser } from "./pages/AdminUpdateUser"
const App = () => {
  return(
    <>
<BrowserRouter>
<Navbar/> 
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/contact" element={<Contact/>}/>
  <Route path="/service" element={<Service/>}/>
  <Route path="/register" element={<Register/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/logout" element={<Logout/>}/>
  <Route path="*"  element={<ErrorPage/>}/>
  <Route path="/admin" element={<AdminLayout/>}>
<Route path="users" element={<AdminUsers/>} />
<Route path="contacts" element={<AdminContacts/>} />
<Route path="users/:id/edit" element={<AdminUpdateUser/>} />
  </Route>
</Routes>
<Footer/>
</BrowserRouter>
    </>
  )
}
export default App

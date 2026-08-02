import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer} from 'react-toastify';
import './index.css'
import "./App.css"
import App from './App.jsx'
import { AuthProvider } from './store/auth.jsx'
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById('root')).render(
  <AuthProvider>
 <StrictMode>
    <App />
    <ToastContainer
position="top-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
toastClassName="toastBody"

/>
  </StrictMode>
  </AuthProvider>
 
)

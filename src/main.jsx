import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from "./pages/Login.jsx"
import Register from "./pages/Register.jsx"
import Booking from "./pages/Booking.jsx"
import Prescriptions from "./pages/Prescriptions.jsx"
import { AuthProvider } from "./context/AuthContext.jsx";

import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <header>
          <Navbar />
        </header>
        <main className='h-screen px-8 pt-16 pb-4'>
          <Routes>
            <Route path='/' element={<App />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/booking' element={<Booking />} />
            <Route path='/prescriptions' element={<Prescriptions />} />
          </Routes>
        </main>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)



// https://github.com/exewhyz/react-302
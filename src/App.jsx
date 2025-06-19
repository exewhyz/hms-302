import Login from "./pages/Login.jsx"
import Register from "./pages/Register.jsx"
import Booking from "./pages/Booking.jsx"
import Home from "./pages/Home.jsx"
import Prescriptions from "./pages/Prescriptions.jsx"
import Navbar from './components/Navbar.jsx'
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className='h-screen px-8 pt-16 pb-4'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/booking' element={<Booking />} />
          <Route path='/prescriptions' element={<Prescriptions />} />
        </Routes>
      </main>
    </>
  )
}
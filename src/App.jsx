import Login from "./pages/Login.jsx"
import Register from "./pages/Register.jsx"
import Booking from "./pages/Booking.jsx"
import Home from "./pages/Home.jsx"
import Prescriptions from "./pages/Prescriptions.jsx"
import Navbar from './components/Navbar.jsx'
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "./context/AuthContext.jsx"

export default function App() {
  const { isAuthenticated } = useAuth();
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className='h-screen px-8 pt-16 pb-4'>
        <Routes>
          {/* public routes */}
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          {/* protected routes */}
          <Route path='/' element={isAuthenticated ? <Home /> : <Navigate to={"/login"} />} />
          <Route path='/booking' element={isAuthenticated ? <Booking /> : <Navigate to={"/login"} />} />
          <Route path='/prescriptions' element={isAuthenticated ? <Prescriptions /> : <Navigate to={"/login"} />} />
        </Routes>
      </main>
    </>
  )
}
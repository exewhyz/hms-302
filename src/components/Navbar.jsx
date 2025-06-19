import React from 'react'
import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
    const { isAuthenticated, logout } = useAuth();
    return (
        <nav className='h-14 px-4 fixed w-full bg-red-100 flex items-center justify-between'>
            <Link to={"/"} className='font-bold text-3xl text-blue-500'>
                MA<span className='text-red-500'>X</span>
            </Link>
            <div className='flex gap-4'>
                <Link to={"/"} className=''>Home</Link>
                <Link to={"/booking"} className=''>Booking</Link>
                <Link to={"/prescriptions"} className=''>Prescriptions</Link>
            </div>
            {
                isAuthenticated ? (
                    <div>
                        <button onClick={logout} className='bg-red-500/90 text-white px-3 py-1 rounded-xl hover:bg-red-500'>Logout</button>
                    </div>
                ) : (<div className='flex gap-4'>
                    <Link to={"/login"} className='bg-blue-400 px-3 py-1 rounded-xl'>Login</Link>
                    <Link to={"/register"} className='bg-green-400 px-3 py-1 rounded-xl'>Register</Link>
                </div>)
            }
        </nav>
    )
}

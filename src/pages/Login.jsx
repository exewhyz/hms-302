import React from 'react'
import { Link } from 'react-router-dom';

export default function Login() {

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Logged In")
    
  }

  return (
    <div className='flex items-center justify-center h-full'>
      <form onSubmit={handleSubmit} className='flex gap-4 flex-col bg-blue-100/30 p-6 rounded-lg'>
        <input className='border border-black/50 rounded-lg px-2 py-1' type="email" placeholder='email@example.com' required />
        <input className='border border-black/50 rounded-lg px-2 py-1' type="password" placeholder='p@ssWord1' required />
        <button type="submit" className='bg-blue-400 rounded-lg py-1'>
          Login
        </button>
        <Link className="text-xs text-neutral-400 hover:text-neutral-500" to={"/register"}>
          Not have an account, Register!
        </Link>
      </form>
    </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom';

export default function Register() {

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Signed Up")
  }

  return (
    <div className='flex items-center justify-center h-full'>
      <form onSubmit={handleSubmit} className='flex gap-4 flex-col bg-green-100/30 p-6 rounded-lg w-90'>
        <input
          className='border border-black/50 rounded-lg px-2 py-1'
          type="text"
          placeholder='Name'
          required
        />
        <input
          className='border border-black/50 rounded-lg px-2 py-1'
          type="email" placeholder='email@example.com'
          required
        />
        <input
          className='border border-black/50 rounded-lg px-2 py-1'
          type="number" placeholder='age'
          required
        />
        <input
          className='border border-black/50 rounded-lg px-2 py-1'
          type="text" placeholder='gender(M/F)'
          required
        />
        <input
          className='border border-black/50 rounded-lg px-2 py-1'
          type="number" placeholder='Mobile Number'
          required
        />
        <input
          className='border border-black/50 rounded-lg px-2 py-1'
          type="password" placeholder='p@ssWord1'
          required
        />
        <input
          className='border border-black/50 rounded-lg px-2 py-1'
          type="text"
          placeholder='confirm password'
          required
        />
        <button
          type="submit"
          className='bg-green-400 rounded-lg py-1'>
          Register
        </button>
        <Link className="text-xs text-neutral-400 hover:text-neutral-500" to={"/login"}>
          Already have an account, Login!
        </Link>
      </form>
    </div>
  )
}

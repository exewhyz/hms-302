import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Register() {

  const { loading, isAuthenticated, register } = useAuth();
  const redirect = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
    mobile: "",
    password: "",
    cPassword: ""
  });

  useEffect(() => {
    isAuthenticated && redirect("/")
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await register(user)
      console.log("Registered successfully");
    } catch (error) {
      console.log(error.message);
    }
  }

  const handleChange = (e) => {
    setUser((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }

  return (
    <div className='flex items-center justify-center h-full'>
      <form onSubmit={handleSubmit} className='flex gap-4 flex-col bg-green-100/30 p-6 rounded-lg w-90'>
        <input
          className='border border-black/50 rounded-lg px-2 py-1'
          type="text"
          placeholder='Name'
          required
          name='name'
          value={user.name}
          onChange={handleChange}
        />
        <input
          className='border border-black/50 rounded-lg px-2 py-1'
          type="email" placeholder='email@example.com'
          required
          name='email'
          value={user.email}
          onChange={handleChange}
        />
        <input
          className='border border-black/50 rounded-lg px-2 py-1'
          type="number" placeholder='age'
          required
          name='age'
          value={user.age}
          onChange={handleChange}
        />
        <input
          className='border border-black/50 rounded-lg px-2 py-1'
          type="text" placeholder='gender(M/F)'
          required
          name='gender'
          value={user.gender}
          onChange={handleChange}
        />
        <input
          className='border border-black/50 rounded-lg px-2 py-1'
          type="number" placeholder='Mobile Number'
          required
          name='mobile'
          value={user.mobile}
          onChange={handleChange}
        />
        <input
          className='border border-black/50 rounded-lg px-2 py-1'
          type="password" placeholder='p@ssWord1'
          required
          name='password'
          value={user.password}
          onChange={handleChange}
        />
        <input
          className='border border-black/50 rounded-lg px-2 py-1'
          type="text"
          placeholder='confirm password'
          required
          name='cPassword'
          value={user.cPassword}
          onChange={handleChange}
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

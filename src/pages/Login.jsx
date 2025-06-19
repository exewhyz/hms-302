import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const { error, loading, isAuthenticated, login } = useAuth();
  const redirect = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    isAuthenticated && redirect("/")
  }, [isAuthenticated])

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await login(email, password)
      console.log("logged in successfully");
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className='flex items-center justify-center h-full'>
      <form onSubmit={handleSubmit} className='flex gap-4 flex-col bg-blue-100/30 p-6 rounded-lg w-90'>
        <input
          className='border border-black/50 rounded-lg px-2 py-1'
          type="email"
          placeholder='email@example.com'
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className='border border-black/50 rounded-lg px-2 py-1'
          type="password"
          placeholder='p@ssWord1'
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className='bg-blue-400 rounded-lg py-1'
          disabled={loading}
        >
          {loading ? "Logging In" : "Login"}
        </button>
        <Link className="text-xs text-neutral-400 hover:text-neutral-500" to={"/register"}>
          Not have an account, Register!
        </Link>
        {error && <p className='text-sm text-red-400 font-semibold'>{error}</p>}
      </form>
    </div>
  )
}

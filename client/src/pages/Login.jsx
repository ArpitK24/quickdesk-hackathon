import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-200 via-pink-100 to-yellow-100 overflow-hidden">
      {/* Animated Floating Squares */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-tr from-pink-400 to-purple-400 rounded-xl opacity-30 animate-square1"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-yellow-400 to-pink-400 rounded-xl opacity-30 animate-square2"></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-tl from-indigo-400 to-blue-400 rounded-xl opacity-30 animate-square3"></div>
      <style>
        {`
          @keyframes float1 {
            0%, 100% { transform: translateY(0) rotate(0deg);}
            50% { transform: translateY(-30px) rotate(10deg);}
          }
          @keyframes float2 {
            0%, 100% { transform: translateY(0) rotate(0deg);}
            50% { transform: translateY(40px) rotate(-8deg);}
          }
          @keyframes float3 {
            0%, 100% { transform: translateX(0) rotate(0deg);}
            50% { transform: translateX(-30px) rotate(12deg);}
          }
          .animate-square1 { animation: float1 6s ease-in-out infinite; }
          .animate-square2 { animation: float2 8s ease-in-out infinite; }
          .animate-square3 { animation: float3 7s ease-in-out infinite; }
        `}
      </style>
      <form 
        onSubmit={handleSubmit} 
        className="relative z-10 bg-white/90 backdrop-blur-lg p-10 rounded-2xl shadow-2xl w-full max-w-md border border-purple-200"
      >
        <h2 className="text-3xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
          Welcome Back!
        </h2>
        <div className="mb-6">
          <label htmlFor="username" className="block mb-2 text-sm font-semibold text-purple-700">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
            required
          />
        </div>
        <div className="mb-8">
          <label htmlFor="password" className="block mb-2 text-sm font-semibold text-purple-700">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
            required
          />
        </div>
        <button 
          type="submit" 
          className="w-full py-2 px-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold rounded-lg shadow-lg hover:scale-105 transition mb-4"
        >
          Login
        </button>
        <div className="text-center mb-4">
          <span className="text-sm text-gray-700">
            Don&apos;t have an account?{' '}
            <button
              type="button"
              className="text-purple-600 hover:text-pink-500 hover:underline font-semibold transition"
              onClick={() => {
                navigate('/register');
              }}
            >
              Signup
            </button>
          </span>
        </div>
        <div className="text-center">
          <button
            type="button"
            className="text-purple-600 hover:text-pink-500 hover:underline text-sm font-semibold transition"
            onClick={() => {
              // Handle forgot password logic or navigation here
              console.log('Forgot password clicked');
            }}
          >
            Forgot Password?
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login
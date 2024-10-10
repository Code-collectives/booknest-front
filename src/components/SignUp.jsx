
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const SignUp= () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    username: ''
  });

   const handleChange = (e) => {
     setFormData({
       ...formData,
       [e.target.name]: e.target.value
   });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome, ${formData.username}!`);
    navigate('/welcome');
   
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form 
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-300 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none ring-yellow-300 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
           onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-300 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-300 focus:border-yellow-300 sm:text-sm"
            required
          />
        </div>

      
        <Link
          to="/welcome"
           onClick={handleSubmit} 
          className="w-full bg-yellow-300 text-white font-bold py-2 px-4 rounded hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300 text-center"
        >
          Sign Up
        </Link>
      </form>
    </div>
  );
};



export default SignUp

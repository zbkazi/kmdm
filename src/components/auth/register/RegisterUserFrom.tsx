'use client';
import React, { useState } from 'react';
import axios from 'axios';
import SocialMediaAccounts from './SocialMediaAccounts';

const RegisterUserFrom = () => {
  const [formData, setFormData] = useState({
    name: '',
    roll: '',
    email: '',
    password: '',
    selectedClass: '1',
    agreeTerms: false,
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validate form data
    if (!formData.name || !formData.email || !formData.password || !formData.roll || !formData.selectedClass) {
      alert('Please fill in all fields');
      return;
    }

    try {
      // Post data to API
      const response = await axios.post('', formData);
      // Handle success
    console.log(response);

      console.log(formData)
    } catch (error) {
      // Handle error
      console.error('Error:', error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="mt-12 flex flex-col items-center">
          <h1 className="text-2xl xl:text-3xl font-extrabold">Sign up</h1>
          <div className="w-full flex-1 mt-8">
            <form className="flex flex-col items-center" onSubmit={handleSubmit}>
              <input
                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                type="text" placeholder="Name" name="name" value={formData.name} onChange={handleChange} />

                
               <input className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                type="text" placeholder="Roll" name="roll" value={formData.roll} onChange={handleChange} />
              <input
                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} />
              <div className="relative w-full">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type={showPassword ? "text" : "password"} placeholder="Password" name="password" value={formData.password} onChange={handleChange} />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center mr-4 text-gray-600"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12a3 3 0 116 0 3 3 0 01-6 0z"></path>
                    </svg>
                  )}
                </button>
              </div>
              
              <select
                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                name="selectedClass" value={formData.selectedClass} onChange={handleChange}>
                <option value="1">Class 1</option>
                <option value="2">Class 2</option>
                <option value="3">Class 3</option>
                <option value="4">Class 4</option>
                <option value="5">Class 5</option>
                <option value="6">Class 6</option>
                <option value="7">Class 7</option>
                <option value="8">Class 8</option>
                <option value="9">Class 9</option>
                <option value="10">Class 10</option>

                {/* Add options for classes 3 to 10 */}
              </select>
              <button
                className="block w-full py-2 mt-3 text-center text-white bg-teal-500 border border-teal-500 rounded hover:bg-transparent hover:text-teal-500 transition uppercase font-roboto font-medium"
                type="submit">
                Sign Up
              </button>
              <p className="mt-6 text-xs text-gray-600 text-center">
                <input
                  type="checkbox" id="agreeTerms" name="agreeTerms" checked={formData.agreeTerms} onChange={handleChange} />
                <label htmlFor="agreeTerms" className="ml-2">
                  I agree to abide by templatanas
                  <a href="#" className="border-b border-gray-500 border-dotted">Terms of Service</a>
                  and its
                  <a href="#" className="border-b border-gray-500 border-dotted">Privacy Policy</a>
                </label>
              </p>
            </form>
            <SocialMediaAccounts />
          </div>

        </div>
        
      </div>
    </div>
  );
};

export default RegisterUserFrom;

'use client';
import React, { useState } from 'react';
import SocialMediaAccounts from './SocialMediaAccounts';

const RegisterMemberFrom = () => {
  const [formData, setFormData] = useState({
    name: '',
    motherName: '',
    fatherName: '',
    email: '',
    password: '',
    presentAddress: '',
    permanentAddress: '',
    nationalId: '',
    nameOfClubActivity: '',
    dateOfBirth: '',
    nationality: '',
    agreeTerms: false,
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validate form fields
    if (!formData.name || !formData.email || !formData.password) {
      setErrorMessage('Please fill out all required fields.');
      return;
    }

    // Implement your form submission logic here
    try {
      const response = await fetch('', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log(formData);

      const data = await response.json();
      if (response.ok) {
        setSuccessMessage(data.message);
        setErrorMessage('');
        // Clear form fields on successful submission
        setFormData({
          name: '',
          motherName: '',
          fatherName: '',
          email: '',
          password: '',
          presentAddress: '',
          permanentAddress: '',
          nationalId: '',
          nameOfClubActivity: '',
          dateOfBirth: '',
          nationality: '',
          agreeTerms: false,
        });

        console.log(formData)

      } else {
        setErrorMessage(data.message || 'An error occurred. Please try again later.');
        setSuccessMessage('');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('An error occurred. Please try again later.');
      setSuccessMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Register Member</h2>
        {successMessage && <div className="bg-green-100 text-green-800 p-3 mb-4 rounded">{successMessage}</div>}
          {errorMessage && <div className="bg-red-100 text-red-800 p-3 mb-4 rounded">{errorMessage}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="name"
              required={true}
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="motherName"
              required={true}
              value={formData.motherName}
              onChange={handleChange}
              placeholder="Mother's Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="fatherName"
              required={true}

              value={formData.fatherName}
              onChange={handleChange}
              placeholder="Father's Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              required={true}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"

              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="password"
              required={true}
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="presentAddress"
              required={true}
              value={formData.presentAddress}
              onChange={handleChange}
              placeholder="Present Address"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="permanentAddress"
              required={true}
              value={formData.permanentAddress}
              onChange={handleChange}
              placeholder="Permanent Address"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="number"
              name="nationalId"
              value={formData.nationalId}
              min={11}
              step={1}
              required={true}
              maxLength={16}
              onChange={handleChange}
              placeholder="National ID"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="nameOfClubActivity"
              value={formData.nameOfClubActivity}
              onChange={handleChange}
              placeholder="Name of Club Activity"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              placeholder="Date of Birth"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="nationality"
              required={true}
              maxLength={16}
              value={formData.nationality}
              onChange={handleChange}
              placeholder="Nationality"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="checkbox"
              id="agreeTerms"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
              className="mr-2"
            />
            <label htmlFor="agreeTerms" className="text-gray-700">
              I agree to the terms and conditions
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
          >
            Register
          </button>
        </form>
        <SocialMediaAccounts />
      </div>
    </div>
  );
};

export default RegisterMemberFrom;

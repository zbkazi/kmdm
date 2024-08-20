'use client'

import React, { useState } from 'react';

interface StudentAdmissionData {
  name_of_application: string;
  name_of_application_bangla: string;
  father_name: string;
  father_name_bangla: string;
  mother_name: string;
  mother_name_bangla: string;
  guardian_name: string;
  guardian_phone: string;
  gender: string;
  date_of_birth: string;
  nationality: string;
  present_address: string;
  requested_class: string;
}

const AdmissionForm: React.FC = () => {
  const [formData, setFormData] = useState<StudentAdmissionData>({
    name_of_application: '',
    name_of_application_bangla: '',
    father_name: '',
    father_name_bangla: '',
    mother_name: '',
    mother_name_bangla: '',
    guardian_name: '',
    guardian_phone: '',
    gender: '',
    date_of_birth: '',
    nationality: '',
    present_address: '',
    requested_class: '',
  });

  const [errors, setErrors] = useState<Partial<StudentAdmissionData>>({});
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const validateForm = () => {
    const newErrors: Partial<StudentAdmissionData> = {};

    if (!formData.name_of_application.trim()) {
      newErrors.name_of_application = 'Name of Application is required';
    }
    if (!formData.guardian_phone.match(/^\d{10}$/)) {
      newErrors.guardian_phone = 'Invalid phone number';
    }
    if (!formData.gender) {
      newErrors.gender = 'Gender is required';
    }
    // Add more validation rules as needed

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setSuccessMessage('Form submitted successfully!');
      setErrors({});
      // Handle successful form submission (e.g., send data to server)
    } else {
      setSuccessMessage(null);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center text-purple-700">Admission Form</h2>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name of Application</label>
          <input
            type="text"
            name="name_of_application"
            value={formData.name_of_application}
            onChange={handleChange}
            className={`mt-1 block w-full px-3 py-2 border ${
              errors.name_of_application ? 'border-red-500' : 'border-gray-300'
            } rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500`}
          />
          {errors.name_of_application && (
            <p className="mt-1 text-sm text-red-500">{errors.name_of_application}</p>
          )}
        </div>

        {/* Repeat similar blocks for each field */}
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Guardian Phone</label>
          <input
            type="text"
            name="guardian_phone"
            value={formData.guardian_phone}
            onChange={handleChange}
            className={`mt-1 block w-full px-3 py-2 border ${
              errors.guardian_phone ? 'border-red-500' : 'border-gray-300'
            } rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500`}
          />
          {errors.guardian_phone && (
            <p className="mt-1 text-sm text-red-500">{errors.guardian_phone}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className={`mt-1 block w-full px-3 py-2 border ${
              errors.gender ? 'border-red-500' : 'border-gray-300'
            } rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500`}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && (
            <p className="mt-1 text-sm text-red-500">{errors.gender}</p>
          )}
        </div>

        {/* Add other fields in the same manner */}

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>

      {successMessage && (
        <p className="mt-4 text-green-500 text-center">{successMessage}</p>
      )}
    </div>
  );
};

export default AdmissionForm;

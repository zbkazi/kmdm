"use client";

import React, { useState } from "react";

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
    name_of_application: "",
    name_of_application_bangla: "",
    father_name: "",
    father_name_bangla: "",
    mother_name: "",
    mother_name_bangla: "",
    guardian_name: "",
    guardian_phone: "",
    gender: "",
    date_of_birth: "",
    nationality: "",
    present_address: "",
    requested_class: "",
  });

  const [errors, setErrors] = useState<Partial<StudentAdmissionData>>({});
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const validateForm = () => {
    const newErrors: Partial<StudentAdmissionData> = {};

    if (!formData.name_of_application.trim()) {
      newErrors.name_of_application = "Name of Application is required";
    }
    if (!formData.guardian_phone.trim()) {
      newErrors.guardian_phone = "Invalid phone number";
    }
    if (!formData.gender) {
      newErrors.gender = "Gender is required";
    }
    if (!formData.requested_class.trim()) {
      newErrors.requested_class = "Requested class is required";
    }
    if (!formData.nationality.trim()) {
      newErrors.nationality = "Nationality is required";
    }

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
      setSuccessMessage("Form submitted successfully!");
      setErrors({});
      console.log(formData);
      // Handle successful form submission (e.g., send data to server)
    } else {
      setSuccessMessage(null);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-8 p-6 bg-gray-200 dark:bg-gray-800 shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-center text-purple-700">
        Admission Form
      </h2>
      <form onSubmit={handleSubmit} className="mt-6 space-y-6">
        {/* Name of Application */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name of Application
            </label>
            <input
              type="text"
              name="name_of_application"
              value={formData.name_of_application}
              onChange={handleChange}
              className={`mt-1 block w-full px-3 py-2 border ${
                errors.name_of_application
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500`}
            />
            {errors.name_of_application && (
              <p className="mt-1 text-sm text-red-500">
                {errors.name_of_application}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name of Application (Bangla)
            </label>
            <input
              type="text"
              name="name_of_application_bangla"
              value={formData.name_of_application_bangla}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
        </div>

        {/* Father's Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Father`s Name
            </label>
            <input
              type="text"
              name="father_name"
              value={formData.father_name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Father`s Name (Bangla)
            </label>
            <input
              type="text"
              name="father_name_bangla"
              value={formData.father_name_bangla}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
        </div>

        {/* Mother's Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Mother`s Name
            </label>
            <input
              type="text"
              name="mother_name"
              value={formData.mother_name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Mother`s Name (Bangla)
            </label>
            <input
              type="text"
              name="mother_name_bangla"
              value={formData.mother_name_bangla}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
        </div>

        {/* Guardian's Name & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Guardian`s Name
            </label>
            <input
              type="text"
              name="guardian_name"
              value={formData.guardian_name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Guardian`s Phone
            </label>
            <input
              type="number"
              name="guardian_phone"
              value={formData.guardian_phone}
              onChange={handleChange}
              className={`mt-1 block w-full px-3 py-2 border ${
                errors.guardian_phone ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500`}
            />
            {errors.guardian_phone && (
              <p className="mt-1 text-sm text-red-500">
                {errors.guardian_phone}
              </p>
            )}
          </div>
        </div>

        {/* Gender & Date of Birth */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Gender
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className={`mt-1 block w-full px-3 py-2 border ${
                errors.gender ? "border-red-500" : "border-gray-300"
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
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Date of Birth
            </label>
            <input
              type="date"
              name="date_of_birth"
              value={formData.date_of_birth}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nationality
            </label>

            <select
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
              className={`mt-1 block w-full px-3 py-2 border ${
                errors.gender ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500`}
            >
              <option value="">Select Nationality</option>
              <option value="bangladeshi">Bangladeshi</option>
              <option value="others">Others</option>
            </select>
            {errors.nationality && (
              <p className="mt-1 text-sm text-red-500">{errors.nationality}</p>
            )}
          </div>
        </div>

        {/* Present Address */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Present Address
          </label>
          <input
            type="text"
            name="present_address"
            value={formData.present_address}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
          />
        </div>

        {/* Requested Class */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Requested Class
          </label>
          <input
            type="text"
            name="requested_class"
            value={formData.requested_class}
            onChange={handleChange}
            className={`mt-1 block w-full px-3 py-2 border ${
              errors.requested_class ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500`}
          />
          {errors.requested_class && (
            <p className="mt-1 text-sm text-red-500">
              {errors.requested_class}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
        >
          Submit
        </button>

        {successMessage && (
          <p className="mt-6 text-center text-green-500">{successMessage}</p>
        )}
      </form>
    </div>
  );
};

export default AdmissionForm;

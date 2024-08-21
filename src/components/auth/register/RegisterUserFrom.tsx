"use client";
import React, { useState } from "react";
import axios from "axios";
import SocialMediaAccounts from "./SocialMediaAccounts";

const RegisterUserForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    roll: "",
    email: "",
    password: "",
    selectedClass: "1",
    agreeTerms: false,
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validate form data
    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.roll ||
      !formData.selectedClass ||
      !formData.agreeTerms
    ) {
      setErrorMessage("Please fill in all fields and agree to the terms.");
      return;
    }

    try {
      // Post data to API
      const response = await axios.post("/api/auth/signup", formData);
      // Handle success
      setSuccessMessage("Registration successful! Welcome aboard.");
      setErrorMessage(""); // Clear error message if successful
    } catch (error) {
      // Handle error
      setErrorMessage(
        "An error occurred during registration. Please try again."
      );
      console.error("Error:", error);
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="min-h-screen flex justify-center items-center ">
      <div className="max-w-lg w-full   shadow-lg rounded-lg p-6">
        <h1 className="text-2xl xl:text-3xl font-extrabold mb-6 text-center text-teal-600">
          Sign Up
        </h1>
        {successMessage && (
          <div className="bg-green-100 text-green-800 border border-green-300 rounded-lg p-4 mb-6">
            {successMessage}
          </div>
        )}
        {errorMessage && (
          <div className="bg-red-100 text-red-800 border border-red-300 rounded-lg p-4 mb-6">
            {errorMessage}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-2 focus:ring-teal-500"
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-2 focus:ring-teal-500"
            type="text"
            placeholder="Roll"
            name="roll"
            value={formData.roll}
            onChange={handleChange}
          />

          <input
            className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-2 focus:ring-teal-500"
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <div className="relative">
            <input
              autoComplete="off"
              type={isPasswordVisible ? "text" : "password"}
              name="password"
              className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-2 focus:ring-teal-500"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            <div
              className="absolute inset-y-0 right-0 flex items-center px-3 cursor-pointer text-gray-600"
              onClick={togglePasswordVisibility}
            >
              {isPasswordVisible ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  ></path>
                </svg>
              )}
            </div>
          </div>

          <select
            className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-2 focus:ring-teal-500"
            name="selectedClass"
            value={formData.selectedClass}
            onChange={handleChange}
          >
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
          </select>

          <button
            className="block w-full py-3 mt-4 text-center text-white bg-teal-500 border border-teal-500 rounded hover:bg-transparent hover:text-teal-500 transition uppercase font-medium"
            type="submit"
          >
            Sign Up
          </button>

          <p className="mt-6 text-xs  text-center">
            <input
              type="checkbox"
              id="agreeTerms"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
            />
            <label htmlFor="agreeTerms" className="ml-2">
              I agree to abide by the
              <a href="#" className="border-b  border-dotted ml-1">
                Terms of Service
              </a>
              and
              <a href="#" className="border-b   border-dotted ml-1">
                Privacy Policy
              </a>
            </label>
          </p>
        </form>
        <SocialMediaAccounts />
      </div>
    </div>
  );
};

export default RegisterUserForm;

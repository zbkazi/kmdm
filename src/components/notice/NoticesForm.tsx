// components/NoticesForm.tsx
'use client';
import React from "react";
import { useFormik } from "formik";
import { NoticeSchema, NoticeSchemaType } from "@/schemas/noticeSchema";
import axios from "axios";
import { toast } from "react-toastify";


const NoticesForm: React.FC = () => {
  const initialValues: NoticeSchemaType = {
    title: "",
    description: "",
    noticesUrl: "",
  };

  const onSubmit = async (values: NoticeSchemaType) => {
    try {
      await NoticeSchema.parseAsync(values); // Validate with Zod schema
      const response = await axios.post("/api/notices/create", values);
      console.log(response.data); // Assuming the API returns success or error messages
      // Handle success message
      toast.success("Notice created successfully");

    } catch (error) {
      console.error("Error creating notice:", error);
      // Handle validation errors from Zod or API error response
      toast.error("Failed to create notice");
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <div className="container mx-auto p-4">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={formik.handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              formik.touched.title && formik.errors.title
                ? "border-red-500"
                : ""
            }`}
            id="title"
            type="text"
            placeholder="Enter title"
            {...formik.getFieldProps("title")}
          />
          {formik.touched.title && formik.errors.title && (
            <p className="text-red-500 text-xs italic">{formik.errors.title}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              formik.touched.description && formik.errors.description
                ? "border-red-500"
                : ""
            }`}
            id="description"
            placeholder="Enter description"
            rows={4}
            {...formik.getFieldProps("description")}
          ></textarea>
          {formik.touched.description && formik.errors.description && (
            <p className="text-red-500 text-xs italic">
              {formik.errors.description}
            </p>
          )}
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="noticesUrl"
          >
            Notices URL
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              formik.touched.noticesUrl && formik.errors.noticesUrl
                ? "border-red-500"
                : ""
            }`}
            id="noticesUrl"
            type="text"
            placeholder="Enter notices URL"
            {...formik.getFieldProps("noticesUrl")}
          />
          {formik.touched.noticesUrl && formik.errors.noticesUrl && (
            <p className="text-red-500 text-xs italic">
              {formik.errors.noticesUrl}
            </p>
          )}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default NoticesForm;

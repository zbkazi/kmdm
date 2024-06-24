import React from "react";

const Courses = () => {
  const courseData = [
    {
      name: "Class 6",
      startDate: "New Year's Day",
      duration: "1 year",
      instructor: "anyone",
    },
    {
      name: "Physics",
      startDate: "2024-08-15",
      duration: "4 months",
      instructor: "Dr. Jane Smith",
    },
    {
      name: "Chemistry",
      startDate: "2024-09-01",
      duration: "5 months",
      instructor: "Dr. Emily Johnson",
    },
    // Add more course data as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Courses</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-gray-200">Course Name</th>
              <th className="py-2 px-4 bg-gray-200">Start Date</th>
              <th className="py-2 px-4 bg-gray-200">Duration</th>
              <th className="py-2 px-4 bg-gray-200">Instructor</th>
            </tr>
          </thead>
          <tbody>
            {courseData.map((course, index) => (
              <tr key={index} className="border-b">
                <td className="py-2 px-4">{course.name}</td>
                <td className="py-2 px-4">{course.startDate}</td>
                <td className="py-2 px-4">{course.duration}</td>
                <td className="py-2 px-4">{course.instructor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Courses;

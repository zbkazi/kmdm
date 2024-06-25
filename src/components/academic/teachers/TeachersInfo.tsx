import React from "react";

interface TeachersMemberProps {
  name: string;
  role: string;
  imageUrl: string;
}

const TeachersInfo: React.FC = () => {
  return (
    <div className="rounded-lg shadow-md border-spacing-2 m-4  p-6 my-6 text-center">
      <h3 className="text-xl font-semibold mb-2">Teachers</h3>
      <p className="text-gray-700">Meet our all teachers</p>
    </div>
  );
};

export default TeachersInfo;

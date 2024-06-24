import React from "react";

const Students = () => {
  const studentData = [
    {
      serial: 1,
      class: "10",
      session: "2022",
      group: "Science",
      pdf: "/path/to/pdf1.pdf",
    },
    {
      serial: 2,
      class: "9",
      session: "2022",
      group: "Commerce",
      pdf: "/path/to/pdf2.pdf",
    },
    {
      serial: 3,
      class: "8",
      session: "2022",
      group: "Arts",
      pdf: "/path/to/pdf3.pdf",
    },
    {
      serial: 4,
      class: "7",
      session: "2022",
      group: "Science",
      pdf: "/path/to/pdf4.pdf",
    },
    {
      serial: 5,
      class: "6",
      session: "2022",
      group: "Commerce",
      pdf: "/path/to/pdf5.pdf",
    },
    {
      serial: 6,
      class: "5",
      session: "2022",
      group: "Arts",
      pdf: "/path/to/pdf6.pdf",
    },
    // Add more student data as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Students</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-gray-200">Serial</th>
              <th className="py-2 px-4 bg-gray-200">Class</th>
              <th className="py-2 px-4 bg-gray-200">Session</th>
              <th className="py-2 px-4 bg-gray-200">Group</th>
              <th className="py-2 px-4 bg-gray-200">PDF</th>
            </tr>
          </thead>
          <tbody>
            {studentData.map((student, index) => (
              <tr key={index} className="border-b">
                <td className="py-2 px-4">{student.serial}</td>
                <td className="py-2 px-4">{student.class}</td>
                <td className="py-2 px-4">{student.session}</td>
                <td className="py-2 px-4">{student.group}</td>
                <td className="py-2 px-4">
                  <a
                    href={student.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Download PDF
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Students;

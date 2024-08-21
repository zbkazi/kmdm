import React from "react";

const Results = () => {
  const resultData = [
    {
      class: "10",
      session: "2021",
      group: "Science",
      pdf: "/path/to/result1.pdf",
    },
    {
      class: "9",
      session: "2022",
      group: "Commerce",
      pdf: "/path/to/result2.pdf",
    },
    { class: "8", session: "2022", group: "Arts", pdf: "/path/to/result3.pdf" },
    // Add more result data as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Class-wise Results
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-200 dark:bg-slate-800 shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-gray-200 dark:bg-slate-800">Class</th>
              <th className="py-2 px-4 bg-gray-200 dark:bg-slate-800">
                Session
              </th>
              <th className="py-2 px-4 bg-gray-200 dark:bg-slate-800">Group</th>
              <th className="py-2 px-4 bg-gray-200 dark:bg-slate-800">PDF</th>
            </tr>
          </thead>
          <tbody>
            {resultData.map((result, index) => (
              <tr key={index} className="border-b">
                <td className="py-2 px-4">{result.class}</td>
                <td className="py-2 px-4">{result.session}</td>
                <td className="py-2 px-4">{result.group}</td>
                <td className="py-2 px-4">
                  <a
                    href={result.pdf}
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

export default Results;

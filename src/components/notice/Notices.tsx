"use client";
import React, { useState, useEffect } from "react";

interface Notice {
  id: number;
  title: string;
  body: string;
}

const Notices = () => {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [noticesPerPage, setNoticesPerPage] = useState<number>(4);
  const [showAll, setShowAll] = useState<boolean>(false);
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data: Notice[]) => setNotices(data));
  }, []);

  const indexOfLastNotice = currentPage * noticesPerPage;
  const indexOfFirstNotice = indexOfLastNotice - noticesPerPage;
  const currentNotices = showAll
    ? notices
    : notices.slice(indexOfFirstNotice, indexOfLastNotice);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const toggleShowAll = () => setShowAll(!showAll);

  const handleNoticeClick = (notice: Notice) => {
    setSelectedNotice(notice);
  };

  return (
    <div className=" rounded-md shadow-md">
      <div className="container mx-auto p-4">
        {selectedNotice ? (
          <div>
            <button
              className="mb-4 bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded"
              onClick={() => setSelectedNotice(null)}
            >
              Back to Notices
            </button>
            <div className=" p-4 rounded shadow">
              <h2 className="text-lg font-bold">{selectedNotice.title}</h2>
              <p>{selectedNotice.body}</p>
            </div>
          </div>
        ) : (
          <div>
            <h1 className="text-3xl mt-5 font-extrabold ">Notices</h1>
            <div className="grid grid-cols-1">
              {currentNotices.map((notice) => (
                <div
                  key={notice.id}
                  className=""
                  onClick={() => handleNoticeClick(notice)}
                >
                  <h2 className="text-lg hover:underline hover:uppercase font-light">
                    {notice.title}
                  </h2>
                </div>
              ))}
            </div>
            {!showAll && (
              <div className="mt-4">
                <button
                  className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded mr-2"
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
                <button
                  className="bg-blue-500 hover:bg-blue-700  font-bold py-2 px-4 rounded"
                  onClick={() => paginate(currentPage + 1)}
                  disabled={
                    currentPage === Math.ceil(notices.length / noticesPerPage)
                  }
                >
                  Next
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Notices;

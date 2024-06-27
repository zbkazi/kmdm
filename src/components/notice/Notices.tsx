"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

interface Notice {
  _id: string;
  title: string;
  description: string;
}

const Notices = () => {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [noticesPerPage, setNoticesPerPage] = useState<number>(4);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [nextLink, setNextLink] = useState<string | null>(null);
  const [prevLink, setPrevLink] = useState<string | null>(null);

  useEffect(() => {
    const fetchNotices = async () => {
      const res = await fetch(
        `/api/notices?page=${currentPage}&limit=${noticesPerPage}`
      );
      const data = await res.json();
      setNotices(data.notices);
      setTotalPages(data.totalPages);
      setNextLink(data.nextLink);
      setPrevLink(data.prevLink);
    };

    fetchNotices();
  }, [currentPage, noticesPerPage]);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="rounded-md shadow-md">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl mt-5 font-extrabold">Notices</h1>
        <div className="grid grid-cols-1">
          {notices.map((notice) => (
            <div key={notice._id} className="">
              <Link href={`/notices/${notice._id}`}>
                <p className="text-lg hover:underline hover:uppercase font-light">
                  {notice.title}
                </p>
              </Link>
              <p>{notice.description}</p>
              <br />
            </div>
          ))}
        </div>
        <div className="mt-4">
          {prevLink && (
            <button
              className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded mr-2"
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
          )}
          {nextLink && (
            <button
              className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded"
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notices;

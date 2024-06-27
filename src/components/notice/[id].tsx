import { GetServerSideProps } from "next";
import axios from "axios";
import React from "react";

interface Notice {
  _id: string;
  title: string;
  description: string;
  noticesUrl: string;
}

interface NoticeProps {
  notice: Notice;
}

const NoticePage: React.FC<NoticeProps> = ({ notice }) => {
  return (
    <div className="container mx-auto p-4">
      <button
        className="mb-4 bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded"
        onClick={() => window.history.back()}
      >
        Back to Notices
      </button>
      <div className="p-4 rounded shadow">
        <h2 className="text-lg font-bold">{notice.title}</h2>
        <p>{notice.description}</p>
        <a href={notice.noticesUrl} className="text-blue-500 underline">
          {notice.noticesUrl}
        </a>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  try {
    const response = await axios.get(`/api/notices/${id}`);
    const notice = response.data;
    return {
      props: { notice },
    };
  } catch (error) {
    console.error("Error fetching notice:", error);
    return {
      notFound: true,
    };
  }
};

export default NoticePage;

"use client";
import React, { useState, useEffect } from "react";

interface NewsEvent {
  id: number;
  title: string;
  body: string;
}

const NewsEvents = () => {
  const [newsEvents, setNewsEvents] = useState<NewsEvent[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [eventsPerPage, setEventsPerPage] = useState<number>(3);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/zbkazi/kmdm/main/public/events.json")
      .then((response) => response.json())
      .then((data: NewsEvent[]) => setNewsEvents(data));
  }, []);

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = newsEvents.slice(indexOfFirstEvent, indexOfLastEvent);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div>
      <h1 className="text-center text-2xl font-bold hover:underline">
        News & Events
      </h1>
      <div className="container mx-auto p-4">
        {currentEvents.map((event) => (
          <div key={event.id} className=" p-4 rounded shadow mb-4">
            <h2 className="text-lg font-bold">{event.title}</h2>
            <p>{event.body}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded"
          onClick={() => paginate(currentPage + 1)}
          disabled={indexOfLastEvent >= newsEvents.length}
        >
          More Events
        </button>
      </div>
    </div>
  );
};

export default NewsEvents;

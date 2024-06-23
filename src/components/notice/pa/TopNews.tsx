import React from "react";
import Marquee from "react-fast-marquee";

const TopNews = () => {
  return (
    <div>
      <Marquee className="text-center text-xl text-red-600 font-bold hover:underline">
        I can be a React component, multiple React components, or just some
        text.
      </Marquee>
    </div>
  );
};

export default TopNews;

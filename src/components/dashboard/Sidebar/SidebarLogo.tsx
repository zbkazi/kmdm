// Import necessary modules and icons
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link"; // Assuming you are using Next.js for routing
import { faTimes } from "@fortawesome/free-solid-svg-icons";

// Define types for props if needed
type SidebarLogoProps = {
  icon: any; // Update the type of icon if necessary
  text: string;
  toggle: () => void;
};

const SidebarLogo: React.FC<SidebarLogoProps> = ({ icon, text, toggle }) => {
  return (
    <div className="relative flex flex-row font-semibold text-3xl md:items-center md:mx-auto text-green-700 mb-5 p-4 justify-between">
      <Link href="/">
        <span>
          <FontAwesomeIcon icon={icon} /> {text}
        </span>
      </Link>
      <button
        onClick={toggle}
        className="border border-emerald-300 text-xl font-medium py-2 px-4 block md:hidden absolute right-1 top-3"
      >
        <FontAwesomeIcon icon={faTimes} />
      </button>
    </div>
  );
};

export default SidebarLogo;

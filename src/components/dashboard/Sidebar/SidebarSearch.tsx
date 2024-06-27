// Import necessary modules and icons
import { faMagnifyingGlass, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ChangeEvent, useRef } from "react";

// Define types for props if needed
type SidebarSearchProps = {
  scButton: boolean;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  clearSearch: () => void;
  search: React.RefObject<HTMLInputElement>;
};

const SidebarSearch: React.FC<SidebarSearchProps> = ({
  scButton,
  handleChange,
  clearSearch,
  search,
}) => {
  return (
    <div className="px-4">
      <div className="w-full py-4 px-2 items-center flex relative">
        <input
          type="text"
          name=""
          placeholder="Cari Menu"
          id=""
          onChange={handleChange}
          ref={search}
          className="border rounded-full text-sm w-full px-3 py-2 focus:outline-none focus:border-green-300 bg-slate-50"
        />

        {!scButton && (
          <FontAwesomeIcon
            className="absolute right-6 text-slate-500"
            icon={faMagnifyingGlass}
          />
        )}

        {scButton && (
          <FontAwesomeIcon
            icon={faTimes}
            className="absolute right-6 cursor-pointer text-slate-500"
            onClick={clearSearch}
          />
        )}
      </div>
    </div>
  );
};

export default SidebarSearch;

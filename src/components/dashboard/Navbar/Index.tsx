import { faBars, faBell, faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Image from "next/image"; // Import Image from Next.js

interface IndexProps {
  toggle: () => void; // Define toggle function prop
}

const avatar =
  "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";

const Index: React.FC<IndexProps> = ({ toggle }) => {
  return (
    <>
      <header className="">
        <div className="shadow-sm">
          <div className="relative bg-white flex w-full items-center px-5 py-2.5">
            <div className="flex-1">
              <p className="block md:hidden cursor-pointer">
                <FontAwesomeIcon icon={faBars} onClick={toggle} />
              </p>
            </div>
            <div className="">
              <ul className="flex flex-row gap-4 items-center">
                <li>
                  <span className="h-9 w-9 cursor-pointer text-gray-600">
                    <FontAwesomeIcon icon={faMessage} />
                  </span>
                </li>
                <li>
                  <span className="h-9 w-9 cursor-pointer text-gray-600">
                    <FontAwesomeIcon icon={faBell} />
                  </span>
                </li>
                <li>
                  <span>
                    <Image
                      className="rounded-full h-9 w-9 border cursor-pointer"
                      src={avatar}
                      alt="Avatar"
                      width={36}
                      height={36}
                    />
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Index;

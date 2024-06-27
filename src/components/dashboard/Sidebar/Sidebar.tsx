"use client";
// Import necessary modules and icons
import React, { useRef, useState } from "react";
import { faLeaf, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import initMenus from "@/data/menus";
import SidebarLogo from "./SidebarLogo";
import SidebarSearch from "./SidebarSearch";
import MenuList from "./MenuList";
import { useRouter } from "next/navigation";

// Define types for props if needed
type SidebarProps = {
  className: string;
  toggle: () => void;
};

const Sidebar: React.FC<SidebarProps> = ({ className, toggle }) => {
  const router = useRouter();
  const [menus, setMenus] = useState(initMenus);
  const [scButton, setScButton] = useState(false);
  const search = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    if (value) {
      setScButton(true);
      setMenus(
        initMenus.filter((el) => el.label.toLowerCase().includes(value))
      );
    } else {
      setScButton(false);
      setMenus(initMenus);
    }
  };

  const clearSearch = () => {
    if (search.current) {
      search.current.value = "";
    }
    setMenus(initMenus);
    setScButton(false);
  };

  const logout = () => {
    router.push("/auth/login");
  };

  return (
    <>
      <aside
        id="sidebar"
        className={`sidebarWrapper md:translate-x-0 -translate-x-full md:z-0 z-50 no-scrollbar ${className}`}
      >
        {/* Sidebar wrapper */}
        <div className="md:w-64 border-r-2 border-gray-100 h-full flex-col flex flex-shrink-0">
          {/* Logo */}
          <SidebarLogo toggle={toggle} icon={faLeaf} text="Laravel" />

          {/* Search Menu */}
          <SidebarSearch
            clearSearch={clearSearch}
            handleChange={handleChange}
            scButton={scButton}
            search={search}
          />

          {/* Menu */}
          <MenuList menus={menus} toggle={toggle} />

          {/* Profile */}
          <div className="pt-2 border-t border-gray-300">
            <div className="py-2 px-4">
              {/* Logout Button */}
              <button
                className="py-2 px-4 border border-emerald-500 bg-emerald-600 w-full rounded-full text-gray-200 hover:bg-emerald-600 hover:border-emerald-600 justify-end text-sm"
                onClick={logout}
              >
                <FontAwesomeIcon icon={faSignOut} /> Logout
              </button>
            </div>
          </div>
        </div>
      </aside>

      {className === "mobile" && (
        <div
          id="overlaySidebar"
          onClick={toggle}
          className="hidden absolute w-full h-screen bg-black z-10 inset-0 opacity-60"
        />
      )}
    </>
  );
};

export default Sidebar;

'use client';
import {
  faLeaf,
  faSignOut,
  faMagnifyingGlass,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState, ChangeEvent } from "react";
import Link from "next/link";
import  initMenus  from "@/data/menus";

interface Menu {
  name: string;
  path?: string;
  icon?: any;
}

const Sidebar: React.FC = () => {
  const [menus, setMenus] = useState<Menu[]>(initMenus);
  const [scButton, setScButton] = useState(false);
  const search = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setScButton(true);
      setMenus(
        initMenus.filter((el) => {
          return el.name.toLowerCase().includes(e.target.value.toLowerCase());
        })
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

  return (
    <aside className="hidden lg:block">
      <div className="md:w-64 min-h-full border-r-2 px-2 py-2 border-gray-100 flex-col flex flex-shrink-0">
        <div className="font-semibold text-3xl items-center text-green-700 px-4 py-6">
          <FontAwesomeIcon icon={faLeaf} /> bGreens
        </div>

        {/* Search Menu */}
        <div className="w-full py-4 px-2 items-center flex relative">
          <input
            type="text"
            placeholder="Find menu"
            onChange={handleChange}
            ref={search}
            className="border-b text-sm w-full px-3 py-2 focus:outline-none focus:border-green-400"
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

        {/* Menu */}
        <div className="flex-1 text-sm px-2 py-4 mb-6">
          <ul>
            {menus.map((menu, index) => (
              <li key={index} className="gap-6">
                <Link href={menu.path || "#"} passHref>
                  <a className="py-2 px-2 text-sm font-medium block rounded hover:text-slate-900 text-slate-500">
                    {menu.icon && (
                      <FontAwesomeIcon icon={menu.icon} className="w-6" />
                    )}{" "}
                    {menu.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Profile */}
        <div className="text-sm">
          <div className="flex items-center space-x-2 border-b border-gray-300 py-4 mb-3">
            <picture>
              <img
                className="w-16 border border-green-500 p-1 rounded"
                src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                alt="Profile"
              />
            </picture>
            <div className="space-y-1">
              <h3>Hoki Teguh Oktian</h3>
              <p className="text-xs text-gray-700">Admin Kredit</p>
              <p className="text-xs text-gray-500"> 0031 - Cabang Sumber</p>
            </div>
          </div>

          {/* Logout Button */}
          <button className="py-2 px-4 border border-emerald-500 bg-emerald-700 w-full rounded text-gray-200 hover:bg-emerald-600 hover:border-emerald-600 justify-end">
            <FontAwesomeIcon icon={faSignOut} /> Logout
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

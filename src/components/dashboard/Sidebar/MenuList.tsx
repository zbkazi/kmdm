'use client';
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link"; // Assuming you are using Next.js for routing
import SubMenu from "./SubMenu";


export type MenuItem = {
  label: string;
  path?: string;
  icon?: any; // Update the type of icon if necessary
  submenu?: MenuItem[];
  role?: string;
};


type MenuListProps = {
  menus: MenuItem[];
  toggle: () => void;
};

const MenuList: React.FC<MenuListProps> = ({ menus, toggle }) => {
  return (
    <div className="navWrapper p-4">
      <ul id="menu" className="">
        {menus?.map((menu) =>
          menu.submenu ? (
            <SubMenu key={menu.label} menu={menu} />
          ) : menu.path ? (
            <li key={menu.label} className={``} onClick={toggle}>
              <Link href={`${menu.path}`}>
                <samp className="link">
                  {menu.icon && <FontAwesomeIcon icon={menu.icon} />}
                  {menu.label}
                </samp>
              </Link>
            </li>
          ) : (
            <li key={menu.label} className="mt-5 mb-3">
              <span className="text-gray-500 font-medium uppercase text-xs mx-2">
                {menu.label} {menu.role}
              </span>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default MenuList;

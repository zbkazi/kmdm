// components/SubMenu.tsx
"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Link from "next/link"; // Assuming you are using Next.js for routing
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export type MenuItem = {
  label: string;
  path?: string;
  icon?: any; // Update the type of icon if necessary
  submenu?: MenuItem[] | null | undefined;
  role?: string;
};


type SubMenuProps = {
  menu: MenuItem;
};

const SubMenu: React.FC<SubMenuProps> = ({ menu }) => {
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  return (
    <div className={``} key={menu.label}>
      <li
        key={menu.label}
        className={`link ${subMenuOpen ? "active" : ""} `}
        onClick={() => setSubMenuOpen(!subMenuOpen)}
      >
        {menu.icon && <FontAwesomeIcon icon={menu.icon} />}
        <p className="flex-1">{menu.label}</p>
        <FontAwesomeIcon
          icon={faAngleRight}
          className={`${subMenuOpen && "rotate-90"} duration-200 w-4 h-4`}
        ></FontAwesomeIcon>
      </li>
      <motion.ul
        animate={
          subMenuOpen
            ? {
                height: "fit-content",
              }
            : {
                height: 0,
              }
        }
        className="flex flex-col pl-[39px] text-[0.7rem] h-0 overflow-hidden"
      >
        {menu.submenu?.map((sm) => (
          <li key={sm.label}>
            <Link href={`${menu.path}/${sm.path}`} className="link">
              {sm.label}
            </Link>
          </li>
        ))}
      </motion.ul>
    </div>
  );
};

export default SubMenu;

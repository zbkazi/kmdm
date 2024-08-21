"use client";

import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ThemeSwitcher from "../themes/ThemeSwitch";

const NavbarMenuData = [
  {
    title: "Academic",
    href: "/academic",
    sublinks: [
      { title: "Courses", href: "/academic/courses" },
      { title: "Teachers", href: "/academic/teachers" },
      { title: "Students", href: "/academic/students" },
      { title: "Results", href: "/academic/results" },
    ],
  },
  {
    title: "Notice",
    href: "/notice",
    sublinks: [
      { title: "Notice", href: "/notice" },
      { title: "Events", href: "/notice/events" },
    ],
  },
  {
    title: "Admission",
    href: "/admission",
    sublinks: [
      { title: "Admission", href: "/admission" },
      { title: "Apply Now", href: "/admission/apply" },
    ],
  },
  {
    title: "Information",
    href: "/information",
    sublinks: [
      { title: "About", href: "/information/about" },
      { title: "Contact", href: "/information/contact" },
    ],
  },
  {
    title: "Login",
    href: "/login",
    sublinks: [
      { title: "Login", href: "/login" },
      { title: "Register", href: "/register" },
    ],
  },
];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const toggleMenu = (index: number) => {
    setExpandedMenus((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const DrawerList = (
    <div className="flex flex-col ">
      <Box sx={{ width: 250 }} role="presentation">
        <Divider />
        <div className="py-2">
          {NavbarMenuData.map((item, index) => (
            <div key={index} className="py-2 ">
              <div
                onClick={() => toggleMenu(index)}
                className="cursor-pointer flex justify-between px-4 py-2 text-sm hover:bg-gray-400"
              >
                <Typography className=" block">{item.title}</Typography>
                {item.sublinks ? (
                  expandedMenus[index] ? (
                    <ExpandLessIcon />
                  ) : (
                    <ExpandMoreIcon />
                  )
                ) : null}
              </div>
              {item.sublinks && expandedMenus[index] && (
                <div className="pl-8">
                  {item.sublinks.map((sublink, subIndex) => (
                    <Link key={subIndex} href={sublink.href} passHref>
                      <Typography className="cursor-pointer block px-4 py-2 text-sm hover:bg-gray-400">
                        {sublink.title}
                      </Typography>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </Box>
    </div>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link href="/">
            <Image
              width={60}
              height={60}
              alt="kkmdm-logo.png"
              src="https://github.com/zbkazi/kkmdm/blob/main/src/assets/kkmdm-logo.png?raw=true"
              data-hpc="true"
              className="Box-sc-g0xbh4-0 kzRgrI"
            ></Image>
          </Link>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            KMDM
          </Typography>
          <div className="md:hidden">
            <ThemeSwitcher />
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {NavbarMenuData.map((item, index) => (
              <div key={index} className="relative group">
                <Link href={item.href} passHref>
                  <Typography className="text-blue-300 hover:bg-sky-700 px-3 py-2 rounded-md text-sm font-medium">
                    {item.title}
                  </Typography>
                </Link>
                {item.sublinks && (
                  <div className="absolute left-0 top-full mt-1 hidden group-hover:block bg-purple-50 dark:bg-slate-800 shadow-lg rounded-md py-2 z-10 w-48">
                    {item.sublinks.map((sublink, subIndex) => (
                      <Link key={subIndex} href={sublink.href} passHref>
                        <Typography className="text-blue-300 block px-4 py-2 text-sm hover:bg-gray-100">
                          {sublink.title}
                        </Typography>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <ThemeSwitcher />
          </div>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ ml: 2 }}
            onClick={toggleDrawer(true)}
            className="md:hidden"
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
          >
            {DrawerList}
          </Drawer>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;

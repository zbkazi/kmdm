'use client'
import { useState } from 'react';
import Link from 'next/link';

const NavbarMenuData = [
  {
    title: 'Academic',
    href: '/academic',
    sublinks: [
      {
        title: 'Courses',
        href: '/academic/courses',
      },
      {
        title: 'Teachers',
        href: '/academic/teachers',
      },
      {
        title: 'Students',
        href: '/academic/students',
      },
      {
        title: 'Results',
        href: '/academic/results',
      },
    ]
  },
  {
    title: 'Notice',
    href: '/notice',
    sublinks: [
      {
        title: 'Notice',
        href: '/notice',
      },
      {
        title: 'Events',
        href: '/notice/events',
      },
    ]
  },
  {
    title: 'Admission',
    href: '/admission',
    sublinks: [
      {
        title: 'Admission',
        href: '/admission',
      },
      {
        title: 'Apply Now',
        href: '/admission/apply',
      },
    ]
  },
  {
    title: 'Information',
    href: '/information',
    sublinks: [
      {
        title: 'About',
        href: '/information/about',
      },
      {
        title: 'Contact',
        href: '/information/contact',
      },
    ]
  },
  {
    title: 'Login',
    href: '/login',
    sublinks: [
      {
        title: 'Login',
        href: '/login',
      },
      {
        title: 'Register',
        href: '/register',
      },
    ]
  }
];

const MobileHeader = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="lg:hidden">
      <div className="flex items-center justify-between px-4 py-2">
        <button onClick={toggleMenu} className="text-2xl text-blue-300 focus:outline-none">
        ====
        </button>
        {isOpen && (
          <div className="absolute top-0 left-0 w-full bg-white shadow-lg">
            <div className="px-4 py-2">
              {NavbarMenuData.map((item, index) => (
                <div key={index} className="py-2">
                  <Link href={item.href}>
                    <p onClick={closeMenu} className="text-blue-300 hover:text-blue-600">
                      {item.title}
                    </p>
                  </Link>
                  {item.sublinks && (
                    <ul className="pl-4">
                      {item.sublinks.map((sublink, subIndex) => (
                        <li key={subIndex}>
                          <Link href={sublink.href}>
                            <p onClick={closeMenu} className="text-blue-300 hover:text-blue-600">
                              {sublink.title}
                            </p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileHeader;

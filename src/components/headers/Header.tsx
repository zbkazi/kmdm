'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';





const NavbarMenuData = [
  {
    title: 'Academic',
    href: '#',
    sublinks: [
      {
        title: 'Courses',
        href: '#',
      },
      {
        title: 'Teachers',
        href: '#',
      },
      {
        title: 'Students',
        href: '#',
      },
      {
        title: 'Results',
        href: '#',
      },
    ]
  },
  {
    title: 'Notice',
    href: '#',
    sublinks: [
      {
        title: 'Notice',
        href: '#',
      },
      {
        title: 'Events',
        href: '#',
      },
    ]
  },
  {
    title: 'Result',
    href: '#',
    
  },
  {
    title: 'Admission',
    href: '#',
    sublinks: [
      {
        title: 'Admission',
        href: '#',
      },
      {
        title: 'Apply Now',
        href: '#',
      },
    ]
  },
  {
    title: 'Information',
    href: '#',
    sublinks: [
      {
        title: 'About',
        href: '#',
      },
      {
        title: 'Contact',
        href: '#',
      },
    ]
  },
  {
    title: 'Login',
    href: '#',
    sublinks: [
      {
        title: 'Login',
        href: '#',
      },
      {
        title: 'Register',
        href: '#',
      },
    ]
  }
];

const Navbar = () => {
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);

  const handleMenuHover = (index: number | null) => {
    setOpenMenuIndex(index);
  };

  const handleCloseMenu = () => {
    setOpenMenuIndex(null);
  };

  return (
    <div>
        <div>
        <nav className=":bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
        <Link href="/">
        <Image width={60} height={60} alt="kkmdm-logo.png" src="https://github.com/zbkazi/kkmdm/blob/main/src/assets/kkmdm-logo.png?raw=true" data-hpc="true" className="Box-sc-g0xbh4-0 kzRgrI"></Image>
        </Link>
       
            </div>
           <Link href="/">
           <h1 className='text-3xl font-bold'>KKMDM</h1>
           </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4 uppercase font-bold">
                {NavbarMenuData.map((item, index) => (
                  <div key={index} className="relative">
                    <Link
                      href={item.href}
                      className="text-blue-300 hover:bg-sky-700 px-3 py-2 rounded-md text-sm font-medium"
                      onMouseEnter={() => handleMenuHover(index)}
                      onMouseLeave={handleCloseMenu}
                    >
                      {item.title}
                    </Link>
                    {item.sublinks && openMenuIndex === index && (
                      <div
                        className="absolute z-10 mt-2 w-48 bg-white shadow-lg origin-top-right rounded-md"
                        onMouseEnter={() => handleMenuHover(index)}
                        onMouseLeave={handleCloseMenu} 
                      >
                        <div className="py-1">
                          {item.sublinks.map((sublink, subIndex) => (
                            <Link
                              key={subIndex}
                              href={sublink.href}
                              className="text-blue-300 block px-4 py-2 text-sm hover:bg-gray-100"
                            >
                              {sublink.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
        </div>
    </div>
  );
};

export default Navbar;

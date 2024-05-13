'use client';
import { useState } from 'react';

const NavbarMenuData = [
  {
    title: 'Home',
    href: '#',
  },
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

const ResponsiveNavbar = () => {
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);

  const handleMenuClick = (index: number) => {
    setOpenMenuIndex(openMenuIndex === index ? null : index);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="#" className="text-white">
                Logo
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {NavbarMenuData.map((item, index) => (
                  <div key={index} className="relative">
                    <a
                      href={item.href}
                      className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                      onClick={() => handleMenuClick(index)}
                    >
                      {item.title}
                    </a>
                    {item.sublinks && openMenuIndex === index && (
                      <div className="absolute left-0 top-full mt-1 w-48 bg-white shadow-lg rounded-md">
                        <div className="py-1">
                          {item.sublinks.map((sublink, subIndex) => (
                            <a
                              key={subIndex}
                              href={sublink.href}
                              className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                            >
                              {sublink.title}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setOpenMenuIndex(openMenuIndex === null ? 0 : null)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            >
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {openMenuIndex === null ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {openMenuIndex !== null && (
        <div className="md:hidden">
          {NavbarMenuData.map((item, index) => (
            <div key={index} className="relative">
              <a
                href={item.href}
                className="block text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                onClick={() => handleMenuClick(index)}
              >
                {item.title}
              </a>
              {item.sublinks && openMenuIndex === index && (
                <div className="absolute left-0 top-full mt-1 w-48 bg-white shadow-lg rounded-md">
                  <div className="py-1">
                    {item.sublinks.map((sublink, subIndex) => (
                      <a
                        key={subIndex}
                        href={sublink.href}
                        className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                      >
                        {sublink.title}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default ResponsiveNavbar;

import React from "react";
import Link from "next/link";

const FooterData = [
  {
    title: "About",
    href: "#",
  },
  {
    title: "Contact",
    href: "#",
  },
  {
    title: "Terms of Service",
    href: "#",
  },
  {
    title: "Privacy Policy",
    href: "#",
  },
];

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="rounded-lg shadow-md border-2 border-spacing-2 m-4 ">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm  sm:text-center">
          © {currentYear}{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            kazibyte™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          {FooterData.map((item, index) => (
            <li key={index}>
              <Link href={item.href}>
                <p className="hover:underline flex  me-4 md:me-6">
                  {item.title}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

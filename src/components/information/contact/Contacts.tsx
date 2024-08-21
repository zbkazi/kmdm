import React from "react";
import GoogleMap from "./GoogleMap";
import {
  PhoneArrowUpRightIcon,
  PhoneIcon,
  GlobeAltIcon,
  EnvelopeIcon,
  MapPinIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const contactData = [
  {
    icon: PhoneArrowUpRightIcon,
    text: "01747837138",
    href: "tel:01747837138",
  },
  {
    icon: PhoneIcon,
    text: "01309122690",
  },
  {
    icon: GlobeAltIcon,
    text: "kmdm",
    href: "https://zbkazi.github.io/kmdm/",
  },
  {
    icon: EnvelopeIcon,
    text: "kmdm122690@gmail.com",
    email: true,
    href: "mailto:kmdm122690@gmail.com",
  },
  {
    icon: MapPinIcon,
    text: "Ulipur, Kurigram Upazila Ulipur, District Kurigram",
    href: "https://www.google.com/maps/place/Ulipur,+Kurigram+Upazila,+District+Kurigram,+Rangpur+Division,+Bangladesh",
  },
  {
    icon: BuildingLibraryIcon,
    text: "Division, Rangpur, Bangladesh",
    href: "https://www.google.com/maps/place/Ulipur,+Kurigram+Upazila,+District+Kurigram,+Rangpur+Division,+Bangladesh",
  },
];

const Contacts: React.FC = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800">
      <section className="rounded-lg shadow-md border-2 border-spacing-2 dark:border-gray-700 m-4 p-6 bg-white dark:bg-gray-900">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <GoogleMap />
            <div className="mt-12 md:mt-0">
              <h3 className="text-2xl font-bold mb-6 text-blue-700 dark:text-blue-400">
                Get in Touch
              </h3>
              <div className="space-y-4">
                {contactData.map((item, index) => (
                  <a
                    key={index}
                    href={item.href ? item.href : "#"}
                    className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    aria-label={item.text}
                  >
                    <item.icon className="w-6 h-6 text-blue-500 dark:text-blue-300 mr-4" />
                    <span className="text-gray-800 dark:text-gray-200">
                      {item.text}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;

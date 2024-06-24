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
    href: "mailto:kmdm122690@gmail",
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
    <div>
      <section className="rounded-lg shadow-md border-2 border-spacing-2 dark:border-gray-700 m-4 ">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <GoogleMap />
            <div className="mt-12 md:mt-0">
              <div className="text-xl p-4 font-bold m-4">
                {contactData.map((item, index) => (
                  <p key={index} className="flex items-center mb-2">
                    <item.icon className="w-6 h-6 inline-block mr-2" />
                    <Link href={item.href ? item.href : "#"}>{item.text}</Link>
                  </p>
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

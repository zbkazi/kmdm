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

const contactData = [
  {
    icon: PhoneArrowUpRightIcon,
    text: "01747837138",
  },
  {
    icon: PhoneIcon,
    text: "01309122690",
  },
  {
    icon: GlobeAltIcon,
    text: "www.kmdm.com",
  },
  {
    icon: EnvelopeIcon,
    text: "kmdm122690@gmail.com",
  },
  {
    icon: MapPinIcon,
    text: "Ulipur, Kurigram Upazila Ulipur, District Kurigram",
  },
  {
    icon: BuildingLibraryIcon,
    text: "Division, Rangpur, Bangladesh",
  },
];

const Contacts: React.FC = () => {
  return (
    <div>
      <section>
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <GoogleMap />
            <div className="mt-12 md:mt-0">
              <div className="text-xl p-4 font-bold m-4">
                {contactData.map((item, index) => (
                  <p key={index} className="flex items-center mb-2">
                    <item.icon className="w-6 h-6 inline-block mr-2" />
                    {item.text}
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

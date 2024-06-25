import React from "react";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

// Data for the component
const RightInformationData = [
  {
    id: 1,
    title: "তথ্য প্রদানকারী কর্মকর্তা",
    href: "/admission",
    icon: CheckBadgeIcon,
  },
  {
    id: 2,
    title: "তথ্য অধিকার আইন ও বিধিমালা",
    icon: CheckBadgeIcon,
    href: "/notice",
  },
  {
    id: 3,
    title: "স্বপ্রণোদিতভাবে-তথ্য-প্রকাশ-নির্দেশিকাতা",
    icon: CheckBadgeIcon,
    href: "/notice/routines",
  },
  {
    id: 4,
    title: "আবেদন ও আপীল ফরম",
    icon: CheckBadgeIcon,
    href: "/application/appeal",
  },
];

const RightInformationData2 = {
  titlesi: "তথ্য অধিকার",
};

interface ListItemProps {
  title: string;
  count?: string;
  href: string;
  icon?: React.ElementType;
}

const ListItem: React.FC<ListItemProps> = ({
  title,
  count,
  href,
  icon: Icon,
}) => (
  <Link
    href={href}
    className="group flex items-center p-3 py-1.5 px-3 text-start text-sm font-normal text-blue-gray-700 transition-all hover:bg-blue-500 hover:bg-opacity-80 hover:text-white focus:bg-blue-500 focus:bg-opacity-80 focus:text-white"
  >
    {Icon && (
      <div className="grid mr-4 place-items-center">
        <Icon className="h-5 w-5 text-green-500" />
      </div>
    )}
    <div>{title}</div>
    {count && (
      <div className="ml-auto">
        <div className="relative px-2 py-1 text-xs font-bold text-gray-900 uppercase bg-gray-900/10 rounded-full group-hover:bg-white/20 group-hover:text-white">
          <span>{count}</span>
        </div>
      </div>
    )}
  </Link>
);

const RightInformation: React.FC = () => {
  return (
    <section className="mb-2 border font-sans p-4 rounded-lg max-w-full">
      <div className="mx-auto">
        <div className="card md:flex max-w-xs mx-auto">
          <div className="w-20 h-20 mx-auto mb-6 md:mr-6 flex-shrink-0">
            {/* Replace with your image */}
            <Image
              className="rounded-full"
              src="https://github.com/zbkazi/kmdm/blob/main/src/assets/logos/ClassLech.png?raw=true"
              alt="Profile"
              width={80}
              height={80}
            />
          </div>
          <div className="flex-grow text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">{
              RightInformationData2.titlesi
            }</h3>
            <div className="relative flex flex-col overflow-hidden bg-clip-border">
              <nav className="my-2 flex flex-col gap-1">
                {RightInformationData.map((item) => (
                  <ListItem
                    key={item.id}
                    title={item.title}

                    href={item.href}
                    icon={item.icon}
                  />
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RightInformation;

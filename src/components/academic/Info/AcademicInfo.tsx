import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";

// Data for the component
const AcademicInfoData = [
  {
    id: 1,
    title: "শিক্ষার্থীদের প্রশংসা পত্র",
    count: "+99",
    href: "/admission",
    icon: CheckBadgeIcon,
  },
  {
    id: 2,
    title: "একাডেমিক ক্যালেন্ডার",
    count: "+23",
    href: "/notice",
    icon: CheckBadgeIcon,
  },
  {
    id: 3,
    title: "রুটিন",
    count: "+12",
    href: "/notice/routines",
    icon: CheckBadgeIcon,
  },
];

interface ListItemProps {
  title: string;
  count?: string;
  href: string;
  icon: React.ElementType;
}

const ListItem: React.FC<ListItemProps> = ({
  title,
  count,
  href,
  icon: Icon,
}) => (
  <Link href={href}>
    <span className="group flex items-center p-3 py-1.5 px-3 text-start text-sm font-normal text-blue-gray-700 transition-all hover:bg-blue-500 hover:bg-opacity-80 hover:text-white focus:bg-blue-500 focus:bg-opacity-80 focus:text-white">
      <div className="grid mr-4 place-items-center">
        <Icon className="h-5 w-5 text-green-500" />
      </div>
      <div className="flex-grow">{title}</div>
      {count && (
        <div className="ml-auto">
          <div className="relative px-2 py-1 text-xs font-bold text-gray-900 uppercase bg-gray-900/10 rounded-full group-hover:bg-white/20 group-hover:text-white">
            <span>{count}</span>
          </div>
        </div>
      )}
    </span>
  </Link>
);

const AcademicInfo: React.FC = () => {
  return (
    <section className="mb-2 border bg-neutral-100 p-4 rounded-lg max-w-full">
      <div className="mx-auto">
        <div className="card md:flex max-w-xs mx-auto">
          <div className="w-20 h-20 mx-auto mb-6 md:mr-6 flex-shrink-0">
            {/* Replace with your image */}
            <Image
              className=""
              src="https://github.com/zbkazi/kmdm/blob/main/src/assets/logos/EcadimicInfo.png?raw=true"
              alt="Profile"
              width={80}
              height={80}
            />
          </div>
          <div className="flex-grow text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Academic Information</h3>
            <div className="relative flex flex-col overflow-hidden bg-clip-border">
              <nav className="my-2 flex flex-col gap-1">
                {AcademicInfoData.map((item) => (
                  <ListItem
                    key={item.id}
                    title={item.title}
                    count={item.count}
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

export default AcademicInfo;

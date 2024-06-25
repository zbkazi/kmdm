import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";

// Data for the component
const teachersInfoData = [
  {
    id: 2,
    title: "শিক্ষকবৃন্দ",
    count: "+23",
    href: "/nonacademic/teacherstice",
  },
  {
    id: 1,
    title: "ম্যানেজিং কমিটি",
    count: "+99",
    href: "/notice",
  },
  {
    id: 3,
    title: "পরিচালনা পরিষদ",
    count: "+12",
    href: "/academic/teachers",
  },
];

const TeachersInfoTitle = {
  title: "শিক্ষকবৃন্দ & কমিটি",
};

interface ListItemProps {
  title: string;
  count?: string;
  href: string;
}

const ListItem: React.FC<ListItemProps> = ({ title, count, href }) => (
  <Link href={href} passHref>
    <div className="group flex w-full items-center rounded-none p-3 py-1.5 px-3 text-start text-sm font-normal text-blue-gray-700 outline-none transition-all hover:bg-blue-500 hover:bg-opacity-80 hover:text-white focus:bg-blue-500 focus:bg-opacity-80 focus:text-white active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
      <div className="grid mr-4 place-items-center">
        <CheckBadgeIcon className="h-5 w-5 text-green-500 " />
      </div>
      {title}
      {count && (
        <div className="grid ml-auto place-items-center justify-self-end">
          <div className="relative grid items-center px-2 py-1 font-sans text-xs font-bold text-gray-900 uppercase rounded-full select-none whitespace-nowrap bg-gray-900/10 group-hover:bg-white/20 group-hover:text-white">
            <span>{count}</span>
          </div>
        </div>
      )}
    </div>
  </Link>
);

const TeachersInfo: React.FC = () => {
  return (
    <section className="mb-2 border font-sans p-4 rounded-lg max-w-full">
      <div className="mx-auto">
        <div className="card md:flex max-w-xs mx-auto">
          <div className="w-20 h-20 mx-auto mb-6 md:mr-6 flex-shrink-0">
            <Image
              className="rounded-full"
              src="https://github.com/zbkazi/kmdm/blob/main/src/assets/logos/TechersInfo.png?raw=true"
              alt="Profile"
              width={80}
              height={80}
            />
          </div>
          <div className="flex-grow text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">
              {TeachersInfoTitle.title}
            </h3>
            <div className="relative flex flex-col overflow-hidden bg-clip-border">
              <nav className="my-2 flex min-w-[240px] flex-col gap-1 p-0 font-sans text-base font-normal text-blue-gray-700">
                {teachersInfoData.map((item) => (
                  <ListItem
                    key={item.id}
                    title={item.title}
                    href={item.href}
                    count={item.count}
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

export default TeachersInfo;

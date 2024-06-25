import React from "react";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

// Data for the component
const GrievanceRedressalManagementData = [
  {
    id: 1,
    title: "সিটিজেন্‌স চার্টার সমূহ",
    href: "/citizens-charter",
    icon: CheckBadgeIcon,
  },
  {
    id: 2,
    title: "ফোকাল পয়েন্ট কর্মকর্তা/পরিবীক্ষণ কমিটি",
    href: "/focal-point-committee",
    icon: CheckBadgeIcon,
  },
  {
    id: 3,
    title: "পরিবীক্ষণ/মূল্যায়ন প্রতিবেদন",
    href: "/evaluation-report",
    icon: CheckBadgeIcon,
  },
  {
    id: 4,
    title: "অভিযোগ গ্রহণ ও নিষ্পত্তি কার্যক্রমের অগ্রগতি প্রতিবেদন",
    href: "/complaint-redressal-progress",
    icon: CheckBadgeIcon,
  },
];
const GrievanceRedressalManagementTitle = {
  title: "সেবা প্রদান প্রতিশ্রুতি (সিটিজেন্‌স চার্টার)",
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

const GrievanceRedressalManagement: React.FC = () => {
  return (
    <section className="mb-2 border font-sans p-4 rounded-lg max-w-full">
      <div className="mx-auto">
        <div className="card md:flex max-w-xs mx-auto">
          <div className="w-20 h-20 mx-auto mb-6 md:mr-6 flex-shrink-0">
            {/* Replace with your image */}
            <Image
              className="rounded-full"
              src=""
              alt="Profile"
              width={80}
              height={80}
            />
          </div>
          <div className="flex-grow text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">
              {GrievanceRedressalManagementTitle.title}
            </h3>
            <div className="relative flex flex-col overflow-hidden bg-clip-border">
              <nav className="my-2 flex flex-col gap-1">
                {GrievanceRedressalManagementData.map((item) => (
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

export default GrievanceRedressalManagement;

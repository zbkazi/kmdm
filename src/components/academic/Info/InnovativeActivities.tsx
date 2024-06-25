import React from "react";
import Link from "next/link";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";

// Data for the component
const InnovativeActivitiesData = [
  {
    id: 1,
    title: "উদ্ভাবনী আইডিয়া সাবমিটেশন",
    href: "/innovative-idea-submission",
    icon: CheckBadgeIcon,
  },
  {
    id: 2,
    title: "উদ্ভাবনী টিম",
    href: "/innovation-team",
    icon: CheckBadgeIcon,
  },
  {
    id: 3,
    title: "উদ্ভাবনী প্রকল্প",
    href: "/innovative-projects",
    icon: CheckBadgeIcon,
  },
  {
    id: 4,
    title: "ফটোগ্যালারী",
    href: "/photo-gallery",
    icon: CheckBadgeIcon,
  },
];

interface ListItemProps {
  title: string;
  count?: string;
  href: string;
  icon: React.ElementType;
}

const titteData = {
  title: "উদ্ভাবনী কার্যক্রম",
};

const ListItem: React.FC<ListItemProps> = ({
  title,
  count,
  href,
  icon: Icon,
}) => (
  <Link href={href} passHref>
    <div className="group flex items-center p-3 py-1.5 px-3 text-start text-sm font-normal text-blue-gray-700 transition-all hover:bg-blue-500 hover:bg-opacity-80 hover:text-white focus:bg-blue-500 focus:bg-opacity-80 focus:text-white">
      <div className="grid mr-4 place-items-center">
        <Icon className="h-5 w-5 text-green-500" />
      </div>
      <div>{title}</div>
      {count && (
        <div className="ml-auto">
          <div className="relative px-2 py-1 text-xs font-bold text-gray-900 uppercase bg-gray-900/10 rounded-full group-hover:bg-white/20 group-hover:text-white">
            <span>{count}</span>
          </div>
        </div>
      )}
    </div>
  </Link>
);

const InnovativeActivities: React.FC = () => {
  return (
    <section className="mb-2 border p-4 rounded-lg max-w-full">
      <div className="mx-auto">
        <div className="card md:flex max-w-xs mx-auto">
          <div className="flex-grow text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">{titteData.title}</h3>
            <div className="relative flex flex-col overflow-hidden bg-clip-border">
              <nav className="my-2 flex flex-col gap-1">
                {InnovativeActivitiesData.map((item) => (
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

export default InnovativeActivities;

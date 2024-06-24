import Link from "next/link";
import React from "react";

const aboutData = {
  title: "কাশির খামার মফিজিয়া দাখিল মাদ্রাসা: সংক্ষিপ্ত বিবরণ",
  description:
    "কাশির খামার মফিজিয়া দাখিল মাদ্রাসা একটি ইসলামিক শিক্ষা প্রতিষ্ঠান, যা উলিপুর, কুড়িগ্রামের কাশির খামার গ্রামে অবস্থিত। এটির এডুকেশনাল ইনস্টিটিউট আইডেন্টিফিকেশন নম্বর (EIIN) হলো 122690।",
  linkText: "প্রতিষ্ঠান সম্পর্কে বিস্তারিত তথ্য দেখো",
  linkHref: "/information/about/about-details",
  sections: [
    {
      title: "প্রতিষ্ঠানের ইতিহাস",
      content:
        "মাদ্রাসাটি 01 জানুয়ারি, 1982 সালে প্রথম চালু করা হয়েছিল। প্রতিষ্ঠার পর থেকে এটি ইসলামিক শিক্ষার পাশাপাশি সাধারণ শিক্ষাও প্রদান করে আসছে।",
    },
    {
      title: "শিক্ষা কার্যক্রম সমূহ",
      content: [
        "প্রথম শ্রেণী থেকে পঞ্চম শ্রেণি পর্যন্ত।",
        "ষষ্ঠ শ্রেণী থেকে অষ্টম শ্রেণি পর্যন্ত।",
        "নবম ও দশম শ্রেণি এবং এসএসসি দাখিল পর্যায় পর্যন্ত।",
      ],
    },
  ],
};

const About: React.FC = () => {
  return (
    <div>
      <section className="rounded-lg shadow-md border-2 border-spacing-2 dark:border-gray-700 m-4 ">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
              <h2 className="text-3xl font-extrabold sm:text-4xl">
                {aboutData.title}
              </h2>
              <p className="mt-4 text-lg">{aboutData.description}</p>
            </div>
            <div className="mt-12 md:mt-0">
              {aboutData.sections.map((item, index) => (
                <div key={index}>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-4 text-gray-700">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link
              href={aboutData.linkHref}
              className="text-blue-500 hover:text-blue-600 font-medium rounded-lg shadow-md border-2 border-spacing-2 p-4"
            >
              {aboutData.linkText}
              <span className="ml-2">&#8594;</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

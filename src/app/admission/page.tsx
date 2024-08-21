"use client";
import Contacts from "@/components/information/contact/Contacts";
import React from "react";

// Tailwind CSS classes
const containerStyle = "max-w-4xl mx-auto p-4";
const cardStyle = "bg-gray-200 dark:bg-slate-800 p-6 rounded-lg shadow-lg mb-4";
const headingStyle = "text-2xl font-semibold mb-4";
const subHeadingStyle = "text-xl font-semibold mt-4 mb-2";
const textStyle = "text-base mb-4";
const listStyle = "list-disc pl-5 mb-4";

const AdmissionPage: React.FC = () => {
  return (
    <div className={containerStyle}>
      <h1 className={headingStyle}>ভর্তি বিজ্ঞপ্তি</h1>

      <div className={cardStyle}>
        <h2 className={subHeadingStyle}>
          অনলাইনে ভর্তি হওয়ার জন্য প্রয়োজনীয় তথ্য
        </h2>
        <p className={textStyle}>
          আপনি যদি আমাদের প্রতিষ্ঠানে অনলাইনে ভর্তি হতে চান, তাহলে নীচের ধাপগুলো
          অনুসরণ করুন:
        </p>
        <ul className={listStyle}>
          <li>
            ১. <strong>অনলাইন ভর্তি ফরম পূরণ:</strong> আমাদের ওয়েবসাইটে লগইন
            করুন এবং অনলাইন ভর্তি ফরম পূরণ করুন। কোন ভর্তি ফি লাগবে না।
          </li>
          <li>
            ২. <strong>প্রয়োজনীয় দলিল:</strong> স্ক্যান করা সনদপত্র, জন্ম সনদ,
            পরিচয়পত্র এবং অন্যান্য প্রয়োজনীয় দলিল আপলোড করুন।
          </li>
          <li>
            ৩. <strong>স্বাস্থ্য পরীক্ষা:</strong> অনলাইনে স্বাস্থ্য পরীক্ষার
            জন্য নির্ধারিত ফর্ম পূরণ করুন।
          </li>
          <li>
            ৪. <strong>নির্দেশনা:</strong> ভর্তি প্রক্রিয়ার সম্পূর্ণ নির্দেশনা
            এবং সময়সূচী ওয়েবসাইটে উপলব্ধ থাকবে।
          </li>
        </ul>
      </div>

      <div className={cardStyle}>
        <h2 className={subHeadingStyle}>
          ভর্তি প্রক্রিয়া সংক্রান্ত গুরুত্বপূর্ণ তথ্য
        </h2>
        <p className={textStyle}>ভর্তি প্রক্রিয়া সম্পন্ন করার জন্য:</p>
        <p className={textStyle}>
          <strong>প্রথম পদক্ষেপ:</strong> অনলাইন ভর্তি ফরম পূরণ করুন এবং
          প্রয়োজনীয় দলিল আপলোড করুন।
        </p>
        <p className={textStyle}>
          <strong>দ্বিতীয় পদক্ষেপ:</strong> কোন টাকা-পয়সা ছাড়াই ভর্তি সম্পন্ন
          করুন।
        </p>
        <p className={textStyle}>
          <strong>তৃতীয় পদক্ষেপ:</strong> স্বাস্থ্য পরীক্ষার জন্য নির্ধারিত ফর্ম
          পূরণ করুন।
        </p>
        <p className={textStyle}>
          <strong>চতুর্থ পদক্ষেপ:</strong> ভর্তি নিশ্চিতকরণের জন্য ওয়েবসাইটে
          লগইন করুন এবং আপডেট চেক করুন।
        </p>
      </div>

      <Contacts />
    </div>
  );
};

export default AdmissionPage;

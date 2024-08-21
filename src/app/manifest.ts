import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "kmdm || School",
    short_name: "KMDM",
    description:
      "কাশির খামার মফিজিয়া দাখিল মাদ্রাসা একটি ইসলামিক শিক্ষা প্রতিষ্ঠান, যা উলিপুর, কুড়িগ্রামের কাশির খামার গ্রামে অবস্থিত। এটির এডুকেশনাল ইনস্টিটিউট আইডেন্টিফিকেশন নম্বর (EIIN) হলো 122690।",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}

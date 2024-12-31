"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Egy from "../../../assets/egy.jpeg";
import Eng from "../../../assets/eng.png";
const LanguageSwitch = () => {
  const router = useRouter();
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const handleLanguageChange = () => {
    const newLanguage = selectedLanguage === "en" ? "ar" : "en";
    setSelectedLanguage(newLanguage);
    router.replace(`/${newLanguage}`);
  };

  return (
    <div
      className="flex items-center gap-2 cursor-pointer"
      onClick={handleLanguageChange}
    >
      {selectedLanguage === "en" ? (
        <>
          <h6 className="text-sm font-medium">العربية</h6>
          <div className="w-6 h-6 relative">
            <Image
              src={Egy}
              alt="EgyptFlag"
              objectFit="cover"
              layout="fill"
              className="rounded-full"
            />
          </div>
        </>
      ) : (
        <>
          <h6 className="text-sm font-medium">En</h6>
          <div className="w-6 h-6 relative">
            <Image
              src={Eng}
              alt="UKFlag"
              objectFit="cover"
              layout="fill"
              className="rounded-full"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default LanguageSwitch;

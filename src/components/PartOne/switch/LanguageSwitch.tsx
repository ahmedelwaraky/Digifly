"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

const LanguageSwitch = () => {
  const router = useRouter();
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    router.replace(`/${language}`);
  };

  return (
    <>
      {selectedLanguage == "en" ? (
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => handleLanguageChange("ar")}
        >
          <h6 className="text-sm font-medium">العربية</h6>
          <div className="w-6 h-6 relative">
            <Image
              src={"https://escolaeuropea.eu/wp-content/uploads/2020/06/Egypt-flag.png"}
              alt="EgyptFlag"
              objectFit="cover"
              layout="fill"
              className="rounded-full"
            />
          </div>
        </div>
      ) : (
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => handleLanguageChange("en")}
        >
          <h6 className="text-sm font-medium">En</h6>
          <div className="w-6 h-6 relative">
            <Image
              src={"/https://www.onlygfx.com/wp-content/uploads/2016/08/flag-of-uk.png"}
              alt="EgyptFlag"
              objectFit="cover"
              layout="fill"
              className="rounded-full"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default LanguageSwitch;

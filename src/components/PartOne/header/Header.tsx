"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import LanguageSwitch from "../switch/LanguageSwitch";

const Header = () => {
  const t = useTranslations("Header");
  const [isActive, setIsActive] = React.useState<number | undefined>(undefined);

  const handleClick = (index: number) => {
    setIsActive(index);
  };

  const items = ["Home", "Categories", "Contact us", "About"];

  return (
    <main className="h-[88px]">
      <div className="pt-4 px-20 gap-[30px] flex items-center sm:justify-between">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={76.57} height={56} />
        </Link>
        <section className="w-[844px]">
          <ul className="flex gap-4">
            {items.map((item, index) => {
              return (
                <li key={index} className="p-4 text-[16px] font-semibold">
                  <Link
                    href="/"
                    style={{
                      color:
                        isActive === index ||
                        (isActive === undefined && index === 0)
                          ? "#49BD88"
                          : "#000000",
                    }}
                    onClick={() => handleClick(index)}
                  >
                    {t(`${item}`)}
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        <section>
          <LanguageSwitch />
        </section>
      </div>
    </main>
  );
};

export default Header;

"use client";

import { useTranslations } from "next-intl";

const Content = () => {
  const t = useTranslations("PartTwo");
  return (
    <section className="flex flex-col gap-8 px-20 pt-[120px]">
      <div className="flex items-center gap-4">
        <div className="w-16 h-1 rounded-full bg-secondary"></div>
        <h1 className="font-bold text-[32px] text-gray-900">{t("title")}</h1>
      </div>
      <div className="w-[1021px] h-[67px]">
        <p className="font-normal text-lg text-gray-600">{t("description")}</p>
      </div>
    </section>
  );
};

export default Content;

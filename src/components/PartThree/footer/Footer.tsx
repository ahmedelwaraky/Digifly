'use client';

import { useTranslations } from "next-intl";

const Footer = () =>{
    const t = useTranslations("Footer");
    return (
      <footer className=" bg-secondary w-full">
        <p className="font-medium py-6 text-center text-white text-sm">
          {t("content1")} &copy; {t("content2")}
        </p>
      </footer>
    );
}

export default Footer;
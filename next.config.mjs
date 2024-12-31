// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     i18n: {
//         locales: ["en", "ar"],
//         defaultLocale: "en",
//     }
// };

// export default nextConfig;

import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withNextIntl(nextConfig);

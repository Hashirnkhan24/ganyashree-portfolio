import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import Image from "next/image";
import bgImage from "@/public/BgImage.svg";
import bgImageLight from "@/public/BgLight.jpg";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ganyashree | Personal Portfolio",
  description: "Ganyashree is a MSc. in Cloud Cmputing Student.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        {/* <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div> */}
        <div className="">
          <Image
            src={bgImage}
            width="1440"
            height="915"
            quality="95"
            priority={true}
            alt="Ricardo portrait"
            className="w-full h-screen absolute inset-0 -z-20 opacity-40 object-cover hidden dark:inline"
          />
          <Image
            src={bgImageLight}
            width="1440"
            height="915"
            quality="95"
            priority={true}
            alt="Ricardo portrait"
            className="w-full h-screen absolute inset-0 -z-20 opacity-40 object-cover light dark:hidden"
          />
        </div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}

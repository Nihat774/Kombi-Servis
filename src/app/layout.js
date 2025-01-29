import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SubHeader from "@/components/SubHeader";
import Icon from "@/components/WpIcon";
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400", 
  variable: "--font-poppins",
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kombi Ustası",
  description: "Kombi Ustası Xırdalan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <SubHeader />
        <div className="px-[30px] md:px-[70px] py-4 md:py-[30px]">
          {children}
          <Icon />
          <Footer />
        </div>
      </body>
    </html>
  );
}

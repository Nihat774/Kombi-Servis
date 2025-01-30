import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SubHeader from "@/components/SubHeader";
import Icon from "@/components/WpIcon";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kombi Ustasi Xirdalan | Ən Sərfəli Qiymətə Kombi Temiri",
  description:
    "Kombi Ustasi Xirdalan | Zəng edin 📞 070 200 24 47 peşəkar kombi temiri xidmeti, keyfiyyətli servis, görülən işlərə zəmanət verilir",
  keywords: [
    "kombi ustası Xırdalan",
    "Xırdalanda kombi təmiri",
    "kombi təmiri",
    "kombi servisi",
    "kombi quraşdırılması",
    "kombi ustası",
  ],
  openGraph: {
    title: "Kombi Ustasi Xirdalan | Ən Sərfəli Qiymətə Kombi Temiri",
    description:
      "Kombi Ustasi Xirdalan | Zəng edin 📞 070 200 24 47 peşəkar kombi temiri xidmeti, keyfiyyətli servis, görülən işlərə zəmanət verilir",
    url: "https://www.kombiustasixirdalan.az/",
    siteName: "Kombi Ustası Xırdalan",
    type: "website",
    locale: "az_AZ",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta
        name="google-site-verification"
        content="cPNgIIuwRuDu0ZX0GfVvaMcXsUiQ-APumFux_LX59z0"
      />
      <link rel="icon" href="/favicon.png" sizes="any" />
      <body
        className={` ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          <Header />
          <SubHeader />

          <div className="flex-[10] px-[30px] md:px-[70px] py-4 md:py-[30px]">
            {children}
          </div>
          <Icon />
          <Footer />
        </div>
      </body>
    </html>
  );
}

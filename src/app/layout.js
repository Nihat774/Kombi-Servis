import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SubHeader from "@/components/SubHeader";
import Icon from "@/components/WpIcon";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kombi Ustası  - Peşəkar Kombi Təmir və Servis Xidməti",
  description:
        "Kombi Ustasi | Yasamal | Xirdalan | Masazır | Sulutəpə | Zəng edin 📞 070 200 24 47 peşəkar kombi temiri xidmeti, keyfiyyətli servis, görülən işlərə zəmanət verilir",
  keywords: [
    "kombi ustası",
    "kombi ustası Xırdalan",
    "Xırdalanda kombi təmiri",
    "kombi təmiri",
    "kombi servisi",
    "kombi quraşdırılması"
    
  ],
  openGraph: {
    title: "Kombi Ustası  - Peşəkar Kombi Təmir və Servis Xidməti",
    description:
      "Kombi Ustasi | Yasamal | Xirdalan | Masazır | Sulutəpə | Zəng edin 📞 070 200 24 47 peşəkar kombi temiri xidmeti, keyfiyyətli servis, görülən işlərə zəmanət verilir",
    url: "https://www.kombiustasixirdalan.az/",
    siteName: "Kombi Ustası ",
    type: "website",
    locale: "az_AZ",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="az">
      <head>
        <meta name="google-site-verification" content="cPNgIIuwRuDu0ZX0GfVvaMcXsUiQ-APumFux_LX59z0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.kombiustasixirdalan.az/"/>
        <meta property="og:image" content="https://www.kombiustasixirdalan.az/kombi-servis1.svg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link rel="icon" href="/kombi-servis1.svg" sizes="any" />
      </head>
      <body className={`${inter.variable} ${robotoMono.variable} antialiased`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <SubHeader />
          <main className="flex-1 px-6 md:px-16 py-6">{children}</main>
          <Icon />
          <Footer />
        </div>
      </body>
    </html>
  );
}

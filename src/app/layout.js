import { Geist, Geist_Mono, Raleway, DM_Sans } from "next/font/google";
import "./globals.css";
import { DataProvider } from "@/app/context/DataProviders";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CallToAction from "./components/CallToAction";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});
const dmSans = DM_Sans({
  variable: "--font-dm_sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Murni Resto",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={`${dmSans.variable}  antialiased `}>
        <Navbar />
        <DataProvider>{children}</DataProvider>
        <CallToAction />
        <Footer />
      </body>
    </html>
  );
}

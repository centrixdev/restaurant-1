import { Navbar } from "@/components/sections/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Crimson_Text, Saira_Extra_Condensed } from "next/font/google";
import Footer from "@/components/sections/Footer";
import { Toaster } from "@/components/ui/toaster";

const saira = Saira_Extra_Condensed({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-saira",
});
const crimson = Crimson_Text({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-crimson",
});

export const metadata: Metadata = {
  title: "MAMMA MIA",
  description: "Website Demo by Dominik",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={`${crimson.variable} ${saira.variable} font-sans `}>
        <Navbar />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}

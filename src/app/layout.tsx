import { Hind_Siliguri } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import type { Metadata } from "next";

const hindSiliguri = Hind_Siliguri({
  variable: "--font-hind-siliguri",
  subsets: ["latin", "bengali"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "বাজার দর",
  description: "বাংলাদেশের নিত্যপ্রয়োজনীয় পণ্যের দৈনিক বাজার দর দেখুন।",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="bn" className={`${hindSiliguri.className} h-full antialiased`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        />
      </head>

      <body className="min-h-full flex flex-col">
        <span className="bg-[#fafcfa]">
          <Header />
        </span>

        <div className="bg-[#f0f5f0]">{children}</div>
        <Footer></Footer>
        <ToastContainer />
      </body>
    </html>
  );
}

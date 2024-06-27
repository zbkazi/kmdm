import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./dash.css";
import { ThemeProvider } from "../components/themes/ThemeProvider";
import Navbar from "@/components/headers/Header";
import Footer from "@/components/footer/Footer";
import { keywords, seoData } from "@/config/SEO";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: seoData.title,
  description: seoData.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={keywords.keywords} />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <ToastContainer />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

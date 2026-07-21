import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Forge — Built for Work. Made for You.",
  description: "Forge is a premium blue-collar job-matching platform connecting skilled workers with customers. Apply to our Beta Testing or Ambassador programs.",
  keywords: "Forge, blue-collar jobs, handyman, local trade, job matching app, Ambassador Program, Beta Testing",
  openGraph: {
    title: "Forge — Built for Work. Made for You.",
    description: "The job-matching platform built for blue-collar workers and customers.",
    type: "website",
  },
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased font-sans`}
    >
      <body className="min-h-full flex flex-col bg-forge-navy text-forge-white">
        {/* Global Background Logo Watermark */}
        <div 
          className="fixed inset-0 z-0 pointer-events-none opacity-30 bg-[url('/logo.png')] bg-center bg-no-repeat bg-[length:60%]" 
        />
        <div className="relative z-10 flex flex-col flex-grow">
          <Navbar />
          <main className="flex-grow flex flex-col">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

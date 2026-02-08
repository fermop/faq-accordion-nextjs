import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Frontend Mentor | FAQ Accordion with Next.js",
  description: "Frontend Mentor's frequent questions!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          min-h-dvh
          ${workSans.variable} 
          font-work-sans 
          antialiased
          bg-primary-purple-100
          bg-[url(/assets/images/background-pattern-mobile.svg)] 
          md:bg-[url(/assets/images/background-pattern-desktop.svg)]
          bg-no-repeat 
          bg-top 
          bg-[length:100%_auto]
          flex flex-col items-center justify-center
          p-6
        `}
      >
        {children}
      </body>
    </html>
  );
}

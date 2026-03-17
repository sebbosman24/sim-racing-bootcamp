import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sim Racing Bootcamp — Your F1 Fan to Sim Racer Roadmap",
  description:
    "Answer 7 questions and get a personalised sim racing starter plan: exact hardware, the right game, and a 4-week curriculum. Powered by Track Titan.",
  openGraph: {
    title: "Sim Racing Bootcamp",
    description: "You've watched the races. Now drive them.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} antialiased bg-[#0a0a0a] text-[#ededed] min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}

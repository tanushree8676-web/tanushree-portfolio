import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Background3D from "@/components/Background3D";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Tanushree S | Full Stack Developer",
  description: "Premium futuristic AI-powered personal portfolio of Tanushree S, Full Stack Developer & AI Enthusiast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-lavender-500 selection:text-white`}
      >
        <SmoothScroll>
          <CustomCursor />
          <Background3D />
          <main className="relative z-10 w-full min-h-screen">
            {children}
          </main>
        </SmoothScroll>
      </body>
    </html>
  );
}

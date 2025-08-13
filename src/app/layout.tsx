import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import  SideBar  from '../components/sidebar'


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lewa - Super Admin Dashboard",
  description: "Modern admin dashboard with comprehensive school management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider className="gap-3 rounded-2xl m-2">        
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
              <SidebarTrigger className="h-10"/>
              <SideBar />
                {children}                    
        </body>
      </html>
    </SidebarProvider>
  );
}

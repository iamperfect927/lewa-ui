import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { SidebarProvider } from "@/components/ui/sidebar"
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
    <html lang="en">
      <body className={`h-screen w-screen overflow-hidden ${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SidebarProvider className="gap-3 rounded-2xl bg-accent"> 
          <div className="flex h-screen my5">
             <SideBar />
            <main className="flex-1 overflow-y-auto">
              {children}
            </main>
          </div>       
        </SidebarProvider>
      </body>
    </html>
  );
}

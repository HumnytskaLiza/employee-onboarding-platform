import type { Metadata } from "next";
import { geistSans, geistMono, robotoSlab, josefinSans } from "./ui/fonts";
import styles from "@/app/ui/modules/main.module.css";
import SideNav from "@/app/ui/sidenav";
import Navbar from "./ui/navbar";

import "@/app/ui/globals.css";

export const metadata: Metadata = {
  title: "Employee Onboarding Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoSlab.className} antialiased`}>
        <main className={`flex h-screen w-full flex-row`}>
          <aside className="sticky top-0 h-screen">
            <SideNav />
          </aside>
          <div className="flex flex-col w-full">
            <Navbar />
            <div className={`${styles.padding}`}>{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}

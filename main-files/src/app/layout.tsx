import type { Metadata } from "next";
import { DM_Sans, Orbitron } from "next/font/google";

import "./globals.css";

const inter = DM_Sans({
   subsets: ["latin"],
   variable: "--body-font",
   display: "swap",
});
const orbitron = Orbitron({
   subsets: ["latin"],
   variable: "--header-font",
   display: "swap",
});

export const metadata: Metadata = {
   title: {
      template: "%s - John Kruger Automotive",
      default: "John Kruger Automotive - Honda, Toyota & Subaru Specialists in Salt Lake City",
   },
   description: "Honda, Toyota & Subaru specialists in Salt Lake City since 2003. 22 years experience, ASE certified technicians, nationwide warranty. Expert Subaru head gasket repair.",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body className={`${inter.variable} ${orbitron.variable}`}>
            {children}
         </body>
      </html>
   );
}

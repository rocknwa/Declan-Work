import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Shared/Footer/Footer";
import { WalletConn } from "@/components/Shared/Header/WalletConnectHeader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Declan",
  description: "Declan Web3 Project...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <WalletConn/> */}
        {children}
        {/* <Footer/> */}
      </body>
    </html>
  );
}

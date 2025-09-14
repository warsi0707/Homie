import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbars/Navbar";
import FooterPage from "@/components/footer/FooterPage";
import ToastProvider from "@/lib/ToastProvider";
import SessionAuthProvider from "@/lib/SessionAuthProvider";
import StateContextProvider from "@/context/StateContextProvider";
import "leaflet/dist/leaflet.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Homie",
  description: "Homie applicatio",
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StateContextProvider>
          <SessionAuthProvider>
            <Navbar />
            <ToastProvider />
            {children}
            <FooterPage />
          </SessionAuthProvider>
        </StateContextProvider>
      </body>
    </html>
  );
}

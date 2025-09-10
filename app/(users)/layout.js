import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "../globals.css";
import NavBar from "./navbar";
import { icon } from "@fortawesome/fontawesome-svg-core";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  subsets: ["latin"], 
  weight: ["400"], 
});

export const metadata = {
  title: {
    default: "Trend Hub",
    template: "%s | Trend Hub"
  },
  description: "This is my service page",
  authors: [{name: 'Abdul Rahim', url: 'https://abdulrahim1.netlify.app/'}],
  keywords :['colth', 'fashion', 'sports'],
  icons :{
    icon: "/th.gif"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}

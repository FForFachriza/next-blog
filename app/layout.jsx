import "./globals.css";
import Navbar from "./components/Navbar";
import localFont from "next/font/local";
import NextTopLoader from "nextjs-toploader";

const gothic = localFont({
  src: [
    {
      path: "./fonts/GothicA1-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/GothicA1-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/GothicA1-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/GothicA1-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/GothicA1-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/GothicA1-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/GothicA1-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/GothicA1-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/GothicA1-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
});

export const metadata = {
  title: "Home | Dim's Blog",
  description: "Dim's Blog",
  date: "2021-01-01",
  slug: "home",
  tags: ["home"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`px-20 ${gothic.className}`}>
        <NextTopLoader />
        <Navbar />
        {children}
      </body>
    </html>
  );
}

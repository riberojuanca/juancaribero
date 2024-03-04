import { Roboto_Condensed } from "next/font/google";
import { Yantramanav } from "next/font/google";
import "./globals.css";

const roboto = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const yantramanav = Yantramanav({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Juanca Ribero",
  description: "Uruguayan development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={yantramanav.className}>{children}</body>
    </html>
  );
}

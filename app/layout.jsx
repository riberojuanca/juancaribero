import { Inter, Inconsolata } from "next/font/google";
import "./globals.css";
import Menu from "@/components/Menu";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const inconsolata = Inconsolata({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Luzbelito",
  description: "Uruguayan developers",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inconsolata.className}>
        <main>
          <header>
            <Menu />
          </header>
          {children}
        </main>
      </body>
    </html>
  );
}

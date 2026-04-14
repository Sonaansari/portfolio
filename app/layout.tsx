import "./globals.css";
import { Playfair_Display } from "next/font/google";

const font = Playfair_Display({ subsets: ["latin"] });

<body className={font.className}></body>
export const metadata = {
  title: "Portfolio",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
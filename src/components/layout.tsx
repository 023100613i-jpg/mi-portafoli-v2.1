import type { Metadata } from "next";
import { Inter } from "next/font/google";
// @ts-ignore: allow side-effect CSS import in TSX
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mi Portafolio",
  description: "Portafolio de desarrollador web",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
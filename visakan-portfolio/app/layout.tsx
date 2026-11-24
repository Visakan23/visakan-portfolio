
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visakan T. | AI & Full Stack Developer",
  description:
    "Portfolio of Visakan T. — Computer Science undergraduate building AI-integrated applications and full-stack solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

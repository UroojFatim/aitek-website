import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AITEK Solutions | Technology Partner for Growing Businesses",
  description: "We build brands, systems, and digital experiences that help companies grow — faster, smarter, and future-ready.",
  openGraph: {
    title: "AITEK Solutions | Technology Partner for Growing Businesses",
    description: "We build brands, systems, and digital experiences that help companies grow — faster, smarter, and future-ready.",
    url: "https://aitek-solutions.com",
    images: [{ url: "/og-image.jpg" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-body">
        {children}
      </body>
    </html>
  );
}
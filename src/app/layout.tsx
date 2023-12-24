import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Container } from "@/components/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import NavBar from "./NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextJs Image Gallery",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <main>
          <Container className="py-4">{children}</Container>
        </main>
      </body>
    </html>
  );
}

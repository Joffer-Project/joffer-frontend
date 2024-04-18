import type { Metadata } from "next";
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { Fredoka, Inter } from "next/font/google";
import "./globals.css";
import ToastProvider from "@/providers/toast-provider";
import { ModalProvider } from "@/providers/modal-provider";

const fredoka = Fredoka({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Joffer - Your Job Offer Finder",
  description: "Joffer is a job offer finder that helps you find the perfect job for you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <UserProvider>
        <body className={fredoka.className}>
          <ToastProvider />
          <ModalProvider />
          {children}
        </body>
      </UserProvider>
    </html>
  );
}
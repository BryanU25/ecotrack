"use client";

import { Inter } from "next/font/google";
import { ReduxProvider } from "@/redux/reduxProvider";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "sonner";

import "@/styles/globals.css";
import TopBar from "@/components/TopBar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Ecomunidad | Bonos de carbono</title>
        <meta
          name="description"
          content="Ecomunidad | registro de bonos de carbono."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Layouticon.svg" />
      </head>
      <body className={inter.className}>
        <ReduxProvider>
          <SessionProvider>
            <TopBar />
            <main>
              {children}
              <Toaster />
            </main>
          </SessionProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}

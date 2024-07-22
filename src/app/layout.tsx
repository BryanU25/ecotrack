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
        <title>Ecomunidad | Cambio Climatico Empresarial</title>
        <meta
          name="description"
          content="Ecomunidad | Cambio Climatico Empresarial"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo_gris.svg" />
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

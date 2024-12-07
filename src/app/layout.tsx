import { Suspense } from "react";
import type { Metadata } from "next";
import { Silkscreen } from "next/font/google";

import { Providers } from "@/providers";
import { LoadSprites } from "@/components";

import Loading from "./loading";
import "./globals.css";

const silkscreen = Silkscreen({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Project 2D",
  description:
    "Um projetinho simples para testar a movimentação de um RPG 2D em um site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-zinc-900 h-full w-full">
      <Providers>
        <Suspense fallback={<Loading />}>
          <body className={`${silkscreen.className} h-full`}>
            <>{children}</>
            <LoadSprites />
          </body>
        </Suspense>
      </Providers>
    </html>
  );
}

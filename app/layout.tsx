import { Providers } from "@/components/providers";
import type { Metadata } from "next";
import "./globals.css";
import "./_self-ping";
import { siteMetadata } from "@/constants/metadata";

export const metadata: Metadata = {
  ...siteMetadata,
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="relative antialiased">
        {/* <Preloader assets={ASSETS} /> */}

        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

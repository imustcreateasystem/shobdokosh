import type { Metadata } from "next";
import { APP_NAME } from "@/lib/constants/brand";
import { cn } from "@/ui/utils/cn";
import { sansSerifFont } from "@/ui/styles/fonts";
import "@/ui/styles/globals.css";

export const metadata: Metadata = {
  title: APP_NAME,
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body className={cn(sansSerifFont.className, "antialiased min-h-svh")}>
        {children}
      </body>
    </html>
  );
}

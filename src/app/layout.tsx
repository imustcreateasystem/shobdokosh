import type { Metadata } from "next";
import { APP_NAME } from "@/lib/constants/brand";
import { cn } from "@/ui/utils/cn";
import { sansSerifFont } from "@/ui/styles/fonts";
import "@/ui/styles/globals.css";
import { ThemeProvider } from "@/ui/layout/themes/ThemeProvider";

export const metadata: Metadata = {
  title: APP_NAME,
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body
        className={cn(
          sansSerifFont.className,
          "antialiased min-h-svh dark:bg-slate-950"
        )}
      >
        <ThemeProvider
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
          attribute="class"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

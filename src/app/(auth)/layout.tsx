import { Queue, Stack } from "@/ui/components/Container";
import ThemeToggle from "@/ui/layout/themes/ThemeToggle";

interface AuthLayoutProps {
  children?: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <Stack
      center
      fullWidth
      className="relative min-h-screen bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: "url('/background.svg')",
      }}
    >
      <div className="absolute inset-0 z-0 bg-white/90 dark:bg-slate-950/90" />

      <div className="absolute top-4 right-4 z-20">
        <ThemeToggle tooltipSide="left" />
      </div>

      <Queue center fullWidth className="relative z-10">
        {children}
      </Queue>
    </Stack>
  );
}

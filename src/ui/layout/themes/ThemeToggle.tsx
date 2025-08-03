"use client";

import { useTheme } from "next-themes";
import { Button } from "@/ui/components/Button";
import { cn } from "@/ui/utils/cn";
import { Sun, Moon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/ui/components/Tooltip";
import { useEffect, useState } from "react";

type ThemeToggleProps = {
  tooltipSide?: "top" | "right" | "bottom" | "left";
};

const ICON_CLASSES = "h-full w-full absolute";

export default function ThemeToggle({
  tooltipSide = "bottom",
}: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted)
    return <Button size="icon" variant="ghost" className="relative" />;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            className="relative"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            size="icon"
            variant="ghost"
          >
            <Sun
              className={cn(
                ICON_CLASSES,
                theme === "light" ? "opacity-100" : "opacity-0"
              )}
            />
            <Moon
              className={cn(
                ICON_CLASSES,
                theme === "dark" ? "opacity-100" : "opacity-0"
              )}
            />
          </Button>
        </TooltipTrigger>
        <TooltipContent side={tooltipSide}>Toggle theme</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

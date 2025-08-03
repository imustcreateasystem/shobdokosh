"use client";

import { forwardRef } from "react";
import { cn } from "@/ui/utils/cn";
import { FlexContainerProps, Queue, Stack } from "@/ui/components/Container";

const Card = forwardRef<HTMLDivElement, Omit<FlexContainerProps, "direction">>(
  ({ className, gap = 6, ...props }, ref) => (
    <Stack
      ref={ref}
      gap={gap}
      className={cn(
        "rounded-md border border-slate-200 bg-white text-slate-900 shadow-xs p-8",
        "dark:border-slate-900/40 dark:bg-slate-900 dark:text-slate-100 dark:hover:shadow-slate-950/20",
        className
      )}
      {...props}
    />
  )
);
Card.displayName = "Card";

const CardHeader = forwardRef<
  HTMLDivElement,
  Omit<FlexContainerProps, "direction">
>(({ className, gap = 0, ...props }, ref) => (
  <Stack gap={gap} ref={ref} className={cn(className)} {...props} />
));
CardHeader.displayName = "CardHeader";

const CardTitle = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <h1
    ref={ref}
    className={cn(
      "text-base font-bold text-slate-700",
      "dark:text-slate-200",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "text-sm text-slate-500 leading-relaxed",
      "dark:text-slate-400",
      className
    )}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-slate-700", "dark:text-slate-300", className)}
    {...props}
  />
));
CardContent.displayName = "CardContent";

const CardFooter = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <Queue itemsCenter fullWidth ref={ref} className={cn(className)} {...props} />
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
};

import { cn } from "@/ui/utils/cn";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      data-testid="skeleton"
      role="status"
      className={cn(
        "animate-pulse rounded-md bg-slate-500/10 dark:bg-slate-800",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };

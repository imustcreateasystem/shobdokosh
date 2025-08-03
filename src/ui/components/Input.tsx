"use client";

/* Third-party components. */
import { forwardRef, useCallback, useState } from "react";
import { Clock, EyeIcon, EyeOffIcon, Search } from "lucide-react";

/* Project components. */
import { Queue } from "@/ui/components/Container";
import { Skeleton } from "@/ui/components/Skeleton";
import { cn } from "@/ui/utils/cn";

const Input = forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input"> & {
    loading?: boolean;
    grow?: boolean;
    noMargin?: boolean;
    inline?: boolean;
    small?: boolean;
  }
>(
  (
    {
      className,
      type,
      loading,
      grow,
      noMargin = true,
      small = false,
      inline,
      ...props
    },
    ref
  ) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const toggleIsPasswordVisible = useCallback(
      () => setIsPasswordVisible(!isPasswordVisible),
      [isPasswordVisible, setIsPasswordVisible]
    );

    if (loading)
      return <Skeleton className="relative flex items-center mb-1 h-9" />;

    return (
      <Queue
        itemsCenter
        className={cn(
          "relative items-center h-9",
          !noMargin && "mb-1",
          grow && "grow",
          inline && "inline-flex"
        )}
      >
        <input
          role="textbox"
          type={isPasswordVisible ? "text" : type}
          className={cn(
            "relative flex w-full h-full rounded-md px-3 py-1",
            "bg-white border border-slate-200 hover:border-slate-800 text-sm",
            "duration-300 ease-in-out transition-colors",
            "file:border-0 file:text-sm file:font-medium",
            "placeholder:text-slate-400",
            "focus-visible:outline-none focus-visible:ring focus-visible:border-primary-700 focus-visible:ring-primary-200 focus-visible:shadow-xs",
            "disabled:cursor-not-allowed disabled:bg-slate-50 disabled:hover:border-slate-200 disabled:text-slate-600 disabled:border-slate-200",
            "dark:bg-slate-800 dark:border-slate-800 dark:text-slate-100 dark:hover:border-slate-700 dark:shadow-slate-950/20",
            "dark:focus-visible:border-primary-500 dark:focus-visible:ring-primary-800",
            "dark:disabled:bg-slate-925 dark:disabled:hover:border-slate-800 dark:disabled:text-slate-400 dark:disabled:border-slate-925",
            type === "password" && "ps-4 pe-10",
            type === "search" && "ps-10 pe-4",
            type === "time" && "ps-4 pe-8",
            small && "text-sm h-8 px-2",
            className
          )}
          ref={ref}
          {...props}
        />
        {type === "password" && (
          <button
            type="button"
            className="absolute inset-y-0 z-20 flex items-center justify-center px-3 cursor-pointer text-slate-400 end-0 focus:outline-none dark:text-slate-400 dark:hover:text-slate-200"
            onClick={() => toggleIsPasswordVisible()}
          >
            {isPasswordVisible ? (
              <EyeIcon className="transition text-slate-500 size-4 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200" />
            ) : (
              <EyeOffIcon className="transition text-slate-500 size-4 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200" />
            )}
          </button>
        )}
        {type === "search" && (
          <button
            className="absolute inset-y-0 left-0 flex items-center px-3"
            type="button"
          >
            <Search className="size-4" />
          </button>
        )}
        {type === "time" && (
          <Queue
            itemsCenter
            className="absolute inset-y-0 right-0 px-3 pointer-events-none"
          >
            <Clock className="size-4 text-slate-400 dark:text-slate-500" />
          </Queue>
        )}
      </Queue>
    );
  }
);
Input.displayName = "Input";

export { Input };

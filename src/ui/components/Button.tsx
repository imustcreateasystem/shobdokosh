"use client";

/* Third-party components. */
import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

/* Project components. */
import { cn } from "@/ui/utils/cn";

/**
 * Button variants for consistent styling.
 */
const buttonVariants = cva(
  cn(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap",
    "rounded-md text-sm font-medium transition-all",
    "focus-visible:outline-none",
    "disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-600 dark:disabled:bg-slate-800 dark:disabled:text-slate-400",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 duration-300 ease-in-out"
  ),
  {
    variants: {
      /**
       * Button variants: `default`, `destructive`, `outline`, `ghost`, `link`, `dashed`.
       */
      variant: {
        /** */
        /**
         * Filled button variant. Picked by default.
         */
        default:
          "bg-primary-500 dark:bg-primary-700 dark:hover:bg-primary-800 text-white hover:bg-primary-700",

        /**
         * Outline button variant.
         */
        outline: cn(
          "border border-slate-200 bg-transparent hover:bg-slate-50 text-slate-800 hover:text-slate-950",
          "dark:border-slate-800 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 dark:hover:text-slate-100 dark:focus-visible:ring-primary-500",
          "dark:shadow-xs dark:shadow-slate-950/20",
          "disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-transparent disabled:shadow-none disabled:border-slate-100 disabled:text-slate-400",
          "dark:disabled:border-slate-800 dark:disabled:text-slate-500 dark:disabled:bg-transparent"
        ),

        /**
         * Ghost button variant.
         */
        ghost: cn(
          "hover:bg-slate-200 text-slate-600 hover:text-slate-900 dark:hover:bg-slate-800",
          "dark:text-slate-300 dark:hover:text-slate-100",
          "data-[state=open]:bg-slate-200 data-[state=open]:text-slate-700",
          "dark:data-[state=open]:bg-slate-800 dark:data-[state=open]:text-slate-300",
          "disabled:cursor-not-allowed disabled:bg-slate-50 disabled:hover:border-slate-200 disabled:text-slate-600 disabled:border-slate-200",
          "dark:disabled:bg-slate-925 dark:disabled:hover:border-slate-800 dark:disabled:text-slate-400 dark:disabled:border-slate-925"
        ),

        /**
         * Destructive button variant for delete actions.
         */
        destructive:
          "bg-red-500 dark:bg-red-900/50 dark:text-red-400 dark:hover:bg-red-900 dark:hover:text-white text-red-50 hover:bg-red-700",
      },

      /**
       * Button sizes: `default`, `sm`, `lg`, `icon`.
       */
      size: {
        /**
         * Default button size. Picked by default.
         */
        default: "h-9 px-4 py-2",

        /**
         * Small button size.
         */
        xs: "h-7 rounded-md px-2 text-xs",

        /**
         * Small button size.
         */
        sm: "h-8 rounded-md px-3 text-xs",

        /**
         * Large button size.
         */
        lg: "h-10 rounded-md px-8",

        /**
         * Icon button size.
         */
        icon: "size-9",

        /**
         * Icon button size.
         */
        iconSmall: "size-7",
      },
    },

    /**
     * Default variants for the button.
     */
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /**
   * Whether to render the button as a child element.
   */
  asChild?: boolean;
}

/**
 * Button component.
 *
 * @param className Custom class names to add to the button.
 * @param variant The variant of the button.
 * @param size The size of the button.
 * @param asChild Whether to render the button as a child element.
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

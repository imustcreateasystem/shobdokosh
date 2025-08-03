"use client";

/* Third-party components. */
import { forwardRef } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

/* Project components. */
import { cn } from "@/ui/utils/cn";
import { Stack } from "@/ui/components/Container";

/**
 * Dialog component. A wrapper around Radix UI's `Dialog`.
 *
 * @example
 * <Dialog>
 * <DialogTrigger>Open</DialogTrigger>
 * <DialogContent>
 *  <DialogHeader>
 *    <DialogTitle>Title</DialogTitle>
 *     <DialogDescription>
 *        Some description.
 *     </DialogDescription>
 *   </DialogHeader>
 *  </DialogContent>
 * </Dialog>
 */
const Dialog = DialogPrimitive.Root;

/**
 * Dialog trigger, typically a button that opens the dialog.
 * A wrapper around Radix UI's `DialogPrimitive.Trigger`.
 */
const DialogTrigger = DialogPrimitive.Trigger;

/**
 * Dialog portal. Wrapper around Radix UI's `DialogPrimitive.Portal`.
 *
 * This is called in DialogContent, so there is no need to call it
 * elsewhere.
 */
const DialogPortal = DialogPrimitive.Portal;

/**
 * Dialog closer. Wrapper around Radix UI's `DialogPrimitive.Close`.
 */
const DialogClose = DialogPrimitive.Close;

/**
 * Overlay for the dialog. Wrapper around Radix UI's `DialogPrimitive.Overlay`.
 *
 * NOTE: Avoid backdrop blurs here; they slow down performance appreciably.
 * @param className Optional custom className.
 */
const DialogOverlay = forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in",
      "bg-slate-700/80 dark:bg-slate-950/90",
      className
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

/**
 * Dialog content: the actual dialog box containing all content.
 * Includes automatic portal rendering and overlay.
 *
 * @param className Optional custom className.
 */
const DialogContent = forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 p-6 shadow-lg duration-200",
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-md",
        "bg-white dark:bg-slate-900 dark:shadow-slate-950/20",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close
        className={cn(
          "absolute right-4 top-4 rounded-full hover:scale-110 p-1 opacity-70 transition-all focus:outline-none disabled:pointer-events-none duration-300 ease-in-out",
          "data-[state=open]:bg-white hover:bg-coral-100 hover:text-coral-600 text-coral-700 dark:text-coral-600 dark:hover:text-coral-500 dark:data-[state=open]:bg-slate-800 dark:hover:bg-slate-700"
        )}
      >
        <X className="size-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

/**
 * Dialog header container.
 *
 * @param className - Optional custom className.
 */
const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <Stack
    className={cn("space-y-1.5 text-center sm:text-left", className)}
    {...props}
  />
);
DialogHeader.displayName = "DialogHeader";

/**
 * Dialog footer container with responsive layout.
 * On mobile: buttons stack vertically in reverse order.
 * On desktop: buttons align horizontally to the right.
 *
 * @param className Optional custom className.
 */
const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    role="dialog-footer"
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
);
DialogFooter.displayName = "DialogFooter";

/**
 * Dialog title component.
 * Wrapper around Radix UI's `DialogPrimitive.Title` with typography styles.
 *
 * @param className Optional custom className.
 */
const DialogTitle = forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      "text-slate-900 dark:text-slate-100",
      className
    )}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

/**
 * Dialog description text.
 * Wrapper around Radix UI's `DialogPrimitive.Description` with muted text styles.
 *
 * @param {string} className Optional custom className.
 */
const DialogDescription = forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm", "text-slate-500 dark:text-slate-400", className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};

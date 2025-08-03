"use client";

/* Project components. */
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/ui/components/Tooltip";

/**
 * Tooltip for required form fields.
 */
export const RequiredTooltip = () => {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild data-testid="required-tooltip">
          <button
            type="button"
            tabIndex={-1}
            className="flex items-center justify-center text-coral-500"
          >
            *
          </button>
        </TooltipTrigger>
        <TooltipContent>Required.</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

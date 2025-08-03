"use client";

import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/ui/components/Tooltip";
import { CircleHelp } from "lucide-react";

/**
 * An informative tooltip for the form field.
 * @param infoTooltip The content of the tooltip.
 */
const InfoTooltip = ({ infoTooltip }: { infoTooltip: string }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild data-testid="info-tooltip">
          <button
            type="button"
            tabIndex={-1}
            className="flex items-center justify-center text-slate-500 dark:text-slate-300"
          >
            <CircleHelp className="size-3" />
          </button>
        </TooltipTrigger>

        <TooltipContent>{infoTooltip}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default InfoTooltip;

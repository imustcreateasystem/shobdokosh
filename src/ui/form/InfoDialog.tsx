"use client";

/* Third-party imports. */
import { JSX } from "react";
import { Info } from "lucide-react";

/* Project components. */
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/ui/components/Dialog";
import { Queue } from "@/ui/components/Container";

/**
 * Informative popup dialog.
 * @params infoPopover The contents of the popup.
 * @params infoPopoverHeader The title of the dialog.
 */
const InfoDialog = ({
  infoPopover,
  infoPopoverHeader,
}: {
  infoPopover: JSX.Element;
  infoPopoverHeader: string;
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild data-testid="info-popover-button">
        <Queue
          as="button"
          center
          tabIndex={-1}
          className="text-slate-500 dark:text-slate-300"
        >
          <Info className="size-3" />
        </Queue>
      </DialogTrigger>

      <DialogContent aria-describedby={undefined}>
        <DialogHeader>
          <DialogTitle>{infoPopoverHeader}</DialogTitle>
        </DialogHeader>
        <div className="text-sm">{infoPopover}</div>
      </DialogContent>
    </Dialog>
  );
};

export default InfoDialog;

import { Stack } from "@/ui/components/Container";
import { cn } from "@/ui/utils/cn";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const HEADER_TITLE = "Page not found";
const DESCRIPTION =
  "The page you are looking for doesn't exist or has been moved.";
const LINK_TEXT = "Return to homepage";

export default function NotFoundContent() {
  return (
    <Stack itemsStart justifyCenter fullHeight fullWidth>
      <NotFoundTitle />
      <NotFoundDescription />
      <HomeLink />
    </Stack>
  );
}

function NotFoundTitle() {
  return (
    <h1
      className={cn(
        "mb-8",
        "text-5xl font-bold leading-5 tracking-tight",
        "text-zinc-700 dark:text-zinc-200"
      )}
    >
      {HEADER_TITLE}
    </h1>
  );
}

function NotFoundDescription() {
  return (
    <p
      className={cn(
        "mb-[4em]",
        "text-lg leading-7",
        "text-zinc-600 dark:text-zinc-300"
      )}
    >
      {DESCRIPTION}
    </p>
  );
}

function HomeLink() {
  return (
    <Link
      href="/"
      className={cn(
        "flex flex-row items-center gap-2 group",
        "font-medium transition-all duration-300 ease-in-out",
        "py-3 text-primary-500 dark:text-primary-400 dark:hover:text-primary-300 hover:text-primary-600"
      )}
    >
      <span
        className={cn(
          "relative",
          "after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-current",
          "after:transition-all after:duration-300",
          "group-hover:after:w-full"
        )}
      >
        {LINK_TEXT}
      </span>
      <ArrowRight className="transition-all duration-500 ease-in-out size-4 group-hover:translate-x-1" />
    </Link>
  );
}

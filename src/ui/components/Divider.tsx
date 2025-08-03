import { Queue } from "@/ui/components/Container";

type DividerProps = {
  /**
   * Text to display in the middle of the divider. If
   * no text is provided, the divider displays as an unbroken
   * horizontal line.
   */
  text?: string;
};

/**
 * A horizontal divider, optionally with text.
 * @param text Text to display in the middle of the divider. If
 * no text is provided, the divider displays as an unbroken
 * horizontal line.
 */
export default function Divider({ text }: DividerProps) {
  return (
    <Queue center fullHeight fullWidth>
      <Queue
        center
        className="flex-1 border-b-[0.5px] border-b-slate-300 dark:border-b-slate-700"
      />
      {text && (
        <Queue className="px-4 text-xs leading-8 lowercase text-slate-500">
          {text}
        </Queue>
      )}
      <Queue
        center
        className="flex-1 border-b-[0.5px] border-b-slate-300 dark:border-b-slate-700"
      />
    </Queue>
  );
}

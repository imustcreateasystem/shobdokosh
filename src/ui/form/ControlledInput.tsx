"use client";

/* Third-party imports. */
import { FieldValues, Path, useFormContext } from "react-hook-form";
import {
  HTMLInputAutoCompleteAttribute,
  HTMLInputTypeAttribute,
  JSX,
} from "react";

/* Project components. */
import { Queue, Stack } from "@/ui/components/Container";
import {
  FormField,
  FormItem,
  FormLabel,
  FormDescription,
  FormControl,
  FormMessage,
} from "@/ui/components/Form";
import { Input } from "@/ui/components/Input";
import { RequiredTooltip } from "@/ui/form/RequiredTooltip";
import { cn } from "@/ui/utils/cn";
import InfoTooltip from "@/ui/form/InfoTooltip";
import InfoDialog from "@/ui/form/InfoDialog";
import { LucideIcon } from "lucide-react";

type ControlledInputProps<T extends FieldValues> = {
  /**
   * The name of the field in the form schema.
   */
  name: Path<T>;

  /**
   * The label the field has, if any.
   */
  label?: string | React.ReactNode | undefined;

  /**
   * Helper text to assist the reader or provide additional
   * context.
   */
  helperLabel?: string | React.ReactNode | undefined;

  /**
   * Placeholder text for the input field.
   */
  placeholder?: string | undefined;

  /**
   * Whether or not to autocomplete the field.
   */
  autoComplete?: HTMLInputAutoCompleteAttribute;

  /**
   * What type of field the input is: `text`, `password`, etc.
   * This is a native HTML attribute of `<input>`.
   */
  type?: HTMLInputTypeAttribute;

  /**
   * Whether some data is still being fetched.
   */
  loading?: boolean;

  /**
   * Whether the field is required.
   */
  required?: boolean;

  /**
   * Tooltip to explain what the field is for.
   */
  infoTooltip?: string;

  /**
   * Popover dialog that displays some helpful
   * note or information.
   */
  infoPopover?: JSX.Element;

  /**
   * Header to the informative popup.
   */
  infoPopoverHeader?: string;

  /**
   * Link to show at the right side of the input field.
   */
  sideLink?: JSX.Element;

  /**
   * Whether the field is disabled.
   */
  disabled?: boolean;

  /**
   * Custom classes to add to the input.
   */
  className?: string;

  icon?: LucideIcon;

  small?: boolean;
  noMargin?: boolean;
  showMessage?: boolean;
  grow?: boolean;
  unstyled?: boolean;
};

export default function ControlledInput<T extends FieldValues>({
  name,
  label,
  helperLabel,
  placeholder,
  autoComplete,
  type = "text",
  loading,
  required,
  infoTooltip,
  infoPopover,
  infoPopoverHeader,
  sideLink,
  className,
  small = false,
  grow = true,
  noMargin = false,
  showMessage = true,
  unstyled = false,
  icon: Icon,
  ...props
}: ControlledInputProps<T>) {
  /* Consume the form context. */
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormItem
          noMargin={noMargin}
          className={cn(grow ? "grow" : "shrink-0")}
        >
          {(label || helperLabel) && (
            <Stack gap={0.5} className={cn(!noMargin && "mb-1")}>
              {label && (
                <FormLabel
                  loading={loading}
                  className="flex items-center justify-between"
                  unstyled={unstyled}
                >
                  <Queue gap={2} itemsCenter>
                    {Icon && <Icon className="size-3" />}
                    {label}
                    {required && <RequiredTooltip />}
                    {infoTooltip && <InfoTooltip infoTooltip={infoTooltip} />}
                    {infoPopover && infoPopoverHeader && (
                      <InfoDialog
                        infoPopover={infoPopover}
                        infoPopoverHeader={infoPopoverHeader}
                      />
                    )}
                  </Queue>
                  {sideLink}
                </FormLabel>
              )}
              {helperLabel && (
                <FormDescription loading={loading}>
                  {helperLabel}
                </FormDescription>
              )}
            </Stack>
          )}
          <FormControl className={cn(noMargin && "mb-0")}>
            <Input
              placeholder={placeholder}
              autoComplete={autoComplete}
              type={type}
              required={required}
              loading={loading}
              className={cn(
                fieldState.invalid &&
                  !showMessage &&
                  "border-coral-500 ring-coral-500 focus-visible:ring-coral-500 dark:border-coral-600",
                className
              )}
              small={small}
              noMargin={noMargin}
              {...props}
              {...field}
            />
          </FormControl>
          {showMessage !== false && <FormMessage />}
        </FormItem>
      )}
    />
  );
}

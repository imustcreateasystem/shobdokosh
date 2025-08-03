"use client";

/* Third-party components. */
import { createContext, forwardRef, useContext, useId } from "react";
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  FormProvider,
  useFormContext,
} from "react-hook-form";
import * as LabelPrimitive from "@radix-ui/react-label";
import { Slot } from "@radix-ui/react-slot";

/* Project components. */
import { cn } from "@/ui/utils/cn";
import { Stack } from "@/ui/components/Container";
import { Label } from "@/ui/components/Label";
import { Skeleton } from "@/ui/components/Skeleton";

/**
 * A provider component that propagates the `useForm` methods to all children
 * components via React Context. To be used with `useFormContext`.
 *
 * Wraps React Hook Form's `FormProvider`.
 */
const Form = FormProvider;

/**
 * Stores the name of the form field.
 * Ensures components using this context can access the field name.
 */
type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: TName;
};

/**
 * Context to store the name of the form field.
 */
const FormFieldContext = createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
);

/**
 * A wrapper around `Controller` that provides the form field context.
 */
const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

type FormItemContextValue = {
  /**
   * Unique ID for each form item.
   */
  id: string;
};

/**
 * Context to manage form item components.
 */
const FormItemContext = createContext<FormItemContextValue>(
  {} as FormItemContextValue
);

/**
 * Wrapper for form items.
 */
const FormItem = forwardRef<
  HTMLDivElement & { noMargin?: boolean },
  React.HTMLAttributes<HTMLDivElement> & { noMargin?: boolean }
>(({ className, noMargin = false, ...props }, ref) => {
  const id = useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <Stack
        gap={0.5}
        ref={ref}
        className={cn(
          "text-left text-slate-800 dark:text-slate-200",
          !noMargin && "mb-2",
          className
        )}
        {...props}
      />
    </FormItemContext.Provider>
  );
});
FormItem.displayName = "FormItem";

/**
 * Hook to access the form field state from the context.
 */
const useFormField = () => {
  const fieldContext = useContext(FormFieldContext);
  const itemContext = useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();

  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

/**
 * Label component for form items.
 */
const FormLabel = forwardRef<
  React.ComponentRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & {
    loading?: boolean;
    unstyled?: boolean;
  }
>(({ className, loading, unstyled = false, ...props }, ref) => {
  const { formItemId } = useFormField();
  if (loading) return <Label loading />;

  return (
    <Label
      ref={ref}
      className={cn(
        "text-sm leading-relaxed",
        unstyled ? "font-normal" : "font-medium",
        className
      )}
      htmlFor={formItemId}
      {...props}
    />
  );
});
FormLabel.displayName = "FormLabel";

/**
 * Description component for form items.
 * Displays additional information about the form item.
 */
const FormDescription = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement> & { loading?: boolean }
>(({ className, loading, ...props }, ref) => {
  const { formDescriptionId } = useFormField();
  if (loading) return <Skeleton className="w-full h-4 mb-1 max-w-32" />;

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn(
        "text-xs mb-1 text-slate-500 dark:text-slate-400",
        className
      )}
      {...props}
    />
  );
});
FormDescription.displayName = "FormDescription";

/**
 * The form element control.
 */
const FormControl = forwardRef<
  React.ComponentRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } =
    useFormField();

  return (
    <Slot
      ref={ref}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
      id={formItemId}
    />
  );
});
FormControl.displayName = "FormControl";

/**
 * Form message for errors.
 */
const FormMessage = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message) : children;

  if (!body) {
    return null;
  }

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={cn("text-xs text-coral-600 dark:text-coral-500", className)}
      {...props}
    >
      {body}
    </p>
  );
});
FormMessage.displayName = "FormMessage";

export {
  Form,
  FormField,
  FormItem,
  useFormField,
  FormLabel,
  FormDescription,
  FormControl,
  FormMessage,
};

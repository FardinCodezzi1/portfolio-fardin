import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative z-10 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-medium transition-transform duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 disabled:pointer-events-none disabled:opacity-50 group-hover/lift:-translate-y-1.5 group-hover/lift:translate-x-1.5",
  {
    variants: {
      variant: {
        default: "bg-accent text-background hover:opacity-90",
        outline:
          "border border-muted/40 bg-background text-foreground hover:border-accent hover:text-accent",
        ghost: "border border-transparent text-foreground hover:bg-surface hover:text-accent",
        secondary: "bg-surface text-foreground hover:text-accent",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-11 px-6",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <span className="group/lift relative inline-flex">
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-sm border border-dashed border-accent/80 opacity-0 transition-opacity duration-200 group-hover/lift:opacity-100"
      />
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    </span>
  );
}

export { buttonVariants };

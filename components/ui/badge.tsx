import { cn } from "@/lib/utils";

export function Badge({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm border border-muted/30 bg-surface px-2 py-0.5 text-xs font-medium text-muted",
        className,
      )}
      {...props}
    />
  );
}

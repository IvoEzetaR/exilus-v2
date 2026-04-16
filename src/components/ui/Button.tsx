import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Variantes del sistema de diseño Exilus v2 Editorial Wine-Medical
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // Verde CTA — botón principal, uso exclusivo para "Agenda tu evaluación"
        primary:
          "bg-[#78D64B] text-[#1a3a0a] shadow-[0_6px_20px_rgba(120,214,75,0.28)] hover:opacity-90",
        // Ghost morado — sobre fondos crema
        secondary:
          "border-2 border-primary text-primary bg-transparent hover:bg-primary/5",
        // Outline crema — sobre fondos morados (invertido)
        "ghost-cream":
          "border-2 border-cream/40 text-cream bg-transparent hover:border-cream/70 hover:bg-cream/5",
        // Default — morado sólido
        default:
          "bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:opacity-90",
        ghost: "text-primary hover:bg-primary/5",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-14 px-8 text-base",
        xl: "h-16 px-10 text-lg",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

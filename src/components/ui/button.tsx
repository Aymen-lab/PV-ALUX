import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg rounded-none",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-md",
        outline: "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground rounded-none",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-md",
        ghost: "hover:bg-accent/10 hover:text-accent rounded-md",
        link: "text-accent underline-offset-4 hover:underline",
        // Luxe variants
        gold: "bg-gold-gradient text-charcoal font-semibold shadow-gold hover:shadow-lg hover:scale-[1.02] rounded-none",
        "gold-outline": "border-2 border-accent bg-transparent text-accent hover:bg-accent hover:text-charcoal font-semibold rounded-none",
        luxe: "bg-primary text-primary-foreground font-semibold tracking-wide uppercase text-xs hover:bg-charcoal-light shadow-elegant rounded-none",
        "luxe-light": "bg-cream text-charcoal font-semibold tracking-wide uppercase text-xs hover:bg-champagne border border-charcoal/10 rounded-none",
        whatsapp: "bg-whatsapp text-white hover:bg-whatsapp-hover shadow-md hover:shadow-lg whatsapp-pulse rounded-full",
        "hero-glass": "glass-dark text-white font-semibold hover:bg-white/20 rounded-none border-white/30",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-14 px-8 text-base",
        xl: "h-16 px-10 text-base tracking-widest",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
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
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

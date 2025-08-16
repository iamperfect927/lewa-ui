import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "flex items-center justify-center gap-5 border whitespace-nowrap",
  {
    variants: {
      variant: {
        default: "flex items-center justify-center font-medium rounded-xl text-white",
        primary: "bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-xl",
        // outline: "border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",
        // secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        // ghost: "hover:bg-accent hover:text-accent-foreground",
        // link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: " p-4",
        primary: "px-6 py-2 ",
        // sm: "h-8 rounded-md px-3 text-xs",
        // lg: "h-10 rounded-md px-8",
        icon: "w-5 h-5",
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
  label?: string; // Add label prop
  icon?: React.ReactNode; // For passing icons dynamically
  customStyle?: React.CSSProperties; // customStyle prop
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, label, icon, customStyle, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        style={customStyle} // Apply custom styles here
        {...props}
      >
        {icon && <span className="w-5 h-5">{icon}</span>} {/* Icon rendering */}
        {label} {/* Label rendering */}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
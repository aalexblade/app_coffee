import React from "react";
import { Button as AntButton, ButtonProps as AntButtonProps } from "antd";
import { cn } from "../../lib/utils";

export interface AppButtonProps extends Omit<
  AntButtonProps,
  "type" | "size" | "variant"
> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit" | "reset";
}

export const AppButton = ({
  variant = "primary",
  size = "md",
  className,
  children,
  type = "button",
  ...props
}: AppButtonProps) => {
  const variants = {
    primary:
      "bg-coffee-medium text-black hover:bg-coffee-medium/90 border-transparent",
    secondary:
      "bg-coffee-dark text-cream hover:bg-coffee-medium border-transparent",
    outline:
      "border-2 border-coffee-dark text-coffee-dark hover:bg-coffee-dark hover:text-cream",
    ghost:
      "bg-transparent text-coffee-dark hover:bg-coffee-light/20 border-transparent",
  };

  const sizes = {
    sm: "px-4 py-1 text-sm",
    md: "px-6 py-2 text-base",
    lg: "px-8 py-3 text-lg",
  };

  return (
    <AntButton
      htmlType={type}
      className={cn(
        "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 h-auto",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </AntButton>
  );
};

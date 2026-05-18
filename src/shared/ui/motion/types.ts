import { HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

export interface FadeInProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

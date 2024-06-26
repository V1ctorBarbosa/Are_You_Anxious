//Types
import { IAnimationVariants, IHoverAnimations } from "./types";

export const animationVariants: IAnimationVariants = {
  enter: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 1 },
  },
  exit: {
    opacity: 0,
    y: 100,
    x: 0,
    transition: { duration: 1 },
  },
};

export const hoverAnimations: IHoverAnimations = {
  whileHover: {
    y: -5,
    transition: { duration: 0.3 },
  },
};

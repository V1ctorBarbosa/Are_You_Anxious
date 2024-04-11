//Animation
import { Variants } from 'framer-motion';

export interface ITheme {
    black: string;
    white: string;
}
export interface IAnimationVariants extends Variants {
    enter: {
      opacity: number;
      x: number;
      y: number;
      transition: {
        duration: number;
      };
    };
    exit: {
      opacity: number;
      x: number;
      y: number;
      transition: {
        duration: number;
      };
    };
  }
  export interface IHoverAnimations {
    whileHover: {
      y: number;
      transition: {
        duration: number;
      };
    };
  }
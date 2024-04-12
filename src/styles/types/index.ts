//Animation
import { Variants } from "framer-motion";

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

export interface IParticles {
  [key: string]: any;
  background: {
    color: {
      value: string;
    };
  };
  fpsLimit: number;
  interactivity: {
    events: {
      onClick: {
        enable: boolean;
        mode: string;
      };
      onHover: {
        enable: boolean;
        mode: string;
      };
    };
    modes: {
      push: {
        distance: number;
        duration: number;
      };
      grab: {
        distance: number;
      };
    };
  };
  particles: {
    color: {
      value: string;
    };
    links: {
      color: string;
      distance: number;
      enable: boolean;
      opacity: number;
      width: number;
    };
    move: {
      direction:
        | "none"
        | "top"
        | "bottom"
        | "left"
        | "right"
        | "topLeft"
        | "topRight"
        | "bottomLeft"
        | "bottomRight";
      enable: boolean;
      outModes: {
        default: "none" | "bounce" | "split" | "out" | "destroy";
      };
      random: boolean;
      speed: number;
      straight: boolean;
    };
    number: {
      density: {
        enable: boolean;
      };
      value: number;
    };
    opacity: {
      value: number;
    };
    shape: {
      type: string;
    };
    size: {
      value: { min: number; max: number };
    };
  };
  detectRetina: boolean;
}

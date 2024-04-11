export const animationVariants = {
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

export const hoverAnimations = {
  whileHover: {
    y: -5,
    transition: { duration: 0.3 },
  },
};

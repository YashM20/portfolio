// Define our own Variant type since motion doesn't export it directly
type Variant = {
  [key: string]: any;
};

export const fadeIn = (direction: 'up' | 'down' | 'left' | 'right' | 'none', delay = 0, duration = 0.5): Record<string, Variant> => {
  return {
    hidden: {
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };
};

export const staggerContainer = (staggerChildren?: number, delayChildren?: number): Record<string, Variant> => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren || 0.1,
        delayChildren: delayChildren || 0,
      },
    },
  };
};

export const scaleIn = (delay = 0, duration = 0.5): Record<string, Variant> => {
  return {
    hidden: {
      scale: 0.8,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        duration,
        delay,
      },
    },
  };
};

export const slideIn = (direction: 'up' | 'down' | 'left' | 'right', delay = 0, duration = 0.5): Record<string, Variant> => {
  return {
    hidden: {
      x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
      y: direction === 'up' ? '100%' : direction === 'down' ? '-100%' : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: "tween",
        delay,
        duration,
        ease: "easeOut",
      },
    },
  };
};

export const textVariant = (delay = 0): Record<string, Variant> => {
  return {
    hidden: {
      y: 20,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.5,
        delay,
      },
    },
  };
};

export const cardHoverVariants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.02,
    boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.1)",
    transition: { 
      type: "spring", 
      stiffness: 300 
    } 
  }
};

export const loadingVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const loadingCircleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      repeat: Infinity,
      repeatType: 'reverse' as const,
      duration: 1,
    },
  },
}; 
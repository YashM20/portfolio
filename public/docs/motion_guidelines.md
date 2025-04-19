# Motion Animation Guidelines

This document outlines the animation principles and techniques used in this portfolio site, implemented with the Motion library (previously known as Framer Motion).

## Core Animation Principles

1. **Subtlety** - Animations should enhance the user experience without being distracting
2. **Purpose** - Every animation should serve a purpose, such as guiding attention or providing feedback
3. **Consistency** - Similar elements should animate in similar ways to create a cohesive experience
4. **Performance** - Animations should be optimized for performance, especially on mobile devices

## Animation Types

### Entrance Animations
- Elements fade in and slide up slightly when they enter the viewport
- Staggered animations for lists of items (projects, skills, etc.)
- Reveal animations for section headers

### Interactive Animations
- Hover effects with smooth transitions
- Button state changes (hover, active, focus)
- Micro-interactions for UI elements

### Page Transitions
- Smooth transitions between pages
- Content fade in/out

## Implementation Details

### Basic Animation
```tsx
import { motion } from "motion";

// Simple fade-in animation
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  Content here
</motion.div>
```

### Staggered Animations
```tsx
<motion.div
  initial="hidden"
  animate="visible"
  variants={{
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }}
>
  {items.map((item, index) => (
    <motion.div
      key={index}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
    >
      {item}
    </motion.div>
  ))}
</motion.div>
```

### Scroll-triggered Animations
```tsx
import { motion, useScroll } from "motion";

function Component() {
  const { scrollYProgress } = useScroll();
  
  return (
    <motion.div
      style={{
        opacity: scrollYProgress
      }}
    >
      Content here
    </motion.div>
  );
}
```

### Custom Variants
```tsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};
```

## Performance Considerations

- Use `willChange: "transform"` for optimizing animations
- Prefer animating `transform` and `opacity` properties
- For lists, use `layoutScroll` to prevent unnecessary rerenders
- Consider reducing animation complexity on mobile devices

## Resources

- [Motion Documentation](https://motion.dev/docs/react-quick-start)
- [Advanced Animation Techniques](https://motion.dev/docs/advanced) 
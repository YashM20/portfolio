'use client';

import { useEffect, useState, useRef, MutableRefObject } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
}

export function useScrollAnimation<T extends HTMLElement>(
  options: UseScrollAnimationOptions = {}
): [MutableRefObject<T | null>, boolean] {
  const { threshold = 0.1, triggerOnce = true } = options;
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    
    const element = ref.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When element enters viewport
        if (entry.isIntersecting) {
          setIsVisible(true);
          // If triggerOnce is true, disconnect after triggering
          if (triggerOnce) {
            observer.disconnect();
          }
        } else {
          // When element exits viewport and triggerOnce is false
          if (!triggerOnce) {
            setIsVisible(false);
          }
        }
      },
      {
        root: null, // Use viewport as root
        rootMargin: '0px',
        threshold, // Percentage of element visible to trigger
      }
    );
    
    observer.observe(element);
    
    return () => {
      observer.unobserve(element);
    };
  }, [threshold, triggerOnce]);
  
  return [ref, isVisible];
} 
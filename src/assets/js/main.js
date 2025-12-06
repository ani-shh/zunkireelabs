// Import CSS (required for Vite bundling)
import '../css/main.css';

// Import Alpine.js
import Alpine from 'alpinejs';

// Import GSAP and plugins
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import Lenis for smooth scrolling
import Lenis from 'lenis';

// Import animation modules
import { initRevealAnimations, initTextReveal, initCounters } from './animations/scroll.js';
import { initHeroAnimations } from './animations/hero.js';
import { initSmoothScroll } from './animations/smooth.js';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Make Alpine available globally
window.Alpine = Alpine;

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Initialize smooth scrolling
  const lenis = initSmoothScroll();

  // Initialize hero animations
  initHeroAnimations();

  // Initialize scroll-triggered animations
  initRevealAnimations();
  initTextReveal();
  initCounters();

  // Initialize Alpine.js
  Alpine.start();

  // Update ScrollTrigger on resize
  window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
  });

  console.log('🚀 Zunkiree Labs - Initialized');
});

// Export for potential use in other modules
export { gsap, ScrollTrigger };

import Lenis from 'lenis';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Initialize smooth scrolling with Lenis
 * @returns {Lenis} The Lenis instance
 */
export function initSmoothScroll() {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 2,
    infinite: false,
  });

  // Sync Lenis with GSAP ScrollTrigger
  lenis.on('scroll', ScrollTrigger.update);

  // RAF loop
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  // Handle anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          lenis.scrollTo(target, {
            offset: -100,
            duration: 1.5,
          });
        }
      }
    });
  });

  // Expose for external use
  window.lenis = lenis;

  return lenis;
}

/**
 * Scroll to element
 * @param {string|Element} target - CSS selector or element
 * @param {Object} options - Scroll options
 */
export function scrollTo(target, options = {}) {
  if (window.lenis) {
    window.lenis.scrollTo(target, {
      offset: -100,
      duration: 1.5,
      ...options,
    });
  }
}

/**
 * Stop smooth scrolling
 */
export function stopScroll() {
  if (window.lenis) {
    window.lenis.stop();
  }
}

/**
 * Start smooth scrolling
 */
export function startScroll() {
  if (window.lenis) {
    window.lenis.start();
  }
}

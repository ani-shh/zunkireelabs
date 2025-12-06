import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Initialize reveal animations for elements with [data-reveal] attribute
 * Usage: <div data-reveal>Content</div>
 *        <div data-reveal="fade-up">Content</div>
 *        <div data-reveal="fade-left">Content</div>
 */
export function initRevealAnimations() {
  // Fade up (default)
  gsap.utils.toArray('[data-reveal], [data-reveal="fade-up"]').forEach((element) => {
    gsap.from(element, {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    });
  });

  // Fade left
  gsap.utils.toArray('[data-reveal="fade-left"]').forEach((element) => {
    gsap.from(element, {
      x: -60,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    });
  });

  // Fade right
  gsap.utils.toArray('[data-reveal="fade-right"]').forEach((element) => {
    gsap.from(element, {
      x: 60,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    });
  });

  // Scale up
  gsap.utils.toArray('[data-reveal="scale"]').forEach((element) => {
    gsap.from(element, {
      scale: 0.9,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    });
  });

  // Stagger children
  gsap.utils.toArray('[data-reveal-stagger]').forEach((container) => {
    const children = container.children;
    gsap.from(children, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.1,
      scrollTrigger: {
        trigger: container,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    });
  });
}

/**
 * Initialize text reveal animations
 * Usage: <h1 data-text-reveal>Hello World</h1>
 */
export function initTextReveal() {
  gsap.utils.toArray('[data-text-reveal]').forEach((element) => {
    // Split text into words
    const text = element.textContent;
    const words = text.split(' ');
    element.innerHTML = words
      .map((word) => `<span class="inline-block overflow-hidden"><span class="inline-block">${word}</span></span>`)
      .join(' ');

    const innerSpans = element.querySelectorAll('span > span');

    gsap.from(innerSpans, {
      y: '100%',
      opacity: 0,
      duration: 0.8,
      ease: 'power4.out',
      stagger: 0.05,
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    });
  });
}

/**
 * Initialize counter animations
 * Usage: <span data-counter="1500">0</span>
 */
export function initCounters() {
  gsap.utils.toArray('[data-counter]').forEach((element) => {
    const endValue = parseInt(element.dataset.counter, 10);
    const prefix = element.dataset.prefix || '';
    const suffix = element.dataset.suffix || '';

    const counter = { value: 0 };

    gsap.to(counter, {
      value: endValue,
      duration: 2,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
      onUpdate: () => {
        element.textContent = prefix + Math.round(counter.value).toLocaleString() + suffix;
      },
    });
  });
}

/**
 * Initialize parallax effect
 * Usage: <div data-parallax data-speed="0.3">Content</div>
 */
export function initParallax() {
  gsap.utils.toArray('[data-parallax]').forEach((element) => {
    const speed = parseFloat(element.dataset.speed) || 0.3;

    gsap.to(element, {
      y: () => window.innerHeight * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  });
}

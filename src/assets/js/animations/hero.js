import gsap from 'gsap';

/**
 * Initialize hero section animations
 * Runs immediately on page load
 */
export function initHeroAnimations() {
  const hero = document.querySelector('[data-hero]');
  if (!hero) return;

  const tl = gsap.timeline({
    defaults: {
      ease: 'power4.out',
    },
  });

  // Hero badge/tag
  const heroTag = hero.querySelector('[data-hero-tag]');
  if (heroTag) {
    tl.from(heroTag, {
      y: 20,
      opacity: 0,
      duration: 0.6,
    });
  }

  // Hero headline - split into words for stagger
  const heroHeadline = hero.querySelector('[data-hero-headline]');
  if (heroHeadline) {
    const text = heroHeadline.textContent;
    const words = text.split(' ');
    heroHeadline.innerHTML = words
      .map((word) => `<span class="inline-block overflow-hidden"><span class="inline-block hero-word">${word}</span></span>`)
      .join(' ');

    tl.from(
      heroHeadline.querySelectorAll('.hero-word'),
      {
        y: '100%',
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
      },
      '-=0.3'
    );
  }

  // Hero subheadline
  const heroSubheadline = hero.querySelector('[data-hero-subheadline]');
  if (heroSubheadline) {
    tl.from(
      heroSubheadline,
      {
        y: 30,
        opacity: 0,
        duration: 0.8,
      },
      '-=0.4'
    );
  }

  // Hero CTAs
  const heroCtas = hero.querySelectorAll('[data-hero-cta]');
  if (heroCtas.length > 0) {
    tl.from(
      heroCtas,
      {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
      },
      '-=0.4'
    );
  }

  // Hero image/visual
  const heroVisual = hero.querySelector('[data-hero-visual]');
  if (heroVisual) {
    tl.from(
      heroVisual,
      {
        scale: 0.95,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      },
      '-=0.6'
    );
  }

  // Scroll indicator
  const scrollIndicator = hero.querySelector('[data-scroll-indicator]');
  if (scrollIndicator) {
    tl.from(
      scrollIndicator,
      {
        y: -20,
        opacity: 0,
        duration: 0.6,
      },
      '-=0.2'
    );

    // Add bouncing animation after entrance
    tl.to(scrollIndicator, {
      y: 10,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    });
  }

  // Floating elements
  const floatingElements = hero.querySelectorAll('[data-float]');
  floatingElements.forEach((el, i) => {
    gsap.to(el, {
      y: -20,
      duration: 3 + i * 0.5,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      delay: i * 0.2,
    });
  });

  return tl;
}

/**
 * Create a gradient mesh animation
 */
export function initGradientAnimation() {
  const gradients = document.querySelectorAll('[data-gradient-animate]');

  gradients.forEach((el) => {
    gsap.to(el, {
      backgroundPosition: '100% 50%',
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: 'none',
    });
  });
}

/**
 * Initialize magnetic button effect
 * Usage: <button data-magnetic>Click me</button>
 */
export function initMagneticButtons() {
  const buttons = document.querySelectorAll('[data-magnetic]');

  buttons.forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(btn, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.3,
        ease: 'power2.out',
      });
    });

    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.3)',
      });
    });
  });
}

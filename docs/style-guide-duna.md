# Zunkiree Labs Brand Style Guide
## Duna-Inspired Design System

> A premium, minimalist design system inspired by Duna's modern enterprise aesthetic.

---

## Table of Contents

1. [Brand Philosophy](#brand-philosophy)
2. [Color Palette](#color-palette)
3. [Typography](#typography)
4. [Spacing System](#spacing-system)
5. [Layout & Grid](#layout--grid)
6. [UI Components](#ui-components)
7. [Animations & Interactions](#animations--interactions)
8. [Imagery Guidelines](#imagery-guidelines)
9. [Usage Guidelines](#usage-guidelines)

---

## Brand Philosophy

Zunkiree Labs represents **innovation, precision, and bold action**. Our visual identity balances:

- **Minimalism**: Clean layouts with generous whitespace
- **Premium Feel**: Sophisticated typography with tight letter-spacing
- **Bold Confidence**: Strategic use of our signature red to command attention
- **Trust**: Professional, enterprise-grade aesthetic

**Inspiration**: [Duna.com](https://duna.com) - clean, premium, minimalist enterprise design

The design should feel modern, approachable, yet authoritative. Less is more.

---

## Color Palette

### Primary Colors (Zunkiree Red)

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Zunkiree Red** | `#EB1600` | 235, 22, 0 | Primary CTAs, brand accents, key highlights |
| **Zunkiree Red Dark** | `#C01200` | 192, 18, 0 | Hover states, pressed buttons |
| **Zunkiree Red Light** | `#FF3D2E` | 255, 61, 46 | Subtle highlights, gradients |

### Neutral Colors (Warm Grays)

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **White** | `#FFFFFF` | 255, 255, 255 | Primary background |
| **Off-White** | `#F7F7F5` | 247, 247, 245 | Secondary backgrounds, cards |
| **Surface** | `#EDECE7` | 237, 236, 231 | Elevated surfaces, input backgrounds |
| **Border** | `#DBD9CD` | 219, 217, 205 | Dividers, subtle borders |
| **Gray 400** | `#898683` | 137, 134, 131 | Secondary text, captions, placeholders |
| **Gray 600** | `#5A5856` | 90, 88, 86 | Tertiary text |
| **Charcoal** | `#222221` | 34, 34, 33 | Primary text, body copy |
| **Black** | `#0D0D0D` | 13, 13, 13 | Headlines, strong emphasis |
| **Rich Black** | `#1A1816` | 26, 24, 22 | Dark backgrounds, footer |

### Semantic Colors

| Purpose | Color | Hex |
|---------|-------|-----|
| Success | Green | `#2D8A4E` |
| Warning | Amber | `#E5A000` |
| Error | Red | `#EB1600` (uses brand red) |
| Info | Teal | `#45848D` |

### CSS Variables

```css
:root {
  /* Primary */
  --color-primary: #EB1600;
  --color-primary-dark: #C01200;
  --color-primary-light: #FF3D2E;

  /* Neutrals */
  --color-white: #FFFFFF;
  --color-off-white: #F7F7F5;
  --color-surface: #EDECE7;
  --color-border: #DBD9CD;
  --color-gray-400: #898683;
  --color-gray-600: #5A5856;
  --color-charcoal: #222221;
  --color-black: #0D0D0D;
  --color-rich-black: #1A1816;

  /* Semantic */
  --color-success: #2D8A4E;
  --color-warning: #E5A000;
  --color-error: #EB1600;
  --color-info: #45848D;
}
```

### Tailwind Config

```javascript
// tailwind.config.js
colors: {
  zunkiree: {
    DEFAULT: '#EB1600',
    50: '#FFF1F0',
    100: '#FFE1DF',
    200: '#FFC9C5',
    300: '#FFA299',
    400: '#FF6B5C',
    500: '#FF3D2A',
    600: '#EB1600',
    700: '#C01200',
    800: '#A01410',
    900: '#841815',
    950: '#480806',
  },
  neutral: {
    white: '#FFFFFF',
    'off-white': '#F7F7F5',
    surface: '#EDECE7',
    border: '#DBD9CD',
    400: '#898683',
    600: '#5A5856',
    charcoal: '#222221',
    black: '#0D0D0D',
    'rich-black': '#1A1816',
  }
}
```

---

## Typography

### Font Families

| Type | Font | Fallback | Usage |
|------|------|----------|-------|
| **Primary** | GT America | Inter, system-ui, sans-serif | Headlines, body text |
| **Monospace** | Fragment Mono | ui-monospace, monospace | Code, technical content |

```css
:root {
  --font-primary: 'GT America', 'Inter', system-ui, -apple-system, sans-serif;
  --font-mono: 'Fragment Mono', 'Fira Code', ui-monospace, monospace;
}
```

### Type Scale

| Element | Desktop | Tablet | Mobile | Weight | Letter Spacing |
|---------|---------|--------|--------|--------|----------------|
| **Display** | 72px | 64px | 44px | 500 | -0.06em |
| **H1** | 56px | 48px | 36px | 500 | -0.04em |
| **H2** | 44px | 40px | 32px | 500 | -0.03em |
| **H3** | 32px | 28px | 24px | 500 | -0.02em |
| **H4** | 24px | 22px | 20px | 500 | -0.02em |
| **H5** | 20px | 18px | 18px | 500 | -0.01em |
| **Body Large** | 20px | 18px | 18px | 400 | -0.01em |
| **Body** | 16px | 16px | 16px | 400 | -0.01em |
| **Body Small** | 14px | 14px | 14px | 400 | 0 |
| **Caption** | 12px | 12px | 12px | 400 | 0.01em |

### Line Heights

| Type | Line Height |
|------|-------------|
| Headlines (Display, H1, H2) | 1.1 - 1.2 |
| Subheadings (H3, H4, H5) | 1.3 - 1.4 |
| Body text | 1.5 - 1.6 |
| Captions | 1.4 |

### Font Weights

| Weight | Value | Usage |
|--------|-------|-------|
| Regular | 400 | Body text, paragraphs |
| Medium | 500 | Headlines, buttons, emphasis |

**Note**: Use only 400 and 500 weights for clean, consistent typography.

### Tailwind Classes

```html
<!-- Display -->
<h1 class="text-[44px] md:text-[64px] lg:text-[72px] font-medium tracking-[-0.06em] leading-[1.1] text-black">
  Display Heading
</h1>

<!-- H1 -->
<h1 class="text-4xl md:text-5xl font-medium tracking-[-0.04em] leading-tight text-black">
  Heading 1
</h1>

<!-- H2 -->
<h2 class="text-3xl md:text-4xl font-medium tracking-[-0.03em] leading-tight text-black">
  Heading 2
</h2>

<!-- H3 -->
<h3 class="text-2xl md:text-[32px] font-medium tracking-[-0.02em] text-charcoal">
  Heading 3
</h3>

<!-- Body Large -->
<p class="text-lg md:text-xl tracking-[-0.01em] leading-relaxed text-charcoal">
  Large body text for intros and important content.
</p>

<!-- Body -->
<p class="text-base tracking-[-0.01em] leading-relaxed text-charcoal">
  Standard body text for paragraphs.
</p>

<!-- Body Small / Caption -->
<p class="text-sm text-gray-400">
  Secondary text, captions, metadata.
</p>
```

---

## Spacing System

Based on an 8px grid for consistent rhythm.

### Scale

| Token | Value | Tailwind | Usage |
|-------|-------|----------|-------|
| `space-1` | 4px | `p-1` | Micro adjustments |
| `space-2` | 8px | `p-2` | Tight spacing, icon gaps |
| `space-3` | 12px | `p-3` | Small component padding |
| `space-4` | 16px | `p-4` | Default component gaps |
| `space-5` | 20px | `p-5` | Medium spacing |
| `space-6` | 24px | `p-6` | Component padding |
| `space-8` | 32px | `p-8` | Section internal spacing |
| `space-10` | 40px | `p-10` | Large gaps |
| `space-12` | 48px | `p-12` | Section spacing (mobile) |
| `space-16` | 64px | `p-16` | Section spacing (tablet) |
| `space-20` | 80px | `p-20` | Section spacing (desktop) |
| `space-24` | 96px | `p-24` | Large section gaps |
| `space-32` | 128px | `p-32` | Hero spacing |
| `space-36` | 144px | `p-36` | Maximum section gap |

### Section Spacing

All sections follow a consistent, compact spacing pattern:

| Section Type | Tailwind Classes | Mobile | Desktop |
|--------------|------------------|--------|---------|
| **Standard** | `py-12 md:py-16` | 48px | 64px |
| **Feature** (Zunkiree Search, CTA) | `py-12 md:py-20` | 48px | 80px |
| **Utility** (Stats, Logos) | `py-8 md:py-12` | 32px | 48px |

**Important:** Section outer padding must match the navbar for alignment:
- Add `px-4 md:px-6` to `<section>` elements
- Inner container uses `max-w-[1200px] mx-auto` (no additional px)

```html
<!-- Standard section -->
<section class="py-12 md:py-16 px-4 md:px-6">
  <div class="max-w-[1200px] mx-auto">
    <!-- Content -->
  </div>
</section>

<!-- Feature section (more vertical space) -->
<section class="py-12 md:py-20 px-4 md:px-6">
  <div class="max-w-[1200px] mx-auto">
    <!-- Content -->
  </div>
</section>

<!-- Utility section (compact) -->
<section class="py-8 md:py-12 px-4 md:px-6">
  <div class="max-w-[1200px] mx-auto">
    <!-- Content -->
  </div>
</section>
```

### Homepage Section Reference

| Section | Type | Classes |
|---------|------|---------|
| Hero | Full viewport | `min-h-screen px-4 md:px-6` |
| Clients/Partners | Utility | `py-12 md:py-16` |
| Trusted by Leaders | Standard | `py-12 md:py-16` |
| Value Proposition | Standard | `py-12 md:py-16` |
| Stats | Utility | `py-8 md:py-12` |
| Zunkiree Search | Feature | `py-12 md:py-20` |
| Platform Architecture | Standard | `py-12 md:py-16` |
| Platform Mindset | Standard | `py-12 md:py-16` |
| Final CTA | Feature | `py-12 md:py-20` |

---

## Layout & Grid

### Container

**New Pattern (Recommended):** Padding on section, not inner container.

```html
<!-- Section with outer padding -->
<section class="py-12 md:py-16 px-4 md:px-6">
  <div class="max-w-[1200px] mx-auto">
    <!-- Content -->
  </div>
</section>
```

| Breakpoint | Max Width | Section Padding |
|------------|-----------|-----------------|
| Desktop (1200px+) | 1200px | 24px (px-6) |
| Tablet (720px - 1199px) | 100% | 24px (px-6) |
| Mobile (< 720px) | 100% | 16px (px-4) |

**Why this pattern?**
- Aligns content with the navbar (which uses `px-4 md:px-6`)
- Keeps inner container clean (`max-w-[1200px] mx-auto`)
- Consistent alignment across all pages

### Breakpoints

| Breakpoint | Min Width | Usage |
|------------|-----------|-------|
| `sm` | 390px | Large phones |
| `md` | 720px | Tablets |
| `lg` | 1024px | Small laptops |
| `xl` | 1200px | Desktops |
| `2xl` | 1440px | Large screens |

### Grid System

```html
<!-- 12-column grid -->
<div class="grid grid-cols-12 gap-6">
  <div class="col-span-12 md:col-span-6 lg:col-span-4">Column</div>
</div>

<!-- Common layouts -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">Cards</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-8">Two columns</div>
```

---

## UI Components

### Buttons

#### Primary Button (CTA - Red)

```html
<button class="inline-flex items-center justify-center gap-2 px-6 py-3 h-11 bg-zunkiree-600 text-white font-medium rounded-xl hover:bg-zunkiree-700 transition-all duration-200 hover:-translate-y-0.5">
  Get Started
</button>
```

```css
.btn-primary {
  background-color: var(--color-primary);
  color: white;
  font-size: 16px;
  font-weight: 500;
  padding: 12px 24px;
  height: 44px;
  border-radius: 12px;
  border: none;
  transition: background-color 0.2s ease, transform 0.2s ease;
}

.btn-primary:hover {
  background-color: var(--color-primary-dark);
  transform: translateY(-2px);
}
```

#### Secondary Button (Dark)

```html
<button class="inline-flex items-center justify-center gap-2 px-6 py-3 h-11 bg-rich-black text-white font-medium rounded-xl hover:opacity-85 transition-all duration-200">
  Learn More
</button>
```

#### Outline Button

```html
<button class="inline-flex items-center justify-center gap-2 px-6 py-3 h-11 bg-transparent text-charcoal font-medium rounded-xl border border-border hover:border-charcoal hover:bg-off-white transition-all duration-200">
  View Details
</button>
```

#### Ghost Button / Link

```html
<a href="#" class="inline-flex items-center gap-1 text-charcoal font-medium hover:text-zunkiree-600 transition-colors duration-200">
  Learn More <span class="ml-1">&rarr;</span>
</a>
```

#### Button Sizes

| Size | Height | Padding | Font Size |
|------|--------|---------|-----------|
| Small | 36px | 8px 16px | 14px |
| Default | 44px | 12px 24px | 16px |
| Large | 52px | 16px 32px | 18px |

### Cards

#### Basic Card

```html
<div class="bg-white rounded-2xl p-8 border border-border transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
  <h3 class="text-xl font-medium text-black mb-3">Card Title</h3>
  <p class="text-charcoal">Card description goes here.</p>
</div>
```

#### Elevated Card

```html
<div class="bg-off-white rounded-2xl p-8 shadow-sm transition-all duration-300 hover:shadow-md">
  <!-- Content -->
</div>
```

#### Service Card

```html
<div class="bg-white rounded-2xl p-8 border border-border group hover:shadow-lg hover:border-zunkiree-200 transition-all duration-300">
  <div class="w-12 h-12 bg-zunkiree-50 rounded-xl flex items-center justify-center text-zunkiree-600 mb-6 group-hover:bg-zunkiree-600 group-hover:text-white transition-colors duration-300">
    <!-- Icon -->
  </div>
  <h3 class="text-xl font-medium text-black mb-3">Service Title</h3>
  <p class="text-charcoal mb-4">Service description.</p>
  <a href="#" class="text-charcoal font-medium inline-flex items-center gap-1 hover:text-zunkiree-600 hover:gap-2 transition-all">
    Learn more <span>&rarr;</span>
  </a>
</div>
```

### Navigation

```html
<header class="fixed top-0 left-0 right-0 z-50 h-[72px] bg-white/90 backdrop-blur-xl border-b border-border">
  <nav class="max-w-[1200px] mx-auto px-5 md:px-10 h-full">
    <div class="flex items-center justify-between h-full">
      <!-- Logo -->
      <a href="/" class="flex items-center gap-2">
        <img src="/logo.svg" alt="Zunkiree Labs" class="h-8">
      </a>

      <!-- Nav Links -->
      <div class="hidden lg:flex items-center gap-8">
        <a href="/about" class="text-charcoal hover:text-black font-medium transition-colors">About</a>
        <a href="/services" class="text-charcoal hover:text-black font-medium transition-colors">Services</a>
        <a href="/projects" class="text-charcoal hover:text-black font-medium transition-colors">Projects</a>
      </div>

      <!-- CTA -->
      <a href="/contact" class="hidden lg:inline-flex px-5 py-2.5 bg-zunkiree-600 text-white font-medium rounded-xl hover:bg-zunkiree-700 transition-colors">
        Get Started
      </a>
    </div>
  </nav>
</header>
```

### Form Elements

#### Text Input

```html
<div>
  <label class="block text-sm font-medium text-charcoal mb-2">Label</label>
  <input type="text"
    class="w-full px-4 py-3 rounded-xl bg-surface border border-border text-charcoal placeholder:text-gray-400 focus:border-zunkiree-600 focus:ring-2 focus:ring-zunkiree-600/10 outline-none transition-all"
    placeholder="Placeholder">
</div>
```

#### Textarea

```html
<textarea
  class="w-full px-4 py-3 rounded-xl bg-surface border border-border text-charcoal placeholder:text-gray-400 focus:border-zunkiree-600 focus:ring-2 focus:ring-zunkiree-600/10 outline-none transition-all resize-none"
  rows="4">
</textarea>
```

### Border Radius Scale

| Token | Value | Usage |
|-------|-------|-------|
| `rounded-lg` | 8px | Small elements, tags |
| `rounded-xl` | 12px | Buttons, inputs |
| `rounded-2xl` | 16px | Cards |
| `rounded-3xl` | 24px | Large cards, hero elements |
| `rounded-full` | 9999px | Pills, avatars |

---

## Animations & Interactions

### Timing Functions

```css
:root {
  --ease-out: cubic-bezier(0.33, 1, 0.68, 1);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

### Durations

| Token | Value | Usage |
|-------|-------|-------|
| `duration-150` | 150ms | Micro-interactions (color changes) |
| `duration-200` | 200ms | Default transitions |
| `duration-300` | 300ms | Emphasis transitions |
| `duration-500` | 500ms | Page transitions |
| `duration-600` | 600ms | Complex animations |

### Hover Effects

```html
<!-- Lift up -->
<div class="hover:-translate-y-0.5 transition-transform duration-200">

<!-- Scale up slightly -->
<div class="hover:scale-[1.02] transition-transform duration-200">

<!-- Shadow increase -->
<div class="hover:shadow-lg transition-shadow duration-300">

<!-- Combined -->
<div class="transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
```

### Entrance Animations

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s cubic-bezier(0.33, 1, 0.68, 1) forwards;
}

/* Stagger delays */
.stagger-1 { animation-delay: 0ms; }
.stagger-2 { animation-delay: 100ms; }
.stagger-3 { animation-delay: 200ms; }
.stagger-4 { animation-delay: 300ms; }
.stagger-5 { animation-delay: 400ms; }
```

### GSAP Scroll Animations

```javascript
// Fade up on scroll
gsap.from('[data-reveal]', {
  scrollTrigger: {
    trigger: '[data-reveal]',
    start: 'top 85%'
  },
  y: 30,
  opacity: 0,
  duration: 0.6,
  ease: 'power2.out'
});

// Staggered reveals
gsap.from('[data-reveal-stagger] > *', {
  scrollTrigger: {
    trigger: '[data-reveal-stagger]',
    start: 'top 85%'
  },
  y: 30,
  opacity: 0,
  duration: 0.6,
  stagger: 0.1,
  ease: 'power2.out'
});
```

---

## Imagery Guidelines

### Photography Style

- **High quality**: Minimum 2x resolution for retina displays
- **Natural lighting**: Clean, professional lighting
- **Authentic**: Real scenarios, avoid stock photo aesthetics
- **Consistent**: Light backgrounds, uncluttered compositions

### Image Treatments

| Use Case | Aspect Ratio | Border Radius |
|----------|--------------|---------------|
| Hero images | 16:9 | 16-24px |
| Card thumbnails | 3:2 or 4:3 | 16px |
| Avatars | 1:1 | Full (circle) |
| Product shots | 4:3 or 1:1 | 16px |

### Icons

- **Style**: Outlined, 1.5-2px stroke weight (Heroicons recommended)
- **Sizes**: 16px, 20px, 24px, 32px, 48px
- **Default color**: `--color-gray-400` or inherit
- **Active/Hover**: `--color-primary` for interactive states

---

## Usage Guidelines

### Do's

- Use Zunkiree Red **sparingly** for maximum impact (CTAs, key highlights)
- Maintain generous whitespace between sections (80-144px)
- Keep typography hierarchy clear with tight letter-spacing
- Use animations subtly to enhance, not distract
- Ensure sufficient color contrast (WCAG AA minimum)
- Embrace the warm gray palette for a premium feel

### Don'ts

- Don't use red for large background areas
- Don't use more than 2 font weights (400, 500)
- Don't overcrowd layouts - whitespace is essential
- Don't animate everything - be selective
- Don't use cool grays - stick to warm neutrals
- Don't use heavy shadows - keep them subtle

### Red Usage Checklist

| Element | Use Red? | Notes |
|---------|----------|-------|
| Primary CTA buttons | **Yes** | Main conversion actions |
| Logo accent | **Yes** | Brand recognition |
| Key hover states | **Yes** | Interactive feedback |
| Error messages | **Yes** | Semantic alignment |
| Feature icons | Sparingly | Only key highlights |
| Section backgrounds | **No** | Too aggressive |
| Body text | **No** | Poor readability |
| Borders/dividers | **No** | Competes for attention |

---

## Quick Reference

### Color Classes (Tailwind)

```html
<!-- Backgrounds -->
<div class="bg-white">Primary background</div>
<div class="bg-off-white">Secondary background</div>
<div class="bg-surface">Input/elevated surfaces</div>
<div class="bg-zunkiree-600">Primary CTA</div>
<div class="bg-rich-black">Dark sections</div>

<!-- Text -->
<p class="text-black">Headlines</p>
<p class="text-charcoal">Body text</p>
<p class="text-gray-400">Secondary/captions</p>
<p class="text-zunkiree-600">Links/accents</p>
<p class="text-white">On dark backgrounds</p>

<!-- Borders -->
<div class="border border-border">Default border</div>
<div class="border border-zunkiree-200">Accent border</div>
```

### Component Quick Copy

```html
<!-- Primary CTA -->
<button class="px-6 py-3 h-11 bg-zunkiree-600 text-white font-medium rounded-xl hover:bg-zunkiree-700 transition-all duration-200 hover:-translate-y-0.5">
  Get Started
</button>

<!-- Card -->
<div class="bg-white rounded-2xl p-8 border border-border hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
  <!-- Content -->
</div>

<!-- Section (Standard) -->
<section class="py-12 md:py-16 px-4 md:px-6">
  <div class="max-w-[1200px] mx-auto">
    <!-- Content -->
  </div>
</section>

<!-- Section (Feature) -->
<section class="py-12 md:py-20 px-4 md:px-6">
  <div class="max-w-[1200px] mx-auto">
    <!-- Content -->
  </div>
</section>
```

---

## Key Differences from Previous Style Guide

| Aspect | Previous (Databricks) | New (Duna) |
|--------|----------------------|------------|
| **Neutral palette** | Cool grays | Warm grays (cream tones) |
| **Typography** | DM Sans, multiple weights | GT America, 2 weights only |
| **Letter spacing** | Standard | Tight (-0.06em to -0.01em) |
| **Font weight** | 400-700 | 400-500 only |
| **Border radius** | 12-16px | 12-24px (more rounded) |
| **Shadows** | Standard Tailwind | Subtle, minimal |
| **Container** | 1280px | 1200px |
| **Section spacing** | 64-128px | 48-80px (compact, consistent) |
| **Input backgrounds** | White | Off-white/Surface |

---

*Last updated: January 2026*
*Version: 3.1 - Duna-Inspired Design System (Updated section spacing)*

# Engage by Lexara - Style Guide

This style guide documents the design system used in the Engage by Lexara website for consistency across all products, including the chatbot interface.

## Brand Colors

### Primary Colors
```css
/* Lexara Brand Colors */
--lexara-dark-navy: #1E2B3B;     /* Primary dark blue - headers, CTAs */
--lexara-mahogany: #76444B;      /* Accent red - primary buttons */
--lexara-light-navy: #3B576C;    /* Secondary blue - hover states */
--lexara-sky-blue: #C6D8DB;      /* Light blue - backgrounds */
--lexara-white-smoke: #F3F0ED;   /* Off-white - section backgrounds */
```

### Neutral Colors
```css
/* Grays - Tailwind defaults */
--gray-50: #F9FAFB;
--gray-100: #F3F4F6;
--gray-200: #E5E7EB;
--gray-300: #D1D5DB;
--gray-400: #9CA3AF;
--gray-500: #6B7280;
--gray-600: #4B5563;
--gray-700: #374151;
--gray-800: #1F2937;
--gray-900: #111827;
```

### Semantic Colors
```css
/* Status Colors */
--success-green: #10B981;
--warning-yellow: #F59E0B;
--error-red: #EF4444;
--info-blue: #3B82F6;
```

## Typography

### Font Families
```css
/* Headings */
font-family: 'Lora', Georgia, serif;

/* Body Text */
font-family: 'Open Sans', system-ui, -apple-system, sans-serif;
```

### Font Sizes
```css
/* Headings */
.text-5xl: 3rem;        /* Hero headlines */
.text-4xl: 2.25rem;     /* Section headlines */
.text-3xl: 1.875rem;    /* Sub-section headlines */
.text-2xl: 1.5rem;      /* Card headlines */
.text-xl: 1.25rem;      /* Large body text */

/* Body */
.text-lg: 1.125rem;     /* Large paragraph text */
.text-base: 1rem;       /* Default body text */
.text-sm: 0.875rem;     /* Small text, labels */
.text-xs: 0.75rem;      /* Tiny text, captions */
```

### Font Weights
```css
.font-normal: 400;      /* Body text */
.font-medium: 500;      /* Emphasized text */
.font-semibold: 600;    /* Sub-headings */
.font-bold: 700;        /* Headlines */
```

### Line Heights
```css
.leading-tight: 1.25;   /* Headlines */
.leading-normal: 1.5;   /* Default */
.leading-relaxed: 1.625; /* Body paragraphs */
```

## Spacing System

Uses Tailwind's spacing scale (1 unit = 0.25rem = 4px):
```css
/* Common spacing values */
.p-2: 0.5rem;    /* 8px */
.p-3: 0.75rem;   /* 12px */
.p-4: 1rem;      /* 16px */
.p-6: 1.5rem;    /* 24px */
.p-8: 2rem;      /* 32px */
.p-12: 3rem;     /* 48px */
.p-16: 4rem;     /* 64px */
.p-20: 5rem;     /* 80px */
.p-24: 6rem;     /* 96px */
```

## Component Styles

### Buttons

#### Primary Button
```css
/* Default state */
background-color: var(--lexara-mahogany);
color: white;
padding: 0.75rem 1.5rem; /* py-3 px-6 */
border-radius: 0.25rem;  /* rounded */
font-weight: 600;        /* font-semibold */
transition: all 300ms;

/* Hover state */
background-color: var(--lexara-mahogany) with 90% opacity;
```

#### Secondary Button
```css
background-color: var(--lexara-dark-navy);
color: white;
/* Hover: background changes to light navy */
```

#### Outline Button
```css
background-color: transparent;
color: var(--lexara-dark-navy);
border: 2px solid var(--lexara-dark-navy);
/* Hover: background becomes dark navy, text becomes white */
```

#### Ghost Button
```css
background-color: transparent;
color: var(--lexara-dark-navy);
/* Hover: sky blue background at 20% opacity */
```

### Cards

```css
/* Standard card */
background-color: white;
border-radius: 1rem;     /* rounded-2xl */
padding: 2rem;           /* p-8 */
box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1); /* shadow-xl */

/* Feature card (with background) */
background-color: var(--lexara-white-smoke);
border-radius: 1rem;
padding: 2rem;
position: relative;      /* For badges/icons */
```

### Badges

```css
/* Standard badge */
padding: 0.25rem 1rem;   /* py-1 px-4 */
border-radius: 9999px;   /* rounded-full */
font-size: 0.875rem;     /* text-sm */
font-weight: 500;        /* font-medium */

/* Color variants */
.badge-info: background: #DBEAFE, color: #1E40AF;
.badge-success: background: #D1FAE5, color: #065F46;
.badge-warning: background: #FEF3C7, color: #92400E;
.badge-error: background: #FEE2E2, color: #991B1B;
```

### Form Elements

#### Input Fields
```css
/* Text input */
width: 100%;
padding: 0.75rem 1rem;
border: 1px solid #E5E7EB;
border-radius: 0.375rem; /* rounded-md */
font-size: 1rem;

/* Focus state */
outline: none;
border-color: var(--lexara-mahogany);
box-shadow: 0 0 0 3px rgba(118, 68, 75, 0.1);
```

#### Labels
```css
display: block;
margin-bottom: 0.5rem;
font-size: 0.875rem;
font-weight: 500;
color: var(--gray-700);
```

### Navigation

#### Header
```css
background-color: white;
border-bottom: 1px solid #E5E7EB;
height: 4rem;            /* h-16 */
position: sticky;
top: 0;
z-index: 50;
```

#### Navigation Links
```css
font-size: 0.875rem;     /* text-sm */
font-weight: 500;        /* font-medium */
color: var(--gray-700);
transition: colors 150ms;

/* Hover */
color: var(--gray-900);
```

### Sections

#### Standard Section
```css
padding: 5rem 0;         /* py-20 */
```

#### Hero Section
```css
padding: 5rem 0;         /* py-20 on mobile */
padding: 6rem 0;         /* py-24 on desktop */
```

#### Background Variants
- White: `background-color: white`
- Light: `background-color: var(--lexara-white-smoke)`
- Sky Blue: `background-color: var(--lexara-sky-blue)`
- Dark Navy: `background-color: var(--lexara-dark-navy)`

## Layout System

### Container
```css
width: 100%;
margin: 0 auto;
padding: 0 1rem;         /* px-4 */

/* Responsive max-widths */
@media (min-width: 640px) { max-width: 640px; }
@media (min-width: 768px) { max-width: 768px; }
@media (min-width: 1024px) { max-width: 1024px; }
@media (min-width: 1280px) { max-width: 1280px; }
```

### Grid System
```css
/* Feature grid */
display: grid;
grid-template-columns: 1fr;              /* Mobile */
gap: 2rem;

@media (min-width: 768px) {
  grid-template-columns: repeat(2, 1fr); /* Tablet */
}

@media (min-width: 1024px) {
  grid-template-columns: repeat(3, 1fr); /* Desktop */
}
```

## Icons

- Use SVG icons inline
- Standard size: 24x24px (w-6 h-6)
- Small size: 20x20px (w-5 h-5)
- Large size: 28x28px (w-7 h-7)
- Icon color should match text color or use brand colors

## Border Radius

```css
.rounded: 0.25rem;       /* Default - buttons, small elements */
.rounded-md: 0.375rem;   /* Form inputs */
.rounded-lg: 0.5rem;     /* Cards, containers */
.rounded-xl: 0.75rem;    /* Large cards */
.rounded-2xl: 1rem;      /* Feature cards, modals */
.rounded-full: 9999px;   /* Badges, avatar circles */
```

## Shadows

```css
.shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
.shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);
.shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
.shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
.shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);
.shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
```

## Transitions

```css
/* Standard transition */
transition-property: all;
transition-duration: 300ms;
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

/* Fast transition */
transition-duration: 150ms;

/* Slow transition */
transition-duration: 500ms;
```

## Responsive Breakpoints

```css
/* Mobile First */
sm: @media (min-width: 640px)   /* Small tablets */
md: @media (min-width: 768px)   /* Tablets */
lg: @media (min-width: 1024px)  /* Desktop */
xl: @media (min-width: 1280px)  /* Large desktop */
2xl: @media (min-width: 1536px) /* Extra large */
```

## Chat Interface Specific Styles

### Chat Bubble - User
```css
background-color: #3B82F6;       /* Blue */
color: white;
border-radius: 1rem;
border-top-left-radius: 0;       /* Pointed corner */
padding: 0.75rem 1rem;
max-width: 70%;
```

### Chat Bubble - Assistant
```css
background-color: #E5E7EB;       /* Gray-200 */
color: #111827;                  /* Gray-900 */
border-radius: 1rem;
border-top-right-radius: 0;      /* Pointed corner */
padding: 0.75rem 1rem;
max-width: 70%;
```

### Chat Input
```css
background-color: white;
border: 1px solid #E5E7EB;
border-radius: 1.5rem;
padding: 0.75rem 1.5rem;
padding-right: 3rem;             /* Space for send button */
```

### Status Indicators
```css
/* Online/Success */
background-color: #10B981;
width: 0.5rem;
height: 0.5rem;
border-radius: 9999px;

/* Typing indicator */
animation: pulse 2s infinite;
```

## Accessibility

### Focus States
- All interactive elements must have visible focus indicators
- Use ring utilities: `focus:ring-2 focus:ring-lexara-mahogany`
- Ensure 3:1 contrast ratio for focus indicators

### Color Contrast
- Normal text: 4.5:1 contrast ratio
- Large text: 3:1 contrast ratio
- Use white text on dark backgrounds
- Use gray-900 text on light backgrounds

### ARIA Labels
- Provide descriptive labels for icon-only buttons
- Use semantic HTML elements
- Include screen reader only text where needed

## Animation Guidelines

### Hover Effects
- Scale: `hover:scale-105` for subtle growth
- Opacity: `hover:opacity-90` for subtle fade
- Shadow: `hover:shadow-xl` for elevation

### Loading States
```css
@keyframes spin {
  to { transform: rotate(360deg); }
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
```

## Usage Examples

### Hero CTA Button
```html
<button class="bg-lexara-mahogany text-white px-6 py-3 rounded font-semibold hover:bg-opacity-90 transition-all duration-300">
  Get Started
</button>
```

### Feature Card
```html
<div class="bg-lexara-white-smoke rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
  <div class="w-14 h-14 bg-lexara-dark-navy rounded-lg flex items-center justify-center mb-6">
    <!-- Icon -->
  </div>
  <h3 class="text-xl font-semibold text-lexara-dark-navy mb-3">Feature Title</h3>
  <p class="text-gray-600 leading-relaxed">Description text</p>
</div>
```

### Chat Message
```html
<!-- User message -->
<div class="flex justify-end mb-4">
  <div class="bg-blue-500 text-white rounded-2xl rounded-tr-none px-4 py-3 max-w-[70%]">
    <p class="text-sm">User message here</p>
  </div>
</div>

<!-- Assistant message -->
<div class="flex justify-start mb-4">
  <div class="bg-gray-200 text-gray-900 rounded-2xl rounded-tl-none px-4 py-3 max-w-[70%]">
    <p class="text-sm">Assistant response here</p>
  </div>
</div>
```

## Notes for Chatbot Implementation

1. **Consistency**: Use the same color palette and typography
2. **Spacing**: Maintain consistent padding/margins (use the spacing system)
3. **Interactions**: Include hover states and transitions
4. **Accessibility**: Ensure keyboard navigation and screen reader support
5. **Responsive**: Design mobile-first, test on all breakpoints
6. **Dark Mode**: Consider implementing with CSS variables (future enhancement)

## Resources

- **Fonts**: Load from Google Fonts
  - Lora: https://fonts.google.com/specimen/Lora
  - Open Sans: https://fonts.google.com/specimen/Open+Sans
- **Icons**: Use Heroicons or similar SVG icon library
- **CSS Framework**: Tailwind CSS v3.x

This style guide should be used as the foundation for maintaining visual consistency across all Lexara products.
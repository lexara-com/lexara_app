# Testing Guide - Engage by Lexara Website

## Overview

This guide provides comprehensive testing instructions for the Engage by Lexara website. The site is built with Astro and deployed to CloudFlare Workers.

## Live Environments

- **Production**: https://engage.lexara.app
- **CloudFlare Workers Direct**: https://engage-lexara-app.cloudswift.workers.dev

## Pre-Testing Setup

### 1. Browser Requirements
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers: iOS Safari, Chrome Mobile

### 2. Testing Tools
- Browser DevTools for console errors
- Network tab for checking asset loading
- Lighthouse for performance testing
- WAVE or axe DevTools for accessibility

## Functional Testing Checklist

### 1. Homepage (`/`)

#### Header Navigation
- [ ] Logo links to homepage
- [ ] "Pricing" link navigates to `/pricing`
- [ ] "Demo" link navigates to `/demo`
- [ ] "Contact" link navigates to `/contact`
- [ ] "Sign In" link goes to `https://console.lexara.app/api/auth/login` (expected)
- [ ] "Get Started" button goes to `https://console.lexara.app/signup` with UTM parameters (expected)
- [ ] Mobile menu toggle works on small screens
- [ ] Mobile menu shows/hides navigation items

#### Hero Section
- [ ] Headline and subheadline display correctly
- [ ] "Get Started" button goes to console.lexara.app/signup with UTM parameters (expected)
- [ ] "Watch Demo" button links to `/demo` page
- [ ] Chat interface preview image loads from `https://static.lexara.app/images/engage-chat-sample-detail.png`
- [ ] Feature points display with bullet points

#### Features Grid
- [ ] All 6 feature cards display
- [ ] Icons render correctly
- [ ] "Coming Soon" badge appears on API & Integrations card
- [ ] Text is readable and properly formatted

#### Advanced AI Section
- [ ] Left column content displays
- [ ] Right column cards render properly
- [ ] Conflict Check Result shows three status types
- [ ] Contract Analysis card shows progress bar
- [ ] Automatic Conflict Detection card has dark background

#### Testimonials
- [ ] Three testimonial cards display
- [ ] Star ratings render correctly (5 stars each)
- [ ] Author information shows (name, title, company)
- [ ] Cards have hover effect (shadow)

#### Experience CTA Section
- [ ] Dark navy background renders
- [ ] "Start Free Trial" button has white background
- [ ] "Watch Demo" button has transparent background with white border
- [ ] Three feature points with white dots display
- [ ] White separator line at bottom

#### Trusted By Section
- [ ] Heading displays correctly
- [ ] Placeholder for client logos

#### Bottom CTA
- [ ] Heading and description display
- [ ] "Start Your Free Trial" button links correctly
- [ ] Background color is correct

#### Footer
- [ ] Four column layout on desktop
- [ ] Responsive layout on mobile
- [ ] All links navigate to correct pages
- [ ] Social links have correct styling
- [ ] Copyright year is current

### 2. Pricing Page (`/pricing`)

- [ ] Three pricing tiers display correctly
- [ ] "Most Popular" badge on Professional tier
- [ ] Pricing amounts and periods show
- [ ] Feature lists for each tier
- [ ] "Choose Plan" buttons have UTM parameters
- [ ] FAQ section accordions work
- [ ] Questions expand/collapse on click
- [ ] CTA section at bottom

### 3. Demo Page (`/demo`)

- [ ] Form fields display correctly
- [ ] Required field indicators
- [ ] Form submission (currently placeholder)
- [ ] Thank you message or error handling

### 4. Contact Page (`/contact`)

- [ ] Contact form displays
- [ ] All form fields present
- [ ] Form validation works
- [ ] Submit button styling

### 5. Other Pages

Test that these pages load without errors:
- [ ] `/features`
- [ ] `/industries`
- [ ] `/integrations`
- [ ] `/resources`
- [ ] `/help`
- [ ] `/enterprise`
- [ ] `/docs`
- [ ] `/privacy`
- [ ] `/terms`
- [ ] `/cookies`

### 6. Cookie Banner

- [ ] Banner appears on first visit
- [ ] "Accept All" button works
- [ ] "Essential Only" button works
- [ ] "View Details" link goes to `/cookies`
- [ ] Banner doesn't reappear after choice
- [ ] Choice is persisted in cookies

## Visual Testing

### 1. Responsive Design
Test at these breakpoints:
- [ ] Mobile: 375px, 390px (iPhone)
- [ ] Tablet: 768px (iPad)
- [ ] Desktop: 1024px, 1280px, 1920px

### 2. Component Styling
- [ ] Buttons have rounded corners (not fully rounded)
- [ ] Lexara brand colors are correct:
  - Dark Navy: #1E2B3B
  - Mahogany: #76444B
  - Sky Blue: #C6D8DB
  - White Smoke: #F3F0ED
- [ ] Fonts load correctly:
  - Headers: Lora
  - Body: Open Sans
- [ ] Icons render properly
- [ ] Images load from CDN

### 3. Interactions
- [ ] Hover states on buttons
- [ ] Hover states on links
- [ ] Focus states for accessibility
- [ ] Smooth transitions

## Performance Testing

### 1. Page Load Times
Using Chrome DevTools Network tab (Fast 3G):
- [ ] Homepage loads < 3 seconds
- [ ] All pages load < 3 seconds
- [ ] No 404 errors in console
- [ ] No JavaScript errors

### 2. Asset Loading
- [ ] All images load from `https://static.lexara.app`
- [ ] No external CSS files (all inlined)
- [ ] No external JavaScript files (all inlined)
- [ ] Fonts load from Google Fonts CDN

### 3. Lighthouse Scores
Run Lighthouse audit on homepage:
- [ ] Performance > 90
- [ ] Accessibility > 90
- [ ] Best Practices > 90
- [ ] SEO > 90

## Cross-Browser Testing

### Desktop Browsers
- [ ] Chrome (Windows/Mac)
- [ ] Firefox (Windows/Mac)
- [ ] Safari (Mac only)
- [ ] Edge (Windows/Mac)

### Mobile Browsers
- [ ] iOS Safari (iPhone/iPad)
- [ ] Chrome Mobile (Android)
- [ ] Samsung Internet

### Known Browser Issues
- None currently documented

## Accessibility Testing

### 1. Keyboard Navigation
- [ ] All interactive elements reachable via Tab
- [ ] Focus indicators visible
- [ ] Skip to content link (if implemented)
- [ ] Mobile menu operable via keyboard

### 2. Screen Reader Testing
- [ ] Page structure makes sense
- [ ] Images have alt text
- [ ] Form labels properly associated
- [ ] ARIA labels where needed

### 3. Color Contrast
- [ ] Text meets WCAG AA standards
- [ ] Interactive elements have sufficient contrast
- [ ] Focus indicators visible

## Security Testing

### 1. HTTPS
- [ ] Site forces HTTPS
- [ ] No mixed content warnings
- [ ] SSL certificate valid

### 2. Headers
- [ ] Security headers present (check DevTools)
- [ ] Content Security Policy (if configured)

### 3. Forms
- [ ] No sensitive data in URLs
- [ ] Form data handled securely

## Analytics Testing

### 1. Statsig Integration
- [ ] Page view events fire
- [ ] Click events tracked on CTAs
- [ ] Console shows no Statsig errors
- [ ] Events respect cookie consent

### 2. UTM Parameters
- [ ] All CTA buttons include UTM parameters
- [ ] Parameters follow pattern: `utm_source=X&utm_medium=Y&utm_campaign=Z`

## Edge Cases

### 1. Error Handling
- [ ] 404 page displays for invalid URLs
- [ ] Graceful degradation if JavaScript disabled
- [ ] Proper error messages for form failures

### 2. Data Loading
- [ ] Testimonials load correctly
- [ ] Missing data handled gracefully

### 3. Cookie Consent
- [ ] Site functions with cookies blocked
- [ ] Analytics disabled when consent denied

## Regression Testing

After any updates:
1. Run through critical user paths
2. Check all CTAs still work
3. Verify no console errors
4. Confirm images still load
5. Test cookie banner functionality

## Bug Reporting

When reporting bugs, include:
1. Browser and version
2. Device type (desktop/mobile/tablet)
3. Steps to reproduce
4. Expected vs actual behavior
5. Screenshots if visual issue
6. Console errors if any
7. Network errors if any

### Bug Report Template
```
**Environment:**
- Browser: 
- Device: 
- URL: 

**Steps to Reproduce:**
1. 
2. 
3. 

**Expected Result:**

**Actual Result:**

**Screenshots/Errors:**
```

## Contact for Issues

For testing questions or access issues:
- Development Team: [Contact via GitHub Issues]
- Repository: https://github.com/lexara-com/engage-lexara-app

## Testing Sign-Off

### Pre-Launch Checklist
- [ ] All functional tests pass
- [ ] Visual design matches Figma
- [ ] Performance meets targets
- [ ] Accessibility standards met
- [ ] Cross-browser testing complete
- [ ] Security review done
- [ ] Analytics verified

### Sign-Off
- Tester Name: ________________
- Date: ________________
- Version/Commit: ________________
- Status: [ ] Approved [ ] Issues Found
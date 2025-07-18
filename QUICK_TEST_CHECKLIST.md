# Quick Test Checklist - Engage by Lexara

**Live Site**: https://engage.lexara.app

## Critical Path Testing (Priority 1)

### 1. Homepage Load Test
- [ ] Visit https://engage.lexara.app
- [ ] Page loads completely (no infinite loading)
- [ ] No 404 errors in browser console (F12 → Console)
- [ ] Hero image displays on right side

### 2. Main CTAs
- [ ] Click "Get Started" in header → Goes to console signup
- [ ] Click "Start Free Trial" in hero → Goes to console signup
- [ ] Click "Watch Demo" in hero → Goes to /demo page

### 3. Navigation
- [ ] Click "Pricing" → Goes to /pricing
- [ ] Click "Demo" → Goes to /demo
- [ ] Click "Contact" → Goes to /contact
- [ ] Test mobile menu (resize browser < 768px)

### 4. Cookie Banner
- [ ] Cookie banner appears on first visit
- [ ] Click "Accept All" → Banner disappears
- [ ] Refresh page → Banner doesn't reappear

## Visual Checks (Priority 2)

### 1. Images
- [ ] Chat preview image loads in hero section
- [ ] All icons display correctly
- [ ] No broken image placeholders

### 2. Responsive Design
- [ ] Test on phone-sized screen (375px)
- [ ] Test on tablet (768px)
- [ ] Test on desktop (1280px+)

### 3. Component Display
- [ ] 6 feature cards show in grid
- [ ] 3 testimonials display
- [ ] Footer shows 4 columns

## Known Working Features
✅ All CSS is inlined (no external stylesheets)
✅ All JavaScript is inlined (no external scripts)
✅ Images served from CDN (static.lexara.app)
✅ Cookie consent functionality
✅ Responsive mobile menu
✅ All page routes work

## Known Limitations
⚠️ Forms are placeholder only (no backend yet)
⚠️ Some CTAs go to console signup (expected)
⚠️ Analytics only work after cookie consent

## Quick Browser Test
Test in at least:
- [ ] Chrome
- [ ] Safari or Firefox
- [ ] One mobile browser

## If You Find Issues

1. Check browser console for errors (F12)
2. Note the exact URL where issue occurs
3. Take a screenshot
4. Report via GitHub Issues: https://github.com/lexara-com/engage-lexara-app/issues

---

**Time Estimate**: 15-20 minutes for quick test, 2-3 hours for full test
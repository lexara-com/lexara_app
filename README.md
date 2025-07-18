# Engage by Lexara - Product Website

This is the product website for Engage by Lexara, built with Astro and deployed to CloudFlare Workers.

🔗 **Live Sites**:
- Production: https://engage.lexara.app
- CloudFlare Workers: https://engage-lexara-app.cloudswift.workers.dev

## Tech Stack

- **Framework**: Astro (SSR mode)
- **Deployment**: CloudFlare Workers
- **Static Assets**: CloudFlare R2 (via static.lexara.app)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Analytics**: Statsig (client-side only due to CloudFlare Workers limitations)

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- CloudFlare account (for deployment)
- Statsig account (for feature flags - optional)

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:4321`

### Building for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
/
├── src/
│   ├── components/     # Reusable Astro components
│   ├── layouts/        # Page layouts
│   ├── pages/          # Site pages (routes)
│   ├── styles/         # Global styles
│   └── lib/            # Utilities and integrations
├── public/             # Static assets
└── dist/               # Build output (gitignored)
```

## Pages

- **Home** (`/`) - Landing page with hero, features, testimonials, and CTAs
- **Pricing** (`/pricing`) - Pricing tiers with FAQ section
- **Demo** (`/demo`) - Demo request form
- **Contact** (`/contact`) - Contact form
- **Features** (`/features`) - Detailed feature descriptions
- **Industries** (`/industries`) - Industry-specific solutions
- **Integrations** (`/integrations`) - Third-party integrations
- **Resources** (`/resources`) - Resources and guides
- **Help** (`/help`) - Help center
- **Enterprise** (`/enterprise`) - Enterprise solutions
- **Docs** (`/docs`) - Documentation
- **Privacy** (`/privacy`) - Privacy policy
- **Terms** (`/terms`) - Terms of service
- **Cookies** (`/cookies`) - Cookie policy

## Environment Variables

Create a `.env` file based on `.env.example`:

```bash
# Statsig Configuration (optional)
STATSIG_SERVER_SECRET=your_statsig_server_secret_here
PUBLIC_STATSIG_CLIENT_KEY=your_statsig_client_key_here
```

## Deployment to CloudFlare Workers

1. Install Wrangler CLI:
   ```bash
   npm install -g wrangler
   ```

2. Login to CloudFlare:
   ```bash
   wrangler login
   ```

3. Deploy:
   ```bash
   npm run build
   wrangler deploy
   ```

### Static Assets on R2

Images and other static assets are served from CloudFlare R2 bucket `lexara-static` via `static.lexara.app`:

```bash
# Upload images to R2
wrangler r2 object put lexara-static/images/filename.png --file=./public/images/filename.png --remote
```

### Important CloudFlare Workers Considerations

1. **No Static File Serving**: CloudFlare Workers cannot serve static files directly
2. **CSS Inlining**: All CSS is inlined in HTML using `inlineStylesheets: 'always'`
3. **JavaScript Inlining**: All client-side scripts use `is:inline` directive
4. **Images**: Served from R2 bucket via static.lexara.app
5. **JSON Data**: Imported directly instead of fetched at runtime

## Testing

For QA and testing teams:
- 📋 [Quick Test Checklist](./QUICK_TEST_CHECKLIST.md) - 15-20 minute smoke test
- 📖 [Comprehensive Testing Guide](./TESTING_GUIDE.md) - Full test scenarios
- 🐛 [Report Issues](https://github.com/lexara-com/engage-lexara-app/issues)

## Recent Changes

### 2025-01-18
- ✅ Fixed CloudFlare Workers deployment issues
- ✅ Implemented CSS and JavaScript inlining for CloudFlare Workers compatibility
- ✅ Set up R2 bucket for static asset hosting
- ✅ Updated all image references to use static.lexara.app CDN
- ✅ Fixed Testimonials component to import JSON directly
- ✅ Removed ProductShowcase component per design requirements
- ✅ Updated Button component styling (rounded corners instead of fully rounded)
- ✅ Added error handling for Statsig in CloudFlare Workers environment

## Components

### UI Components
- `Button.astro` - Reusable button with variants (primary, secondary, outline, ghost)
- `Section.astro` - Layout section with background variants
- `Container.astro` - Responsive container wrapper
- `Badge.astro` - Status/label badges

### Page Components
- `HeaderLexara.astro` - Main navigation header
- `Hero.astro` - Homepage hero section with chat preview
- `FeaturesGrid.astro` - Feature cards grid
- `AdvancedAI.astro` - AI features showcase
- `Testimonials.astro` - Client testimonials carousel
- `ExperienceCTA.astro` - Call-to-action section
- `TrustedBy.astro` - Client logos section
- `CTA.astro` - Bottom call-to-action
- `Footer.astro` - Site footer with links
- `CookieBanner.astro` - Cookie consent banner

## TODO

- [ ] Add placeholder avatar images for testimonials
- [ ] Enhance testimonials to load from CloudFlare Durable Object
- [ ] Create reusable Card component
- [ ] Create reusable StarRating component
- [ ] Update CTA component to match final Lexara design
- [ ] Implement form submissions for demo/contact pages
- [ ] Add blog section
- [ ] Set up proper analytics tracking with Statsig

## Notes

- Statsig is configured for client-side analytics only due to CloudFlare Workers limitations
- All static assets must be uploaded to R2 bucket and referenced via static.lexara.app
- The site uses Astro's SSR mode for dynamic content while keeping assets fully inline
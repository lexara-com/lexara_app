# Lexara Product Website

The official product website for Engage by Lexara, built with Astro and deployed to CloudFlare Workers across multiple environments.

## 🌐 Live Environments

| Environment | URL | Console URL | Purpose |
|-------------|-----|-------------|---------|
| **Production** | https://lexara.app<br>https://www.lexara.app | https://console.lexara.app | Public-facing production site |
| **Test** | https://test.lexara.app | https://test.console.lexara.app | QA and testing environment |
| **Dev** | https://lexara-app-dev.cloudswift.workers.dev | https://dev.console.lexara.app | Development and staging |

## 🏗️ Tech Stack

- **Framework**: [Astro 5.x](https://astro.build) (SSR mode)
- **Deployment**: CloudFlare Workers
- **Adapter**: [@astrojs/cloudflare](https://docs.astro.build/en/guides/integrations-guide/cloudflare/)
- **Static Assets**: CloudFlare R2 (via static.lexara.app)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Analytics**:
  - Google Analytics (G-RQ7HHFQ4LE) with environment tracking
  - Statsig (feature flags and A/B testing)
- **Session Storage**: CloudFlare KV

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- CloudFlare account with Wrangler CLI configured
- Access to Lexara CloudFlare account

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:4321`

### Building

```bash
npm run build
```

### Preview

```bash
npm run preview
```

### Quality Checks

```bash
npm run lint
npm run typecheck
npm test
```

The same checks run for pull requests targeting `main`. A merge to `main`
automatically builds and deploys the production Worker through GitHub Actions.

## 📁 Project Structure

```
/
├── src/
│   ├── components/     # Reusable Astro components
│   │   ├── ui/         # UI primitives (Button, Badge, etc.)
│   │   ├── Header*.astro
│   │   ├── Hero.astro
│   │   ├── CTA.astro
│   │   └── ...
│   ├── layouts/        # Page layouts
│   │   └── Layout.astro
│   ├── pages/          # Site pages (routes)
│   │   ├── index.astro
│   │   ├── pricing.astro
│   │   ├── features.astro
│   │   └── ...
│   ├── lib/            # Utilities and integrations
│   │   ├── env.ts      # Runtime environment helpers
│   │   ├── analytics.ts # GA environment detection
│   │   └── statsig-server.ts
│   └── styles/         # Global styles
├── functions/          # CloudFlare Workers entry point
│   └── _worker.js      # Custom worker wrapper
├── public/             # Static assets (served via R2)
│   └── data/
├── wrangler.toml       # CloudFlare Workers configuration
└── dist/               # Build output (gitignored)
```

## 🌍 Environment Configuration

The site uses environment-based configuration to route to the appropriate console application:

### Environment Detection

The system automatically detects the environment based on the hostname:
- `lexara.app` or `www.lexara.app` → **Production**
- `test.lexara.app` → **Test**
- `dev.lexara.app` or `*-dev.*.workers.dev` → **Development**
- `localhost` → **Local**

### Console URL Routing

Each environment routes to its corresponding console:
- Production: `https://console.lexara.app`
- Test: `https://test.console.lexara.app`
- Dev: `https://dev.console.lexara.app`

This is configured via runtime environment variables in `wrangler.toml` and accessed through `src/lib/env.ts`.

## 🚢 Deployment

### Deploy to Test

```bash
npm run deploy:test
```

Deploys to `lexara-app-test` worker (default environment).

### Deploy to Dev

```bash
npm run deploy:dev
```

Deploys to `lexara-app-dev` worker.

### Deploy to Production

```bash
npm run deploy:production
```

Deploys to `lexara-app` worker, accessible at `lexara.app` and `www.lexara.app`.

### Worker Names

| Environment | Worker Name | Routes |
|-------------|-------------|--------|
| Test | `lexara-app-test` | `test.lexara.app/*` |
| Dev | `lexara-app-dev` | *(workers.dev only)* |
| Production | `lexara-app` | `lexara.app/*`, `www.lexara.app/*` |

## 📊 Analytics

### Google Analytics

All environments use the same GA4 property (`G-RQ7HHFQ4LE`) with automatic environment tagging:

**Environment Tracking**: Each pageview and event includes an `environment` custom dimension:
- `production` - Traffic from lexara.app
- `test` - Traffic from test.lexara.app
- `development` - Traffic from dev environments

**Filtering in GA4**:
1. Go to **Admin** → **Custom definitions** → **Custom dimensions**
2. Create custom dimension:
   - Dimension name: `environment`
   - Scope: Event
   - Event parameter: `environment`
3. Use comparisons to filter: `environment = production` or `environment = test`

### Statsig

Feature flags and A/B testing configured for client-side analytics:
- Server secret: Set via environment variable
- Client key: Embedded in page

## 🔧 Environment Variables

### Local Development (.env)

```bash
# Statsig Configuration
STATSIG_SERVER_SECRET=secret-xxx
PUBLIC_STATSIG_CLIENT_KEY=client-xxx

# Console URLs (fallback - runtime values preferred)
PUBLIC_CONSOLE_URL=https://test.console.lexara.app
PUBLIC_API_URL=https://test.console.lexara.app/api/public
```

### CloudFlare Workers (wrangler.toml)

Environment-specific variables are set in `wrangler.toml`:

```toml
# Test environment (default)
[vars]
PUBLIC_CONSOLE_URL = "https://test.console.lexara.app"

# Dev environment
[env.dev]
vars = { PUBLIC_CONSOLE_URL = "https://dev.console.lexara.app" }

# Production environment
[env.production]
vars = { PUBLIC_CONSOLE_URL = "https://console.lexara.app" }
```

## 📄 Pages

- **Home** (`/`) - Landing page with hero, features, testimonials
- **Pricing** (`/pricing`) - Pricing tiers with FAQ
- **Features** (`/features`) - Detailed feature descriptions
- **Demo** (`/demo`) - Demo request form
- **Contact** (`/contact`) - Contact form
- **Help** (`/help`) - Help center
- **Enterprise** (`/enterprise`) - Enterprise solutions
- **Industries** (`/industries`) - Industry-specific solutions
- **Integrations** (`/integrations`) - Third-party integrations
- **Resources** (`/resources`) - Resources and guides
- **Docs** (`/docs`) - Documentation
- **Privacy** (`/privacy`) - Privacy policy
- **Terms** (`/terms`) - Terms of service
- **Cookies** (`/cookies`) - Cookie policy

## 🎨 Key Components

### UI Components
- `Button.astro` - Reusable button with variants (primary, secondary, outline, ghost)
- `Section.astro` - Layout section with background variants
- `Container.astro` - Responsive container wrapper
- `Badge.astro` - Status/label badges

### Page Components
- `HeaderLexara.astro` - Main navigation header with environment-aware links
- `Hero.astro` - Homepage hero section with chat preview
- `FeaturesGrid.astro` - Feature cards grid
- `AdvancedAI.astro` - AI features showcase
- `Testimonials.astro` - Client testimonials carousel
- `CTA.astro` - Call-to-action sections
- `FooterLexara.astro` - Site footer with links
- `CookieBanner.astro` - Cookie consent banner

## 🗄️ CloudFlare Resources

### KV Namespaces

- **SESSION**: Shared across all environments
  - ID: `2007770273e44a0e8a8938ef8fa4a22a`
  - Used for session storage

### R2 Buckets

- **lexara-static**: Static assets (images, fonts, etc.)
  - Accessible via: `https://static.lexara.app`
  - Upload: `wrangler r2 object put lexara-static/path/to/file.png --file=./local/file.png`

## 🔒 CloudFlare Workers Considerations

1. **No Static File Serving**: Workers cannot serve static files directly
2. **CSS Inlining**: All CSS is inlined using `inlineStylesheets: 'always'`
3. **JavaScript Inlining**: Client scripts use `is:inline` directive
4. **Images**: Served from R2 bucket via `static.lexara.app`
5. **JSON Data**: Imported directly instead of fetched at runtime
6. **SSR Mode**: Full server-side rendering for all pages
7. **Asset Limits**: 100KB inline limit for assets

## 🧪 Testing

For QA and testing teams:
- 📋 [Quick Test Checklist](./QUICK_TEST_CHECKLIST.md) - 15-20 minute smoke test
- 📖 [Comprehensive Testing Guide](./TESTING_GUIDE.md) - Full test scenarios
- 🐛 [Report Issues](https://github.com/lexara-com/lexara_app/issues)

## 🔄 Git Workflow

### Branching
- `main` - Production-ready code
- Feature branches: `feature/description`
- Bug fixes: `fix/description`

### Committing Changes

```bash
# Stage changes
git add .

# Commit with descriptive message
git commit -m "Add feature: description"

# Push to GitHub
git push origin main
```

## 📝 Recent Updates

### 2025-10-24
- ✅ Converted from CloudFlare Pages to Workers deployment
- ✅ Implemented multi-environment configuration (test, dev, production)
- ✅ Added runtime environment detection for console URL routing
- ✅ Configured Google Analytics with environment tracking
- ✅ Set up proper routes for lexara.app and www.lexara.app
- ✅ Added SESSION KV namespace binding across all environments
- ✅ Renamed repository from `engage-lexara-app` to `lexara_app`
- ✅ Updated local folder structure for consistency

### 2025-01-18
- ✅ Fixed CloudFlare Workers deployment issues
- ✅ Implemented CSS and JavaScript inlining
- ✅ Set up R2 bucket for static asset hosting
- ✅ Updated all image references to use static.lexara.app CDN
- ✅ Fixed Testimonials component to import JSON directly
- ✅ Added error handling for Statsig

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test on dev environment
4. Deploy to test for QA
5. Submit for review
6. Deploy to production after approval

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/lexara-com/lexara_app/issues)
- **Documentation**: See additional docs in this repository
- **Team**: Contact the Lexara development team

## 📜 License

Proprietary - Lexara, Inc. All rights reserved.

---

Built with ❤️ by the Lexara team

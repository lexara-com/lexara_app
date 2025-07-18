# Engage by Lexara - Product Website

This is the product website for Engage by Lexara, built with Astro and deployed to CloudFlare Workers.

## Tech Stack

- **Framework**: Astro
- **Deployment**: CloudFlare Workers
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Feature Flags**: Statsig (integration pending)

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

- **Home** (`/`) - Landing page with product overview
- **Features** (`/features`) - Detailed feature descriptions
- **Pricing** (`/pricing`) - Pricing tiers and plans
- **Documentation** (`/docs`) - Product documentation

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

## TODO

- [ ] Complete Statsig integration
- [ ] Add Figma design implementation
- [ ] Configure CloudFlare Workers deployment
- [ ] Add analytics tracking
- [ ] Implement contact forms
- [ ] Add blog section

## Notes

- Statsig integration is temporarily stubbed out. The correct npm packages need to be identified and installed.
- The site is designed to be mostly static with server-side rendering for feature flags.
- All pages include navigation and footer components for consistency.
# CloudFlare Workers Deployment Guide

## Prerequisites

1. CloudFlare account
2. Wrangler CLI installed (`npm install -g wrangler`)
3. Environment variables ready

## Deployment Steps

### 1. CloudFlare Setup

1. Log in to CloudFlare dashboard
2. Get your Account ID from the right sidebar
3. Update `account_id` in `wrangler.toml`

### 2. Create KV Namespace

```bash
# Create KV namespace for sessions
wrangler kv:namespace create "SESSION"
```

Copy the ID from the output and update the `id` field under `[[kv_namespaces]]` in `wrangler.toml`.

### 3. Set Environment Variables

Set these secrets in CloudFlare:

```bash
# Statsig server secret (required for analytics)
wrangler secret put STATSIG_SERVER_SECRET

# Console URL (if different from default)
wrangler secret put PUBLIC_CONSOLE_URL
```

### 4. Deploy

```bash
# Login to CloudFlare
wrangler login

# Deploy to CloudFlare Workers
wrangler deploy
```

### 5. Configure Custom Domain (Optional)

1. In CloudFlare dashboard, go to Workers & Pages
2. Select your worker
3. Go to Settings > Triggers
4. Add a custom domain (e.g., engage.lexara.app)

### 6. Environment Variables in CloudFlare Dashboard

After deployment, you can also set environment variables in the CloudFlare dashboard:

1. Go to Workers & Pages
2. Select your worker
3. Go to Settings > Variables
4. Add:
   - `STATSIG_SERVER_SECRET`: Your Statsig server secret
   - `PUBLIC_STATSIG_CLIENT_KEY`: Your Statsig client key
   - `PUBLIC_CONSOLE_URL`: https://console.lexara.app (or your console URL)

## Testing

Your worker will be available at:
- `https://engage-lexara-app.<your-subdomain>.workers.dev` (workers.dev domain)
- `https://engage.lexara.app` (if you set up a custom domain)

## Troubleshooting

### KV Namespace Error
If you see "Invalid binding `SESSION`", make sure you've:
1. Created the KV namespace
2. Added the namespace ID to wrangler.toml
3. Redeployed with `wrangler deploy`

### Environment Variables Not Working
- Use `wrangler secret list` to see configured secrets
- Check CloudFlare dashboard > Workers > Your Worker > Settings > Variables

### Build Errors
- Make sure all dependencies are installed: `npm install`
- Try clearing the build cache: `rm -rf dist .astro`
- Rebuild: `npm run build`
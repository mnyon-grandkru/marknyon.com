# Deploy marknyon.com (Coming Soon)

Worker name: **`marknyon-com`**  
Account ID: **`120d0baf442854f3f9b21e237688ae98`** (Mark@grandkru.com)

## Interim preview (live now)

A temporary Workers preview is deployed while account-level deploy credentials are pending:

| URL | Status |
|-----|--------|
| https://marknyon-com.scarce-somersault.workers.dev | **200** — Coming Soon page (browser verified) |
| https://marknyon-com.mark-120.workers.dev | **404** — not deployed on Grand Kru account yet |
| https://www.marknyon.com | **525** — origin down, no Worker attached |
| https://marknyon.com | **522** — origin down, no Worker attached |

Temporary preview expires in ~60 minutes unless claimed. Claim URL (sign in to Grand Kru account to keep it):

https://dash.cloudflare.com/claim-preview?claimToken=qv0c-KA2e45qf5TmljLQM9PQqyTEMPh4wCl0h9X1KjY

## Production deploy (Grand Kru account)

### 1. GitHub repository secrets

Add these to **mnyon-grandkru/marknyon.com** → Settings → Secrets and variables → Actions:

| Secret | Value |
|--------|-------|
| `CLOUDFLARE_API_TOKEN` | API token with **Account → Workers Scripts → Edit** and **Account → Account Settings → Read** (see below) |
| `CLOUDFLARE_ACCOUNT_ID` | `120d0baf442854f3f9b21e237688ae98` |

Create token: https://dash.cloudflare.com/profile/api-tokens → **Create Custom Token**

Suggested permissions:

- Account → Workers Scripts → Edit
- Account → Workers Routes → Edit (custom domains)
- Account → Account Settings → Read
- Zone → DNS → Edit (for `marknyon.com`, if wrangler does not auto-create records)

**Note:** Doppler tokens `CLOUDFLARE_ZONE_EDIT_API_TOKEN` and `CLOUDFLARE_ZERO_TRUST_API_TOKEN` are zone-scoped and **cannot** deploy Workers (verified).

### 2. Merge PR #18, then CI deploys

Merge [PR #18](https://github.com/mnyon-grandkru/marknyon.com/pull/18). Push to `main` runs `.github/workflows/deploy-cloudflare.yml` (tests + `npm run deploy`).

Expected production URLs after deploy:

- https://marknyon-com.mark-120.workers.dev
- https://marknyon.com
- https://www.marknyon.com

### 3. Manual deploy (alternative)

```bash
npm ci
npm test
export CLOUDFLARE_ACCOUNT_ID=120d0baf442854f3f9b21e237688ae98
export CLOUDFLARE_API_TOKEN=<Workers Scripts Edit token>
npm run deploy
```

Or: `npx wrangler login` (browser OAuth) then `npm run deploy`.

### Verify

```bash
curl -sI https://marknyon-com.mark-120.workers.dev | head -1
curl -s https://marknyon-com.mark-120.workers.dev | grep -i "Coming soon"
curl -sI https://www.marknyon.com | head -1
```

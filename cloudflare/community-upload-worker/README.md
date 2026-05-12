# Community Upload Worker

This Worker receives OctoPie community profile submissions from the static BlueTools site.

Flow:

1. Browser uploads a `.octopie` file to the Worker.
2. Worker validates the JSON manifest.
3. Worker stores the file in R2 under `pending/octopie/<submission-id>.octopie`.
4. Browser shows that the upload is complete.
5. You review pending files in Cloudflare R2 manually.
6. Approved `.octopie` files are added to `public/community/octopie/profiles/`.

## Cloudflare setup

1. Create an R2 bucket, for example `bluetools-community`.
2. Copy `wrangler.example.toml` to `wrangler.toml`.
3. Set the real R2 bucket name in `wrangler.toml`.
4. Deploy the Worker. No GitHub token is required for this version.

## Deploy

Copy the example config first:

```powershell
Copy-Item cloudflare/community-upload-worker/wrangler.example.toml cloudflare/community-upload-worker/wrangler.toml
```

Then edit `wrangler.toml` if the bucket name or route should be different.

```powershell
npx wrangler deploy --config cloudflare/community-upload-worker/wrangler.toml
```

Recommended route: `https://community-upload.bluetools.io/submit`

Until this Worker route exists in Cloudflare DNS, the website cannot upload profiles and will show that the upload service is not live.

If you use another URL, build the site with:

```powershell
$env:NEXT_PUBLIC_COMMUNITY_UPLOAD_ENDPOINT="https://your-worker.example.com/submit"
npm run build
```

## Publishing approved profiles

Download approved `.octopie` files from R2 and place them in:

```text
public/community/octopie/profiles/
```

During `npm run build`, the site reads each `.octopie` manifest and automatically creates a community card with a download button.

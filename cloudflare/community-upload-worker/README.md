# Community Upload Worker

This Worker receives OctoPie community profile submissions from the static BlueTools site.

Flow:

1. Browser uploads a `.octopie` file to the Worker.
2. Worker validates the JSON manifest.
3. Worker stores the file in R2 under `pending/octopie/<submission-id>.octopie`.
4. Worker creates a GitHub issue for you with the R2 location.
5. Browser shows that the upload is complete.
6. You review the GitHub issue and download the pending file from R2.
7. Approved `.octopie` files are added to `public/community/octopie/profiles/`.

## Cloudflare setup

1. Create an R2 bucket, for example `bluetools-community`.
2. Copy `wrangler.example.toml` to `wrangler.toml`.
3. Set the real R2 bucket name in `wrangler.toml`.
4. Add a GitHub token as a Worker secret if you want automatic review issues.
5. Deploy the Worker.

## GitHub issue notifications

Create a fine-grained GitHub token with access to `bluetoolsio/website-bluetools` and permission to create issues.

Then add it to the Worker as a secret:

```powershell
npx wrangler secret put GITHUB_TOKEN --config cloudflare/community-upload-worker/wrangler.toml
```

If you edit the Worker in the Cloudflare dashboard instead, add this under:

```text
Worker > Settings > Variables and Secrets > Add secret
```

Name:

```text
GITHUB_TOKEN
```

Value:

```text
<your GitHub token>
```

Without this secret, uploads still go into R2, but no GitHub issue is created.

## Deploy

Copy the example config first:

```powershell
Copy-Item cloudflare/community-upload-worker/wrangler.example.toml cloudflare/community-upload-worker/wrangler.toml
```

Then edit `wrangler.toml` if the bucket name or route should be different.

```powershell
npx wrangler deploy --config cloudflare/community-upload-worker/wrangler.toml
```

Current route: `https://bluetools-community-upload.magnus-884.workers.dev/submit`

Optional custom route later: `https://community-upload.bluetools.io/submit`

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

## Where pending uploads are in R2

`pending/octopie/numpad-abc.octopie` is the object key. In the Cloudflare R2 dashboard, it behaves like folders:

1. Open `R2 Object Storage`.
2. Open bucket `bluetools-community`.
3. Open `pending`.
4. Open `octopie`.
5. Download the uploaded `.octopie` file.

The `pending` and `octopie` folders appear only after the first successful upload.

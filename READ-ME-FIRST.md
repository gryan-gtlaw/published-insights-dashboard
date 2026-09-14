# G+T Published Insights Dashboard - GitHub Pages Setup

This package contains the complete static dashboard in the `docs` folder. No build process or GitHub Actions workflow is required for publishing through GitHub Pages.

## Before Publishing

- Confirm the approved repository visibility before uploading anything.
- GitHub Pages sites are usually public. Private Pages access requires the right GitHub Enterprise Cloud organisation settings.
- The bundled Founders Grotesk webfonts will be downloadable by anyone who can access the site.
- Confirm that publishing the webfonts is permitted under G+T policy and the font licence.

## First-Time Browser Setup

Use this process when the GitHub repository does not exist yet.

1. Sign in at `https://github.com`.
2. Select the **+** menu in the top-right, then **New repository**.
3. Name the repository `published-insights-dashboard`.
4. Add an optional description, such as `G+T Published Insights Dashboard`.
5. Choose the repository visibility approved by G+T.
6. Select **Create repository**.
7. On the repository page, select **Add file**, then **Upload files**. If the repository is empty, use the **uploading an existing file** link.
8. Drag the complete `docs` folder from this package into the upload area.
9. Confirm the uploaded files show `docs/index.html`, not `docs/docs/index.html`.
10. Enter the commit message `Add published insights dashboard`.
11. Commit directly to the `main` branch.
12. Open **Settings** for the repository.
13. In the left sidebar, under **Code and automation**, select **Pages**.
14. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
15. Select the `main` branch and the `/docs` folder, then select **Save**.
16. Wait for GitHub to publish the site. The Pages screen will show a **Visit site** link when it is ready.

The address will normally be:

`https://YOUR-GITHUB-NAME.github.io/published-insights-dashboard/`

Example:

`https://gryan-gtlaw.github.io/published-insights-dashboard/`

## Updating An Existing Site In The Browser

Use this process when the repository and GitHub Pages site already exist.

### Update Publication Data Only

Use this when the dashboard design and functionality are unchanged and only the source report has changed.

1. Export the latest report as CSV.
2. Rename the file exactly `published-insights.csv`.
3. In GitHub, open the existing `published-insights-dashboard` repository.
4. Open `docs/data`.
5. Select **Add file**, then **Upload files**.
6. Upload the replacement `published-insights.csv`.
7. Confirm the upload path is `docs/data/published-insights.csv`.
8. Enter a clear commit message, such as `Update published insights data`.
9. Commit directly to the `main` branch.
10. Wait a minute or two, then refresh the published GitHub Pages site.

The dashboard loads `docs/data/published-insights.csv` automatically. The top-right upload button is only for temporary browser preview and does not save changes to GitHub.

### Update Dashboard Files

Use this when the dashboard HTML, CSS, JavaScript, fonts, logo, or other static files have changed.

1. Open the existing `published-insights-dashboard` repository in GitHub.
2. Open the `docs` folder.
3. Upload the replacement files into the same paths used by the current site.
4. Keep the folder structure unchanged:
   - `docs/index.html`
   - `docs/assets/`
   - `docs/brand/`
   - `docs/fonts/`
   - `docs/data/published-insights.csv`
5. Do not upload a second nested `docs` folder. The repository should not contain `docs/docs/index.html`.
6. Use a clear commit message, such as `Update dashboard files`.
7. Commit directly to the `main` branch.
8. Wait for GitHub Pages to republish, then hard-refresh the site.

If you are replacing the whole dashboard, it is often safest to delete the old generated files inside `docs/assets` before uploading the new `assets` files. This avoids leaving unused hashed JavaScript or CSS files in the repository.

## Updating An Existing Site With Local Git

Use this process if you have the repository cloned locally.

1. Open Terminal.
2. Go to the local repository:

```bash
cd /path/to/published-insights-dashboard
```

3. Pull the latest version:

```bash
git pull
```

4. Replace the files inside `docs` with the updated files from this package.
5. Check what changed:

```bash
git status
```

6. Stage the changed files:

```bash
git add docs
```

7. Commit the update:

```bash
git commit -m "Update published insights dashboard"
```

8. Push to GitHub:

```bash
git push
```

GitHub Pages will publish the updated version automatically after the push.

## Common Problems

- **404 page:** Check that `index.html` is directly inside `docs` and that Pages is configured for `main` and `/docs`.
- **Old version still showing:** Hard-refresh the page, or wait a few minutes for GitHub Pages/CDN caching to clear.
- **Unstyled page:** Ensure `assets`, `fonts`, `brand`, and `data` are uploaded inside `docs`.
- **Logo missing:** Check that the logo file exists in `docs/brand` and that the filename in `index.html` or the bundled JavaScript matches exactly.
- **Fonts missing:** Check that the `.woff2` files exist in `docs/fonts`.
- **CSV changes not showing:** Confirm the file is named exactly `published-insights.csv` and is located at `docs/data/published-insights.csv`.
- **Pages option unavailable:** The G+T GitHub organisation may disable Pages or restrict the permitted visibility.
- **Site is public unexpectedly:** Stop and check repository and Pages visibility with a G+T GitHub administrator before sharing the URL.

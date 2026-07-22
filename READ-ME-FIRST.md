# G+T Published Insights Dashboard — GitHub Pages setup

This package contains the complete static dashboard in the `docs` folder. No build process or GitHub Actions workflow is required.

## Before publishing

- GitHub Pages sites are normally public. Private Pages access requires a suitable GitHub Enterprise Cloud organisation configuration.
- The bundled Founders Grotesk webfonts will be downloadable by anyone who can access the site.
- Confirm that publishing the webfonts is permitted under G+T policy and the font licence.

## Browser-only setup

1. Sign in at https://github.com.
2. Select the **+** menu in the top-right, then **New repository**.
3. Name the repository `published-insights-dashboard`.
4. Add an optional description such as `G+T Published Insights Dashboard`.
5. Choose the repository visibility approved by G+T.
6. Select **Create repository**.
7. On the repository page, select **Add file** and then **Upload files**. If the repository is empty, use the **uploading an existing file** link instead.
8. Drag the complete `docs` folder from this package into the upload area. The uploaded repository must show `docs/index.html`, not `docs/docs/index.html`.
9. Enter the commit message `Add published insights dashboard` and commit directly to the `main` branch.
10. Open **Settings** for the repository.
11. In the left sidebar, under **Code and automation**, select **Pages**.
12. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
13. Select the `main` branch and the `/docs` folder, then select **Save**.
14. Wait for GitHub to publish the site. The Pages screen will display a **Visit site** link when it is ready.

The address will normally be:

`https://YOUR-GITHUB-NAME.github.io/published-insights-dashboard/`

## Updating the dashboard later

To update publication data only:

1. Export the latest source as CSV.
2. Rename it exactly `published-insights.csv`.
3. In GitHub, open `docs/data`.
4. Select **Add file → Upload files** and upload the replacement CSV.
5. Commit the change directly to `main`.

The dashboard loads `docs/data/published-insights.csv` automatically. The top-right upload button is only a temporary browser preview and does not change the repository.

To update the dashboard application itself, replace the changed files inside `docs` and commit them to `main`.

GitHub Pages will publish the updated version automatically.

## Common problems

- **404 page:** Check that `index.html` is directly inside `docs` and that Pages is configured for `main` and `/docs`.
- **Unstyled page:** Ensure the `assets`, `fonts` and `brand` folders were uploaded inside `docs`.
- **Pages option unavailable:** The G+T GitHub organisation may disable Pages or restrict the permitted visibility.
- **Site is public unexpectedly:** Stop and check repository and Pages visibility with a G+T GitHub administrator before sharing the URL.

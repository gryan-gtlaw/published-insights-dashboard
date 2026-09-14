# G+T Published Insights Dashboard

## Website endpoint

https://gryan-gtlaw.github.io/published-insights-dashboard/

This is the expected GitHub Pages address for this repository, assuming no custom domain is configured. Confirm the live address in **Settings > Pages** after deployment.

Repository: https://github.com/gryan-gtlaw/published-insights-dashboard

Package prepared: 15 September 2026.

## Upload using the GitHub website

1. Extract `GitHub-Pages-upload-2026-09-15.zip` on your computer and open the extracted folder.
2. Open the repository above and select the **main** branch.
3. Select **Add file > Upload files**.
4. Drag the contents of the extracted folder into the upload area: `index.html`, `README.md`, and the `assets`, `fonts`, and `brand` folders. Upload the contents, not the enclosing dated folder or ZIP file. Preserve the folders and their contents.
5. Enter a commit message such as `Update dashboard - upload-only start screen`, then select **Commit changes** on the main branch.
6. Open **Settings > Pages**. Under **Build and deployment**, choose **Deploy from a branch**, branch **main**, and folder **/(root)**. Save. If these are already selected, leave them as they are.
7. Check **Actions** for a successful Pages deployment, then open the website endpoint above. Publishing may take a few minutes.

The repository root must contain `index.html` alongside `assets/`, `fonts/`, and `brand/`. No installation or build commands are needed on GitHub.

## Updating an existing site

Use the same **Add file > Upload files** process at the repository root. Upload the complete contents of each new package together and commit the changes. Files with matching paths are replaced; new files are added. You do not need to delete the existing website first or change Pages settings for each update.

Generated files in `assets/` have versioned filenames. Older versions can remain during an update; the new `index.html` points to the new versions. Only remove obsolete files after confirming that the updated site works. Preserve any existing custom-domain configuration.

If the old version still appears, wait for deployment to finish and reload with Command+Shift+R on Mac or Ctrl+Shift+R on Windows. Check that `index.html` was uploaded to the root, not inside another folder.

## What to expect

The dashboard starts with no data. It shows a link to the latest published insights CSV and the **Upload Excel/CSV** button at the top right. Upload a CSV or Excel file to populate the dashboard, filters, tables, and charts. Refreshing the page clears the uploaded data.

Uploaded files are processed in the browser; this package does not save them to GitHub or include a default CSV. Fonts and the favicon are included locally. The visible top-left logo has been removed.

## Package contents

- `index.html`: website entry page.
- `assets/`: compiled dashboard JavaScript and styling.
- `fonts/`: Founders Grotesk WOFF2 fonts.
- `brand/`: favicon asset.
- `README.md`: these instructions.

## Reference

[GitHub's Pages publishing instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

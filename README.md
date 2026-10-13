# REVEX

A free US healthcare revenue cycle management (RCM) training site: the RCM cycle, insurance and payers, claim forms, denials, non-denials, specialty billing, interactive scenarios, a glossary and interview prep.

The site is plain HTML, CSS and JavaScript generated from simple text files, hosted free on GitHub Pages with HTTPS.

---

## Part 1: Put it online (one time, about 15 minutes)

You need your free GitHub account. You don't need to install anything.

### 1. Create the repository
1. Sign in at github.com.
2. Click **+** (top right) → **New repository**.
3. Repository name: `revex`. Choose **Public**. Leave everything else unticked. Click **Create repository**.

### 2. Upload the files
1. On the new repository page, click **uploading an existing file**.
2. Unzip `revex-site.zip` on your computer. Open the `revex` folder.
3. Select **everything inside** that folder (including the `.github` folder; on Mac press Cmd+Shift+. to show hidden folders, on Windows enable “Hidden items” in File Explorer's View menu) and drag it into the GitHub upload box.
4. Click **Commit changes**.

> If the `.github` folder doesn't upload by drag and drop, create it by hand: click **Add file → Create new file**, type `.github/workflows/deploy.yml` as the name, paste the contents of that file from the zip, and commit.

### 3. Turn on GitHub Pages
1. In the repository, open **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Open the **Actions** tab. You'll see “Build and deploy REVEX” running. When it shows a green tick (1–2 minutes), your site is live at:

   `https://rajeshnayak3-dev.github.io/`

### 4. Put your details in
Open `site.yaml` in GitHub, click the pencil icon, and change:

```yaml
site_url: https://rajeshnayak3-dev.github.io
author:
  name: Rajesh Nayak
  title: RCM Quality Specialist
  experience: over 6 years in US healthcare
  role: RCM Quality Specialist making US healthcare RCM training free for anyone who wants in
  linkedin: https://www.linkedin.com/in/rajesh-nayak-317198249/
mission: The "Why REVEX exists" text on the home page.
```

Click **Commit changes**. The site rebuilds automatically in about a minute.

### 5. Get found on Google
1. Go to Google Search Console (search.google.com/search-console) and add a **URL prefix** property with your site address.
2. Verify using the **HTML tag** method: copy the `content="..."` value, add it to `site.yaml` as `google_verification: "the-value"`, commit, then click Verify.
3. In Search Console, open **Sitemaps** and submit `sitemap.xml`.

Google usually starts showing pages within days to a few weeks.

---

## Part 2: Edit content later (no coding)

All content lives in two folders. Edit any file in GitHub with the pencil icon; the site rebuilds itself when you commit.

| What | Where |
|---|---|
| Site name, author, home menu cards | `site.yaml` |
| Lessons (Start here, RCM cycle, Insurance, Forms, Denials, Non-denials, Interview prep) | `content/<section>/*.md` |
| Denial code pages | `data/denials*.yaml` |
| Specialty guides | `data/specialties-*.yaml` |
| Scenarios | `data/scenarios.yaml` |
| Glossary terms | `data/glossary.yaml` |

### Lesson files
Each lesson starts with a header between `---` lines (title, description, order, level and quiz), followed by normal text. Useful formatting:

- `## Heading` makes a section (and an “On this page” link)
- `**bold**`, `- bullet`, `1. numbered`
- Tables: rows of `| a | b |`
- Callout boxes:

  ```
  !!! tip "Your title"
      Indented text inside the box.
  ```
  Types: `tip`, `warning`, `example`, `mistake`, `interview`, `note`.
- Links to other pages start with `/`, for example `[QMB](/insurance/medicaid-qmb-spend-down/)`.

To add a lesson, copy an existing `.md` file in the same folder, rename it (for example `09_new-topic.md`), and change the header and text. The number at the start sets the order; the rest becomes the web address.

### Quiz questions
In a lesson header:

```yaml
quiz:
  - q: Your question?
    options:
      - First option
      - Second option
    answer: 1        # 0 = first option, 1 = second, ...
    why: Explanation shown after answering.
```

If a value contains a colon followed by a space, wrap it in double quotes.

---

## Part 3: Custom domain (later, optional)

1. Buy a domain (for example `revex.in`) from any registrar.
2. In the repository: **Settings → Pages → Custom domain**, enter the domain and save. Tick **Enforce HTTPS** once it's available.
3. At your registrar, add the DNS records GitHub shows (four `A` records for the root domain, or a `CNAME` for `www`).
4. In `site.yaml`, set `site_url: https://revex.in` and add `custom_domain: revex.in`.

---

## For developers

```bash
pip install -r requirements.txt
python build.py            # builds ./dist
python build.py --preview  # links include index.html, for opening files directly
python -m http.server -d dist 8000
```

No frameworks, no tracking and no cookies. Learner progress is stored in the browser's localStorage only.

## Disclaimer

Educational content only. CPT® is a registered trademark of the American Medical Association; descriptions here are simplified summaries. All patients, claims and amounts are fictional.

# Setting up REVEX certification (one time, about 10 minutes)

The certification exam needs a small free service that scores exams, stores issued
certificates and answers "is this certificate real?". It runs as a Google Apps Script
attached to a Google Sheet in your own Google account.

## 1. Create the sheet and script
1. Go to sheets.google.com and create a blank spreadsheet. Name it **REVEX Certificates**.
2. Click **Extensions → Apps Script**.
3. Delete everything in `Code.gs` in the editor.
4. Open `apps-script/Code.gs` in the REVEX GitHub repository, click the **copy raw file** button, and paste it into the editor.
5. Click the **Save** icon.

## 2. Approve and create the tabs
1. In the function dropdown at the top, choose **setup**, then click **Run**.
2. Google asks for permission. Click **Review permissions**, choose your account, click **Advanced → Go to project (unsafe)**, then **Allow**. (This warning appears for every personal script; the script only reads and writes this one spreadsheet and reads the REVEX answer key from your site.)
3. Back in the sheet, you'll see two new tabs: **Certificates** and **Attempts**.

## 3. Publish it as a web app
1. In the Apps Script editor, click **Deploy → New deployment**.
2. Click the gear icon next to "Select type" and choose **Web app**.
3. Description: `REVEX certification`.
4. **Execute as:** Me. **Who has access:** Anyone.
5. Click **Deploy**, then copy the **Web app URL** (it ends in `/exec`).

## 4. Connect it to the site
1. In the GitHub repository, open `site.yaml` and click the pencil icon.
2. Paste the URL into `api_url` under `certification`, for example:
   ```yaml
   certification:
     api_url: https://script.google.com/macros/s/AKfy..../exec
   ```
3. Commit. The site rebuilds in about a minute and the exam opens.

## Day-to-day
- **Issued certificates** appear in the Certificates tab. To revoke one, change its Status cell from `Valid` to `Revoked`.
- **Certificate IDs** look like `RVX-202610-ABCD2345` (8 random characters, so IDs can't practically be guessed). The verification page shows only the name, certificate title, issue date and status; scores stay in the sheet.
- **Before you announce it**, test the full flow yourself: one failed attempt, one pass, verify the new ID, verify a made-up ID, revoke your test certificate and verify it again.
- **Attempts** lists every exam submission with name and score.
- **When you change quiz questions**, nothing needs re-pasting: the script reads the latest answer key from the site automatically (cached for 30 minutes).
- **If you edit Code.gs logic** (rare), use **Deploy → Manage deployments → Edit → Version: New version → Deploy** so the same URL keeps working.

## Good to know
- The service is free within Google's daily Apps Script quotas, which are far above what a training site needs.
- The answer key is published with the site so the script can stay in sync. Because every answer is also taught in the lessons, the exam is effectively open-book; the certificate shows that someone completed and passed REVEX's exam, not that they were supervised.
- Names and scores are personal data. Mention in your About page that they're stored to verify certificates (already included), and delete rows on request.

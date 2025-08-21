# Burtons Spotter App v5 – Installation Guide

This guide will walk you through setting up the Spotter App using **GitHub Pages** and integrating it with **Wix backend**.

---

## 1. Host Files on GitHub Pages
1. Create a GitHub account (if you don’t already have one).  
2. Create a new repository called `burtons-spotter-app`.  
3. Upload the following files from this ZIP into the repository root:
   - `index.html`
   - `styles.css`
   - `app.js`
   - `idb.js`
   - `manifest.json`
   - `service-worker.js`
   - `/icons/` folder

4. Commit & push the files.  
5. Go to **Settings → Pages** in GitHub.  
   - Set branch to **main** and folder to `/root`.  
   - Save changes.  
6. GitHub will generate a public link like:  
   `https://yourusername.github.io/burtons-spotter-app/`

This is your **app install link**.

---

## 2. Add Backend to Wix
1. In Wix Editor → Dev Mode → turn on **Velo**.  
2. Create a new backend web module:  
   `Backend/spotters.jsw`  
3. Paste the code from `/wix-backend/spotters.jsw` into that file.  
4. Publish your Wix site.

This backend function will handle saving Spotter form submissions into your **SpotterSubmissions** collection.

---

## 3. Create SpotterSubmissions Collection in Wix
In **Content Manager** create a new collection called `SpotterSubmissions` with these fields:

| Field Key         | Field Name                               | Type      |
|-------------------|------------------------------------------|-----------|
| firstName         | First Name                               | Text      |
| lastName          | Last Name                                | Text      |
| email             | Email                                    | Text      |
| phone             | Phone                                    | Text      |
| propertyAddress   | Address of submitted property...         | Text      |
| message           | Message                                  | Rich Text |
| image             | Upload Property Image                    | Image     |
| submissionTime    | Submission Time (system auto-generated) | Date/Time |

Make sure permissions are set to **Form Submission: Anyone**.

---

## 4. App Installation (PWA)
1. On a mobile device, open your GitHub Pages link.  
2. A prompt will appear: *"Add to Home Screen"*.  
3. Tap it → the Burtons Spotter App will install with icon & offline mode.  

---

## 5. Webhook / Zapier Integration (Optional)
In `app.js`, look for the section marked:
```js
// 🔗 PLACEHOLDER: Send data to external webhook here
```
You can replace the placeholder URL with:
- Zapier Webhook
- Airtable API
- Google Sheets API

This allows external automation.

---

✅ Done! You now have the Burtons Spotter App v5 running with GitHub hosting + Wix backend.


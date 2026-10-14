# Dancer Portfolio: Setup & Hosting Guide

A static, no-build website. Everything you edit lives in `js/data.js`.

```
dancer-portfolio/
├── index.html
├── css/style.css
├── js/data.js      <- EDIT THIS (your text, links, dates)
├── js/main.js
├── images/         <- put hero.jpg, about.jpg here
│   └── gallery/    <- 01.jpg, 02.jpg, ...
└── .nojekyll
```

## 1. Personalise it
1. Open `js/data.js` and replace the placeholder name, bio, achievements, events and links.
2. Add photos: `images/hero.jpg`, `images/about.jpg`, and gallery shots in `images/gallery/`.
   Keep each image under ~500 KB (resize at https://squoosh.app) so the site loads fast.
3. Videos: upload to YouTube, then paste the video ID (the part after `v=`) into `data.js`.
4. Preview locally: `cd dancer-portfolio && python3 -m http.server 8000`, then open http://localhost:8000

## 2. Hosting on GitHub (since athirakr94.github.io is taken)

`athirakr94.github.io` is your one free "user site". You still have good options:

### Option A: Project page (quickest, same account)
1. Create a new repo named e.g. `dance` under `athirakr94`.
2. Upload these files to the repo root (or `git push`, see below).
3. Repo → Settings → Pages → Source: "Deploy from a branch" → `main` / `(root)`.
4. Your site goes live at **https://athirakr94.github.io/dance/** after a minute or two.
   (All paths in this site are relative, so it works under `/dance/` with no changes.)

### Option B: A separate GitHub account or organisation (cleaner URL)
Create a free organisation or second account named, say, `athira-dance`, and add a repo named
`athira-dance.github.io`. The site will be at **https://athira-dance.github.io**.

### Option C: Your own domain (best for reach and branding)
1. Buy a domain such as `athirakr.com` (~₹800-1,000/yr from Namecheap, GoDaddy, Cloudflare, etc.).
2. Create a file named `CNAME` in this folder containing just your domain, e.g. `www.athirakr.com`.
3. At your domain registrar add DNS records:
   - `www`  CNAME → `athirakr94.github.io`
   - apex/root `@` A records → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
4. Repo → Settings → Pages → Custom domain → enter it, then tick "Enforce HTTPS".
   (Check GitHub's current docs for the DNS values before you set this up.)

### Pushing with git
```bash
cd dancer-portfolio
git init -b main
git add .
git commit -m "Initial dancer portfolio"
git remote add origin https://github.com/athirakr94/dance.git
git push -u origin main
```

## 3. Make people find it (reach)
- Edit the `<title>`, description and `og:image` in `index.html` (this controls how links look on WhatsApp/Instagram).
- Put the link in your Instagram, YouTube and LinkedIn bios.
- Add the site to Google: https://search.google.com/search-console
- Include your city and dance style in the title (e.g. "Name · Kathak Dancer in Hyderabad") for local search.

## 4. Contact form
By default the form opens the visitor's email app addressed to you. For a real form,
create a free form at https://formspree.io and paste its URL into `formEndpoint` in `data.js`.

# US Tow Marketing — How To Make Changes

Your live site: **https://www.ustowmarketing.com**
(also reachable at the Railway URL: https://us-tow-marketing-production.up.railway.app)

---

## 1. Where everything lives

| What | File |
|---|---|
| **All page content & layout** (every section, all the text) | `src/components/USToWMarketing.jsx` ← this is the main one |
| Page title / browser tab / SEO description | `index.html` |
| Brand colors (graphite, cyan, gold, etc.) | `tailwind.config.js` |
| Global styles / font | `src/index.css` |

**99% of edits — wording, panels, pricing, links — happen in `src/components/USToWMarketing.jsx`.**

---

## 2. The colors (so you can reuse them)

| Name | Hex | Used for |
|---|---|---|
| `graphite` | #14181F | dark background |
| `panel` | #1B212C | cards |
| `steel` | #232B38 | borders |
| `alliance` | #1B3A6B | deep blue accents |
| `cyan` | #19D3E0 | primary accent / highlights |
| `gold` | #F5B324 | buttons / call-to-action |

In the code you'll see these as classes like `text-cyan`, `bg-gold`, `border-steel`.

---

## 3. To preview changes on your own computer (before they go live)

Open a terminal in this folder and run:

```
npm install      (only the first time)
npm run dev
```

Then open the link it prints — usually **http://localhost:5173/**.
The preview auto-refreshes every time you save a file. Press `Ctrl + C` in the terminal to stop it.

---

## 4. To PUBLISH changes to the live website

The site auto-deploys from GitHub. After you (or Claude) edit files:

```
git add -A
git commit -m "describe what you changed"
git push origin main
```

That's it. **Railway sees the push and rebuilds automatically in ~2 minutes**, and the live site updates. No other steps.

> Tip: the easiest way is to just tell Claude what you want changed — Claude edits the file, commits, and pushes for you.

---

## 5. The lead form

The "Reserve Your Seat" form (bottom of the page) opens the visitor's email app
with all their answers pre-filled, addressed to **chris@bluecollarai.online**.
To change that address or the questions, edit the `handleReserve` function near the
top of `src/components/USToWMarketing.jsx`.

> Later upgrade option: connect the form to GoHighLevel (GHL) or a form service so
> submissions are captured automatically instead of via the visitor's email app.

---

## 6. Hosting / domain facts (for reference)

- **Host:** Railway — workspace "Blue Collar AI", project "US Tow Marketing".
  Auto-deploys from GitHub repo `chrispeer69/us-tow-marketing`, branch `main`.
- **Domain:** GoDaddy. `www` is a CNAME → `kg2wd5z6.up.railway.app`.
  The bare `ustowmarketing.com` forwards to `https://www.ustowmarketing.com`.
- **Do NOT** add a `railway.json` or a `serve` start script — Railway's built-in
  static server already handles it (those caused a port error before).

---

## 7. Quick "I want to change X" cheat sheet

| I want to… | Look for… (in `src/components/USToWMarketing.jsx`) |
|---|---|
| Change the headline | the `<h1>` near `{/* HERO */}` |
| Edit the 3 "Why" panels | the list under `{/* WHY */}` |
| Edit the 6 product cards | the list under `{/* FEATURES */}` |
| Change prices or plan names | the `pricingPlans` array at the top |
| Edit testimonials | the `testimonials` array at the top |
| Change the ecosystem links | `{/* ECOSYSTEM */}` section |
| Change the form / questions | the `handleReserve` function + `{/* CTA */}` section |
| Change the footer | `{/* FOOTER */}` section |

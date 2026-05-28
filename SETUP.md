# Mylo's Website — Local Setup Guide

Use this file when setting up or running the site on your Windows PC.

---

## 1. Which folder to use

Always work from the **project root** (not inside `src`):

```
C:\Users\navak\Downloads\mylos-website
```

This folder contains `package.json`, `README.md`, `.env.example`, and `public\images\`.

---

## 2. Open PowerShell in the right place

**Option A — You are already in PowerShell:**

```powershell
cd C:\Users\navak\Downloads\mylos-website
```

**Option B — From File Explorer:**

1. Open `C:\Users\navak\Downloads\mylos-website`
2. Click the address bar, type `powershell`, press Enter

Check that your prompt ends with `mylos-website` before running `npm` commands.

---

## 3. First-time setup (run once)

```powershell
cd C:\Users\navak\Downloads\mylos-website
Copy-Item .env.example .env
npm.cmd install
```

- `Copy-Item` creates your local `.env` file (optional social links).
- Use **`npm.cmd`** if you see a “running scripts is disabled” error (see section 5).

---

## 4. Start the site (every time you work on it)

```powershell
cd C:\Users\navak\Downloads\mylos-website
npm.cmd run dev
```

Then open in your browser:

**http://localhost:5173**

Stop the server: press `Ctrl + C` in that PowerShell window.

### Other useful commands

```powershell
npm.cmd run build      # Production build (output in dist\)
npm.cmd run serve      # Preview the production build
npm.cmd run typecheck  # TypeScript check
```

---

## 5. Fix: “running scripts is disabled” (PowerShell)

If you see:

```text
npm : File C:\Program Files\nodejs\npm.ps1 cannot be loaded because running scripts is disabled...
```

**Quick fix — use `.cmd` instead of `npm`:**

```powershell
npm.cmd install
npm.cmd run dev
```

**Permanent fix (recommended) — allow scripts for your user only:**

```powershell
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
```

Type `Y` to confirm, then you can use:

```powershell
npm install
npm run dev
```

**Alternative — use Command Prompt (cmd.exe):**

```cmd
cd C:\Users\navak\Downloads\mylos-website
npm install
npm run dev
```

---

## 6. Site images (your photos)

These files are in the project:

| Order | File | Used for |
|-------|------|----------|
| **First** | `public\images\hero-boba.png` | Home hero, Boba menu page |
| **Second** | `public\images\fruit-tea.png` | Home boba section, Boba menu page |

Paths are set in:

```
src\lib\site-config.ts
```

```ts
heroBoba: "/images/hero-boba.png",
fruitTea: "/images/fruit-tea.png",
```

To replace a photo: overwrite the file in `public\images\` (keep the same name), then refresh the browser (`Ctrl + Shift + R` for a hard refresh).

Ice cream and About still use placeholder URLs in `site-config.ts` until you add more images there.

---

## 7. What to edit before launch

| What | File |
|------|------|
| Addresses, hours, phones, maps links | `src\lib\site-config.ts` → `locations` |
| Menu items and prices | `src\lib\menu-data.ts` |
| Instagram / X links | `.env` in project root |

### Optional social links (`.env`)

Copy from `.env.example` if needed:

```env
PORT=5000
BASE_PATH=/

# Uncomment and fill in when ready:
# VITE_INSTAGRAM_URL=https://instagram.com/yourhandle
# VITE_X_URL=https://x.com/yourhandle
```

Social buttons stay hidden until those URLs are set.

---

## 8. Pages on the site

| URL | Page |
|-----|------|
| http://localhost:5173/ | Home |
| http://localhost:5173/boba | Full boba menu |
| http://localhost:5173/ice-cream | Ice cream menu |
| http://localhost:5173/about | Our story |
| http://localhost:5173/find-us | Locations |
| http://localhost:5173/privacy | Privacy policy |
| http://localhost:5173/terms | Terms of use |

---

## 9. Quick checklist

- [ ] In folder `C:\Users\navak\Downloads\mylos-website`
- [ ] Ran `Copy-Item .env.example .env` (once)
- [ ] Ran `npm.cmd install` (once, or after dependency changes)
- [ ] Ran `npm.cmd run dev`
- [ ] Opened http://localhost:5173
- [ ] Updated real addresses in `src\lib\site-config.ts` before going live

---

## 10. Push to GitHub (get your repo link)

Your project is committed **locally**. There is no GitHub link yet until you create a repo and push.

### Step 1 — Create an empty repo on GitHub

1. Go to https://github.com/new  
2. Repository name: e.g. `mylos-website`  
3. Leave it **empty** (no README, no .gitignore — you already have those)  
4. Click **Create repository**  
5. Copy the URL GitHub shows, e.g. `https://github.com/YOUR_USERNAME/mylos-website.git`

### Step 2 — Connect and push (PowerShell)

Replace `YOUR_USERNAME` with your GitHub username:

```powershell
cd C:\Users\navak\Downloads\mylos-website
git remote add origin https://github.com/YOUR_USERNAME/mylos-website.git
git branch -M main
git push -u origin main
```

### Your GitHub link (after push)

```text
https://github.com/YOUR_USERNAME/mylos-website
```

That is the repo link. Share it or open it in the browser to confirm the code is online.

**Note:** `.env` is not committed (secrets stay local). Only `.env.example` is in the repo.

---

## 11. More detail

See **README.md** for project structure, build/deploy notes, and the full pre-launch checklist.

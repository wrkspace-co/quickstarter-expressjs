# Wrkspace + Express.js Quickstarter

A minimal but modern boilerplate for building **TypeScript‑driven** Express.js back‑end apps that ship with:

* Tailwind CSS (compiled by Webpack)
* ESLint + Prettier with auto‑fix on every build
* Nodemon‑powered auto‑restart during development
* A black full‑screen landing page ready to re‑skin

> Built and curated by [Wrkspace](https://wrkspace.co) to jump‑start new ideas in seconds.

---

## 🚀 Getting Started (local)

```bash
# 1 — Install deps
pnpm install     # or yarn / npm

# 2 — Kick off the multi‑watcher dev server
pnpm dev         # compiles TS + Tailwind, restarts on save

# 3 — Open the landing page
http://localhost:3000
```

---

## 🖥️ Running in Wrkspace

Wrkspace improves project startups by wrapping then inside a game changer **1-Click start/stop** replicable local environment.

1. **Download Wrkspace last version from**
   → [https://updater.wrkspace.co/download](https://updater.wrkspace.co/download)
2. After installing, click on Create Workspace.
3. Insert the repo URL or the local folder.
4. Follow the interactive modal that will helps you to setup your project.
5. Start / Stop ExpressJS with a single click with no complications.

---

## Project Structure

```
.
├── src/                  # TypeScript source
│   ├── middleware/
│   ├── routes/
│   ├── controllers/
│   ├── server.ts         # Express entry‐point
│   ├── styles.css        # Tailwind directives
│   └── views/            # Static HTML views
│       └── index.html    # Landing page
├── public/
│   └── css/style.css     # Compiled Tailwind output (generated)
├── webpack.config.js     # Multi‑compiler (server & client)
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── package.json          # Scripts (pnpm / yarn / npm)
```

---

## Available Scripts

| Script              | Purpose                                                                             |
| ------------------- | ----------------------------------------------------------------------------------- |
| `dev`               | Runs Webpack in watch mode (server TS + Tailwind CSS) and auto‑restarts via Nodemon |
| `build`             | Compiles TypeScript + CSS once for production                                       |
| `start`             | Runs the production build from `dist/`                                              |
| `lint` / `lint:fix` | ESLint in check or auto‑fix mode                                                    |
| `format`            | Prettier‑write over source & views                                                  |

> **Note:** The examples above use **pnpm**; swap for `yarn` or `npm run` if preferred.

---

## Environment Variables

| Var    | Default | Description             |
| ------ | ------- | ----------------------- |
| `PORT` | `3000`  | Port exposed by Express |

Create a `.env` in the project root to override.

---

## Licence

MIT © Wrkspace – do what you wish, give credit when you can.

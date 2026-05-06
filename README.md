# Rubén López C. — Portfolio

My personal portfolio site, where I introduce myself, showcase the projects I've worked on, and publish articles about my journey as a Full-stack Developer.

> 🌐 **Live demo:** _coming soon_
> 📧 **Contact:** [rubenldc1412@gmail.com](mailto:rubenldc1412@gmail.com) · [LinkedIn](https://www.linkedin.com/in/rubenldc/) · [GitHub](https://github.com/RuxCastillo)

---

## ✨ About this project

This site was built **from scratch** using React + TypeScript + Vite. The visual design is inspired by an open-source portfolio I came across and really liked — I rebuilt the entire codebase on my own as a way to practice and put my own spin on it (animations, structure, content, blog system, etc.).

> **Design inspiration:** [abdulrahman.id](https://github.com/abdulrcs/abdulrahman.id) by [@abdulrcs](https://github.com/abdulrcs) — full credit to the original author for the design direction. The implementation in this repo (components, animations, routing, blog system, content) is entirely my own work, written from scratch in React + TypeScript.

## 🚀 Tech stack

- **React 19** + **TypeScript** — component-based UI with strict typing
- **Vite** — fast dev server and optimized production builds
- **React Router v7** — client-side routing for the home, projects and blog sections
- **Framer Motion** — scroll-triggered and entry animations
- **CSS Modules** — scoped styles, with shared design tokens in `variables.css`
- **Lucide / React Icons** — icon set
- **ESLint** + **TypeScript ESLint** — linting and type-aware rules

## 🧩 Features

- Responsive layout with a custom mobile sidebar nav
- Animated sections that fade in as you scroll
- Projects gallery with reusable `ProjectCard` and tech tags
- Blog system with dynamic routing (`/blog/:id`) and structured content blocks
- Accessible markup (semantic HTML, `aria-label`s, alt text)
- Direct contact links (LinkedIn, Email, GitHub)

## 📂 Project structure

```
portfolio/
├── public/                # Static assets (favicon, images)
├── escritos/              # Blog content (TS data files)
│   └── Blog/
└── src/
    ├── assets/            # Images bundled with the app
    ├── components/        # Reusable UI components
    │   ├── AboutMe/
    │   ├── Blog/
    │   ├── Content/
    │   ├── CreativeWorks/
    │   ├── Home/
    │   ├── Icon/
    │   ├── Icons/
    │   ├── KeepInTouch/
    │   ├── LatestArticle/
    │   ├── NavBar/
    │   ├── ProjectCard/
    │   ├── Projects/
    │   ├── Tags/
    │   └── Title/
    ├── pages/
    │   └── Start/         # Layout wrapper (NavBar + Outlet)
    ├── App.tsx            # Router configuration
    ├── main.tsx           # Entry point
    └── *.css              # Reset, base styles and CSS variables
```

## 🛠️ Getting started

Requirements: **Node.js 18+** and **npm**.

```bash
# 1. Clone the repo
git clone https://github.com/RuxCastillo/portfolio.git
cd portfolio/portfolio

# 2. Install dependencies
npm install

# 3. Run the dev server
npm run dev
```

The site will be available at `http://localhost:5173`.

### Available scripts

| Script            | What it does                                  |
| ----------------- | --------------------------------------------- |
| `npm run dev`     | Starts the Vite dev server with HMR           |
| `npm run build`   | Type-checks the project and builds for prod   |
| `npm run preview` | Serves the production build locally           |
| `npm run lint`    | Runs ESLint over the codebase                 |

## ✍️ Adding a new blog post

1. Create a new `.ts` file under `escritos/Blog/` exporting a default object with `title`, `date`, `readTime`, `about` and a `blocks` array (`type: 'heading' | 'text'`).
2. Register it in [`Content.tsx`](src/components/Content/Content.tsx) under the `paths` map.
3. Add an entry to the blogs list in [`Blog.tsx`](src/components/Blog/Blog.tsx).

## 👤 About me

I'm Rubén López C., a Full-stack Web Developer currently working at **ITBS**, where I started as an intern and grew into a full-time developer. I enjoy turning ideas into functional and elegant web experiences, learning new technologies and building things that real people use.

- 💼 Web Developer @ ITBS
- 🎯 Currently specializing in Full-stack development
- 📝 I write about my experiences on the [blog section](https://github.com/RuxCastillo/portfolio) of this site
- 🎮 When I'm not coding: movies, anime and PC gaming

## 📄 License

This project is open source. Feel free to look around and learn from the code — please don't copy the content (texts, images, identity) verbatim.

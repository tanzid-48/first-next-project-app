# 🎮 My Play Store App

A modern, responsive Play Store clone built with **Next.js 15**, **Tailwind CSS**, and **DaisyUI** — featuring app browsing, install/uninstall functionality, and a live analytics dashboard.

🌐 **Live Demo:** [my-play-store-app.vercel.app/apps](https://my-play-store-app.vercel.app/apps)
📦 **Repository:** [github.com/tanzid-48/first-next-project-app](https://github.com/tanzid-48/first-next-project-app)

---

## ✨ Features

- 🔍 **Browse Apps** — Explore apps with ratings, download counts, and size info
- 📲 **Install / Uninstall** — One-click install and uninstall with toast notifications
- 🔔 **Toast Notifications** — Beautiful alerts powered by [Sonner](https://sonner.emilkowal.ski/)
- 📊 **Dashboard** — Live pie chart showing installed apps breakdown (Recharts)
- 📋 **Installed Apps Page** — View and manage all installed apps
- ⚡ **Context API** — Global state management for installed apps across pages
- 📱 **Responsive Design** — Mobile-friendly layout with Tailwind CSS + DaisyUI

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js 15](https://nextjs.org/) | React framework (App Router) |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |
| [DaisyUI](https://daisyui.com/) | UI component library |
| [Recharts](https://recharts.org/) | Dashboard pie chart |
| [Sonner](https://sonner.emilkowal.ski/) | Toast notifications |
| [React Context API](https://react.dev/reference/react/createContext) | Global state management |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/tanzid-48/first-next-project-app.git

# Navigate into the project
cd first-next-project-app

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
src/
└── app/
    ├── apps/
    │   └── [id]/          # Dynamic app details page
    ├── context/
    │   ├── InstallAppContext.js       # Context definition
    │   └── InstallAppsProvider.jsx    # Context provider
    ├── dashboard/
    │   └── page.jsx       # Dashboard with pie chart
    ├── installed/
    │   └── page.jsx       # Installed apps page
    ├── layout.js          # Root layout
    └── page.js            # Home / Apps listing page

components/
├── Navbar.jsx
├── Footer.jsx
├── AppsCard.jsx           # App card component
└── InstallButton.jsx      # Install button with context
```

---

## 📸 Pages

| Page | Route | Description |
|---|---|---|
| Home / Apps | `/apps` | Browse all available apps |
| App Details | `/apps/[id]` | Detailed view of a single app |
| Installed Apps | `/installed` | View & uninstall installed apps |
| Dashboard | `/dashboard` | Analytics pie chart |

---

## 🧠 How It Works

1. **Context API** — `InstallAppContext` stores the list of installed apps globally
2. **Install** — Clicking "Install Now" adds the app to global state with a success toast
3. **Uninstall** — Clicking "Uninstall" removes the app from state with an error toast
4. **Dashboard** — Reads from the same context and renders a live pie chart

---

## 🙌 Author

**Tanzid** — [@tanzid-48](https://github.com/tanzid-48)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

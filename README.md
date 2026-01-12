# Dan Letscher - Personal Portfolio

A modern, animated personal portfolio website built with Next.js 14, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Modern Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Smooth Animations**: Powered by Framer Motion for buttery-smooth transitions
- **Responsive Design**: Looks great on all devices
- **Scrollspy Navigation**: Active section highlighting as you scroll
- **Dark Theme**: Sleek dark mode with bold accent colors
- **Performance Optimized**: Static export for lightning-fast loading
- **SEO Ready**: Full meta tags, Open Graph, and structured data

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Building for Production

To create a static export for GitHub Pages:

```bash
npm run build
```

The static files will be generated in the `out/` directory.

## 🚀 GitHub Pages Deployment

This site is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Automatic Deployment

1. **Push to `main` branch** - The GitHub Actions workflow will automatically:
   - Install dependencies
   - Build the static site
   - Deploy to GitHub Pages

2. **Enable GitHub Pages** (first-time setup):
   - Go to your repository **Settings** → **Pages**
   - Under "Build and deployment", set **Source** to **GitHub Actions**

3. **View your site** at `https://<username>.github.io` or your custom domain

### Workflow Details

The deployment workflow (`.github/workflows/deploy.yml`) performs:

```
Checkout → Setup Node.js 20 → Install deps → Build → Deploy to Pages
```

### Manual Deployment

If you prefer manual deployment:

```bash
# Build the static site
npm run build

# The `out/` directory contains the static files
# Upload these to any static hosting provider
```

### Custom Domain

To use a custom domain:
1. Add your domain to the `CNAME` file in the repository root
2. Configure DNS settings with your domain provider
3. Enable HTTPS in GitHub Pages settings


## 🎨 Design Features

- **Gradient Text Effects**: Beautiful animated gradients on headings
- **Glass Morphism**: Frosted glass effects on cards and navigation
- **Glow Effects**: Subtle glow animations on interactive elements
- **Timeline Layout**: Alternating timeline for work experience
- **Floating Elements**: Animated background orbs and decorations
- **Scroll Progress**: Visual scroll progress indicator at the top

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Static Export (GitHub Pages ready)

## 📁 Project Structure

```
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles and Tailwind
│   │   ├── layout.tsx       # Root layout with metadata
│   │   └── page.tsx         # Main page component
│   └── components/
│       ├── AnimatedSection.tsx
│       ├── EducationSection.tsx
│       ├── ExperienceSection.tsx
│       ├── Footer.tsx
│       ├── HeroSection.tsx
│       ├── Navigation.tsx
│       ├── ScrollProgress.tsx
│       ├── Timeline.tsx
│       └── index.ts
├── public/                   # Static assets
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Pages deployment workflow
├── next.config.js           # Next.js configuration
├── tailwind.config.ts       # Tailwind configuration
├── package.json             # Dependencies and scripts
└── tsconfig.json            # TypeScript configuration
```

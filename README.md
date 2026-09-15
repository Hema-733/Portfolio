# Developer Portfolio Website

A modern, responsive, and high-performance portfolio website built with **React**, **Vite**, and **Tailwind CSS**.

## ✨ Features
- 🌓 **Dark / Light Mode** with persistent theme toggle
- 📱 **Fully Responsive** across all screen sizes
- 🎯 **Interactive Project Showcase** with filters and case study modals
- 📊 **Quick Stats & Skills Matrix** with search and category filters
- 📄 **Printable & Downloadable Resume View**
- 📬 **Interactive Contact Section** with copy-to-clipboard functionality
- 🚀 **Automated GitHub Actions Deployment**

## 🛠️ Tech Stack
- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 🚀 Getting Started

### Local Development
```bash
# Install dependencies
npm install

# Start local dev server
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build
```bash
npm run build
```
The output will be placed in the `dist/` directory.

## 📝 Customizing Your Information
All profile content, projects, skills, education, and links can be customized in a single file:
- `src/data/portfolioData.js`

## 🌐 Deployment

### 1. GitHub Pages (Automated via GitHub Actions)
1. Push this repository to GitHub:
   ```bash
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. In your GitHub repository:
   - Go to **Settings** > **Pages**
   - Under **Build and deployment** > **Source**, select **GitHub Actions**
   - The included workflow `.github/workflows/deploy.yml` will automatically build and publish your site whenever you push to `main`!

### 2. Vercel
1. Go to [vercel.com](https://vercel.com) and log in with GitHub.
2. Click **Add New Project** and import your portfolio repository.
3. Keep default settings (Framework preset: Vite, Root directory: `./`).
4. Click **Deploy**.

### 3. Netlify
1. Go to [netlify.com](https://netlify.com) and log in with GitHub.
2. Click **Add new site** > **Import an existing project**.
3. Select your repository.
4. Build command: `npm run build`, Publish directory: `dist`.
5. Click **Deploy site**.

# JiaHuan Yan - Personal Portfolio Website

A professional portfolio website showcasing my work in AI, embodied intelligence, and infrastructure.

## 📋 About

This is a single-page portfolio website built with HTML5, CSS3, and vanilla JavaScript. It features:

- **Responsive Design:** Works on desktop, tablet, and mobile devices
- **Mixed Media Carousel:** Capability sections auto-rotate images and videos from local folders
- **Smooth Scrolling:** Navigation links smoothly scroll to sections
- **Physical Intelligence Color Scheme:** Elegant, low-saturation design

## 🚀 Features

- **Hero Section:** Introduction, education, work experience, and contact links
- **Capability Sections:** Embodied Intelligence, Robotics Simulation, Foundation Models Training, and AI Infrastructure
- **Auto-Generated Media Manifest:** Frontend reads a generated manifest instead of hardcoded file lists
- **Publications:** Research papers and publication links
- **Fully Responsive:** Mobile-first responsive design

## 📁 Project Structure

```
.
├── index.html                 # Main portfolio page
├── assets/
│   └── media/                # Capability media folders + generated manifest
├── scripts/
│   └── generate-media-manifest.mjs
├── tests/
│   └── generate-media-manifest.test.mjs
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions deployment
├── README.md                 # This file
└── docs/
    └── superpowers/
        ├── specs/            # Design specifications
        └── plans/            # Implementation plans
```

## 🛠️ Setup

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/jiahuan-yan/jiahuan-yan.github.io.git
cd jiahuan-yan.github.io
```

2. Open `index.html` in a web browser or use a local server:
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if http-server is installed)
npx http-server
```

3. Visit `http://localhost:8000` in your browser

### Deployment to GitHub Pages

1. Ensure repository name is `[username].github.io`
2. Push to main/master branch:
```bash
git push origin main
```

3. GitHub Actions automatically deploys (see `.github/workflows/deploy.yml`)

4. Website will be live at `https://[username].github.io`

Notes:

- The deployment workflow regenerates `assets/media/media-manifest.json` before publishing, so renamed or newly added media files are picked up automatically.
- If you want a custom domain later, add it deliberately instead of hardcoding `cname` in the workflow.

### Using a Custom Domain

1. Add your domain to `CNAME` file in repository root:
```
yourdomain.com
```

2. Update DNS records to point to GitHub Pages:
   - Type A records: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
   - Or CNAME: `[username].github.io`

3. Enable custom domain in GitHub Pages settings

## 📝 Content Updates

To update portfolio content, edit `index.html`:

- **Navigation links:** Edit `<nav>` section
- **Hero content:** Edit `.hero` section
- **Capability copy:** Edit `.skill-item` content blocks
- **Publications:** Edit `.publication-item` elements

To add or remove capability media:

1. Put files inside the matching capability folder under `assets/media/<capability>/`
2. Run:
```bash
node scripts/generate-media-manifest.mjs
```
3. Commit the updated media files and `assets/media/media-manifest.json`

To update the portrait:

1. Replace `assets/media/me.JPG`
2. Commit the updated image

To update papers:

1. Update `assets/media/papers/info`
2. Add or replace screenshots in `assets/media/papers/`
3. Run:
```bash
node scripts/generate-papers-data.mjs
```
4. Commit the updated screenshots and `assets/media/papers/papers-data.json`

Supported media types:

- Images: `jpg`, `jpeg`, `png`, `gif`, `webp`
- Videos: `mp4`, `mov`, `webm`

Notes:

- Files ending in `-original` are ignored by the manifest generator, which is useful for keeping local backups next to production media
- Mixed image/video folders are rendered automatically by the frontend carousel
- Paper screenshots are normalized in layout with a fixed thumbnail container, so source image sizes can differ

## 🎨 Customization

### Colors

Edit CSS custom properties in the `<style>` section:

```css
:root {
    --bg-primary: #faf9f7;
    --bg-card: #f0ede9;
    --text-primary: #2a2a2a;
    --text-secondary: #6b6b6b;
    --accent: #d4ccc4;
}
```

### Typography

Modify font sizes in CSS for different sections (h1, h2, etc.)

### Animations

Adjust transition durations and timing functions in CSS

## 🔗 Links

- [LinkedIn](https://linkedin.com/in/jiahuan-yan)
- [GitHub](https://github.com/jiahuan-yan)
- [Google Scholar](https://scholar.google.com/citations?user=_qGKRv8AAAAJ)

## 📄 License

Personal portfolio website. © 2024 JiaHuan Yan.

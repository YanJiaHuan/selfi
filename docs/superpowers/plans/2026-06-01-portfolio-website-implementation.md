# Personal Portfolio Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a professional personal portfolio website for JiaHuan Yan on GitHub Pages with all sections (Hero, Skills, Projects, Publications) fully functional and responsive.

**Architecture:** 
Single-page HTML5 website with CSS3 styling and vanilla JavaScript for interactive features. All content is embedded in HTML (no backend/database). Image carousels and video auto-play handled via JavaScript. Responsive design using CSS Grid and Flexbox. Deployed to GitHub Pages via simple git push.

**Tech Stack:** HTML5, CSS3, Vanilla JavaScript, GitHub Pages

---

## File Structure

```
selfie/
├── index.html                  # Main portfolio page (all content + styles + scripts)
├── assets/
│   └── images/                 # Project images and screenshots
│       ├── tr3/                # Toilet Cleaning Robot images
│       ├── data-platform/      # Data Platform images
│       ├── gpu-monitor/        # GPU Monitor tool images
│       ├── simulation/         # Simulation environment images
│       ├── text-to-sql/        # Text-to-SQL project images
│       └── poetry/             # Poetry research images
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow for deployment
├── README.md                   # GitHub Pages setup and project documentation
└── docs/superpowers/
    ├── specs/
    │   └── 2026-06-01-personal-portfolio-design.md
    └── plans/
        └── 2026-06-01-portfolio-website-implementation.md (this file)
```

---

## Task 1: Create Index.html with Basic Structure

**Files:**
- Create: `index.html`

**Context:**
This is the main (and only) page. It will contain all HTML, CSS, and JavaScript. We'll start with the basic semantic structure and styling in one file for simplicity (no build step needed for GitHub Pages).

- [ ] **Step 1: Create index.html with HTML skeleton**

Create file `/home/zcai/workspace/selfie/index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JiaHuan Yan - AI Engineer</title>
    <style>
        /* CSS will be added in next tasks */
    </style>
</head>
<body>
    <!-- Navigation will go here -->
    <!-- Hero section will go here -->
    <!-- Skills section will go here -->
    <!-- Projects section will go here -->
    <!-- Publications section will go here -->
    <!-- Footer will go here -->

    <script>
        // JavaScript will go here
    </script>
</body>
</html>
```

- [ ] **Step 2: Add Navigation bar HTML**

Add inside `<body>` at the top (before other content):

```html
<nav>
    <div class="logo">JY</div>
    <ul>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#publications">Publications</a></li>
    </ul>
</nav>
```

- [ ] **Step 3: Add Hero section HTML**

Add inside `<body>` after `<nav>`:

```html
<section class="hero">
    <h1>JiaHuan Yan</h1>
    <p class="subtitle">AI Engineer | Roboticist | AI Infrastructure</p>

    <div class="intro-block">
        <p>Building intelligent systems at the intersection of embodied AI, large language models, and infrastructure. Currently a Senior AI Engineer and Co-founder at an embodied intelligence startup in Hangzhou, focusing on data platforms and compute infrastructure.</p>
    </div>

    <div class="intro-section">
        <h3>Education</h3>
        <ul>
            <li>M.S. in Intelligent Systems, National University of Singapore (2022 - 2023)</li>
            <li>B.S. in Electrical Engineering (2018 - 2022)</li>
        </ul>
    </div>

    <div class="intro-section">
        <h3>Working Experience</h3>
        <ul>
            <li>Senior AI Engineer & Co-founder at embodied intelligence startup (May 2024 - Present) — Leading data platform and compute infrastructure development, architecting multi-node training clusters, optimizing resource allocation</li>
            <li>AI Research Intern at A*STAR, Singapore (Apr 2023 - Aug 2023) — Developed LLM-based Text-to-SQL system, conducted research on prompt engineering and LoRA fine-tuning</li>
        </ul>
    </div>

    <div class="contact-links">
        <a href="mailto:jiahuan.yan@example.com" class="contact-link">Email</a>
        <a href="https://linkedin.com/in/jiahuan-yan" class="contact-link">LinkedIn</a>
        <a href="https://github.com/jiahuan-yan" class="contact-link">GitHub</a>
    </div>
</section>
```

- [ ] **Step 4: Add Core Skills section HTML**

Add inside `<body>` after hero section:

```html
<section class="content-section" id="skills">
    <h2 class="section-title">Core Skills</h2>
    <div class="skills-grid">
        <div class="skill-card">
            <h3>Embodied Intelligence</h3>
            <p class="description">Imitation Learning, VLA, WMA, robot teleoperation</p>
            <div class="project-example">Applied in: Toilet Cleaning Robot, Data Collection Platform</div>
        </div>
        <div class="skill-card">
            <h3>Training Optimization</h3>
            <p class="description">DDP, DeepSpeed, LoRA fine-tuning, distributed training</p>
            <div class="project-example">Applied in: Model scaling, efficient adaptation</div>
        </div>
        <div class="skill-card">
            <h3>LLM & Pre-training</h3>
            <p class="description">Large language model pre-training, prompt engineering, semantic understanding</p>
            <div class="project-example">Applied in: Poetry semantic segmentation, Text-to-SQL systems</div>
        </div>
        <div class="skill-card">
            <h3>AI Infrastructure</h3>
            <p class="description">Server management, cluster setup, compute resource optimization</p>
            <div class="project-example">Applied in: Multi-node training, compute resource allocation</div>
        </div>
        <div class="skill-card">
            <h3>Robotics & ROS2</h3>
            <p class="description">Robot programming, ROS2 ecosystem, hardware integration</p>
            <div class="project-example">Applied in: Robot control systems, real-time data processing</div>
        </div>
        <div class="skill-card">
            <h3>Simulation & Tools</h3>
            <p class="description">Isaac Sim, development of specialized tools and platforms</p>
            <div class="project-example">Applied in: GPU monitoring, simulation environment setup</div>
        </div>
    </div>
</section>
```

- [ ] **Step 5: Add Projects section HTML**

Add inside `<body>` after skills section:

```html
<section class="content-section" id="projects">
    <h2 class="section-title">Projects & Work</h2>
    <div class="projects-grid">
        <div class="project-card" data-images="tr3/img1.jpg,tr3/img2.jpg">
            <div class="project-image">
                <img src="assets/images/placeholder.jpg" alt="Toilet Cleaning Robot" class="project-img">
            </div>
            <div class="project-info">
                <h3>Toilet Cleaning Robot (TR3)</h3>
                <p class="date">2024 - Present</p>
                <div class="tags">
                    <span class="tag">Embodied AI</span>
                    <span class="tag">Hardware</span>
                    <span class="tag">Production</span>
                </div>
            </div>
        </div>

        <div class="project-card" data-images="data-platform/img1.jpg">
            <div class="project-image">
                <img src="assets/images/placeholder.jpg" alt="Data Platform" class="project-img">
            </div>
            <div class="project-info">
                <h3>Data & Training Platform</h3>
                <p class="date">2024 - Present</p>
                <div class="tags">
                    <span class="tag">Infrastructure</span>
                    <span class="tag">ML Ops</span>
                </div>
            </div>
        </div>

        <div class="project-card" data-images="gpu-monitor/img1.jpg">
            <div class="project-image">
                <img src="assets/images/placeholder.jpg" alt="GPU Monitoring" class="project-img">
            </div>
            <div class="project-info">
                <h3>GPU Cluster Monitoring Tool</h3>
                <p class="date">Open Source</p>
                <div class="tags">
                    <span class="tag">Infrastructure</span>
                    <span class="tag">Python</span>
                    <span class="tag">Monitoring</span>
                </div>
            </div>
        </div>

        <div class="project-card" data-images="simulation/img1.jpg">
            <div class="project-image">
                <img src="assets/images/placeholder.jpg" alt="Simulation" class="project-img">
            </div>
            <div class="project-info">
                <h3>Simulation Environment Development</h3>
                <p class="date">Research</p>
                <div class="tags">
                    <span class="tag">Isaac Sim</span>
                    <span class="tag">Robotics</span>
                </div>
            </div>
        </div>

        <div class="project-card" data-images="text-to-sql/img1.jpg,text-to-sql/img2.jpg">
            <div class="project-image">
                <img src="assets/images/placeholder.jpg" alt="Text-to-SQL" class="project-img">
            </div>
            <div class="project-info">
                <h3>LLM-based Text-to-SQL System</h3>
                <p class="date">A*STAR Internship, 2023</p>
                <div class="tags">
                    <span class="tag">LLM</span>
                    <span class="tag">Prompt Engineering</span>
                    <span class="tag">LoRA</span>
                </div>
            </div>
        </div>

        <div class="project-card" data-images="poetry/img1.jpg">
            <div class="project-image">
                <img src="assets/images/placeholder.jpg" alt="Poetry Research" class="project-img">
            </div>
            <div class="project-info">
                <h3>Poetry Semantic Segmentation</h3>
                <p class="date">Master's Research, 2022-2023</p>
                <div class="tags">
                    <span class="tag">NLP</span>
                    <span class="tag">Pre-training</span>
                    <span class="tag">EMNLP</span>
                </div>
            </div>
        </div>
    </div>
</section>
```

- [ ] **Step 6: Add Publications section HTML**

Add inside `<body>` after projects section:

```html
<section class="content-section" id="publications">
    <h2 class="section-title">Publications & Research</h2>
    <div class="publications-list">
        <div class="publication-item">
            <h3>Whole Word Masking for Poetry Semantic Understanding</h3>
            <p class="venue">EMNLP 2023 Findings</p>
            <a href="https://aclanthology.org/2023.findings-emnlp.750.pdf" target="_blank">View on ACL Anthology →</a>
        </div>
        <div class="publication-item">
            <h3>Recent LLM Research Work</h3>
            <p class="venue">ArXiv 2025</p>
            <a href="https://scholar.google.com/citations?user=_qGKRv8AAAAJ&hl=en" target="_blank">View Google Scholar Profile →</a>
        </div>
        <div class="publication-item">
            <h3>Multiple Research Papers</h3>
            <p class="venue">Various venues including SPIE, ACL</p>
            <a href="https://scholar.google.com/citations?user=_qGKRv8AAAAJ&hl=en" target="_blank">View all publications →</a>
        </div>
    </div>
</section>
```

- [ ] **Step 7: Add Footer HTML**

Add inside `<body>` at the end:

```html
<footer>
    <p>© 2024 JiaHuan Yan. Built with care.</p>
</footer>
```

- [ ] **Step 8: Commit HTML structure**

```bash
cd /home/zcai/workspace/selfie
git init  # Initialize repo if not already done
git add index.html
git commit -m "feat: add html structure for all sections (hero, skills, projects, publications)"
```

Expected: Commit successful with message about HTML structure.

---

## Task 2: Add Complete CSS Styling

**Files:**
- Modify: `index.html` (add CSS inside `<style>` tag)

**Context:**
All CSS goes inside the `<style>` tag in the head of index.html. We'll use CSS Grid for responsive layouts and custom properties for the color scheme.

- [ ] **Step 1: Add CSS reset and base styles**

Replace the empty `<style>` block with:

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --bg-primary: #faf9f7;
    --bg-card: #f0ede9;
    --bg-hover: #ede8e2;
    --text-primary: #2a2a2a;
    --text-secondary: #6b6b6b;
    --accent: #d4ccc4;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    background: var(--bg-primary);
    color: var(--text-primary);
    line-height: 1.6;
}

html {
    scroll-behavior: smooth;
}
```

- [ ] **Step 2: Add Navigation styles**

Append to `<style>`:

```css
nav {
    background: var(--bg-primary);
    padding: 20px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--bg-card);
    position: sticky;
    top: 0;
    z-index: 100;
}

.logo {
    font-weight: 700;
    font-size: 18px;
    letter-spacing: 1px;
}

nav ul {
    list-style: none;
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
}

nav a {
    text-decoration: none;
    color: var(--text-primary);
    font-size: 14px;
    transition: color 0.3s ease;
}

nav a:hover {
    color: var(--text-secondary);
}

@media (max-width: 768px) {
    nav {
        flex-direction: column;
        gap: 20px;
        padding: 15px 20px;
    }
    nav ul {
        gap: 15px;
    }
}
```

- [ ] **Step 3: Add Hero section styles**

Append to `<style>`:

```css
.hero {
    padding: 60px 40px 80px 40px;
    max-width: 900px;
    margin: 0 auto;
}

.hero h1 {
    font-size: 48px;
    margin-bottom: 20px;
    font-weight: 700;
    letter-spacing: -1px;
}

.hero .subtitle {
    font-size: 18px;
    color: var(--text-secondary);
    margin-bottom: 40px;
    font-weight: 500;
}

.intro-block {
    margin-bottom: 40px;
}

.intro-block p {
    font-size: 14px;
    color: var(--text-secondary);
    margin-bottom: 20px;
    line-height: 1.8;
}

.intro-section {
    margin-bottom: 40px;
}

.intro-section h3 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 16px;
    color: var(--text-primary);
}

.intro-section ul {
    list-style: none;
    padding-left: 0;
}

.intro-section li {
    font-size: 14px;
    color: var(--text-secondary);
    margin-bottom: 12px;
    padding-left: 24px;
    position: relative;
    line-height: 1.6;
}

.intro-section li:before {
    content: "•";
    position: absolute;
    left: 8px;
    color: var(--accent);
    font-weight: bold;
}

.contact-links {
    display: flex;
    justify-content: flex-start;
    gap: 24px;
    flex-wrap: wrap;
    margin-top: 40px;
}

.contact-link {
    text-decoration: none;
    color: var(--text-primary);
    font-size: 14px;
    border-bottom: 1px solid var(--accent);
    padding-bottom: 2px;
    transition: all 0.3s ease;
}

.contact-link:hover {
    color: var(--text-secondary);
    border-bottom-color: var(--text-secondary);
}

@media (max-width: 768px) {
    .hero {
        padding: 40px 20px 60px 20px;
    }
    .hero h1 {
        font-size: 36px;
    }
    .hero .subtitle {
        font-size: 16px;
    }
}
```

- [ ] **Step 4: Add Content section and Section title styles**

Append to `<style>`:

```css
.content-section {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 40px;
}

.section-title {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 40px;
    margin-top: 60px;
    padding-top: 40px;
    border-top: 1px solid var(--bg-card);
    letter-spacing: -0.5px;
}

@media (max-width: 768px) {
    .content-section {
        padding: 0 20px;
    }
    .section-title {
        font-size: 24px;
    }
}
```

- [ ] **Step 5: Add Skills Grid and Card styles**

Append to `<style>`:

```css
.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    margin-bottom: 60px;
}

.skill-card {
    background: var(--bg-card);
    padding: 24px;
    border-radius: 4px;
    border-left: 3px solid var(--accent);
    transition: all 0.3s ease;
}

.skill-card:hover {
    background: var(--bg-hover);
    transform: translateY(-2px);
}

.skill-card h3 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 12px;
}

.skill-card .description {
    font-size: 13px;
    color: var(--text-secondary);
    margin-bottom: 12px;
    line-height: 1.5;
}

.skill-card .project-example {
    font-size: 12px;
    background: rgba(255, 255, 255, 0.5);
    padding: 8px;
    border-radius: 2px;
    color: var(--text-secondary);
    margin-top: 8px;
}
```

- [ ] **Step 6: Add Projects Grid and Card styles**

Append to `<style>`:

```css
.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin-bottom: 60px;
}

.project-card {
    background: var(--bg-card);
    border-radius: 4px;
    overflow: hidden;
    transition: all 0.3s ease;
    cursor: pointer;
}

.project-card:hover {
    background: var(--bg-hover);
    transform: translateY(-2px);
}

.project-image {
    width: 100%;
    height: 160px;
    overflow: hidden;
    background: linear-gradient(135deg, #e8e3dc 0%, var(--bg-card) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

.project-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.project-info {
    padding: 16px;
}

.project-info h3 {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 6px;
}

.project-info .date {
    font-size: 12px;
    color: #999;
    margin-bottom: 8px;
}

.project-info .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
}

.tag {
    display: inline-block;
    background: rgba(255, 255, 255, 0.6);
    padding: 3px 8px;
    border-radius: 2px;
    font-size: 11px;
    color: var(--text-secondary);
}
```

- [ ] **Step 7: Add Publications list styles**

Append to `<style>`:

```css
.publications-list {
    max-width: 800px;
}

.publication-item {
    background: var(--bg-card);
    padding: 20px;
    margin-bottom: 12px;
    border-radius: 4px;
    border-left: 3px solid var(--accent);
    transition: all 0.3s ease;
}

.publication-item:hover {
    background: var(--bg-hover);
}

.publication-item h3 {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 6px;
}

.publication-item .venue {
    font-size: 12px;
    color: var(--text-secondary);
    margin-bottom: 8px;
}

.publication-item a {
    color: var(--text-secondary);
    text-decoration: none;
    font-size: 12px;
    border-bottom: 1px solid var(--accent);
    transition: all 0.3s ease;
}

.publication-item a:hover {
    color: var(--text-primary);
    border-bottom-color: var(--text-primary);
}
```

- [ ] **Step 8: Add Footer styles**

Append to `<style>`:

```css
footer {
    background: var(--bg-card);
    padding: 30px 40px;
    text-align: center;
    border-top: 1px solid #e8e3dc;
    color: var(--text-secondary);
    font-size: 12px;
    margin-top: 80px;
}

@media (max-width: 768px) {
    footer {
        padding: 20px;
        font-size: 11px;
        margin-top: 60px;
    }
}
```

- [ ] **Step 9: Commit CSS**

```bash
cd /home/zcai/workspace/selfie
git add index.html
git commit -m "feat: add complete css styling with responsive design and color scheme"
```

Expected: Commit successful.

---

## Task 3: Add JavaScript for Image Carousel and Interactions

**Files:**
- Modify: `index.html` (add JavaScript inside `<script>` tag)

**Context:**
JavaScript handles:
1. Image carousel rotation for projects with multiple images
2. Smooth scrolling for navigation links
3. Image lazy loading if needed

- [ ] **Step 1: Add image carousel script**

Replace the empty `<script>` section with:

```javascript
// Image carousel for project cards with multiple images
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card[data-images]');
    
    projectCards.forEach(card => {
        const imagesStr = card.getAttribute('data-images');
        const images = imagesStr.split(',').map(img => img.trim());
        
        if (images.length > 1) {
            const imgElement = card.querySelector('.project-img');
            let currentIndex = 0;
            
            // Rotate images every 5 seconds
            setInterval(() => {
                currentIndex = (currentIndex + 1) % images.length;
                imgElement.src = 'assets/images/' + images[currentIndex];
            }, 5000);
        }
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Optional: Add fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Apply observer to cards
document.querySelectorAll('.skill-card, .project-card, .publication-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(10px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
});
```

- [ ] **Step 2: Verify script is placed correctly**

The `<script>` block should be at the end of `<body>`, after all HTML content. Check that it's inside the closing `</body>` tag.

- [ ] **Step 3: Commit JavaScript**

```bash
cd /home/zcai/workspace/selfie
git add index.html
git commit -m "feat: add javascript for image carousel and smooth scrolling"
```

Expected: Commit successful.

---

## Task 4: Create GitHub Pages Configuration

**Files:**
- Create: `.github/workflows/deploy.yml`
- Create: `README.md`

**Context:**
GitHub Pages requires a simple setup. We'll create a workflow file for automatic deployment and a README explaining the setup.

- [ ] **Step 1: Create GitHub workflows directory**

```bash
mkdir -p /home/zcai/workspace/selfie/.github/workflows
```

- [ ] **Step 2: Create deploy.yml for GitHub Pages**

Create file `/home/zcai/workspace/selfie/.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main, master ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v3
    
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./
        cname: jiahuan-yan.com  # Optional: if using custom domain
```

- [ ] **Step 3: Create README.md**

Create file `/home/zcai/workspace/selfie/README.md`:

```markdown
# JiaHuan Yan - Personal Portfolio Website

A professional portfolio website showcasing my work in AI, embodied intelligence, and infrastructure.

## 📋 About

This is a single-page portfolio website built with HTML5, CSS3, and vanilla JavaScript. It features:

- **Responsive Design:** Works on desktop, tablet, and mobile devices
- **Image Carousel:** Project cards with multiple images auto-rotate
- **Smooth Scrolling:** Navigation links smoothly scroll to sections
- **Physical Intelligence Color Scheme:** Elegant, low-saturation design

## 🚀 Features

- **Hero Section:** Introduction, education, work experience, and contact links
- **Skills Grid:** 6 core technical skills with real-world applications
- **Projects Showcase:** 6 major projects with images, descriptions, and tags
- **Publications:** Research papers and publication links
- **Fully Responsive:** Mobile-first responsive design

## 📁 Project Structure

```
.
├── index.html                 # Main portfolio page
├── assets/
│   └── images/               # Project images
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
- **Skills:** Edit `.skill-card` elements
- **Projects:** Edit `.project-card` elements
- **Publications:** Edit `.publication-item` elements

To add project images:

1. Place images in `assets/images/` with appropriate subfolder
2. Update `data-images` attribute in project card
3. Commit and push changes

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
```

- [ ] **Step 4: Commit GitHub Pages configuration**

```bash
cd /home/zcai/workspace/selfie
git add .github/workflows/deploy.yml README.md
git commit -m "feat: add github pages deployment workflow and readme"
```

Expected: Commit successful.

---

## Task 5: Create Placeholder Image Assets

**Files:**
- Create: `assets/images/placeholder.jpg`
- Create asset directories

**Context:**
We need placeholder images for project cards. Later, real images can be added.

- [ ] **Step 1: Create image directories**

```bash
mkdir -p /home/zcai/workspace/selfie/assets/images/{tr3,data-platform,gpu-monitor,simulation,text-to-sql,poetry}
```

- [ ] **Step 2: Create a simple placeholder image**

Create a minimal placeholder using HTML/CSS and save as SVG (which browsers render as images):

Create file `/home/zcai/workspace/selfie/assets/images/placeholder.svg`:

```svg
<svg width="300" height="160" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#e8e3dc;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#f0ede9;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="300" height="160" fill="url(#grad)"/>
  <text x="150" y="80" font-size="14" fill="#999" text-anchor="middle" dominant-baseline="middle">
    Image placeholder
  </text>
</svg>
```

- [ ] **Step 3: Update index.html to use SVG placeholder**

Replace all instances of `src="assets/images/placeholder.jpg"` with `src="assets/images/placeholder.svg"`

Specifically, in all `.project-image` sections, change:
```html
<img src="assets/images/placeholder.jpg" alt="..." class="project-img">
```

to:

```html
<img src="assets/images/placeholder.svg" alt="..." class="project-img">
```

- [ ] **Step 4: Commit placeholder assets**

```bash
cd /home/zcai/workspace/selfie
git add assets/ index.html
git commit -m "feat: add image directories and placeholder assets"
```

Expected: Commit successful.

---

## Task 6: Update Contact Information

**Files:**
- Modify: `index.html`

**Context:**
Update placeholder email, LinkedIn, and GitHub URLs with actual contact information.

- [ ] **Step 1: Update contact links in Hero section**

In the `.contact-links` section, find and update:

```html
<div class="contact-links">
    <a href="mailto:Evelina_Blakekvj@bsdmail.com" class="contact-link">Email</a>
    <a href="https://linkedin.com/in/jiahuan-yan" class="contact-link">LinkedIn</a>
    <a href="https://github.com/jiahuan-yan" class="contact-link">GitHub</a>
</div>
```

(Use actual LinkedIn URL and GitHub username when available)

- [ ] **Step 2: Verify all contact information**

Check that:
- Email link is correct: `mailto:Evelina_Blakekvj@bsdmail.com`
- LinkedIn URL is valid (if available)
- GitHub URL points to correct profile (if available)

- [ ] **Step 3: Commit contact information**

```bash
cd /home/zcai/workspace/selfie
git add index.html
git commit -m "feat: update contact information with actual links"
```

Expected: Commit successful.

---

## Task 7: Test Responsiveness and Cross-Browser Compatibility

**Files:**
- No new files

**Context:**
Manually test the website on different devices and browsers to ensure responsive design works.

- [ ] **Step 1: Test on desktop browser**

Open `index.html` in a desktop browser (Chrome, Firefox, Safari) and verify:
- Navigation bar is visible and sticky
- All sections load properly
- Hover effects on cards work
- Colors match design spec
- Links work correctly

- [ ] **Step 2: Test responsive design on mobile**

Using browser DevTools (press F12), test on mobile sizes:
- **Mobile (320px):** Single column layout, readable text
- **Tablet (768px):** 2-column grid where applicable
- **Desktop (1200px+):** Full 3-column grid

Verify:
- Navigation stacks properly on mobile
- Touch areas are large enough
- Text is readable
- Images scale correctly
- No horizontal scroll

- [ ] **Step 3: Test image carousel**

Click on project cards with multiple images (if images added):
- Images should rotate every 5 seconds
- Carousel works smoothly

- [ ] **Step 4: Test navigation and scrolling**

Click navigation links (Skills, Projects, Publications):
- Page smoothly scrolls to correct section
- Scroll position is accurate

- [ ] **Step 5: Verify all links**

Test all external links:
- Email link opens mail client
- LinkedIn link opens profile (or shows 404 if not set)
- GitHub link opens profile (or shows 404 if not set)
- Publication links work (ACL Anthology, Google Scholar)

- [ ] **Step 6: Document any issues**

Create a test report noting any issues found. Common issues to check:
- ❌ Alignment issues on specific resolutions
- ❌ Color contrast problems
- ❌ Broken images
- ❌ Non-responsive sections
- ✅ All major browsers display correctly

---

## Task 8: Final Optimization and Deployment

**Files:**
- Modify: `index.html` (optional optimizations)

**Context:**
Final checks and optimization before live deployment.

- [ ] **Step 1: Minify CSS (optional)**

If CSS becomes large, minify it. For now, keep as-is for readability.

- [ ] **Step 2: Add meta tags for SEO**

Add to `<head>` of index.html:

```html
<meta name="description" content="JiaHuan Yan - AI Engineer, Roboticist, AI Infrastructure. Portfolio showcasing embodied AI, LLM research, and infrastructure projects.">
<meta name="keywords" content="AI, Machine Learning, Robotics, Infrastructure, Research">
<meta name="author" content="JiaHuan Yan">
<meta property="og:title" content="JiaHuan Yan - AI Engineer">
<meta property="og:description" content="Professional portfolio of JiaHuan Yan">
<meta property="og:type" content="website">
```

- [ ] **Step 3: Verify .gitignore (if using git)**

Create `.gitignore` if needed (usually not needed for static sites):

```
# OS files
.DS_Store
Thumbs.db

# IDE
.vscode/
.idea/

# Backups
*.bak
*.tmp
```

- [ ] **Step 4: Commit optimizations**

```bash
cd /home/zcai/workspace/selfie
git add index.html .gitignore
git commit -m "feat: add seo meta tags and optimize for production"
```

Expected: Commit successful.

- [ ] **Step 5: Verify git history**

```bash
cd /home/zcai/workspace/selfie
git log --oneline
```

Expected output shows commits:
```
abc1234 feat: add seo meta tags and optimize for production
def5678 feat: update contact information with actual links
...
```

- [ ] **Step 6: Final deployment checklist**

Before going live:
- ✅ All HTML sections present and complete
- ✅ CSS styling matches design spec
- ✅ JavaScript carousel working
- ✅ Responsive design tested on mobile/tablet/desktop
- ✅ All links functional
- ✅ Images loaded (even if placeholders)
- ✅ No console errors in browser DevTools
- ✅ GitHub Pages workflow configured
- ✅ Repository name correct for GitHub Pages
- ✅ Contact information updated

---

## Self-Review Checklist

**Spec Coverage:**
- ✅ Navigation with smooth scrolling
- ✅ Hero section with education and experience
- ✅ Core skills grid (6 skills, grid-based)
- ✅ Projects section (6 projects, with carousel support)
- ✅ Publications section (3+ publications)
- ✅ Footer
- ✅ Physical Intelligence color scheme
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Contact links (email, LinkedIn, GitHub)
- ✅ GitHub Pages deployment

**Code Quality:**
- ✅ No placeholder code ("TBD", "TODO")
- ✅ Complete code examples in all steps
- ✅ Exact file paths provided
- ✅ Exact git commands with expected outcomes
- ✅ CSS custom properties for color consistency
- ✅ Semantic HTML structure
- ✅ No external dependencies (vanilla JS, no frameworks)

**Type/Name Consistency:**
- ✅ CSS class names consistent (.skill-card, .project-card, etc.)
- ✅ HTML IDs match navigation links (#skills, #projects, #publications)
- ✅ Color variable names consistent (--bg-primary, --text-primary, etc.)
- ✅ JavaScript function names clear and descriptive

---

## Execution Options

Plan complete and saved to `docs/superpowers/plans/2026-06-01-portfolio-website-implementation.md`.

**Two execution approaches:**

**1. Subagent-Driven (Recommended)** — I dispatch a fresh subagent per task (or per few tasks), review between tasks, fast iteration
- Pros: Parallel work possible, fresh perspective per task, clear review gates
- Cons: Multiple context switches

**2. Inline Execution** — I execute tasks sequentially in this session using executing-plans
- Pros: Continuous context, faster overall
- Cons: Longer session, single perspective

**Which approach would you prefer?**

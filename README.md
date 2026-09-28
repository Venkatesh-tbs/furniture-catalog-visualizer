# Furniture Catalog & Visualizer

A modern, responsive e-commerce product catalog and interactive furniture visualizer application built with **React**, **Vite**, and **Tailwind CSS**. Users can browse artisanal furniture pieces, search, filter by category, view detailed specifications, and visually customize furniture finishes and upholstery in real-time under simulated ambient room lighting.

---

## Project Description

**Furniture Studio — Catalog & Visualizer** is crafted as a high-performance, container-ready single-page application (SPA). It provides a luxury Scandinavian and Mid-Century aesthetic, pairing architectural furniture design with an interactive customization engine.

The project is architected with strict DevOps and production standards in mind:
- Zero external paid APIs or backend requirements for the MVP.
- Deterministic static production builds via Vite.
- Robust hash-based client routing with deep-linking support (`#/catalog`, `#/product/:id?color=:colorId`, `#/about`, `#/contact`).
- Clean separation of concerns across reusable components, page views, and static product data.
- Built-in graceful fallbacks for missing images, empty search queries, and invalid product routes.

---

## Features

1. **Landing Page (Home)**
   - **Navbar**: Brand identity (`Furniture Studio`), responsive navigation links (`Home`, `Catalog`, `About`, `Contact`), mobile drawer menu, and quick customization action.
   - **Hero Section**: Editorial typography, high-resolution furniture visual, trust badges, and an interactive **Live Swatch Bar** allowing instant color switching directly in the hero.
   - **Curated Highlights**: Featured furniture items showcasing rating, price, and color finishes.
   - **Visualizer Engine Explainer**: 3-step walkthrough illustrating base silhouette selection, color customization, and room light simulation.
   - **Brand Philosophy & Testimonials**: Storytelling on sustainable FSC-certified hardwoods, artisan joinery, and homeowner reviews.

2. **Furniture Catalog**
   - 10 handcrafted furniture products across multiple categories (Sofas, Lounge Chairs, Dining Chairs, Oak Tables, Executive Office Chairs, Platform Beds, Modular Shelving, Daybeds, Credenzas).
   - Rich product models with ID, title, category, description, price, rating, reviews, materials, dimensions, weight, lead time, multi-angle views, and available color swatches.

3. **Color Switcher / Visualizer (Main Feature)**
   - Live color customization engine for each furniture piece.
   - Supported palettes including Cognac Brown, Obsidian Black, Nordic Cream, Slate Grey, Forest Emerald, Midnight Navy, and Desert Terracotta.
   - Multi-layered visual simulation using CSS blending modes (`multiply`, `color-burn`, `soft-light`), hue/saturation filters, and opacity controls.
   - Real-time swatch selection with active checkmarks, hex codes, descriptive labels, and finish badges (e.g., "Classic Heritage", "Design Favorite").
   - **Ambient Room Lighting Simulator**: Toggle between *Minimal Studio*, *Warm Living Room (3000K)*, *Industrial Dark Loft (4000K)*, and *Sunlit Solarium (6500K)* to preview furniture tones across different environments.
   - Zoom/Fullscreen inspect mode and multi-angle view gallery.

4. **Category Filtering & Search**
   - Filter by categories: **All**, **Sofa**, **Chair**, **Table**, **Bedroom**, **Office** with live product counts.
   - Instant search bar matching product name, category, materials, and descriptions.
   - Dynamic sorting (Featured First, Price: Low to High, Price: High to Low, Highest Rated).

5. **Product Details & Customizer View**
   - Large product visualizer canvas.
   - Comprehensive craftsmanship specifications: materials, joinery, dimensions, weight, warranty, and lead time.
   - "Order Custom Build" and "Share Custom Palette" actions with confirmation toast notifications.

6. **Error Handling & Resilience**
   - **Product Not Found**: Informative message with identifier details and recommended popular alternatives.
   - **Empty Search Results**: Friendly empty state with one-click filter reset.
   - **Invalid Routes**: Dedicated 404 screen with navigation back to Home or Catalog.
   - **Missing Images**: Graceful fallback UI with placeholder icon and notification.

7. **Responsive & Accessible Design**
   - Mobile-first responsive layout tested across mobile, tablet, laptop, and ultra-wide desktop displays.
   - Accessible button states, keyboard navigation, and semantic HTML5 markup.

---

## Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React 19** | Modern component-based declarative UI framework |
| **Vite 8** | Ultra-fast next-generation frontend tooling and bundler |
| **Tailwind CSS 3.4** | Utility-first CSS framework with custom luxury color palette |
| **PostCSS & Autoprefixer** | CSS transformation and cross-browser vendor prefixing |
| **Lucide React** | Clean, lightweight icon suite |
| **Oxlint** | High-performance linter ensuring clean code and 0 warnings |

---

## Project Structure

```
furniture-visualizer/
├── public/
│   └── favicon.svg              # Custom modern brand SVG favicon
├── src/
│   ├── components/
│   │   ├── CategoryFilter.jsx   # Category tab buttons with icons & counters
│   │   ├── ColorSwitcher.jsx    # Interactive color palette & swatch buttons
│   │   ├── Footer.jsx           # Studio concierge footer & navigation links
│   │   ├── Hero.jsx             # Hero section with interactive live swatch preview
│   │   ├── Navbar.jsx           # Glassmorphism header & mobile navigation drawer
│   │   ├── ProductCard.jsx      # Product card with hover states & swatch previews
│   │   ├── ProductDetails.jsx   # Customizer view with lighting simulator & specs
│   │   ├── ProductGrid.jsx      # Responsive grid with empty state handling
│   │   └── SearchBar.jsx        # Live search bar with instant clear button
│   ├── data/
│   │   └── products.js          # Static catalog dataset, brand info & room presets
│   ├── pages/
│   │   ├── About.jsx            # Heritage, sustainability, and craft philosophy
│   │   ├── Catalog.jsx          # Catalog browsing, filtering, and sorting page
│   │   ├── Contact.jsx          # Studio inquiry form and showroom contact info
│   │   ├── Home.jsx             # Landing page with hero, curated pieces, & steps
│   │   └── Product.jsx          # Product route with fallback error handling
│   ├── App.jsx                  # Main application container & hash router
│   ├── index.css                # Tailwind directives & visualizer utilities
│   └── main.jsx                 # Application entry point with React StrictMode
├── index.html                   # HTML template with Google Fonts (Plus Jakarta Sans)
├── package.json                 # Project dependencies and npm scripts
├── postcss.config.js            # PostCSS configuration
├── tailwind.config.js           # Custom Tailwind theme, typography & palette
└── vite.config.js               # Vite bundler configuration
```

---

## Installation

Ensure you have **Node.js (v18+)** and **npm** installed.

Clone the repository and install dependencies:

```bash
# Navigate to the project directory
cd furniture-visualizer

# Install dependencies
npm install
```

---

## Running Locally

To launch the local development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

The application will be accessible at:
```
http://localhost:5173/
```

You can test deep routes directly:
- `http://localhost:5173/#/` — Home Landing Page
- `http://localhost:5173/#/catalog` — Furniture Catalog
- `http://localhost:5173/#/catalog?category=Sofa` — Filtered by category
- `http://localhost:5173/#/catalog?q=chair` — Filtered by search query
- `http://localhost:5173/#/product/nordic-haven-sofa` — Customizer & Product Details
- `http://localhost:5173/#/about` — Studio Philosophy & Craft
- `http://localhost:5173/#/contact` — Showroom & Consultation Inquiries

---

## Production Build

To build the project for production deployment:

```bash
npm run build
```

This compiles optimized, minified static HTML, CSS, and JS bundles into the `dist/` directory:

```
dist/
├── index.html                   ~1.12 kB
├── assets/
│   ├── index-*.css              ~38.3 kB (gzip: ~7.0 kB)
│   └── index-*.js               ~323.2 kB (gzip: ~94.0 kB)
```

To preview the production build locally:

```bash
npm run preview
```

To run linting and code-quality checks:

```bash
npm run lint
```
*(Result: 0 errors, 0 warnings)*

---

## Future DevOps Architecture

This application was intentionally structured with zero backend coupling, strict asset bundling, and clean environment boundaries so that it can be effortlessly containerized and deployed within an enterprise DevOps pipeline.

The future DevOps lifecycle for this application will utilize:

1. **GitHub**:
   - Central source code repository and version control.
   - Branching strategy (`main`, `staging`, `feature/*`) with branch protection rules.
   - GitHub Webhooks to trigger CI/CD workflows on push and pull requests.

2. **Jenkins**:
   - Automated CI/CD orchestrator executing multi-stage declarative pipelines:
     - `Checkout`: Pulls the latest commit from GitHub.
     - `Lint & Test`: Executes `npm run lint` and automated UI regression tests.
     - `Build`: Compiles production assets via `npm run build`.
     - `Containerize`: Builds multi-stage Docker image and tags with Git SHA.
     - `Security Scan`: Scans container images for vulnerabilities using Trivy or Snyk.
     - `Push`: Pushes the verified image to a container registry (Docker Hub, AWS ECR, or GCP Artifact Registry).
     - `Deploy`: Triggers Kubernetes rolling updates or canary rollouts.

3. **Docker**:
   - Multi-stage Dockerfile:
     - **Stage 1 (Builder)**: Uses `node:20-alpine` to install dependencies and run `npm run build`.
     - **Stage 2 (Production Server)**: Uses lightweight `nginx:alpine` to serve static assets from `/usr/share/nginx/html` with gzip compression, security headers, and single-page application routing rules.

4. **Kubernetes (K8s)**:
   - High-availability container orchestration:
     - **Deployment**: Configured with multiple replica pods, resource requests/limits, and rolling update strategies.
     - **Service & Ingress**: ClusterIP service exposed via an Ingress controller (e.g. NGINX Ingress or Traefik) with TLS termination and Let's Encrypt certificates.
     - **Liveness & Readiness Probes**: HTTP health checks ensuring zero-downtime deployments.
     - **Horizontal Pod Autoscaler (HPA)**: Automatically scales pods based on CPU/memory utilization and traffic spikes.

5. **Terraform**:
   - Infrastructure as Code (IaC) to provision cloud infrastructure reproducibly:
     - Virtual Private Clouds (VPCs), subnets, and security groups.
     - Managed Kubernetes clusters (EKS, GKE, or AKS).
     - Container registries, DNS records, and SSL/TLS certificates.

6. **Ansible**:
   - Configuration management and server hardening:
     - Automates base OS provisioning and security patching for CI/CD runner nodes.
     - Configures Jenkins worker instances and Docker runtimes.
     - Manages secrets, firewall rules, and monitoring agents (Prometheus / Grafana).

---

## License

This project is created for demonstration and educational purposes under the MIT License.

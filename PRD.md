# Product Requirements Document (PRD)

## Project Overview
- **Project Name:** Miki Wire Works (mikiwire-next)
- **Goal:** To construct a cinematic, "Kyndryl-grade," high-end web presence that captures the heavy industry essence of the brand.
- **Brand Identity:** Miki Wire Works
- **Leadership:** Mahesh Poddar

## Current State & Architecture
The current application structure is built using Next.js (App Router), styled with Tailwind CSS, and uses Lucide React for iconography. The layout structure resides primarily in `page.tsx` and defines the core flow of the site. `globals.css` governs the strict dark mode color palette.

### Layout Flow:
1. **Hero Component:** The cinematic entry point.
2. **Legacy Component:** Establishing historical context and company lineage under Mahesh Poddar.
3. **Tech Specs Component:** Detailing the technical capacities.
4. **Footprint Component:** Mapping the industrial reach and factory deployments.
5. **Sustainability Component:** Outlining environmental practices and the future generation of steel.

### Factual Constants (Hardcoded Memory)
- **Financial & Scope:** ₹242 Cr Revenue
- **Production:** 100k MT Capacity
- **Market Penetration:** 20% Railway Share
- **Standards:** IS Codes (14268, 6003, 4454)
- **Infrastructure:** Four established factory locations.

### Design System Constants
- **Dark Mode Background:** `#050505`
- **Primary Accent:** `#ff4500`
- **Background Texture:** `.bg-grid` class to represent industrial aesthetic.

---

## Next Steps

As the lead architect, all future implementations should be aligned with the following evolution map:

1. **3D Interactive Elements:**
   - Introduce 3D animations (via Three.js/React Three Fiber) to showcase wire manufacturing, infrastructure models, and animated footprints.
2. **Dedicated Product Pages:**
   - Architect standalone dynamic product pages detailing each IS Code and specific wire product specifications.
3. **Performance Optimization:**
   - Optimize LCP of heavy cinematic elements to ensure high perceived performance.
4. **Cinematic Scrolling:**
   - Implement advanced scroll-driven animations with Framer Motion or GSAP to maintain the "Kyndryl-grade" feel.

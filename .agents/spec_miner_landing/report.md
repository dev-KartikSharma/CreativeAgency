# Specification Mining Report: Main Portfolio Landing Page

**Authoritative Figma File Key**: `vmC1knGbGcG5nIBSMhODeW`  
**Target Frame**: `Media-homepage` (Node ID: `3:4`)  
**Canvas / Page**: `Page 1` (`0:1`)  
**Target Design Viewport**: `1440px` width, auto vertical layout  
**Cross-Reference Overlay Node**: `contact-overlay` (`11:25`)  
**Extraction Date**: 2026-09-11  

---

## 1. Executive Summary

The landing page (`Media-homepage`, node `3:4`) is an uncompromising, high-impact brutalist marketing portfolio. The design pairs aggressive high-contrast display typography (`Big Shoulders Display` 192px Black and `Archivo Black` 200px) with elegant, high-editorial serifs (`Cormorant Garamond` in weights 400, 500, 700, and Italic) and ultra-clean modern grotesk body typography (`Instrument Sans`).

The palette is rooted in an ultra-deep charcoal black (`#111012`), layered with distinct card fills (`#1A1816`, `#1C1A1E`, `#2B2A28`), punctuated with a fierce brutalist electric orange accent (`#E63B19` / `#E8330C`), and balanced by warm off-white (`#F9F8F6`) and muted silver-gray (`#8D8B91`) typography.

---

## 2. Section Hierarchy & Node Architecture

The root frame `Media-homepage` (`3:4`) has layout mode `column`, alignment `stretch`, designed width `1440px`, and fill `#111012`. It houses 6 sequential core sections, plus the top navigation integration:

```
[FRAME] "Media-homepage" #3:4 (w: 1440, bg: #111012)
├── [COMPONENT/NAV] Header / Top Navigation Bar (Integrated across Hero 80px top padding)
│   ├── Brand Wordmark ("CREATIVE MARKETING.", Cormorant Garamond SemiBold 20px, #F9F8F6)
│   ├── Navigation Links ("01 / Philosophy", "02 / Works", "03 / Capabilities")
│   └── CTA Button ("Contact Us", border #FFFFFF / #E63B19, triggers modal 11:25)
│
├── [FRAME] "hero-viewport" #3:16 (w: fill, h: 680px fixed, pad: 80px 0px 0px, bg: #111012)
│   ├── [RECTANGLE] "brutalist-texture" #11:4 (abs, 1440x680, imageRef: 25b0fed4..., opacity: 0.12)
│   ├── [TEXT] Subtitle #11:5 ("WHERE CREATIVITY BECOMES REALITY", Big Shoulders Display 24px 500, #F9F8F6 80%)
│   ├── [FRAME] "display-text-container" #3:17 (pad: 0 80px, h: 395px)
│   │   ├── [TEXT] Line 1 #1:28 ("CREATIVE", Big Shoulders Display 192px 900, #FFFFFF, 737x141px)
│   │   ├── [TEXT] Line 2 #3:19 ("MARKETING", Big Shoulders Display 192px 900, #E63B19)
│   │   └── [FRAME] Line 3 Container #3:20 (pad: 20px 0 0 8px)
│   │       └── [TEXT] Line 3 #3:21 ("Made Easy", Cormorant Garamond Italic 80px 400, #F9F8F6)
│   └── [FRAME] "orange-banner-ticker" #3:22 (pad: 20px 80px, bg: #E63B19)
│       └── [TEXT] Marquee Copy #3:23 ("CENTERS AROUND MAKING...", Instrument Sans 12px 600 UPPER, #000000)
│
├── [FRAME] "philosophy-section" #3:24 (pad: 120px 80px 100px, gap: 48px, bg: #111012)
│   ├── [FRAME] Header Stack #3:25 (gap: 16px)
│   │   ├── [FRAME] Tag Row #3:26 (Rectangle 12x1px #E63B19 + "01 / Our Philosophy", Instrument Sans 12px 600 UPPER)
│   │   └── [FRAME] Headline Frame #3:29
│   │       └── [TEXT] Statement #3:30 ("We believe that raw attention...", Cormorant Garamond 48px 400, 843px, #F9F8F6)
│   └── [FRAME] Two-Column Content #3:31 (gap: 80px)
│       ├── [TEXT] Body Paragraph #3:32 ("In a landscape crowded...", Instrument Sans 18px 400, 733px, #8D8B91)
│       └── [FRAME] Metrics Stack #3:33 (gap: 40px)
│           ├── [FRAME] Metric 1 #3:34 (border-b: 1px #2C2A2F, pad-b: 20px)
│           │   ├── [TEXT] #3:35 ("Radical Transparency", Cormorant Garamond 20px 400, #F9F8F6)
│           │   └── [TEXT] #3:36 ("100%", Instrument Sans 14px 400, #E63B19)
│           └── [FRAME] Metric 2 #3:37 (border-b: 1px #2C2A2F, pad-b: 20px)
│               ├── [TEXT] #3:38 ("Conversion Optimization", Cormorant Garamond 20px 400, #F9F8F6)
│               └── [TEXT] #3:39 ("+42% Avg", Instrument Sans 14px 400, #E63B19)
│
├── [FRAME] "portfolio-section" #3:40 (pad: 100px 80px 120px, gap: 64px, bg: #111012)
│   ├── [FRAME] Header Stack #3:41 (gap: 16px)
│   │   ├── [FRAME] Tag Row #3:42 (Rectangle 12x1px #E63B19 + "02 / Selected Works", Instrument Sans 12px 600 UPPER)
│   │   └── [TEXT] Title #3:46 ("Case Studies in Velocity and Grace", Cormorant Garamond 44px 500, #F9F8F6)
│   └── [FRAME] "portfolio-zones" #3:47 (gap: 32px)
│       ├── [FRAME] "category-switcher" #3:48 (w: 320px, pad: 24px, gap: 24px, bg: #1A1816, stroke: 1px #2B2A28)
│       │   ├── [TEXT] #11:8 ("View", Instrument Sans 12px 600 UPPER, #8A8884)
│       │   ├── [FRAME] "category-active" #11:9 (gap: 12px)
│       │   │   ├── [TEXT] #11:10 ("Brand Identities Built", Cormorant Garamond 36px 700, #F9F8F6)
│       │   │   └── [RECTANGLE] Active Bar #11:11 (h: 6px, bg: #E63B19)
│       │   └── [FRAME] "category-inactive" #3:53 (gap: 12px)
│       │       ├── [TEXT] #3:54 ("Stories We've Told", Cormorant Garamond 36px 700, #8A8884)
│       │       └── [RECTANGLE] Inactive Bar #11:12 (h: 2px, bg: #2B2A28)
│       └── [FRAME] "work-grid" #3:57 (w: 888px, gap: 32px)
│           └── [FRAME] "row-1" #11:13 (gap: 32px)
│               ├── [FRAME] "project-card-01" #3:59 (w: 428px, bg: #1A1816, stroke: 1px #2B2A28, gap: 20px)
│               │   ├── [FRAME] Placeholder #11:14 (h: 360px, bg: #2B2A28, stroke: 2px #E63B19, text: "Project 01")
│               │   └── [FRAME] Content #11:16 (pad: 0 16px 16px, gap: 8px)
│               │       ├── [TEXT] #11:17 ("Identity / Packaging", Instrument Sans 12px 600 UPPER, #E63B19)
│               │       └── [TEXT] #11:18 ("Aura Luxury Essentials Campaign", Cormorant Garamond 32px 500, #F9F8F6)
│               └── [FRAME] "project-card-02" #3:65 (w: 428px, bg: #1A1816, stroke: 1px #2B2A28, gap: 20px)
│                   ├── [FRAME] Placeholder #3:66 (h: 360px, bg: #2B2A28, stroke: 2px #E63B19, text: "Project 02")
│                   └── [FRAME] Content #3:68 (pad: 0 16px 16px, gap: 8px)
│                       ├── [TEXT] #3:69 ("Identity / Packaging", Instrument Sans 12px 600 UPPER, #E63B19)
│                       └── [TEXT] #11:20 ("Aura Luxury Essentials Campaign", Cormorant Garamond 32px 500, #F9F8F6)
│
├── [FRAME] "services-section" #3:82 (pad: 120px 80px, gap: 64px, bg: #1C1A1E, stroke: 1px #2C2A2F)
│   ├── [FRAME] Header Stack #3:83 (gap: 16px)
│   │   ├── [FRAME] Tag Row #3:84 (Rectangle 12x1px #E63B19 + "03 / Capabilities", Instrument Sans 12px 600 UPPER)
│   │   └── [FRAME] Title Row #3:87 (gap: 32px)
│   │       ├── [TEXT] #3:88 ("Engineered for High-Fidelity Performance", Cormorant Garamond 44px 500, 733px, #F9F8F6)
│   │       └── [TEXT] #3:89 ("Our specialized departments integrate...", Instrument Sans 16px 400, 515px, #8D8B91)
│   └── [FRAME] Cards Grid #3:90 (gap: 32px)
│       ├── [FRAME] "service-card-01" #3:91 (w: 405px, pad: 40px, gap: 32px, bg: #1C1A1E, stroke: 1px #2C2A2F, radius: 16px)
│       │   ├── [FRAME] Header Row #3:92 (Number "01" Big Shoulders 32px 700 #E63B19 + Arrow SVG 19x19px)
│       │   ├── [FRAME] Content Stack #3:96 (gap: 12px)
│       │   │   ├── [TEXT] #3:97 ("Brand Strategy", Cormorant Garamond 28px 500, #F9F8F6)
│       │   │   └── [TEXT] #3:98 ("Developing rigorous market positions...", Instrument Sans 15px 400, #8D8B91)
│       │   └── [FRAME] Badges Row #3:99 (gap: 8px, wrap)
│       │       ├── Badge: "Positioning" (pad: 6x12px, bg: rgba(230,59,25,0.07), stroke: rgba(230,59,25,0.2), radius: 100px)
│       │       ├── Badge: "Market Analysis"
│       │       └── Badge: "Brand Voice"
│       ├── [FRAME] "service-card-02" #3:106 (w: 405px, pad: 40px, gap: 32px, bg: #1C1A1E, stroke: 1px #2C2A2F, radius: 16px)
│       │   ├── [FRAME] Header Row ("02" + Arrow SVG)
│       │   ├── [FRAME] Content Stack ("Interface Design" + "High-fidelity, interactive...")
│       │   └── [FRAME] Badges Row ("Figma Native", "Design Systems", "Prototyping")
│       └── [FRAME] "service-card-03" #3:121 (w: 405px, pad: 40px, gap: 32px, bg: #1C1A1E, stroke: 1px #2C2A2F, radius: 16px)
│           ├── [FRAME] Header Row ("03" + Arrow SVG)
│           ├── [FRAME] Content Stack ("Growth Marketing" + "Continuous optimization across...")
│           └── [FRAME] Badges Row ("SEO Strategy", "Analytics", "Copywriting")
│
├── [FRAME] "contact-cta" #3:136 (pad: 80px, gap: 48px, bg: #E8330C, justify: center, align: center)
│   ├── [TEXT] Headline #3:139 ("LET'S WORK", Archivo Black 200px 400 UPPER, #111012, text-center)
│   └── [FRAME] Button #3:142 (pad: 18px 48px, stroke: 2px #111012, justify: center, align: center)
│       └── [TEXT] Button Label #3:143 ("Contact Us", Instrument Sans 14px 600 UPPER, #111012)
│
└── [FRAME] "footer" #3:146 (pad: 80px 80px 40px, gap: 64px, stroke-t: 1px #2C2A2F, bg: #111012)
    ├── [FRAME] Top Row #3:147 (justify: space-between)
    │   ├── [FRAME] Brand Col #3:148 (w: 320px, gap: 16px)
    │   │   ├── [TEXT] Wordmark #3:149 ("CREATIVE MARKETING.", Cormorant Garamond 20px 600, #F9F8F6)
    │   │   └── [TEXT] Mission #3:150 ("Providing rigorous artistic design...", Instrument Sans 14px 400, #8D8B91)
    │   └── [FRAME] Inquiries & Location Col #3:151 (gap: 80px, row)
    │       ├── [FRAME] Inquiries #3:152 (gap: 12px)
    │       │   ├── [TEXT] Header #3:153 ("Inquiries", Instrument Sans 12px 600 UPPER, #E63B19)
    │       │   ├── [TEXT] Email #3:154 ("hello@creativemarketing.co", Instrument Sans 14px 400, #F9F8F6)
    │       │   └── [TEXT] Phone #3:155 ("(555) 321-7654", Instrument Sans 14px 400, #F9F8F6)
    │       └── [FRAME] Location #3:156 (gap: 12px)
    │           ├── [TEXT] Header #3:157 ("Location", Instrument Sans 12px 600 UPPER, #E63B19)
    │           ├── [TEXT] Line 1 #3:158 ("Sunset Blvd, Suite 400", Instrument Sans 14px 400, #F9F8F6)
    │           └── [TEXT] Line 2 #3:159 ("Los Angeles, CA 90028", Instrument Sans 14px 400, #F9F8F6)
    └── [FRAME] Bottom Row #3:160 (pad-t: 24px, stroke-t: 1px #2C2A2F, justify: space-between, align: center)
        ├── [TEXT] Copyright #3:161 ("© 2026 Creative Marketing Collective. All rights reserved.", Instrument Sans 13px 400, #8D8B91)
        └── [FRAME] Links #3:162 (gap: 24px, row)
            ├── [TEXT] #3:163 ("Privacy Policy", Instrument Sans 13px 400, #8D8B91)
            └── [TEXT] #3:164 ("Terms of Service", Instrument Sans 13px 400, #8D8B91)
```

---

## 3. Design Tokens

### 3.1 Color Palette
| Token Name | Hex / RGBA Code | Usage in Figma Node 3:4 |
|---|---|---|
| `color-bg-base` | `#111012` | Main page body, hero background, philosophy, footer background |
| `color-bg-card-dark` | `#1A1816` | Portfolio switcher panel and selected work project cards |
| `color-bg-card-medium`| `#1C1A1E` | Capabilities section background and service card fill |
| `color-bg-placeholder`| `#2B2A28` | Project card image placeholder background, inactive category underline |
| `color-stroke-primary`| `#2C2A2F` | Section outer borders, dividers, metric underlines, footer border |
| `color-stroke-card`   | `#2B2A28` | Work card borders, category switcher border |
| `color-accent-orange` | `#E63B19` | Section tags (01, 02, 03), dashes, MARKETING headline, ticker, card arrow SVG |
| `color-accent-cta`    | `#E8330C` | CTA section "LET'S WORK" banner background |
| `color-text-primary`  | `#F9F8F6` | Headlines, project titles, service titles, active category, footer headers |
| `color-text-white`    | `#FFFFFF` | Hero "CREATIVE" text |
| `color-text-muted`    | `#8D8B91` | Body copy, section descriptions, footer copyright & legal links |
| `color-text-dimmed`   | `#8A8884` | Inactive category switcher tab ("Stories We've Told"), "View" tag |
| `color-black`         | `#000000` | Marquee ticker text on orange banner |
| `color-badge-bg`      | `rgba(230, 59, 25, 0.07)` | Capabilities pill badge background |
| `color-badge-border`  | `rgba(230, 59, 25, 0.2)`  | Capabilities pill badge border stroke (1px) |
| `color-hero-subtitle` | `rgba(249, 248, 246, 0.8)`| Hero top centered subtitle |

### 3.2 Typography Tokens
| Token Key | Family | Weight | Size | Line Height | Case / Style | Usage |
|---|---|---|---|---|---|---|
| `font-display-cta` | `Archivo Black` | 400 Regular | 200px | 0.9em | UPPERCASE | "LET'S WORK" CTA headline |
| `font-display-hero`| `Big Shoulders Display` | 900 Black | 192px | 0.8em | UPPERCASE | "CREATIVE", "MARKETING" |
| `font-serif-hero`  | `Cormorant Garamond` | 400 Italic | 80px | 1.0em | Italic | "Made Easy" |
| `font-serif-stmt`  | `Cormorant Garamond` | 400 Regular | 48px | 1.1em | Normal | Philosophy core statement |
| `font-serif-h2`    | `Cormorant Garamond` | 500 Medium | 44px | 1.1em | Normal | "Case Studies...", "Engineered for..." |
| `font-serif-tab`   | `Cormorant Garamond` | 700 Bold | 36px | 1.0em | Normal | Switcher categories ("Brand Identities...") |
| `font-serif-h3`    | `Cormorant Garamond` | 500 Medium | 32px | 1.1em | Normal | Project Card titles ("Aura Luxury...") |
| `font-display-num` | `Big Shoulders Display` | 700 Bold | 32px | Normal | UPPERCASE | Service card numbers ("01", "02", "03") |
| `font-serif-h4`    | `Cormorant Garamond` | 500 Medium | 28px | Normal | Normal | Service Card titles ("Brand Strategy") |
| `font-display-sub` | `Big Shoulders Display` | 500 Medium | 24px | 1.0em | UPPERCASE | "WHERE CREATIVITY BECOMES REALITY" |
| `font-serif-metric`| `Cormorant Garamond` | 400 Regular | 20px | Normal | Normal | Metric card labels ("Radical Transparency")|
| `font-serif-brand` | `Cormorant Garamond` | 600 SemiBold| 20px | Normal | Normal | Footer brand wordmark ("CREATIVE MARKETING.")|
| `font-body-lg`     | `Instrument Sans` | 400 Regular | 18px | 1.6em | Normal | Philosophy main body paragraph |
| `font-body-md`     | `Instrument Sans` | 400 Regular | 16px | 1.5em | Normal | Capabilities header description |
| `font-body-sm`     | `Instrument Sans` | 400 Regular | 15px | 1.6em | Normal | Service card descriptions |
| `font-btn-cta`     | `Instrument Sans` | 600 SemiBold| 14px | Normal | UPPERCASE | "Contact Us" CTA button |
| `font-body-footer` | `Instrument Sans` | 400 Regular | 14px | 1.5em | Normal | Footer mission, email, phone, location |
| `font-metric-val`  | `Instrument Sans` | 400 Regular | 14px | Normal | Normal | Metric values ("100%", "+42% Avg") |
| `font-legal`       | `Instrument Sans` | 400 Regular | 13px | Normal | Normal | Footer copyright and legal links |
| `font-tag`         | `Instrument Sans` | 600 SemiBold| 12px | Normal | UPPERCASE | Section tags ("01 / ..."), project tags |
| `font-badge`       | `Instrument Sans` | 500 Medium | 12px | Normal | Normal | Capabilities pill tags ("Positioning") |
| `font-ticker`      | `Instrument Sans` | 600 SemiBold| 12px | 1.4em | UPPERCASE | Orange ticker marquee copy |

### 3.3 Geometry, Spacing & Border Tokens
- **Horizontal Container Padding**:
  - Desktop (1440px): `80px`
  - Tablet (768px): `32px`
  - Mobile (<768px): `20px`
- **Section Vertical Padding**:
  - Hero Viewport: `80px 0px 0px` (fixed 680px height on desktop)
  - Philosophy Section: `120px 80px 100px`
  - Selected Works: `100px 80px 120px`
  - Capabilities Section: `120px 80px`
  - CTA Banner: `80px 80px`
  - Footer: `80px 80px 40px`
- **Card Border Radii**:
  - Capabilities Service Cards: `16px`
  - Capabilities Pill Badges: `100px` (pill)
  - Project Cards: `0px` (brutalist sharp)
  - Category Switcher Container: `0px`
  - CTA Button: `0px` (brutalist sharp)
- **Border Strokes**:
  - Section Dividers / Outer borders: `1px solid #2C2A2F`
  - Project Card outer border: `1px solid #2B2A28`
  - Project Card Image Placeholder border: `2px solid #E63B19`
  - Category Switcher Active indicator bar: `6px solid #E63B19`
  - Category Switcher Inactive indicator bar: `2px solid #2B2A28`
  - CTA Button border: `2px solid #111012`
  - Section Tag Orange Accent Line: `12px width x 1px height #E63B19`

---

## 4. Section-by-Section Deep Dive

### 4.1 Header / Top Navigation Bar
- **Role**: Sits fixed/sticky at the top of the viewport across the 80px top padding of the Hero.
- **Brand Wordmark**: Left side aligned. Text: `CREATIVE MARKETING.` (`Cormorant Garamond`, SemiBold 20px, `#F9F8F6`) with orange period dot.
- **Navigation Links**: Centered or right-aligned. Links:
  - `01 / Philosophy` -> `#philosophy`
  - `02 / Works` -> `#works`
  - `03 / Capabilities` -> `#capabilities`
  - Font: `Instrument Sans`, SemiBold 12px UPPER, `#F9F8F6` with hover to `#E63B19`.
- **Action Button**: `Contact Us` button with sharp brutalist border (1.5px `#FFFFFF` or `#E63B19`), padding `10px 24px`, font `Instrument Sans` 12px SemiBold UPPER. Clicking triggers the full-screen interactive Contact Modal (`contact-overlay`, node `11:25`).

### 4.2 Hero Viewport (`hero-viewport`, node `3:16`)
- **Dimensions**: Full width (1440px designed), fixed height `680px`.
- **Background Layer**: Fill `#111012`.
- **Brutalist Texture Layer (`brutalist-texture`, node `11:4`)**:
  - Absolute positioned: `top: 0, left: 0, width: 1440px, height: 680px`.
  - Image fill reference: `25b0fed433617116a325735b6f84d4af7270ebdd`.
  - Opacity: `0.12` (12%).
  - Object Fit: `cover`.
- **Subtitle Text (node `11:5`)**:
  - Text: `WHERE CREATIVITY BECOMES REALITY`
  - Big Shoulders Display 24px Medium 500, UPPERCASE, Centered.
  - Color: `rgba(249, 248, 246, 0.8)`.
- **Display Text Container (node `3:17`)**:
  - Padding: `0px 80px`, height `395px`, vertical column layout.
  - Line 1 (node `1:28`): `CREATIVE` in `#FFFFFF`, Big Shoulders Display 192px Black 900, lineHeight 0.8em.
  - Line 2 (node `3:19`): `MARKETING` in `#E63B19`, Big Shoulders Display 192px Black 900, lineHeight 0.8em.
  - Line 3 (node `3:20` & `3:21`): `Made Easy` in `#F9F8F6`, Cormorant Garamond 80px Italic 400, lineHeight 1.0em, offset padding `20px 0px 0px 8px`.
- **Ticker Marquee Banner (node `3:22`)**:
  - Background fill: `#E63B19` (solid vivid orange).
  - Padding: `20px 80px`.
  - Content (node `3:23`): Instrument Sans SemiBold 12px, lineHeight 1.4em, UPPERCASE, fill `#000000`.
  - Copy: `"CENTERS AROUND MAKING CREATIVE MARKETING SOLUTIONS BOTH ACCESSIBLE AND EFFECTIVE FOR BUSINESSES OF ALL SIZES. WE UNDERSTAND THAT IN THE FAST-PACED WORLD OF DIGITAL MARKETING, SIMPLICITY IS KEY. THAT'S WHY OUR TEAM OF EXPERTS IS DEDICATED TO BREAKING DOWN COMPLEX MARKETING STRATEGIES INTO STRAIGHTFORWARD, ACTIONABLE STEPS."`
  - Behavior: Continuous, smooth horizontal infinite marquee ticker animation.

### 4.3 Section 01 / Our Philosophy (`philosophy-section`, node `3:24`)
- **Layout**: Column, padding `120px 80px 100px`, gap `48px`, background `#111012`.
- **Tag Row**: Frame `EL-235879b0` with 12x1px rectangle `#E63B19` and label `01 / Our Philosophy` (`#E63B19`, Instrument Sans 12px 600 UPPER).
- **Primary Statement**: Node `3:30`, width 843px, Cormorant Garamond Regular 48px, lineHeight 1.1em, `#F9F8F6`.
- **Two-Column Row (node `3:31`, gap `80px`)**:
  - **Left Column** (node `3:32`): Width 733px, Instrument Sans Regular 18px, lineHeight 1.6em, `#8D8B91`.
    - Text: `"In a landscape crowded with superficial metrics, we focus exclusively on architecture that generates authentic results. Clean layouts, clear hierarchies, and fearless visual choices are not just artistic decisions—they are functional requirements to capture the modern consumer's divided attention."`
  - **Right Column** (node `3:33`): Metrics vertical stack, gap `40px`.
    - Metric 1 (node `3:34`): Bottom stroke 1px `#2C2A2F`, padding bottom 20px.
      - Label (node `3:35`): `Radical Transparency` (Cormorant Garamond Regular 20px, `#F9F8F6`).
      - Value (node `3:36`): `100%` (Instrument Sans Regular 14px, `#E63B19`).
    - Metric 2 (node `3:37`): Bottom stroke 1px `#2C2A2F`, padding bottom 20px.
      - Label (node `3:38`): `Conversion Optimization` (Cormorant Garamond Regular 20px, `#F9F8F6`).
      - Value (node `3:39`): `+42% Avg` (Instrument Sans Regular 14px, `#E63B19`).

### 4.4 Section 02 / Selected Works (`portfolio-section`, node `3:40`)
- **Layout**: Column, padding `100px 80px 120px`, gap `64px`, background `#111012`.
- **Section Tag**: 12x1px orange line + `02 / Selected Works` (`#E63B19`, Instrument Sans 12px 600 UPPER).
- **Headline**: `Case Studies in Velocity and Grace` (`#F9F8F6`, Cormorant Garamond Medium 44px, lineHeight 1.1em).
- **Two-Column Zones (`portfolio-zones`, node `3:47`, row, gap `32px`)**:
  - **Left Column: Category Switcher (`category-switcher`, node `3:48`)**:
    - Dimensions: fixed width `320px`, padding `24px`, gap `24px`, background `#1A1816`, border `1px solid #2B2A28`.
    - Header label (node `11:8`): `View` (Instrument Sans SemiBold 12px UPPER, `#8A8884`).
    - **Tab 1 (Active by default, node `11:9`)**:
      - Title: `Brand Identities Built` (Cormorant Garamond Bold 36px, lineHeight 1.0em, `#F9F8F6`).
      - Active Indicator Bar: Rectangle height `6px`, width 100%, background `#E63B19`.
    - **Tab 2 (Inactive by default, node `3:53`)**:
      - Title: `Stories We've Told` (Cormorant Garamond Bold 36px, lineHeight 1.0em, `#8A8884`).
      - Inactive Indicator Bar: Rectangle height `2px`, width 100%, background `#2B2A28`.
    - **Switcher Interaction**:
      - Hovering inactive tab turns text to `#F9F8F6` and bar to `#8A8884`.
      - Clicking swaps active tab (active bar grows to 6px `#E63B19`, active text turns `#F9F8F6`).
      - Animate filter switch on project cards with Framer Motion fade/slide.
  - **Right Column: Work Grid (`work-grid`, node `3:57`)**:
    - Dimensions: fixed width `888px`, vertical gap `32px`.
    - Row 1 (node `11:13`, row, gap `32px`):
      - **Project Card 01 (node `3:59`)**:
        - Dimensions: fixed width `428px`, fill `#1A1816`, border `1px solid #2B2A28`, gap `20px`.
        - Image placeholder (node `11:14`): height `360px`, background `#2B2A28`, border `2px solid #E63B19`, flex center, contains text `Project 01` (`#E63B19`, Instrument Sans SemiBold 12px UPPER).
        - Content frame (node `11:16`): padding `0px 16px 16px`, gap `8px`.
          - Tag (node `11:17`): `Identity / Packaging` (Instrument Sans SemiBold 12px UPPER, `#E63B19`).
          - Title (node `11:18`): `Aura Luxury Essentials Campaign` (Cormorant Garamond Medium 32px, lineHeight 1.1em, `#F9F8F6`).
      - **Project Card 02 (node `3:65`)**:
        - Dimensions: fixed width `428px`, fill `#1A1816`, border `1px solid #2B2A28`, gap `20px`.
        - Image placeholder (node `3:66`): height `360px`, background `#2B2A28`, border `2px solid #E63B19`, text `Project 02` (`#E63B19`, Instrument Sans SemiBold 12px UPPER).
        - Content frame (node `3:68`): padding `0px 16px 16px`, gap `8px`.
          - Tag (node `3:69`): `Identity / Packaging` (`#E63B19`).
          - Title (node `11:20`): `Aura Luxury Essentials Campaign` (`#F9F8F6`).

### 4.5 Section 03 / Capabilities (`services-section`, node `3:82`)
- **Layout**: Column, padding `120px 80px`, gap `64px`, background `#1C1A1E`, border `1px solid #2C2A2F`.
- **Header Stack (node `3:83`)**:
  - Tag row: 12x1px orange line + `03 / Capabilities` (`#E63B19`, Instrument Sans 12px 600 UPPER).
  - Title row (node `3:87`):
    - Left Headline: `Engineered for High-Fidelity Performance` (`#F9F8F6`, Cormorant Garamond Medium 44px, lineHeight 1.1em, width 733px).
    - Right Subtitle: `Our specialized departments integrate flawlessly to produce cohesive, conversion-driven brand ecosystems.` (`#8D8B91`, Instrument Sans Regular 16px, lineHeight 1.5em, width 515px).
- **Cards Grid (node `3:90`, row, gap `32px`)**:
  - **Service Card 01 (`service-card-01`, node `3:91`)**:
    - Dimensions: fixed width `405px`, padding `40px`, gap `32px`, fill `#1C1A1E`, border `1px solid #2C2A2F`, borderRadius `16px`.
    - Top Row (node `3:92`):
      - Number: `01` (Big Shoulders Display Bold 32px, `#E63B19`).
      - Icon (node `3:178`): Arrow up-right SVG (`19x19px`, path `M13.4578 13.4577V5.5423H5.54236M13.4578 5.5423L5.54236 13.4577`, stroke `#E63B19` 2px).
    - Content Stack (node `3:96`, gap `12px`):
      - Title (node `3:97`): `Brand Strategy` (Cormorant Garamond Medium 28px, `#F9F8F6`).
      - Description (node `3:98`): `Developing rigorous market positions that clarify message and dictate visual authority before a single pixel is placed.` (Instrument Sans Regular 15px, lineHeight 1.6em, `#8D8B91`).
    - Pill Badges (node `3:99`, row wrap, gap `8px`):
      - Style: padding `6px 12px`, fill `rgba(230, 59, 25, 0.07)`, stroke `1px solid rgba(230, 59, 25, 0.2)`, borderRadius `100px`.
      - Text: Instrument Sans Medium 12px, `#E63B19`.
      - Items: `Positioning`, `Market Analysis`, `Brand Voice`.
  - **Service Card 02 (`service-card-02`, node `3:106`)**:
    - Same geometry (405px width, 40px padding, 16px radius, `#1C1A1E` fill, `#2C2A2F` stroke).
    - Top Row: `02` + Arrow up-right SVG.
    - Title: `Interface Design` (`#F9F8F6`).
    - Description: `High-fidelity, interactive, and completely custom user pathways built specifically to simplify user flows and boost conversion.` (`#8D8B91`).
    - Pill Badges: `Figma Native`, `Design Systems`, `Prototyping`.
  - **Service Card 03 (`service-card-03`, node `3:121`)**:
    - Same geometry (405px width, 40px padding, 16px radius, `#1C1A1E` fill, `#2C2A2F` stroke).
    - Top Row: `03` + Arrow up-right SVG.
    - Title: `Growth Marketing` (`#F9F8F6`).
    - Description: `Continuous optimization across ad networks, technical search engines, and automated nurture tracks driven by real metrics.` (`#8D8B91`).
    - Pill Badges: `SEO Strategy`, `Analytics`, `Copywriting`.
  - **Hover Micro-Interactions**:
    - Card border brightens to `rgba(230, 59, 25, 0.4)` or `#E63B19`.
    - Arrow shifts diagonally (`transform: translate(3px, -3px)`).
    - Card subtle upward elevation (`translateY(-4px)`).

### 4.6 CTA Banner (`contact-cta`, node `3:136`)
- **Layout**: Column, padding `80px`, gap `48px`, justify center, align center.
- **Background**: Solid `#E8330C` (vivid brutalist vermillion/orange).
- **Display Typography (node `3:139`)**:
  - Text: `LET'S WORK`
  - Font: `Archivo Black`, 400 Regular, 200px, lineHeight `0.9em`, UPPERCASE, centered.
  - Fill: `#111012` (dark base color on orange).
- **CTA Action Button (node `3:142`)**:
  - Padding: `18px 48px`, border `2px solid #111012`, sharp rectangle (0px radius).
  - Text (node `3:143`): `Contact Us` (Instrument Sans SemiBold 14px UPPER, fill `#111012`).
  - Hover State: Fill inverts to `#111012` and text turns `#E8330C` (or `#FFFFFF`).
  - Click Action: Dispatches modal trigger opening the Contact Overlay (`11:25`).

### 4.7 Footer (`footer`, node `3:146`)
- **Layout**: Column, padding `80px 80px 40px`, gap `64px`, border top `1px solid #2C2A2F`, fill `#111012`.
- **Top Row (node `3:147`, justify space-between)**:
  - **Left Brand Column (node `3:148`, width 320px, gap 16px)**:
    - Wordmark: `CREATIVE MARKETING.` (Cormorant Garamond SemiBold 20px, `#F9F8F6`).
    - Mission: `Providing rigorous artistic design & engineering strategy for brands that refuse to look ordinary.` (Instrument Sans Regular 14px, lineHeight 1.5em, `#8D8B91`).
  - **Right Contact Columns (node `3:151`, row, gap 80px)**:
    - Inquiries Column (node `3:152`, gap 12px):
      - Title: `Inquiries` (`#E63B19`, Instrument Sans SemiBold 12px UPPER).
      - Email: `hello@creativemarketing.co` (`#F9F8F6`, Instrument Sans Regular 14px, interactive `mailto:`).
      - Phone: `(555) 321-7654` (`#F9F8F6`, Instrument Sans Regular 14px, interactive `tel:`).
    - Location Column (node `3:156`, gap 12px):
      - Title: `Location` (`#E63B19`, Instrument Sans SemiBold 12px UPPER).
      - Line 1: `Sunset Blvd, Suite 400` (`#F9F8F6`, Instrument Sans Regular 14px).
      - Line 2: `Los Angeles, CA 90028` (`#F9F8F6`, Instrument Sans Regular 14px).
- **Bottom Row (node `3:160`, pad-top 24px, border top `1px solid #2C2A2F`, justify space-between, align center)**:
  - Copyright: `© 2026 Creative Marketing Collective. All rights reserved.` (`#8D8B91`, Instrument Sans Regular 13px).
  - Legal Links Row (node `3:162`, gap 24px):
    - `Privacy Policy` (`#8D8B91`, Instrument Sans Regular 13px, hover: `#F9F8F6`).
    - `Terms of Service` (`#8D8B91`, Instrument Sans Regular 13px, hover: `#F9F8F6`).

---

## 5. Interactive Contact Overlay Modal Contract (`contact-overlay`, Node `11:25`)

Cross-referenced from authoritative node `11:25` for end-to-end site interaction:
- **Trigger**: Any `Contact Us` button (Hero top nav or CTA banner).
- **Modal Viewport**: Full-screen or backdrop-blurred overlay (designed 1440x900px, padding 64px, fill `#111012`).
- **Header Row (`11:26`)**:
  - `Contact` title: Big Shoulders Display Black 900, 32px UPPER, `#E63B19`.
  - Close Button (`11:28`): 48x48px circle, border `1.5px solid #FFFFFF`, radius 24px, contains `x-circle` SVG (`11:50`, 18x18px).
  - Dismissal: Clicking close button, clicking backdrop, or pressing `Escape` key.
- **Left Column (`11:31`)**:
  - Headline: `Let's\nTalk.` in Big Shoulders Display Black 900, 140px, lineHeight 0.85em, `#FFFFFF`.
  - Body: `Ready to elevate your brand? Slide into our DMs and our team will get back to you within 24 hours.` (Geist Mono / Instrument Sans 14px, `#8D8B91`, width 420px).
  - Contact Details (`11:37`):
    - Email: `hello@fusionforce.co` (`#FFFFFF`, Geist Mono Medium 13px UPPER).
    - Phone: `+91 95998 29714` (`#FFFFFF`, Geist Mono Medium 13px UPPER).
- **Right Column (`11:40`, width 580px, gap 32px)**:
  - Serif accent: `Connect with us.` (Cormorant Garamond Italic 400, 56px, lineHeight 1.2em, `#E63B19`).
  - Instagram Card (`11:42`):
    - Background `#FFFFFF`, padding `32px`, borderRadius `4px`, row layout justify space-between.
    - Text: `@Instagram` (Big Shoulders Display Black 900, 44px UPPER, `#000000`).
    - Arrow icon: 40x40px black circle containing right arrow SVG (`#11:47`).
    - Outbound link: `https://instagram.com/` with hover scale/lift.

---

## 6. Responsive Breakdown

| Breakpoint | Viewport Width | Layout Adaptations | Typography Scaling |
|---|---|---|---|
| **Desktop (Default)** | `>= 1440px` | - Exact 1440px canvas layout.<br>- Horizontal padding: `80px`.<br>- Works grid: 320px switcher + 888px grid (2 x 428px cards).<br>- Capabilities: 3 x 405px cards row. | - Display CTA: `200px`<br>- Hero Display: `192px`<br>- Hero Serif: `80px`<br>- Philosophy Statement: `48px`<br>- Section Headlines: `44px` |
| **Tablet** | `768px - 1439px` | - Horizontal padding scales to `32px`.<br>- Hero height becomes flexible (`min-h-[600px]`).<br>- Selected Works: Switcher stacks on top or stays sticky; project cards become 1-2 columns fluid width.<br>- Capabilities: Cards wrap into 2 columns or stack.<br>- Footer: 2-column layout preserves spacing. | - Display CTA: `100px - 140px`<br>- Hero Display: `96px - 128px`<br>- Hero Serif: `48px - 60px`<br>- Philosophy Statement: `32px - 38px`<br>- Section Headlines: `32px - 36px` |
| **Mobile** | `< 768px` | - Horizontal padding: `20px`.<br>- Hero: vertical auto flow, padding `96px 20px 0px`.<br>- Philosophy: full single column stack; metric cards take 100% width.<br>- Selected Works: Switcher converts to horizontal tab row/pills; cards 100% width with 260px-300px placeholder height.<br>- Capabilities: Single column stack (100% width cards).<br>- CTA Banner: Padding `60px 20px`; full-width button.<br>- Footer: Vertical stack of brand, inquiries, location, legal links. | - Display CTA: `48px - 64px`<br>- Hero Display: `56px - 72px`<br>- Hero Serif: `36px - 44px`<br>- Philosophy Statement: `26px - 30px`<br>- Section Headlines: `26px - 30px`<br>- Body copy: `15px - 16px` |

---

## 7. Features Discovered

| # | Category | Feature | Description | Inputs | Outputs | Error Behavior | Discovered Via |
|---|----------|---------|-------------|--------|---------|----------------|----------------|
| 1 | Navigation | Sticky Top Header | Floating/sticky brand header spanning the 80px Hero top padding with navigation links and Contact CTA | User scroll, click on links or CTA | Smooth scrolls to section or triggers Contact Modal | Degrades to static top row if JS disabled | ORIGINAL_REQUEST.md & Node 3:16 padding geometry |
| 2 | Hero | Display Typography Stack | Brutalist 192px/80px typographic lockup: "CREATIVE" in white, "MARKETING" in orange, "Made Easy" in italic serif | Viewport size | High-contrast visual lockup | Text wraps gracefully on smaller viewports | Node 3:17, 1:28, 3:19, 3:20, 3:21 |
| 3 | Hero | Brutalist Texture Overlay | Gritty background overlay with 0.12 opacity over #111012 background | Window resize | Cover background texture across 1440x680 area | Falls back to solid #111012 if image fails | Node 11:4 (imageRef 25b0fed4...) |
| 4 | Hero | Infinite Marquee Ticker | Solid #E63B19 banner with continuous marquee text detailing agency mission in black 12px uppercase | Frame timer / CSS translate | Seamless horizontal marquee loop | Fallback to static wrapped text if animation disabled | Node 3:22, 3:23 |
| 5 | Philosophy | Section Indicator & Tag | 12x1px orange line accompanied by "01 / Our Philosophy" tag in 12px uppercase orange | Section render | Visual chapter marker | None | Node 3:26, 3:27, 3:28 |
| 6 | Philosophy | Core Manifesto Statement | 48px Cormorant Garamond statement spanning 843px width | Render | High-impact manifesto text | Responsive text flow | Node 3:30 |
| 7 | Philosophy | Metric Dividers & Values | Two metric rows with bottom 1px divider (#2C2A2F): "Radical Transparency" (100%) and "Conversion Optimization" (+42% Avg) | Render | Distinct metric data visualization | Stacks cleanly on mobile | Node 3:33, 3:34, 3:37 |
| 8 | Selected Works | Interactive Category Switcher | Left-hand 320px switcher with "Brand Identities Built" and "Stories We've Told" tabs, toggling 6px orange active bar vs 2px dark bar | Tab click / tap | Updates active tab state and switches right-hand work cards | Preserves active category state | Node 3:48, 11:9, 3:53 |
| 9 | Selected Works | Project Showcase Cards | 428px wide cards with 360px #2B2A28 image placeholder, 2px #E63B19 border, category tag, and 32px editorial title | Card hover / click | Scale/hover effect, potential case study modal/link | Shows geometric placeholder if no project image | Node 3:59, 3:65, 11:14, 3:66 |
| 10 | Capabilities | Structured Service Cards | 3 x 405px cards with 16px radius, #1C1A1E fill, large display number ("01", "02", "03"), diagonal arrow icon, and description | Mouse hover | Border accent highlight, arrow translate(3px, -3px) | Adapts to 1-column stack on tablet/mobile | Node 3:90, 3:91, 3:106, 3:121 |
| 11 | Capabilities | Pill Badge Tags | Custom tag chips (6x12px padding, 100px radius, rgba(230,59,25,0.07) fill, rgba(230,59,25,0.2) stroke) | Tag label | Rounded pill badge | Wraps cleanly across lines | Node 3:99, 3:100, EL-54135f77 |
| 12 | CTA Banner | High-Contrast "LET'S WORK" | 200px Archivo Black headline on solid #E8330C background with bordered "Contact Us" trigger button | Button click | Triggers Contact Overlay modal | Scales down responsively on narrow viewports | Node 3:136, 3:139, 3:142 |
| 13 | Footer | Multi-Column Agency Footer | Structured footer with wordmark, mission statement, Inquiries (email/phone), Location (Sunset Blvd), and legal links | Click links | Opens mail client, phone dialer, or legal pages | Validated against invalid URLs | Node 3:146, 3:147, 3:160 |
| 14 | Contact Overlay | Full-Screen Contact Modal | Interactive overlay with "Let's Talk." headline, inquiry details, and clickable Instagram card | "Contact Us" click, Escape key, Close button | Mounts/unmounts overlay with smooth fade/slide | Traps focus, disables body scroll | Node 11:25 to 11:50 |

---

## 8. Edge Cases

| # | Feature | Input | Observed Behavior |
|---|---------|-------|-------------------|
| 1 | Category Switcher | Clicking currently active tab ("Brand Identities Built") | Remains in active state with 6px orange bar without re-triggering unnecessary animations or layout reflows. |
| 2 | Category Switcher | Switching rapidly between tabs | Smooth Framer Motion `AnimatePresence` fade-and-slide without content flashes or layout jumping. |
| 3 | Ticker Marquee | Very wide displays (>1920px) | Content seamlessly duplicates in an infinite loop so no blank gaps appear on ultrawide monitors. |
| 4 | Hero Typography | Mobile screen (<375px) | 192px display font would cause horizontal overflow if static; must scale using responsive `clamp(3rem, 12vw, 12rem)` or fluid Tailwind classes (`text-5xl sm:text-7xl md:text-8xl lg:text-[12rem]`). |
| 5 | Project Image Placeholders | Image asset unavailable | The Figma design explicitly specifies a brutalist placeholder: `#2B2A28` fill with `2px solid #E63B19` stroke and centered uppercase label (`Project 01`, `Project 02`). |
| 6 | Contact Modal Dismissal | User presses `Escape` key while modal is open | Modal closes immediately, focus returns to the triggering CTA button, and `document.body` scroll lock is removed. |
| 7 | Capabilities Pill Tags | Long badge text on small screens | Flex container with `flex-wrap: wrap` and `gap: 8px` prevents badges from overflowing card boundaries. |
| 8 | Footer Phone & Email | Tap on mobile device | Phone number links to `tel:(555)321-7654` and email links to `mailto:hello@creativemarketing.co` for native dialing/mailing. |
| 9 | High Contrast CTA Button | Hover state | Inverts colors smoothly (from transparent fill with dark border to solid dark fill with white/orange text). |

---

## 9. Authoritative Asset Inventory

| Asset Name | Type | Figma Node ID | Dimensions | Specification / Value |
|---|---|---|---|---|
| `brutalist-texture.png` | PNG Texture | `11:4` | `1584x672` (or 1440x680) | ImageRef: `25b0fed433617116a325735b6f84d4af7270ebdd`, Opacity `0.12` |
| `arrow-up-right.svg` | SVG Vector | `3:178`, `3:181`, `3:184` | `19x19px` | `<path d="M13.4578 13.4577V5.5423H5.54236M13.4578 5.5423L5.54236 13.4577" stroke="#E63B19" stroke-width="2" stroke-linecap="round"/>` |
| `x-circle.svg` | SVG Vector | `11:50` | `18x18px` | Contact overlay close button icon |
| `arrow-right.svg` | SVG Vector | `11:47` | `18x18px` | Instagram card outbound arrow icon |

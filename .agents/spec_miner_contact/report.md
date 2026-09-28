# Interactive Contact Modal Specification Report (Figma Node `11:25`)

**Source File**: `vmC1knGbGcG5nIBSMhODeW`  
**Target Node**: `11:25` (`contact-overlay`)  
**Canvas Dimensions**: 1440px × 900px  
**Status**: Authoritative & Complete  

---

## 1. Executive Summary
The interactive contact modal (Figma frame `contact-overlay`, node `#11:25`) is a full-viewport, brutalist, high-contrast overlay component designed to be summoned anywhere across the portfolio when a user engages a "Contact Us" trigger. It combines raw display typography (`Big Shoulders Display`), delicate high-fashion serif accents (`Cormorant Garamond`), and precise monospaced details (`Geist Mono`), structured into an asymmetrical two-column layout with a dedicated dismissal header.

---

## 2. Structural & Layout Specifications

### 2.1 Root Frame (`contact-overlay`, `#11:25`)
- **Node Type**: `[FRAME]`
- **Dimensions**: `1440px` width × `900px` height (Designed canvas; dynamically fills viewport via `inset-0 fixed`)
- **Layout Direction**: Flex column (`mode: column`)
- **Justify Content**: `space-between` (pins header to top, content container to bottom)
- **Align Items**: `stretch`
- **Padding**: `64px` on all sides (`64px` top, right, bottom, left; `p-16` in Tailwind)
- **Background Fill**: `#111012` (Obsidian dark base)
- **Z-Index**: High priority overlay (`z-50`)

### 2.2 Header Row (`header-row`, `#11:26`)
- **Node Type**: `[FRAME]`
- **Layout Direction**: Flex row (`mode: row`)
- **Width**: `100%` (`alignSelf: stretch`, `horizontal: fill`)
- **Height**: Hug (`vertical: hug`)
- **Justify Content**: `space-between`
- **Align Items**: `center`
- **Children**:
  1. **Modal Title (`#11:27`)**:
     - Content: `"Contact"`
     - Typography: `Big Shoulders Display`, Weight `900` (Black), Style `Black`, Case `UPPER`
     - Font Size: `32px`
     - Text Fill: `#E63B19` (Vibrant Flame Orange)
     - Alignment: Left / Top
  2. **Close Button (`close-button`, `#11:28`)**:
     - Dimensions: `48px` × `48px` fixed circular button
     - Layout: Flex row, `justifyContent: center`, `alignItems: center`
     - Border / Stroke: `1.5px` solid `#FFFFFF` (`strokes: ["#FFFFFF"]`, `strokeWeight: 1.5px`)
     - Border Radius: `24px` (`borderRadius: 24px` = fully round / `rounded-full`)
     - Background Fill: Transparent
     - Child Icon (`x-circle`, `#11:50`):
       - Dimensions: `18px` × `18px`
       - SVG Path: `M11.2503 6.74993L6.74993 11.2503M6.74993 6.74993L11.2503 11.2503M16.5007 9.00011C16.5007 13.1426 13.1426 16.5007 9.00011 16.5007C4.85764 16.5007 1.49951 13.1426 1.49951 9.00011C1.49951 4.85764 4.85764 1.49951 9.00011 1.49951C13.1426 1.49951 16.5007 4.85764 16.5007 9.00011Z`
       - Stroke: `#FFFFFF`, Stroke Width: `2px`, Stroke Linecap: `round`

### 2.3 Content Container (`content-container`, `#11:30`)
- **Node Type**: `[FRAME]`
- **Layout Direction**: Flex row (`mode: row`)
- **Width**: `100%` (`alignSelf: stretch`, `horizontal: fill`)
- **Height**: Hug (`vertical: hug`)
- **Padding**: `0px 0px 32px 0px` (Bottom padding `32px`)
- **Align Items**: `flex-end` (Both columns anchor to the bottom of the container)
- **Column Gap**: `120px` (`gap: 120px`)

---

## 3. Detailed Column Specifications

### 3.1 Left Column: Inquiries & Contact Details (`left-column`, `#11:31`)
- **Width**: Flex fill (`horizontal: fill`)
- **Layout Direction**: Flex column (`mode: column`)
- **Gap**: `48px`
- **Align Items**: `stretch`

#### 3.1.1 Headline Stack (`headline-stack`, `#11:32`)
- **Layout**: Flex column (`mode: column`), `gap: 0px`
- **Line 1 (`#11:33`)**: `"Let's"`
- **Line 2 (`#11:34`)**: `"Talk."`
- **Typography Specifications**:
  - Font Family: `Big Shoulders Display`
  - Font Style / Weight: `Black` (900)
  - Font Size: `140px`
  - Line Height: `0.85em` (`~119px`, ultra-condensed brutalist baseline spacing)
  - Text Case: `UPPER` ("LET'S TALK.")
  - Text Fill: `#FFFFFF` (Pure White)
  - Text Alignment: Left / Top

#### 3.1.2 Details Stack (`details-stack`, `#11:35`)
- **Layout**: Flex column (`mode: column`), `gap: 32px`
- **Subtext / Prompt Copy (`#11:36`)**:
  - Verbatim Copy: `"Ready to elevate your brand? Slide into our DMs and our team will get back to you within 24 hours."`
  - Container Dimensions: Fixed width `420px`, height `hug`
  - Typography: `Geist Mono`, Regular (400)
  - Font Size: `14px`
  - Line Height: `1.6em` (`22.4px`)
  - Text Fill: `#8D8B91` (Muted Studio Gray)
- **Contact Info Stack (`contact-info`, `#11:37`)**:
  - Layout: Flex column (`mode: column`), `gap: 8px`
  - Email Item (`#11:38`):
    - Display Copy: `"hello@fusionforce.co"`
    - Semantic Target: `mailto:hello@fusionforce.co`
  - Phone Item (`#11:39`):
    - Display Copy: `"+91 95998 29714"`
    - Semantic Target: `tel:+919599829714`
  - Shared Typography:
    - Font Family: `Geist Mono`
    - Font Style / Weight: `Medium` (500)
    - Font Size: `13px`
    - Text Case: `UPPER`
    - Text Fill: `#FFFFFF` (Pure White)
    - Interactive State: Hover underline / orange `#E63B19` transition

---

### 3.2 Right Column: Social Connection Card (`right-column`, `#11:40`)
- **Width**: Fixed desktop width `580px` (`horizontal: fixed`, `dimensions: { width: 580 }`)
- **Layout Direction**: Flex column (`mode: column`)
- **Gap**: `32px`
- **Align Items**: `stretch`

#### 3.2.1 Section Accent Header (`#11:41`)
- **Verbatim Copy**: `"Connect with us."`
- **Typography Specifications**:
  - Font Family: `Cormorant Garamond`
  - Font Style: `Italic`
  - Font Weight: `400` (Regular Italic)
  - Font Size: `56px`
  - Line Height: `1.2em` (`67.2px`)
  - Text Fill: `#E63B19` (Vibrant Flame Orange)
  - Text Alignment: Left / Top

#### 3.2.2 Interactive Social Banner (`instagram-banner`, `#11:42`)
- **Container Sizing**: Width `100%` (fill 580px), height `hug`
- **Layout**: Flex row (`mode: row`), `justifyContent: space-between`, `alignItems: center`
- **Padding**: `32px` on all sides (`p-8`)
- **Background Fill**: `#FFFFFF` (Pure High-Contrast White)
- **Border Radius**: `4px` (`rounded-sm`)
- **Semantic Element**: Interactive anchor link (`<a>`)
  - Destination: `https://instagram.com/` (or client Instagram handle)
  - Target: `_blank`, `rel="noopener noreferrer"`
- **Children**:
  1. **Brand Handle Label (`#11:43`)**:
     - Verbatim Copy: `"@Instagram"`
     - Typography: `Big Shoulders Display`, Weight `900` (Black)
     - Font Size: `44px`
     - Text Case: `UPPER` ("@INSTAGRAM")
     - Text Fill: `#000000` (Pitch Black)
  2. **Arrow Icon Badge (`arrow-wrapper`, `#11:44`)**:
     - Dimensions: `40px` × `40px` fixed circular badge
     - Layout: Flex row, `justifyContent: center`, `alignItems: center`
     - Background Fill: `#000000` (Pitch Black circle)
     - Border Radius: `20px` (`rounded-full`)
     - Child Icon (`arrow-right`, `#11:47`):
       - Dimensions: `18px` × `18px`
       - SVG Vector Path: `M3.74951 8.99999H14.2507M9.00011 14.2506L14.2507 8.99999L9.00011 3.74939`
       - Stroke: `#FFFFFF` (White), Stroke Width: `2px`, Stroke Linecap: `round`

---

## 4. Design Token Matrix

| Token Name | Token Type | Value | Figma Source |
|---|---|---|---|
| `color-bg-overlay` | Color (Hex) | `#111012` | Node `#11:25` fills |
| `color-accent-orange` | Color (Hex) | `#E63B19` | Node `#11:27`, `#11:41` fills |
| `color-text-primary` | Color (Hex) | `#FFFFFF` | Node `#11:33`, `#11:34`, `#11:38`, `#11:39` |
| `color-text-muted` | Color (Hex) | `#8D8B91` | Node `#11:36` fill |
| `color-card-bg` | Color (Hex) | `#FFFFFF` | Node `#11:42` fill |
| `color-card-text` | Color (Hex) | `#000000` | Node `#11:43` fill |
| `color-badge-bg` | Color (Hex) | `#000000` | Node `#11:44` fill |
| `font-display` | Typography | `Big Shoulders Display, sans-serif` | Node `#11:27`, `#11:33`, `#11:34`, `#11:43` |
| `font-serif` | Typography | `Cormorant Garamond, serif` | Node `#11:41` |
| `font-mono` | Typography | `Geist Mono, monospace` | Node `#11:36`, `#11:38`, `#11:39` |
| `size-headline` | Font Size | `140px` (Line Height `0.85em`) | Node `#11:33`, `#11:34` |
| `size-serif-header` | Font Size | `56px` (Line Height `1.2em`) | Node `#11:41` |
| `size-card-title` | Font Size | `44px` (Line Height auto) | Node `#11:43` |
| `size-modal-title` | Font Size | `32px` (Line Height auto) | Node `#11:27` |
| `size-body-mono` | Font Size | `14px` (Line Height `1.6em`) | Node `#11:36` |
| `size-contact-mono` | Font Size | `13px` (Line Height auto) | Node `#11:38`, `#11:39` |
| `space-outer-pad` | Spacing | `64px` | Node `#11:25` padding |
| `space-col-gap` | Spacing | `120px` | Node `#11:30` gap |
| `space-left-gap` | Spacing | `48px` | Node `#11:31` gap |
| `space-details-gap` | Spacing | `32px` | Node `#11:35` gap |
| `space-right-gap` | Spacing | `32px` | Node `#11:40` gap |
| `space-contact-gap` | Spacing | `8px` | Node `#11:37` gap |
| `radius-card` | Border Radius | `4px` | Node `#11:42` |
| `radius-close-btn` | Border Radius | `24px` (`rounded-full`) | Node `#11:28` |
| `radius-arrow-badge`| Border Radius | `20px` (`rounded-full`) | Node `#11:44` |

---

## 5. Interaction, Animation & Accessibility Specifications

### 5.1 Open & Close Transitions (Framer Motion)
- **Modal Overlay (`AnimatePresence`)**:
  ```tsx
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
    className="fixed inset-0 z-50 flex flex-col justify-between p-8 md:p-16 bg-[#111012] overflow-y-auto"
  />
  ```
- **Content Stagger Animation**:
  - `initial={{ opacity: 0, y: 24 }}`
  - `animate={{ opacity: 1, y: 0 }}`
  - `exit={{ opacity: 0, y: 16 }}`
  - `transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}`

### 5.2 Interactive Element Micro-Interactions
1. **Close Button (`#11:28`)**:
   - Hover: Border color remains white, background fills `#FFFFFF` with icon stroke transitioning to `#111012`, or scale up `scale(1.05)`.
   - Tap: `scale(0.95)`.
   - Cursor: `cursor-pointer`.
2. **Instagram Banner (`#11:42`)**:
   - Hover: Card lifts `translateY(-3px)` with subtle shadow; child arrow badge `#11:44` translates horizontally right (`translateX(4px)`).
   - Tap: `scale(0.99)`.
   - Cursor: `cursor-pointer`.
3. **Contact Links (`#11:38`, `#11:39`)**:
   - Hover: Color transition to orange `#E63B19` or underline reveal.

### 5.3 Dismissal Triggers & Keyboard Handlers
1. **Close Button Click**: Invokes `onClose()`.
2. **Escape Key Press**: Global `keydown` listener triggers `onClose()` when `event.key === 'Escape'`.
3. **Body Scroll Lock**: Attaches `document.body.style.overflow = 'hidden'` on mount; resets to `unset` on unmount.
4. **Focus Trap**: Traps tab navigation within the modal container between the close button, contact links, and Instagram card.

---

## 6. Responsive Breakdown Across Viewports

| Breakpoint | Layout Direction | Outer Padding | Headline Size | Column Gap | Right Col Width | Scroll Behavior |
|---|---|---|---|---|---|---|
| **Desktop (≥1440px)** | Row (`items-end`) | `64px` | `140px` | `120px` | `580px` fixed | Normal viewport fit |
| **Tablet (768px-1024px)**| Col / Row Wrap | `40px` | `clamp(4.5rem, 8vw, 6.5rem)` | `48px` | `100%` / full width | `overflow-y-auto` |
| **Mobile (<768px)** | Single Column | `24px` | `clamp(3.25rem, 12vw, 4.5rem)` | `40px` | `100%` full width | `overflow-y-auto` enabled |

---

## 7. Features Discovered
| # | Category | Feature | Description | Inputs | Outputs | Error Behavior | Discovered Via |
|---|----------|---------|-------------|--------|---------|----------------|----------------|
| 1 | Modal Container | Fullscreen Overlay | High-contrast dark viewport container pinning header top and content bottom | `isOpen: boolean` prop | Fixed dark viewport (`#111012`) with `p-16` padding | Returns null when `isOpen` is false | Figma Node `#11:25` |
| 2 | Header | Modal Category Header | Big Shoulders Display uppercase title in vibrant orange `#E63B19` | Static text "Contact" | Rendered 32px heading | N/A | Figma Node `#11:27` |
| 3 | Header | Circular Close Button | 48px round button with 1.5px white stroke and embedded SVG close icon | Click event / Enter key | Dispatches modal dismissal callback | N/A | Figma Node `#11:28`, `#11:50` |
| 4 | Left Column | Display Headline | Two-line brutalist headline "Let's" / "Talk." in 140px Big Shoulders Display | Text strings | Massive uppercase heading stack | N/A | Figma Nodes `#11:32`-`#11:34` |
| 5 | Left Column | Brand Subtext | 14px Geist Mono description copy with 420px fixed width | Text string | Formatted 1.6em body copy | Wrap to 100% width on narrow screens | Figma Node `#11:36` |
| 6 | Left Column | Direct Email Link | Functional mailto hyperlink for `hello@fusionforce.co` | User click | Opens default mail client | Falls back to copy or anchor behavior | Figma Node `#11:38` |
| 7 | Left Column | Direct Phone Link | Functional tel hyperlink for `+91 95998 29714` | User click | Triggers telephony dialer | Falls back to anchor behavior | Figma Node `#11:39` |
| 8 | Right Column | Serif Section Header | 56px Cormorant Garamond italic header in flame orange `#E63B19` | Static text "Connect with us." | Styled italic serif header | N/A | Figma Node `#11:41` |
| 9 | Right Column | Interactive Instagram Card | Pure white card with 44px "@Instagram" label and black arrow circular badge | Click / Hover | Navigates to external Instagram profile in new tab | N/A | Figma Nodes `#11:42`-`#11:47` |
| 10 | Interaction | Keyboard Escape Listener | Global document listener dismissing modal on Escape | `Escape` keydown | Invokes `onClose` handler | Safely unbinds on component unmount | ORIGINAL_REQUEST.md R3 |
| 11 | Interaction | Background Scroll Locking | Locks background body scroll while overlay is mounted | Modal open state | Sets `document.body.style.overflow = 'hidden'` | Reverts cleanly on unmount | UX Best Practice |

---

## 8. Edge Cases
| # | Feature | Input | Observed Behavior |
|---|---------|-------|-------------------|
| 1 | Modal Container | Short laptop screen (e.g. 1366 × 768) | Content height (designed for 900px) exceeds viewport; requires `overflow-y-auto` and bottom padding to avoid clipping. |
| 2 | Headline Stack | Ultra-narrow mobile screen (320px - 375px) | 140px font causes horizontal text overflow; requires fluid typography `clamp(3rem, 12vw, 5rem)` or breakpoint scaling. |
| 3 | Right Column Social Card | Mobile portrait viewport (<640px) | 580px fixed width causes viewport clipping; container width must adapt to `w-full max-w-[580px]`. |
| 4 | Direct Contact Links | Clicking email/phone on desktop without configured default mail/phone app | Default OS prompt or no-op; should support text selection or copy-to-clipboard feedback if desired. |
| 5 | Keyboard Navigation | Rapid Tab key navigation | Focus could leak to background elements behind modal; requires strict focus trap or inert background attribute. |
| 6 | Backdrop Click | User clicks on empty dark background outside interactive cards | Dismisses the overlay if configured as backdrop dismissal, or retains overlay focus. |
| 7 | SVG Icon Scaling | Low-DPI displays or browser zoom | Pixelated vector rendering if not rendered as inline SVGs; using inline SVGs with `viewBox="0 0 18 18"` ensures crisp rendering at all scales. |

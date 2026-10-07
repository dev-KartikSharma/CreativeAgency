export interface ProjectDetail {
  slug: string;
  num: string;
  title: string;
  category: string;
  year: string;
  client: string;
  role: string;
  tagline: string;
  overview: string;
  heroImage?: string;
  videoHorizontal?: string;
  videoVertical?: string;
  videoPoster?: string;
  isAgencyShowcase?: boolean;
  isReel?: boolean;
  deliverables: string[];
  metrics: { value: string; label: string }[];
  breakdown: {
    heading: string;
    body: string;
    quote?: string;
  }[];
  gallery: {
    image: string;
    caption: string;
  }[];
}

export const PROJECTS_DATA: Record<string, ProjectDetail> = {
  "showcase-reel": {
    slug: "showcase-reel",
    num: "01",
    title: "Agency Showcase Reel",
    category: "Capabilities / Showreel",
    year: "2026",
    client: "Creative Marketing Collective",
    role: "Direction, 3D, Motion Systems, Brand Architecture",
    tagline: "What happens when ruthless strategy meets kinetic motion",
    overview:
      "This showcase is not a single client case study—it is an unfiltered demonstration of our full spectrum capabilities. From high-fidelity brand systems and bespoke web experiences to 60 FPS motion graphics and launch campaigns, this reel distills how we turn attention into measurable brand velocity.",
    videoHorizontal: "/video/client_showcase_30s.mp4",
    videoVertical: "/video/client_showcase_30s_vertical.mp4",
    videoPoster: "/video/client_showcase_thumbnail.png",
    isAgencyShowcase: true,
    isReel: true,
    heroImage: "/projects/colter-roll.png",
    deliverables: [
      "Brand Positioning & Visual Identity",
      "Interactive Digital Web Systems",
      "Motion Direction & 60 FPS Video Editing",
      "Growth Marketing & Launch Strategy",
      "Creative Technology & Custom Shaders",
    ],
    metrics: [
      { value: "3.5M+", label: "Organic impressions earned" },
      { value: "60 FPS", label: "Ultra-fluid motion design" },
      { value: "100%", label: "In-house creative execution" },
    ],
    breakdown: [
      {
        heading: "01 / Brand Systems That Can't Be Ignored",
        body:
          "We construct visual and strategic architectures designed for radical recognition. Positioning that discovers authentic market tension, backed by typography, color theory, and modular identity toolkits that remain unmistakable across every surface.",
        quote: "Safe work gets scrolled past. We make what sticks.",
      },
      {
        heading: "02 / Kinetic Motion & Visual Velocity",
        body:
          "Motion is not decoration; it is storytelling speed. We orchestrate rhythm, audio-reactive sound design, and razor-sharp typographic pacing so your audience never touches the skip button.",
      },
      {
        heading: "03 / Digital Experiences With Zero Friction",
        body:
          "High-impact websites built on modern web stacks where brutalist art direction meets flawless performance. Every interaction, transition, and micro-moment is tuned to convert passive curiosity into passionate clients.",
      },
    ],
    gallery: [
      {
        image: "https://images.unsplash.com/photo-1562210569-4a9d5fb7e467?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1600",
        caption: "Culture & Campaign direction",
      },
      {
        image: "https://images.unsplash.com/photo-1715784337197-70ef917be0e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1200",
        caption: "Fashion & digital styling",
      },
      {
        image: "https://images.unsplash.com/photo-1722170225004-929efa1546f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1400",
        caption: "Systems architecture & typography",
      },
    ],
  },

  "new-form": {
    slug: "new-form",
    num: "02",
    title: "New Form",
    category: "Fashion / Digital",
    year: "2026",
    client: "New Form Studio Paris",
    role: "Digital Direction, E-Commerce Experience, Brand Voice",
    tagline: "Redefining contemporary haute couture through tactile digital commerce",
    overview:
      "New Form bridges avant-garde runway garments with an unapologetically brutalist digital flagship. We engineered a high-fidelity digital store that mirrors the sensory weight and architectural cuts of high fashion fabrics.",
    heroImage:
      "https://images.unsplash.com/photo-1715784337197-70ef917be0e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1400",
    deliverables: [
      "Digital Flagship Experience",
      "Lookbook Art Direction",
      "Interactive 3D Garment Previews",
      "Custom E-Commerce Typography",
    ],
    metrics: [
      { value: "4.2x", label: "Increase in time on page" },
      { value: "48%", label: "Conversion rate lift" },
      { value: "98/100", label: "Lighthouse performance score" },
    ],
    breakdown: [
      {
        heading: "01 / Architectural Digital Retail",
        body:
          "Traditional luxury commerce tends to look homogenous. For New Form, we introduced stark monochrome grid structures, monumental type scales, and tactile cursor physics that create a gallery-like browsing experience.",
      },
      {
        heading: "02 / Texture & Editorial Rhythm",
        body:
          "High-contrast editorial photography was framed in asymmetric viewports that react dynamically to the user's scroll velocity, turning casual shoppers into engaged brand followers.",
      },
    ],
    gallery: [
      {
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1200",
        caption: "Monochrome runway lookbook showcase",
      },
      {
        image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1200",
        caption: "Editorial campaign photography",
      },
    ],
  },

  "signal": {
    slug: "signal",
    num: "03",
    title: "Signal",
    category: "Technology / Identity",
    year: "2025",
    client: "Signal Protocols Inc.",
    role: "Brand Identity, Product Visualization, Design System",
    tagline: "Visual clarity for decentralized communications infrastructure",
    overview:
      "Signal builds cryptographic protocol networks. Our challenge was translating zero-knowledge mathematics and decentralized relays into a razor-sharp, human-readable visual language that engineers and enterprise clients instantly trust.",
    heroImage:
      "https://images.unsplash.com/photo-1722170225004-929efa1546f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1400",
    deliverables: [
      "Visual Identity & Logomark",
      "Design System & UI Components",
      "Technical Documentation Portal",
      "Data Topology Motion Graphics",
    ],
    metrics: [
      { value: "$18M", label: "Series A funding closed" },
      { value: "120K+", label: "Active network nodes" },
      { value: "Zero", label: "Compromised transmissions" },
    ],
    breakdown: [
      {
        heading: "01 / Concrete Mathematics Made Visual",
        body:
          "We discarded generic blockchain gradients in favor of technical monospace typography, precise coordinate grids, and phosphor-green telemetry dials that honor the engineering rigor behind the platform.",
      },
      {
        heading: "02 / Systematic Scalability",
        body:
          "Constructed a multi-platform design token system that translates seamlessly from CLI terminal interfaces to executive web dashboards.",
      },
    ],
    gallery: [
      {
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1200",
        caption: "Encrypted packet telemetry visualization",
      },
      {
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1200",
        caption: "Infrastructure node topography",
      },
    ],
  },

  "ritual": {
    slug: "ritual",
    num: "04",
    title: "Ritual",
    category: "Art / Experience",
    year: "2026",
    client: "Ritual Spatial Arts",
    role: "Spatial Concept, Interactive Installation, Sound Direction",
    tagline: "An immersive sensory playground where light and sound intersect",
    overview:
      "Ritual is a physical-meets-digital art exhibition mounted across three industrial warehouse spaces in Tokyo and Los Angeles. We designed the experiential identity, ambient soundscapes, and reactive light architecture.",
    heroImage:
      "https://images.unsplash.com/photo-1664477615410-ee1a7f540a7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1400",
    deliverables: [
      "Spatial Installation Design",
      "Audio-Reactive Projection Mapping",
      "Exhibition Catalogue & Posters",
      "Event Ticketing Experience",
    ],
    metrics: [
      { value: "85K+", label: "In-person visitors" },
      { value: "14 Days", label: "Sold out premiere run" },
      { value: "2 Cities", label: "Tokyo & Los Angeles" },
    ],
    breakdown: [
      {
        heading: "01 / Hypnotic Spatial Architecture",
        body:
          "By syncing ambient frequencies with volumetric light sculptures, visitors step out of everyday sensory overload and into a meditative space calibrated to evoke intense visceral emotion.",
      },
      {
        heading: "02 / Ephemeral Physical Artifacts",
        body:
          "Alongside the live exhibition, we produced tactile foil-stamped posters and a foil-bound companion monograph capturing the architectural genesis of the installation.",
      },
    ],
    gallery: [
      {
        image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1200",
        caption: "Volumetric light study in dark space",
      },
      {
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1200",
        caption: "Tokyo industrial venue ambient light field",
      },
    ],
  },
};

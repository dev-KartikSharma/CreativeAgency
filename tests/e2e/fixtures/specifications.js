/**
 * Authoritative Specification Fixtures & Tokens
 * Source: ORIGINAL_REQUEST.md, PROJECT.md, and Figma extraction reports (Node 3:4 & 11:25)
 */

export const DESIGN_TOKENS = {
  colors: {
    bgBase: '#111012',
    bgCardDark: '#1A1816',
    bgCardMid: '#1C1A1E',
    bgPlaceholder: '#2B2A28',
    accentOrange: '#E63B19',
    accentCta: '#E8330C',
    textPrimary: '#F9F8F6',
    textWhite: '#FFFFFF',
    textMuted: '#8D8B91',
    textDim: '#8A8884',
    strokePrimary: '#2C2A2F',
    strokeCard: '#2B2A28'
  },
  typography: {
    display: 'Big Shoulders Display',
    archivo: 'Archivo Black',
    serif: 'Cormorant Garamond',
    sans: 'Instrument Sans',
    mono: 'Geist Mono'
  },
  breakpoints: {
    desktop: 1440,
    tablet: 768,
    mobile: 375
  }
};

export const SPECIFICATIONS = {
  navigation: {
    wordmark: 'CREATIVE MARKETING.',
    links: [
      { label: '01 / Philosophy', href: '#philosophy' },
      { label: '02 / Works', href: '#works' },
      { label: '03 / Capabilities', href: '#capabilities' }
    ],
    ctaButton: 'Contact Us'
  },
  hero: {
    subtitle: 'WHERE CREATIVITY BECOMES REALITY',
    titleLine1: 'CREATIVE',
    titleLine2: 'MARKETING',
    titleLine3: 'Made Easy',
    tickerText: "CENTERS AROUND MAKING CREATIVE MARKETING SOLUTIONS BOTH ACCESSIBLE AND EFFECTIVE FOR BUSINESSES OF ALL SIZES. WE UNDERSTAND THAT IN THE FAST-PACED WORLD OF DIGITAL MARKETING, SIMPLICITY IS KEY. THAT'S WHY OUR TEAM OF EXPERTS IS DEDICATED TO BREAKING DOWN COMPLEX MARKETING STRATEGIES INTO STRAIGHTFORWARD, ACTIONABLE STEPS.",
    textureOpacity: 0.12
  },
  philosophy: {
    tag: '01 / Our Philosophy',
    statement: 'We believe that raw attention is the only true currency of the digital age.',
    body: "In a landscape crowded with superficial metrics, we focus exclusively on architecture that generates authentic results. Clean layouts, clear hierarchies, and fearless visual choices are not just artistic decisions—they are functional requirements to capture the modern consumer's divided attention.",
    metrics: [
      { label: 'Radical Transparency', value: '100%' },
      { label: 'Conversion Optimization', value: '+42% Avg' }
    ]
  },
  works: {
    tag: '02 / Selected Works',
    headline: 'Case Studies in Velocity and Grace',
    categories: [
      { id: 'brand', label: 'Brand Identities Built', barHeight: 6, barColor: '#E63B19' },
      { id: 'stories', label: "Stories We've Told", barHeight: 2, barColor: '#2B2A28' }
    ],
    projectCards: [
      { id: 'project-01', placeholder: 'Project 01', tag: 'Identity / Packaging', title: 'Aura Luxury Essentials Campaign' },
      { id: 'project-02', placeholder: 'Project 02', tag: 'Identity / Packaging', title: 'Aura Flagship Spatial Identity' }
    ]
  },
  capabilities: {
    tag: '03 / Capabilities',
    headline: 'Engineered for High-Fidelity Performance',
    description: 'Our specialized departments integrate flawlessly to produce cohesive, conversion-driven brand ecosystems.',
    services: [
      {
        number: '01',
        title: 'Brand Strategy',
        description: 'Developing rigorous market positions that clarify message and dictate visual authority before a single pixel is placed.',
        badges: ['Positioning', 'Market Analysis', 'Brand Voice']
      },
      {
        number: '02',
        title: 'Interface Design',
        description: 'High-fidelity, interactive, and completely custom user pathways built specifically to simplify user flows and boost conversion.',
        badges: ['Figma Native', 'Design Systems', 'Prototyping']
      },
      {
        number: '03',
        title: 'Growth Marketing',
        description: 'Continuous optimization across ad networks, technical search engines, and automated nurture tracks driven by real metrics.',
        badges: ['SEO Strategy', 'Analytics', 'Copywriting']
      }
    ]
  },
  ctaBanner: {
    headline: "LET'S WORK",
    buttonText: 'Contact Us',
    bg: '#E8330C'
  },
  footer: {
    wordmark: 'CREATIVE MARKETING.',
    mission: 'Providing rigorous artistic design & engineering strategy for brands that refuse to look ordinary.',
    inquiries: {
      header: 'Inquiries',
      email: 'hello@creativemarketing.co',
      phone: '(555) 321-7654'
    },
    location: {
      header: 'Location',
      line1: 'Sunset Blvd, Suite 400',
      line2: 'Los Angeles, CA 90028'
    },
    copyright: '© 2026 Creative Marketing Collective. All rights reserved.',
    links: ['Privacy Policy', 'Terms of Service']
  },
  contactModal: {
    title: 'Contact',
    headline: "Let's Talk.",
    subtext: 'Ready to elevate your brand? Slide into our DMs and our team will get back to you within 24 hours.',
    email: 'hello@fusionforce.co',
    phone: '+91 95998 29714',
    connectAccent: 'Connect with us.',
    instagramHandle: '@Instagram',
    instagramUrl: 'https://instagram.com/'
  }
};

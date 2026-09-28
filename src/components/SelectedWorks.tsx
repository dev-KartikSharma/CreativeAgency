import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../utils/cn';
import type { SectionProps } from '../types';
import { CaseStudyModal } from './CaseStudyModal';

export interface CaseStudyItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  client: string;
  year: string;
  description: string;
  deliverables: string[];
  // Visual presentation attributes
  type: 'colter' | 'roots-sky' | 'kitsa' | 'vanguard';
  accentColor: string;
}

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: 'colter-media',
    number: '01',
    title: 'COLTER MEDIA',
    subtitle: 'Brand Identity & Guidelines · New York',
    category: 'Brand Identity',
    client: 'Colter Media Inc.',
    year: '2026',
    accentColor: '#B23712',
    type: 'colter',
    description:
      'Complete visual identity, custom logo suite, and systematic brand guidelines for NYC-based digital media company Colter Media. Anchored around dynamic interlocking links that embody connection, narrative velocity, and journalistic integrity.',
    deliverables: ['Logo Suite', 'Brand Guidelines', 'Color Architecture', 'Typography System'],
  },
  {
    id: 'roots-sky',
    number: '02',
    title: 'ROOTS AND SKY',
    subtitle: 'Luxury Packaging & Creative Direction',
    category: 'Packaging & Identity',
    client: 'Roots & Sky Botanicals',
    year: '2026',
    accentColor: '#C49767',
    type: 'roots-sky',
    description:
      'We created Roots & Sky from a simple, resonant idea that true luxury should be calming and rooted in nature, crafted from earth and botanicals. Designed artisanal label suites, tactile physical packaging, and serene visual direction.',
    deliverables: ['Packaging Suite', 'Artisanal Labels', 'Art Direction', 'Custom Typography'],
  },
  {
    id: 'kitsa',
    number: '03',
    title: 'KITSA',
    subtitle: 'Digital Product & Telemetry Interface',
    category: 'Digital Product',
    client: 'Formis Technologies',
    year: '2026',
    accentColor: '#10B981',
    type: 'kitsa',
    description:
      'Formis Technologies has been a pioneer in medical equipment and healthcare. Its latest venture is a healthcare essentials app that home delivers the order in just 20 minutes, backed by dynamic route telemetry and dark UI architecture.',
    deliverables: ['Mobile Experience', 'Telemetry System', 'Design Engineering', 'Micro-interactions'],
  },
  {
    id: 'vanguard-play',
    number: '04',
    title: 'VANGUARD PLAY',
    subtitle: '3D Character Design & Motion Campaign',
    category: '3D & Motion',
    client: 'Vanguard Studios',
    year: '2026',
    accentColor: '#FF5733',
    type: 'vanguard',
    description:
      'An expressive 3D character world and playful campaign system designed to humanize next-generation digital services across web launches, interactive onboarding, and vibrant social brand touchpoints.',
    deliverables: ['3D Character System', 'Motion Graphics', 'Interactive Assets', 'Brand Mascot'],
  },
];

export interface SelectedWorksProps extends SectionProps {
  projects?: CaseStudyItem[];
}

export const SelectedWorks: React.FC<SelectedWorksProps> = ({
  id = 'works',
  className,
  projects = CASE_STUDIES,
}) => {
  const [activeProject, setActiveProject] = useState<CaseStudyItem | null>(null);

  return (
    <section
      id={id}
      className={cn(
        'scroll-mt-20 relative w-full bg-[#111012] border-b border-[#2C2A2F] py-14 sm:py-24 lg:py-32',
        className
      )}
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-10 md:px-14 lg:px-20">
        {/* ========================================================= */}
        {/* HEADER: Clean, Editorial & Confident                      */}
        {/* ========================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-6 pb-8 sm:pb-16 border-b border-[#2C2A2F]">
          <div>
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#E63B19] mb-2 sm:mb-3 block">
              // 02 · SELECTED WORKS
            </span>
            <h2 className="font-display font-black text-4xl sm:text-7xl md:text-8xl lg:text-9xl uppercase text-white tracking-tight leading-none">
              CASE STUDIES
            </h2>
          </div>

          <div className="max-w-[380px] lg:text-right">
            <p className="font-mono text-xs sm:text-[13px] text-[#8D8B91] leading-relaxed uppercase tracking-wider">
              Curated identity systems, physical packaging, and digital product architectures crafted for modern industry leaders.
            </p>
          </div>
        </div>

        {/* ========================================================= */}
        {/* CLEAN MULTI-COLUMN EDITORIAL GRID (Matching Reference)    */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 pt-8 sm:pt-16">
          {projects.map((project, idx) => (
            <motion.article
              key={project.id}
              data-project-card="true"
              data-cursor-text="VIEW ↗"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setActiveProject(project)}
              className="group cursor-pointer flex flex-col select-none"
            >
              {/* =================================================== */}
              {/* CARD MEDIA CONTAINER (Responsive Aspect Ratio)      */}
              {/* =================================================== */}
              <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] rounded-lg overflow-hidden border border-[#2C2A2F] bg-[#18171A] group-hover:border-[#E63B19]/70 group-hover:shadow-[0_10px_30px_rgba(230,59,25,0.12)] transition-all duration-500 ease-out">
                {/* 1. COLTER MEDIA CARD VISUAL: Live Infinite Auto-Scrolling PDF Reel */}
                {project.type === 'colter' && (
                  <div className="relative w-full h-full overflow-hidden bg-[#141316] flex flex-col justify-between">
                    {/* Infinite Scrolling PDF Guidelines Reel */}
                    <div className="absolute inset-0 w-full overflow-hidden">
                      <motion.div
                        className="w-full flex flex-col pointer-events-none select-none"
                        animate={{ y: ['0%', '-50%'] }}
                        transition={{
                          y: {
                            duration: 38,
                            repeat: Infinity,
                            ease: 'linear',
                          },
                        }}
                      >
                        <img
                          src="/projects/colter-roll.png"
                          alt="Colter Media Brand Guidelines Deck"
                          className="w-full h-auto block select-none"
                          loading="eager"
                        />
                        <img
                          src="/projects/colter-roll.png"
                          alt="Colter Media Brand Guidelines Deck Repeat"
                          className="w-full h-auto block select-none"
                          loading="eager"
                        />
                      </motion.div>

                      {/* Vignette Gradients for Depth */}
                      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#111012] via-[#111012]/60 to-transparent pointer-events-none" />
                      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#111012] via-[#111012]/80 to-transparent pointer-events-none" />
                    </div>

                    {/* Top Pill Badge Bar */}
                    <div className="relative z-10 flex items-center justify-between w-full p-4 pointer-events-none">
                      <span className="font-mono text-[10px] font-bold text-white px-2.5 py-0.5 rounded-full border border-white/20 bg-black/60 backdrop-blur-md shadow">
                        {project.number}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#B23712] font-semibold">
                        NYC MEDIA
                      </span>
                    </div>

                    {/* Hover Floating Pill */}
                    <div className="relative z-10 my-auto flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <span className="px-4 py-2 rounded-full bg-[#E63B19] text-white font-mono text-xs font-bold tracking-wider uppercase shadow-xl">
                        EXPLORE CASE ↗
                      </span>
                    </div>

                    {/* Bottom Info Bar */}
                    <div className="relative z-10 flex items-center justify-between p-4 pt-2 pointer-events-none">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-white drop-shadow-md">
                        COLTER MEDIA
                      </span>
                      <span className="font-mono text-[9px] text-[#E63B19] uppercase tracking-wider font-bold">
                        IDENTITY REEL ↗
                      </span>
                    </div>
                  </div>
                )}

                {/* 2. ROOTS AND SKY CARD VISUAL (Botanical Packaging Matching Reference) */}
                {project.type === 'roots-sky' && (
                  <div className="relative w-full h-full flex flex-col justify-between p-6 overflow-hidden bg-[#ECE8E1]">
                    {/* Subtle warm paper texture overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#F5F2EC] to-[#E3DDD3] opacity-90" />

                    {/* Top Pill */}
                    <div className="relative z-10 flex items-center justify-between w-full">
                      <span className="font-mono text-[10px] font-bold text-[#2A2825] px-2.5 py-0.5 rounded-full border border-black/15 bg-white/60 backdrop-blur-sm">
                        {project.number}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#8A755D] font-semibold">
                        BOTANICALS
                      </span>
                    </div>

                    {/* Center: Two Arched Packaging Labels side by side */}
                    <div className="relative z-10 my-auto flex items-center justify-center gap-3.5 py-2 group-hover:scale-105 transition-transform duration-500">
                      {/* Label 1: Kailasa (Terracotta/Red) */}
                      <div className="w-[84px] sm:w-[94px] h-[145px] sm:h-[160px] rounded-t-2xl rounded-b-sm bg-[#9E4638] text-white p-2 flex flex-col justify-between shadow-xl border border-white/20 overflow-hidden">
                        <div className="w-full h-[65px] rounded-t-xl bg-[#2D3F34] overflow-hidden relative flex items-center justify-center">
                          {/* Scenic Mountain & Pine Mist SVG */}
                          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 70" preserveAspectRatio="none">
                            <linearGradient id="mist1" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#4A6B56" />
                              <stop offset="60%" stopColor="#2E4839" />
                              <stop offset="100%" stopColor="#1B2E24" />
                            </linearGradient>
                            <rect width="100" height="70" fill="url(#mist1)" />
                            {/* Mountains */}
                            <polygon points="10,65 35,25 60,65" fill="#243B2E" opacity="0.8" />
                            <polygon points="40,65 70,18 95,65" fill="#1C3024" opacity="0.9" />
                            {/* Trees silhouettes */}
                            <polygon points="20,65 25,48 30,65" fill="#111D16" />
                            <polygon points="50,65 55,42 60,65" fill="#111D16" />
                            <polygon points="75,65 80,45 85,65" fill="#111D16" />
                          </svg>
                          <div className="relative z-10 font-serif text-[9px] font-bold text-white tracking-[0.25em] bg-black/40 backdrop-blur-[2px] px-2 py-0.5 rounded border border-white/10">
                            R&S
                          </div>
                        </div>
                        <div className="text-center pb-1">
                          <div className="font-serif text-[9px] uppercase tracking-[0.2em] font-bold">
                            KAILASA
                          </div>
                          <div className="text-[6px] text-white/70 italic mt-0.5 font-serif">
                            Pure Mountain Mist
                          </div>
                        </div>
                      </div>

                      {/* Label 2: Aranya (Olive Green) */}
                      <div className="w-[84px] sm:w-[94px] h-[145px] sm:h-[160px] rounded-t-2xl rounded-b-sm bg-[#4A5D44] text-white p-2 flex flex-col justify-between shadow-xl border border-white/20 overflow-hidden">
                        <div className="w-full h-[65px] rounded-t-xl bg-[#2A3727] overflow-hidden relative flex items-center justify-center">
                          {/* Canopy Forest SVG */}
                          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 70" preserveAspectRatio="none">
                            <linearGradient id="mist2" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#5D7554" />
                              <stop offset="60%" stopColor="#3C4F35" />
                              <stop offset="100%" stopColor="#243320" />
                            </linearGradient>
                            <rect width="100" height="70" fill="url(#mist2)" />
                            {/* Deep Canopy trees */}
                            <circle cx="25" cy="50" r="22" fill="#202D1B" opacity="0.8" />
                            <circle cx="55" cy="45" r="26" fill="#1A2516" opacity="0.9" />
                            <circle cx="85" cy="52" r="20" fill="#202D1B" opacity="0.8" />
                            {/* Mist lines */}
                            <line x1="5" y1="35" x2="95" y2="35" stroke="#FFFFFF" strokeWidth="0.5" opacity="0.25" />
                            <line x1="15" y1="42" x2="85" y2="42" stroke="#FFFFFF" strokeWidth="0.5" opacity="0.15" />
                          </svg>
                          <div className="relative z-10 font-serif text-[9px] font-bold text-white tracking-[0.25em] bg-black/40 backdrop-blur-[2px] px-2 py-0.5 rounded border border-white/10">
                            R&S
                          </div>
                        </div>
                        <div className="text-center pb-1">
                          <div className="font-serif text-[9px] uppercase tracking-[0.2em] font-bold">
                            ARANYA
                          </div>
                          <div className="text-[6px] text-white/70 italic mt-0.5 font-serif">
                            Deep Forest Reserve
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Info */}
                    <div className="relative z-10 flex items-center justify-between pt-3 border-t border-black/10">
                      <span className="font-mono text-[9px] uppercase tracking-widest text-[#5C564E]">
                        ORGANIC EXTRACT
                      </span>
                      <span className="font-mono text-[9px] text-[#9E4638] uppercase tracking-wider font-semibold">
                        LUXURY
                      </span>
                    </div>
                  </div>
                )}

                {/* 3. KITSA CARD VISUAL (Geometric Telemetry Interface Matching Reference) */}
                {project.type === 'kitsa' && (
                  <div className="relative w-full h-full flex flex-col justify-between p-6 overflow-hidden bg-[#0D1013]">
                    {/* Top Pill */}
                    <div className="relative z-10 flex items-center justify-between w-full">
                      <span className="font-mono text-[10px] font-bold text-white px-2.5 py-0.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
                        {project.number}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#10B981] font-semibold">
                        HEALTHCARE
                      </span>
                    </div>

                    {/* Center: Precision Geometric Wireframe Vector (Matching User Reference Card 2) */}
                    <div className="relative z-10 my-auto flex items-center justify-center w-full py-4 group-hover:scale-105 transition-transform duration-500">
                      <svg
                        className="w-full max-w-[210px] h-[190px]"
                        viewBox="0 0 200 200"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* Diagonal subtle crosshairs */}
                        <line x1="10" y1="10" x2="190" y2="190" stroke="#1F2937" strokeWidth="1" strokeDasharray="3 3" />
                        <line x1="190" y1="10" x2="10" y2="190" stroke="#1F2937" strokeWidth="1" strokeDasharray="3 3" />

                        {/* Geometric Polygon Wireframe in Emerald Green */}
                        <polyline
                          points="115,28 85,28 40,100 85,172 115,172"
                          stroke="#10B981"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <line x1="40" y1="100" x2="115" y2="100" stroke="#10B981" strokeWidth="1.5" strokeDasharray="2 2" />

                        {/* Coordinate vertex nodes */}
                        <circle cx="85" cy="28" r="3.5" fill="#10B981" />
                        <circle cx="115" cy="28" r="3.5" fill="#10B981" />
                        <circle cx="40" cy="100" r="4" fill="#34D399" />
                        <circle cx="85" cy="172" r="3.5" fill="#10B981" />
                        <circle cx="115" cy="172" r="3.5" fill="#10B981" />
                        <circle cx="115" cy="100" r="3" fill="#10B981" />

                        {/* Telemetry Dial Arc */}
                        <path
                          d="M 125,75 A 35,35 0 0,1 125,125"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />

                        {/* Metric text callout */}
                        <text x="140" y="96" fill="white" fontFamily="monospace" fontSize="18" fontWeight="bold">
                          120
                        </text>
                        <text x="140" y="112" fill="#10B981" fontFamily="monospace" fontSize="9" letterSpacing="0.05em">
                          20 min
                        </text>
                      </svg>
                    </div>

                    {/* Bottom Info */}
                    <div className="relative z-10 flex items-center justify-between pt-3 border-t border-white/10">
                      <span className="font-mono text-[9px] uppercase tracking-widest text-white/50">
                        DISPATCH ENGINE
                      </span>
                      <span className="font-mono text-[9px] text-[#10B981] uppercase tracking-wider font-semibold">
                        ACTIVE
                      </span>
                    </div>
                  </div>
                )}

                {/* 4. VANGUARD PLAY (3D Character Mascot on Coral Background Matching Reference) */}
                {project.type === 'vanguard' && (
                  <div className="relative w-full h-full flex flex-col justify-between p-6 overflow-hidden bg-gradient-to-br from-[#E24A32] to-[#B92F1B]">
                    {/* Top Pill */}
                    <div className="relative z-10 flex items-center justify-between w-full">
                      <span className="font-mono text-[10px] font-bold text-white px-2.5 py-0.5 rounded-full border border-white/30 bg-black/20 backdrop-blur-sm">
                        {project.number}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-white/90 font-semibold">
                        3D CAMPAIGN
                      </span>
                    </div>

                    {/* Center: Playful 3D Character Mascot (Rendered cleanly with SVG/CSS shading) */}
                    <div className="relative z-10 my-auto flex items-center justify-center py-2 group-hover:scale-105 transition-transform duration-500">
                      <div className="relative w-[150px] sm:w-[170px] h-[150px] sm:h-[170px] rounded-full bg-gradient-to-b from-[#FFF2EE] via-[#FFE2DB] to-[#F7C6BC] shadow-[0_20px_40px_rgba(0,0,0,0.35)] flex items-center justify-center overflow-hidden">
                        {/* Ambient 3D Rim Highlights */}
                        <div className="absolute top-2 left-5 w-20 h-10 bg-white/80 rounded-full blur-[7px] rotate-[-20deg]" />

                        {/* Mascot Rosy Cheeks */}
                        <div className="absolute bottom-11 left-6 w-9 h-6 rounded-full bg-[#E5604E]/50 blur-[5px]" />
                        <div className="absolute bottom-11 right-6 w-9 h-6 rounded-full bg-[#E5604E]/50 blur-[5px]" />

                        {/* Expressive Glossy Eyes */}
                        <div className="absolute top-14 left-11 w-4 h-6 rounded-full bg-[#1A181C] flex items-start justify-end p-0.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-white" />
                        </div>
                        <div className="absolute top-14 right-11 w-4 h-6 rounded-full bg-[#1A181C] flex items-start justify-end p-0.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-white" />
                        </div>

                        {/* Joyful Smile */}
                        <div className="absolute bottom-10 w-6 h-3 border-b-[3px] border-[#1A181C] rounded-full" />
                      </div>
                    </div>

                    {/* Bottom Info */}
                    <div className="relative z-10 flex items-center justify-between pt-3 border-t border-white/20">
                      <span className="font-mono text-[9px] uppercase tracking-widest text-white/80">
                        AVATAR SYSTEM
                      </span>
                      <span className="font-mono text-[9px] text-white uppercase tracking-wider font-semibold">
                        3D RIGGED
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* =================================================== */}
              {/* EDITORIAL TYPOGRAPHY UNDERNEATH (Matching Reference)*/}
              {/* =================================================== */}
              <div className="pt-6 flex flex-col flex-1">
                {/* Project Title with Clean Spacing */}
                <h3
                  className="font-sans font-bold text-sm sm:text-base uppercase tracking-[0.18em] transition-colors duration-200 group-hover:text-[#E63B19]"
                  style={{ color: '#FFFFFF' }}
                >
                  {project.title}
                </h3>

                {/* Sleek Underline Accent */}
                <div
                  className="h-[2px] w-10 mt-2 mb-3.5 transition-all duration-300 group-hover:w-16"
                  style={{ backgroundColor: project.accentColor || '#E63B19' }}
                />

                {/* Editorial Narrative Paragraph */}
                <p
                  className="font-sans text-xs sm:text-[13px] leading-relaxed font-normal mb-4"
                  style={{ color: '#D4D2D8' }}
                >
                  {project.description}
                </p>

                {/* Micro Action Link */}
                <div className="mt-auto flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-[#E63B19] group-hover:text-white transition-colors duration-200">
                  <span>EXPLORE PROJECT</span>
                  <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
                    ↗
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Simplified, Clean Focused Lightbox Modal */}
      <CaseStudyModal
        isOpen={Boolean(activeProject)}
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onSelectProject={(p) => setActiveProject(p)}
        allProjects={projects}
      />
    </section>
  );
};

export default SelectedWorks;

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { CaseStudyItem } from './SelectedWorks';

export interface CaseStudyModalProps {
  isOpen: boolean;
  project: CaseStudyItem | null;
  onClose: () => void;
  onSelectProject?: (project: CaseStudyItem) => void;
  allProjects?: CaseStudyItem[];
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  isOpen,
  project,
  onClose,
  onSelectProject,
  allProjects = [],
}) => {
  const [isPdfReelPaused, setIsPdfReelPaused] = useState(false);

  // Lock body scroll and handle Escape key
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const nextProject =
    currentIndex >= 0 && currentIndex < allProjects.length - 1
      ? allProjects[currentIndex + 1]
      : allProjects[0];
  const prevProject =
    currentIndex > 0
      ? allProjects[currentIndex - 1]
      : allProjects[allProjects.length - 1];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9990] flex items-center justify-center p-3 sm:p-6 md:p-10">
          {/* Backdrop with subtle blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0A0A0C]/85 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-4xl max-h-[92vh] bg-[#141316] border border-[#2C2A2F] rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#2C2A2F] bg-[#111012]/90 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-[#E63B19] px-2.5 py-0.5 rounded bg-[#E63B19]/10 border border-[#E63B19]/25">
                  {project.number}
                </span>
                <div>
                  <h4
                    className="font-sans font-bold text-sm sm:text-base uppercase tracking-wider"
                    style={{ color: '#FFFFFF' }}
                  >
                    {project.title}
                  </h4>
                  <p
                    className="font-mono text-[10px] uppercase"
                    style={{ color: '#A5A3AA' }}
                  >
                    {project.client} · {project.year}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="group flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/20 bg-white/5 hover:border-[#E63B19] hover:bg-[#E63B19] text-white transition-all text-xs font-mono font-bold"
              >
                <span>CLOSE</span>
                <span className="group-hover:rotate-90 transition-transform duration-200">✕</span>
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto p-5 sm:p-8 space-y-8">
              {/* Project Visual Showcase */}
              <div className="relative w-full rounded-xl overflow-hidden border border-[#2C2A2F] bg-[#0E0D10] p-4 sm:p-8 flex flex-col items-center justify-center">
                {/* 1. COLTER MEDIA: Live Auto-Scrolling Brand Guidelines Reel */}
                {project.type === 'colter' && (
                  <div className="w-full flex flex-col items-center space-y-6">
                    {/* Header Strip with Controls */}
                    <div className="w-full flex flex-wrap items-center justify-between gap-3 px-2">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-sm">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-300 font-bold">
                            CONTINUOUS GUIDELINES REEL (LOOP)
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => setIsPdfReelPaused(!isPdfReelPaused)}
                          className="px-3 py-1 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white font-mono text-[10px] uppercase tracking-wider transition-colors"
                        >
                          {isPdfReelPaused ? '▶ RESUME' : '❚❚ PAUSE'}
                        </button>
                      </div>

                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/15 bg-white/5">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-[#A5A3AA]">
                          CONFIDENTIAL CLIENT WORK
                        </span>
                      </div>
                    </div>

                    {/* Infinite Scrolling Guidelines Reel Viewport */}
                    <div
                      className="relative w-full h-[320px] sm:h-[450px] md:h-[500px] rounded-xl overflow-hidden border border-[#2C2A2F] bg-[#100F12] select-none cursor-pointer"
                      onClick={() => setIsPdfReelPaused(!isPdfReelPaused)}
                      onMouseEnter={() => setIsPdfReelPaused(true)}
                      onMouseLeave={() => setIsPdfReelPaused(false)}
                    >
                      {/* Scrolling Stack */}
                      <motion.div
                        className="w-full flex flex-col pointer-events-none"
                        animate={isPdfReelPaused ? {} : { y: ['0%', '-50%'] }}
                        transition={{
                          y: {
                            duration: 42,
                            repeat: Infinity,
                            ease: 'linear',
                          },
                        }}
                      >
                        <img
                          src="/projects/colter-roll.png"
                          alt="Colter Media Brand Guidelines Presentation Deck"
                          className="w-full h-auto block"
                          loading="eager"
                        />
                        <img
                          src="/projects/colter-roll.png"
                          alt="Colter Media Brand Guidelines Presentation Deck Repeat"
                          className="w-full h-auto block"
                          loading="eager"
                        />
                      </motion.div>

                      {/* Top & Bottom Depth Vignettes */}
                      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#100F12] to-transparent pointer-events-none" />
                      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#100F12] to-transparent pointer-events-none" />

                      {/* Hover Hint Overlay */}
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 pointer-events-none px-3 py-1 rounded-full bg-black/70 border border-white/10 backdrop-blur-md">
                        <span className="font-mono text-[9px] uppercase tracking-wider text-white/70">
                          {isPdfReelPaused ? 'PAUSED ON HOVER' : 'HOVER TO PAUSE & INSPECT'}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. ROOTS & SKY */}
                {project.type === 'roots-sky' && (
                  <div className="w-full flex flex-col items-center text-center space-y-6">
                    <div className="flex items-center justify-center gap-4">
                      {/* Label 1: Kailasa */}
                      <div className="w-28 h-44 rounded-t-2xl rounded-b-sm bg-[#9E4638] p-3 text-white flex flex-col justify-between shadow-2xl border border-white/20 overflow-hidden">
                        <div className="h-20 bg-[#2D3F34] rounded-t-xl overflow-hidden relative flex items-center justify-center">
                          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 70" preserveAspectRatio="none">
                            <linearGradient id="modal_mist1" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#4A6B56" />
                              <stop offset="100%" stopColor="#1B2E24" />
                            </linearGradient>
                            <rect width="100" height="70" fill="url(#modal_mist1)" />
                            <polygon points="10,65 35,25 60,65" fill="#243B2E" opacity="0.8" />
                            <polygon points="40,65 70,18 95,65" fill="#1C3024" opacity="0.9" />
                            <polygon points="20,65 25,48 30,65" fill="#111D16" />
                            <polygon points="50,65 55,42 60,65" fill="#111D16" />
                          </svg>
                          <div className="relative z-10 font-serif text-[10px] font-bold text-white tracking-[0.25em] bg-black/40 px-2 py-0.5 rounded">
                            R&S
                          </div>
                        </div>
                        <div className="text-center pb-1">
                          <div className="font-serif text-[11px] uppercase tracking-[0.2em] font-bold">
                            KAILASA
                          </div>
                          <div className="text-[7px] text-white/70 italic mt-0.5 font-serif">
                            Pure Mountain Mist
                          </div>
                        </div>
                      </div>

                      {/* Label 2: Aranya */}
                      <div className="w-28 h-44 rounded-t-2xl rounded-b-sm bg-[#4A5D44] p-3 text-white flex flex-col justify-between shadow-2xl border border-white/20 overflow-hidden">
                        <div className="h-20 bg-[#2A3727] rounded-t-xl overflow-hidden relative flex items-center justify-center">
                          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 70" preserveAspectRatio="none">
                            <linearGradient id="modal_mist2" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#5D7554" />
                              <stop offset="100%" stopColor="#243320" />
                            </linearGradient>
                            <rect width="100" height="70" fill="url(#modal_mist2)" />
                            <circle cx="30" cy="50" r="22" fill="#202D1B" opacity="0.8" />
                            <circle cx="65" cy="45" r="26" fill="#1A2516" opacity="0.9" />
                          </svg>
                          <div className="relative z-10 font-serif text-[10px] font-bold text-white tracking-[0.25em] bg-black/40 px-2 py-0.5 rounded">
                            R&S
                          </div>
                        </div>
                        <div className="text-center pb-1">
                          <div className="font-serif text-[11px] uppercase tracking-[0.2em] font-bold">
                            ARANYA
                          </div>
                          <div className="text-[7px] text-white/70 italic mt-0.5 font-serif">
                            Deep Forest Reserve
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="font-serif font-bold text-2xl uppercase tracking-widest text-[#E3DDD3]">
                        ROOTS & SKY BOTANICALS
                      </div>
                      <p className="font-mono text-xs uppercase tracking-wider" style={{ color: '#A5A3AA' }}>
                        Tactile print, cold foil embossing, and certified organic materials
                      </p>
                    </div>
                  </div>
                )}

                {/* 3. KITSA */}
                {project.type === 'kitsa' && (
                  <div className="w-full flex flex-col items-center text-center space-y-4">
                    <div className="p-8 rounded-2xl bg-[#0D1013] border border-[#10B981]/30 shadow-2xl">
                      <svg
                        className="w-56 h-40"
                        viewBox="0 0 200 200"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline
                          points="115,28 85,28 40,100 85,172 115,172"
                          stroke="#10B981"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <circle cx="40" cy="100" r="5" fill="#34D399" />
                        <circle cx="85" cy="28" r="4" fill="#10B981" />
                        <circle cx="115" cy="28" r="4" fill="#10B981" />
                        <circle cx="85" cy="172" r="4" fill="#10B981" />
                        <circle cx="115" cy="172" r="4" fill="#10B981" />
                        <path d="M 125,75 A 35,35 0 0,1 125,125" stroke="white" strokeWidth="2" />
                        <text x="140" y="96" fill="white" fontFamily="monospace" fontSize="20" fontWeight="bold">
                          120
                        </text>
                        <text x="140" y="112" fill="#10B981" fontFamily="monospace" fontSize="10">
                          20 min
                        </text>
                      </svg>
                    </div>
                    <div className="space-y-1">
                      <div className="font-sans font-bold text-2xl uppercase tracking-wider" style={{ color: '#FFFFFF' }}>
                        KITSA TELEMETRY DISPATCH
                      </div>
                      <p className="font-mono text-xs uppercase tracking-wider text-[#10B981]">
                        Formis Technologies · 20-Minute Instant Care Delivery
                      </p>
                    </div>
                  </div>
                )}

                {/* 4. VANGUARD PLAY */}
                {project.type === 'vanguard' && (
                  <div className="w-full flex flex-col items-center text-center space-y-4">
                    <div className="w-36 h-36 rounded-full bg-gradient-to-b from-[#FFF2EE] via-[#FFE2DB] to-[#F7C6BC] shadow-2xl flex items-center justify-center relative overflow-hidden">
                      <div className="absolute top-2 left-5 w-16 h-8 bg-white/70 rounded-full blur-[5px] rotate-[-20deg]" />
                      <div className="absolute bottom-9 left-5 w-7 h-5 rounded-full bg-[#E5604E]/50 blur-[4px]" />
                      <div className="absolute bottom-9 right-5 w-7 h-5 rounded-full bg-[#E5604E]/50 blur-[4px]" />
                      <div className="absolute top-12 left-9 w-3.5 h-5 rounded-full bg-[#1A181C]" />
                      <div className="absolute top-12 right-9 w-3.5 h-5 rounded-full bg-[#1A181C]" />
                      <div className="absolute bottom-7 w-6 h-3 border-b-[2.5px] border-[#1A181C] rounded-full" />
                    </div>
                    <div className="space-y-1">
                      <div className="font-display font-black text-2xl uppercase tracking-wider" style={{ color: '#FFFFFF' }}>
                        VANGUARD PLAY CHARACTER SYSTEM
                      </div>
                      <p className="font-mono text-xs uppercase tracking-wider" style={{ color: '#A5A3AA' }}>
                        Interactive WebGL & Social Campaign System
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Narrative & Specifications with GUARANTEED BRIGHT TEXT */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-2">
                <div className="md:col-span-2 space-y-3">
                  <h5
                    className="font-mono text-xs font-bold uppercase tracking-wider"
                    style={{ color: '#E63B19' }}
                  >
                    // THE BRIEF & EXECUTION
                  </h5>
                  <p
                    className="text-sm sm:text-base leading-relaxed font-sans font-normal"
                    style={{ color: '#F3F2F6' }}
                  >
                    {project.description}
                  </p>
                </div>

                <div className="space-y-3 border-t md:border-t-0 md:border-l border-[#2C2A2F] md:pl-6 pt-4 md:pt-0">
                  <h5
                    className="font-mono text-xs font-bold uppercase tracking-wider"
                    style={{ color: '#E63B19' }}
                  >
                    // DELIVERABLES
                  </h5>
                  <ul className="space-y-2 font-mono text-xs">
                    {project.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5"
                        style={{ color: '#E5E3E8' }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E63B19] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom Navigation Footer */}
            <div className="flex items-center justify-between px-6 py-4 border-t border-[#2C2A2F] bg-[#111012]">
              <button
                type="button"
                onClick={() => onSelectProject?.(prevProject)}
                className="font-mono text-xs uppercase tracking-wider hover:text-white transition-colors flex items-center gap-2"
                style={{ color: '#D4D2D8' }}
              >
                <span>← PREV</span>
                <span className="hidden sm:inline opacity-70 font-normal">({prevProject.title})</span>
              </button>

              <button
                type="button"
                onClick={() => onSelectProject?.(nextProject)}
                className="font-mono text-xs uppercase tracking-wider hover:text-white transition-colors flex items-center gap-2"
                style={{ color: '#D4D2D8' }}
              >
                <span className="hidden sm:inline opacity-70 font-normal">({nextProject.title})</span>
                <span>NEXT →</span>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CaseStudyModal;

import React from 'react';
import { cn } from '../utils/cn';

export interface HeroProps {
  onOpenContact?: () => void;
  className?: string;
}

const TOP_MARQUEE_ITEMS = [
  'BRANDING',
  'UI/UX DESIGN',
  'VIDEO EDITING',
  'GROWTH MARKETING',
  'WEB DEVELOPMENT',
  'CREATIVE STRATEGY',
];

const BANNER_TEXT =
  "CENTERS AROUND MAKING CREATIVE MARKETING SOLUTIONS BOTH ACCESSIBLE AND EFFECTIVE FOR BUSINESSES OF ALL SIZES. WE UNDERSTAND THAT IN THE FAST-PACED WORLD OF DIGITAL MARKETING, SIMPLICITY IS KEY. THAT'S WHY OUR TEAM OF EXPERTS IS DEDICATED TO BREAKING DOWN COMPLEX MARKETING STRATEGIES INTO STRAIGHTFORWARD, ACTIONABLE STEPS.";

export const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <section
      id="hero"
      className={cn(
        'relative w-full bg-base overflow-hidden min-h-[100svh] flex flex-col justify-between',
        className
      )}
      style={{ backgroundColor: '#111012' }}
    >
      {/* Brutalist Texture Overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-repeat object-cover"
        style={{
          opacity: 0.12,
          backgroundImage: `url('${import.meta.env.BASE_URL}assets/brutalist-texture.svg')`,
          backgroundSize: '400px 400px',
        }}
        aria-hidden="true"
      />

      {/* Top Infinite Marquee Strip */}
      <div className="relative z-10 w-full overflow-hidden bg-[#111012] border-b border-[#2C2A2F] py-2.5 sm:py-4 select-none shrink-0">
        <div className="flex whitespace-nowrap animate-ticker">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex items-center shrink-0">
              {TOP_MARQUEE_ITEMS.map((item, idx) => (
                <React.Fragment key={idx}>
                  <span className="font-mono text-[11px] sm:text-[13px] font-light uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#F9F8F6]/90">
                    {item}
                  </span>
                  <span
                    className="mx-4 sm:mx-8 text-[#E63B19] text-xs sm:text-sm font-bold select-none"
                    aria-hidden="true"
                  >
                    ✳
                  </span>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Area Filling Full Viewport Height */}
      <div className="relative z-10 mx-auto max-w-[1440px] w-full flex-1 flex flex-col justify-between px-4 sm:px-8 md:px-12 lg:px-20 pt-4 sm:pt-10 md:pt-12 pb-6 sm:pb-12">
        {/* Typographic Display Stack */}
        <div className="w-full flex flex-col justify-center select-none antialiased pt-2 sm:pt-4">
          {/* Line 1: CREATIVE */}
          <h1 className="font-display font-black text-white text-[13.5vw] sm:text-[100px] md:text-[144px] lg:text-[192px] leading-[0.82] tracking-tight uppercase">
            CREATIVE
          </h1>

          {/* Line 2: MARKETING */}
          <h1
            className="font-display font-black text-accent-orange text-[13.5vw] sm:text-[100px] md:text-[144px] lg:text-[192px] leading-[0.82] tracking-tight uppercase"
            style={{
              color: '#E63B19',
            }}
          >
            MARKETING
          </h1>

          {/* Line 3: Made Easy on left */}
          <div className="pt-2 sm:pt-4">
            <span
              className="font-serif italic font-normal text-primary text-[28px] sm:text-[48px] md:text-[68px] lg:text-[80px] leading-none block"
              style={{ color: '#F9F8F6' }}
            >
              Made Easy
            </span>
          </div>
        </div>

        {/* Middle: WHERE CREATIVITY BECOMES REALITY in between Made Easy and banner, right-aligned */}
        <div className="w-full flex justify-end my-auto py-3 sm:py-6 select-none">
          <div className="text-right font-mono text-[9px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#8D8B91] leading-relaxed">
            WHERE CREATIVITY
            <br />
            BECOMES REALITY
          </div>
        </div>

        {/* Bottom Anchored Static Orange Text Banner */}
        <div className="w-full bg-[#E63B19] border-l-[3px] sm:border-l-[4px] border-white py-2.5 sm:py-3.5 px-3.5 sm:px-6 shadow-lg select-none">
          <p className="font-mono text-[9px] sm:text-[11px] md:text-[11.5px] font-semibold uppercase leading-relaxed tracking-wide text-[#111012]">
            {BANNER_TEXT}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

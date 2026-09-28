import React, { useState } from 'react';
import { cn } from '../utils/cn';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  badges: string[];
}

export interface CapabilitiesProps {
  id?: string;
  className?: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: '01',
    number: '01',
    title: 'BRAND STRATEGY',
    description:
      'Developing rigorous market positions that clarify message and dictate visual authority before a single pixel is placed.',
    badges: ['Positioning', 'Market Analysis', 'Brand Voice', 'Identity'],
  },
  {
    id: '02',
    number: '02',
    title: 'INTERFACE DESIGN',
    description:
      'High-fidelity, interactive, and completely custom user pathways built specifically to simplify user flows and boost conversion.',
    badges: ['Figma Native', 'Design Systems', 'Prototyping', 'UX/UI'],
  },
  {
    id: '03',
    number: '03',
    title: 'DEVELOPMENT',
    description:
      'Robust web applications and lightning-fast digital experiences built with modern architecture and performant code.',
    badges: ['React', 'Next.js', 'Tailwind', 'Performance'],
  },
  {
    id: '04',
    number: '04',
    title: 'GROWTH MARKETING',
    description:
      'Continuous optimization across ad networks, technical search engines, and automated nurture tracks driven by real metrics.',
    badges: ['SEO Strategy', 'Analytics', 'Conversion Rate', 'Growth'],
  },
];

export const Capabilities: React.FC<CapabilitiesProps> = ({
  id = 'capabilities',
  className,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleRow = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id={id}
      className={cn(
        'scroll-mt-20 w-full bg-[#111012] border-b border-[#2C2A2F]',
        className
      )}
    >
      <div className="w-full flex flex-col lg:flex-row items-stretch">
        {/* ================================================================= */}
        {/* LEFT COLUMN: 03 / CAPABILITIES + ASTERISK BADGE + BUILT TO DISRUPT */}
        {/* ================================================================= */}
        <div className="w-full lg:w-[58%] xl:w-[60%] flex flex-col justify-start py-10 sm:py-12 md:py-16 lg:py-20 px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20">
          {/* Top Section Tag */}
          <div className="mb-8 sm:mb-10 lg:mb-12">
            <span className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#E63B19]">
              → 03 / CAPABILITIES
            </span>
          </div>

          {/* Middle Hero Unit: Orange Asterisk Box + BUILT TO DISRUPT. */}
          <div className="mb-8 sm:mb-10 flex items-center gap-5 sm:gap-7 md:gap-8">
            {/* Orange Square Box with slightly thicker white border */}
            <div className="w-[105px] h-[105px] sm:w-[135px] sm:h-[135px] md:w-[155px] md:h-[155px] lg:w-[170px] lg:h-[170px] shrink-0 bg-[#E63B19] border-2 border-white p-3.5 sm:p-5 md:p-5 flex items-center justify-center select-none">
              <svg
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full text-[#111012]"
                aria-label="Asterisk Icon"
              >
                {/* 8-pointed asterisk with refined stroke width */}
                <rect x="46" y="8" width="8" height="84" fill="#111012" />
                <rect x="8" y="46" width="84" height="8" fill="#111012" />
                <rect
                  x="46"
                  y="8"
                  width="8"
                  height="84"
                  fill="#111012"
                  transform="rotate(45 50 50)"
                />
                <rect
                  x="46"
                  y="8"
                  width="8"
                  height="84"
                  fill="#111012"
                  transform="rotate(-45 50 50)"
                />
              </svg>
            </div>

            {/* Stacked BUILT TO DISRUPT. */}
            <div className="flex flex-col justify-center">
              <h3 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-[80px] xl:text-[90px] leading-[0.86] text-white tracking-tight uppercase select-none">
                BUILT TO
                <br />
                DISRUPT.
              </h3>
            </div>
          </div>

          {/* Bottom Content: Mission Paragraph */}
          <div>
            <p className="font-mono text-xs sm:text-[13px] md:text-sm text-[#8D8B91] leading-[1.7] uppercase tracking-wider max-w-[460px]">
              We combine strategy, design and technology to create digital experiences that
              challenge the ordinary and deliver real impact.
            </p>
          </div>
        </div>

        {/* ================================================================= */}
        {/* RIGHT COLUMN: OUR SERVICES + 4 ACCORDION ROWS                    */}
        {/* ================================================================= */}
        <div className="w-full lg:w-[42%] xl:w-[40%] border-t lg:border-t-0 lg:border-l border-[#2C2A2F] flex flex-col justify-start bg-[#111012]">
          {/* Top Block: Vertical OUR SERVICES Header */}
          <div className="border-b border-[#2C2A2F] py-8 px-6 sm:px-8 flex items-center justify-between min-h-[90px] lg:min-h-[110px]">
            <div className="flex items-center gap-3">
              <span className="[writing-mode:vertical-rl] rotate-180 font-mono text-[11px] uppercase tracking-[0.25em] text-[#8D8B91] select-none">
                OUR SERVICES
              </span>
              <div className="w-[1px] h-8 bg-[#2C2A2F]" />
            </div>
          </div>

          {/* Middle 4 Service Rows */}
          <div className="flex flex-col flex-1">
            {SERVICES.map((service, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={service.id} className="border-b border-[#2C2A2F]">
                  <button
                    type="button"
                    onClick={() => toggleRow(idx)}
                    className="w-full text-left py-6 sm:py-7 px-6 sm:px-8 flex items-center justify-between gap-4 cursor-pointer group hover:bg-[#1C1A1E]/40 transition-colors focus:outline-none"
                  >
                    <div className="flex items-center gap-5 sm:gap-7">
                      <span className="font-mono text-sm sm:text-[15px] font-semibold text-[#E63B19] shrink-0">
                        {service.number}
                      </span>
                      <span className="font-display font-black text-2xl sm:text-3xl lg:text-[32px] uppercase tracking-wider text-white group-hover:text-[#E63B19] transition-colors leading-none">
                        {service.title}
                      </span>
                    </div>

                    <span className="text-[#E63B19] font-mono text-xl sm:text-2xl font-bold shrink-0 transition-transform duration-200 select-none">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  {/* Expandable Content Panel */}
                  {isOpen && (
                    <div className="px-6 sm:px-8 pb-6 space-y-4 animate-fadeIn bg-[#1C1A1E]/30">
                      <p className="font-mono text-xs sm:text-[13px] text-[#8D8B91] leading-relaxed uppercase tracking-wide max-w-[480px]">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {service.badges.map((badge) => (
                          <span
                            key={badge}
                            className="inline-flex items-center px-3 py-1 rounded-full bg-[#E63B19]/10 border border-[#E63B19]/30 font-mono text-xs text-[#E63B19]"
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;


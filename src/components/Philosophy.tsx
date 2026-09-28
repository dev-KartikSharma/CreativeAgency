import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../utils/cn';
import type { MetricItem, SectionProps } from '../types';

export interface PhilosophyProps extends SectionProps {
  statement?: string;
  bodyCopy?: string;
  metrics?: MetricItem[];
}

const DEFAULT_STATEMENT =
  'We believe that raw attention is the only true currency of the digital age. We bridge radical design with rigorous performance strategy.';

const DEFAULT_BODY =
  "In a landscape crowded with superficial metrics, we focus exclusively on architecture that generates authentic results. Clean layouts, clear hierarchies, and fearless visual choices are not just artistic decisions—they are functional requirements to capture the modern consumer's divided attention.";

const DEFAULT_METRICS: MetricItem[] = [
  {
    label: 'Radical Transparency',
    value: '100%',
  },
  {
    label: 'Conversion Optimization',
    value: '+42% Avg',
  },
];

export const Philosophy: React.FC<PhilosophyProps> = ({
  id = 'philosophy',
  className,
  statement = DEFAULT_STATEMENT,
  bodyCopy = DEFAULT_BODY,
  metrics = DEFAULT_METRICS,
}) => {
  return (
    <section
      id={id}
      className={cn(
        'scroll-mt-20 relative w-full bg-base border-b border-stroke-primary',
        className
      )}
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-20 pt-16 md:pt-24 lg:pt-[120px] pb-16 md:pb-20 lg:pb-[100px] flex flex-col gap-12">
        {/* Header Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-4"
        >
          {/* Tag Row: 12x1px line in #E63B19 + "01 / Our Philosophy" */}
          <div className="flex items-center gap-3">
            <span
              className="inline-block w-[12px] h-[1px] bg-brand-orange shrink-0"
              style={{ width: 12, height: 1, backgroundColor: '#E63B19' }}
              aria-hidden="true"
            />
            <span className="font-sans text-xs font-semibold uppercase tracking-widest text-brand-orange">
              01 / Our Philosophy
            </span>
          </div>

          {/* Core Statement: Cormorant Garamond 48px Regular #F9F8F6, max-width 843px */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[48px] font-normal leading-[1.1] text-studio-white max-w-[843px] tracking-tight">
            {statement}
          </h2>
        </motion.div>

        {/* Two-Column Content: Left editorial copy, Right metrics stack */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-[733px_1fr] gap-10 lg:gap-20 items-start justify-between"
        >
          {/* Left Column: Instrument Sans 18px Regular #8D8B91, max-width 733px */}
          <div className="max-w-[733px]">
            <p className="font-sans text-base lg:text-[18px] font-normal leading-[1.6] text-studio-muted">
              {bodyCopy}
            </p>
          </div>

          {/* Right Column: Metrics Stack (gap 40px) */}
          <div className="flex flex-col gap-10 w-full lg:max-w-[360px] lg:ml-auto">
            {metrics.map((metric, index) => (
              <div
                key={metric.label || index}
                className="flex items-baseline justify-between gap-4 border-b border-stroke-primary pb-5"
              >
                <span className="font-serif text-lg lg:text-[20px] font-normal text-studio-white">
                  {metric.label}
                </span>
                <span className="font-sans text-sm font-normal text-brand-orange">
                  {metric.value}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;

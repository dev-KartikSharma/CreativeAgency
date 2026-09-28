import React from 'react';
import { cn } from '../utils/cn';

export interface StatItem {
  value: string;
  label: string;
}

export interface StatsFactsProps {
  id?: string;
  className?: string;
  stats?: StatItem[];
}

const DEFAULT_STATS: StatItem[] = [
  {
    value: '100K+',
    label: 'VIEWS',
  },
  {
    value: '5',
    label: 'PROJECTS',
  },
  {
    value: '3',
    label: 'CLIENTS',
  },
];

export const StatsFacts: React.FC<StatsFactsProps> = ({
  id = 'stats-facts',
  className,
  stats = DEFAULT_STATS,
}) => {
  return (
    <section
      id={id}
      className={cn(
        'relative w-full bg-base border-b border-stroke-primary py-10 sm:py-14 md:py-16',
        className
      )}
      style={{ backgroundColor: '#111012' }}
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-14 lg:px-20 flex flex-col gap-6 sm:gap-8">
        {/* Section Tag */}
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#E63B19]">
            — STATS & FACTS
          </span>
        </div>

        {/* 3 Stats Grid with subtle vertical dividers */}
        <div className="grid grid-cols-3 w-full items-center">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={cn(
                'flex flex-col items-center justify-center text-center py-3 sm:py-6 px-3 sm:px-6',
                idx < stats.length - 1 && 'border-r border-[#2C2A2F]'
              )}
            >
              {/* Stat Value */}
              <span className="font-display font-black text-white text-4xl sm:text-6xl md:text-7xl lg:text-[80px] leading-none tracking-tight select-none">
                {stat.value}
              </span>

              {/* Stat Label */}
              <span className="font-mono text-[11px] sm:text-xs font-medium uppercase tracking-[0.25em] text-[#8D8B91] mt-3 select-none">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsFacts;

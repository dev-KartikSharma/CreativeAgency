import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from './icons';
import { cn } from '../utils/cn';

export interface ContactSectionProps {
  id?: string;
  className?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  id = 'contact',
  className,
}) => {
  return (
    <section
      id={id}
      className={cn(
        'relative w-full min-h-screen bg-[#111012] border-t border-[#2C2A2F] flex flex-col justify-between p-8 md:p-16 lg:p-20 overflow-hidden scroll-mt-10',
        className
      )}
      style={{ backgroundColor: '#111012' }}
    >
      {/* Header Row (Figma Node #11:26) */}
      <div className="flex items-center justify-between w-full max-w-[1440px] mx-auto">
        <h2
          id="contact-section-title"
          className="font-display font-black text-[32px] uppercase text-[#E63B19] tracking-wider leading-none"
        >
          Contact
        </h2>
        <a
          href="#hero"
          className="font-sans text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#8D8B91] hover:text-[#E63B19] transition-colors cursor-pointer"
        >
          ↑ Back to Top
        </a>
      </div>


          {/* Content Container (Figma Node #11:30) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-[1440px] flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 lg:gap-[120px] w-full pt-12 pb-4 md:pb-8"
          >
            {/* Left Column: Inquiries & Contact Details (Figma Node #11:31) */}
            <div className="flex flex-col gap-10 md:gap-12 flex-1 max-w-2xl">
              {/* Headline Stack (Figma Node #11:32) */}
              <div className="flex flex-col font-display font-black uppercase text-white leading-[0.85] tracking-tight text-6xl sm:text-8xl md:text-9xl lg:text-[140px]">
                <span>Let's</span>
                <span>Talk.</span>
              </div>

              {/* Details Stack (Figma Node #11:35) */}
              <div className="flex flex-col gap-8">
                {/* Subtext Prompt Copy (Figma Node #11:36) */}
                <p className="font-mono text-sm md:text-[14px] text-[#8D8B91] max-w-[420px] leading-[1.6]">
                  Ready to elevate your brand? Slide into our DMs and our team will get back to you within 24 hours.
                </p>

                {/* Contact Links Stack (Figma Node #11:37) */}
                <div className="flex flex-col gap-2">
                  <a
                    href="mailto:hello@fusionforce.co"
                    className="font-mono font-medium text-[13px] uppercase text-white hover:text-[#E63B19] focus:text-[#E63B19] transition-colors inline-block w-fit focus:outline-none focus:underline"
                  >
                    hello@fusionforce.co
                  </a>
                  <a
                    href="tel:+919599829714"
                    className="font-mono font-medium text-[13px] uppercase text-white hover:text-[#E63B19] focus:text-[#E63B19] transition-colors inline-block w-fit focus:outline-none focus:underline"
                  >
                    +91 95998 29714
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Social Connection Card (Figma Node #11:40) */}
            <div className="flex flex-col w-full lg:w-[580px] max-w-[580px] gap-8 shrink-0">
              {/* Accent Header (Figma Node #11:41) */}
              <h3 className="font-serif italic font-normal text-4xl sm:text-5xl lg:text-[56px] text-[#E63B19] leading-[1.2]">
                Connect with us.
              </h3>

              {/* Instagram Card (Figma Node #11:42) */}
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with us on Instagram"
                className="group flex items-center justify-between bg-white text-black p-8 rounded-[4px] hover:-translate-y-[3px] transition-all duration-200 cursor-pointer shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#E63B19]"
              >
                {/* Brand Handle Label (Figma Node #11:43) */}
                <span className="font-display font-black text-3xl sm:text-4xl lg:text-[44px] uppercase text-black leading-none">
                  @Instagram
                </span>

                {/* Arrow Icon Badge (Figma Node #11:44) */}
                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center shrink-0">
                  <ArrowRightIcon className="w-[18px] h-[18px] text-white transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </a>
        </div>
      </motion.div>

      {/* Bottom Legal & Copyright Row */}
      <div className="mx-auto max-w-[1440px] w-full pt-8 border-t border-[#2C2A2F]/60 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-sans text-[#8D8B91]">
        <p>© 2026 Creative Marketing. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="#terms" className="hover:text-white transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

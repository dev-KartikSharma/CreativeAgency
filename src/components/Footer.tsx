import React from 'react';
import { cn } from '../utils/cn';

export interface FooterProps {
  id?: string;
  className?: string;
  onOpenContact?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  id = 'footer',
  className,
  onOpenContact,
}) => {
  return (
    <footer
      id={id}
      className={cn(
        'w-full bg-[#111012] border-t border-[#2C2A2F] pt-16 md:pt-20 px-6 sm:px-10 md:px-14 lg:px-20 pb-10',
        className
      )}
    >
      <div className="mx-auto max-w-[1440px] flex flex-col gap-12 md:gap-16">
        {/* Top Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-16">
          {/* Brand Column */}
          <div className="w-full max-w-[320px] space-y-4">
            <h3 className="font-serif font-semibold text-xl text-[#F9F8F6] tracking-tight">
              CREATIVE MARKETING.
            </h3>
            <p className="font-sans text-sm text-[#8D8B91] leading-relaxed">
              Providing rigorous artistic design &amp; engineering strategy for brands
              that refuse to look ordinary.
            </p>
          </div>

          {/* Inquiries & Location Columns */}
          <div className="flex flex-col sm:flex-row gap-10 sm:gap-16 lg:gap-20">
            {/* Inquiries */}
            <div className="space-y-3">
              <span className="block font-sans text-xs font-semibold uppercase tracking-wider text-[#E63B19]">
                Inquiries
              </span>
              <div className="space-y-2 font-sans text-sm">
                <div>
                  <a
                    href="mailto:hello@creativemarketing.co"
                    className="text-[#F9F8F6] hover:text-[#E63B19] transition-colors duration-200"
                  >
                    hello@creativemarketing.co
                  </a>
                </div>
                <div>
                  <a
                    href="tel:5553217654"
                    className="text-[#F9F8F6] hover:text-[#E63B19] transition-colors duration-200"
                  >
                    (555) 321-7654
                  </a>
                </div>
                {onOpenContact && (
                  <div className="pt-1">
                    <button
                      type="button"
                      onClick={onOpenContact}
                      className="text-xs font-sans font-medium text-[#8D8B91] hover:text-[#E63B19] transition-colors underline underline-offset-4"
                    >
                      Open Contact Form
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Location */}
            <div className="space-y-3">
              <span className="block font-sans text-xs font-semibold uppercase tracking-wider text-[#E63B19]">
                Location
              </span>
              <div className="space-y-1 font-sans text-sm text-[#F9F8F6]">
                <p>Sunset Blvd, Suite 400</p>
                <p>Los Angeles, CA 90028</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-6 border-t border-[#2C2A2F] flex flex-col sm:flex-row justify-between items-center gap-4 text-[13px] font-sans text-[#8D8B91]">
          <p>© 2026 Creative Marketing Collective. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a
              href="#privacy"
              className="hover:text-[#F9F8F6] transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="hover:text-[#F9F8F6] transition-colors duration-200"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

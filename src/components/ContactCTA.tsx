import React from 'react';
import { cn } from '../utils/cn';

export interface ContactCTAProps {
  id?: string;
  className?: string;
  onOpenContact?: () => void;
}

export const ContactCTA: React.FC<ContactCTAProps> = ({
  id = 'contact-cta',
  className,
  onOpenContact,
}) => {
  return (
    <section
      id={id}
      className={cn(
        'w-full min-h-screen bg-[#E8330C] flex flex-col justify-between text-center relative overflow-hidden',
        className
      )}
    >
      <div className="mx-auto max-w-[1440px] w-full flex-1 flex flex-col items-center justify-center gap-8 sm:gap-12 md:gap-16 px-6 sm:px-10 md:px-14 lg:px-20 py-16">
        {/* Massive Display Headline */}
        <h2 className="font-archivo text-6xl sm:text-8xl md:text-9xl lg:text-[160px] xl:text-[220px] leading-[0.88] uppercase text-black select-none tracking-tight">
          LET'S WORK
        </h2>

        {/* Action Button: turns black with white text on hover, triggers Contact Page */}
        <button
          type="button"
          onClick={onOpenContact}
          className="border-2 border-[#111012] rounded-none px-10 sm:px-14 py-4 sm:py-5 bg-transparent text-[#111012] font-mono font-bold text-sm sm:text-base uppercase tracking-[0.25em] transition-all duration-200 hover:bg-[#111012] hover:text-white active:scale-[0.98] cursor-pointer inline-flex items-center justify-center shadow-none"
        >
          Contact Us
        </button>
      </div>

      {/* Slim Bottom Strip (matching user upload) */}
      <div className="w-full bg-[#111012] border-t border-[#2C2A2F] py-4 sm:py-5 px-6 sm:px-10 md:px-14 lg:px-20 select-none">
        <div className="mx-auto max-w-[1440px] flex flex-col sm:flex-row justify-between items-center gap-3 text-xs font-mono text-[#8D8B91]">
          <p>© 2026 Creative Marketing Collective. All rights reserved.</p>

          <div className="flex items-center gap-6 sm:gap-8">
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
    </section>
  );
};

export default ContactCTA;


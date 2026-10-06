import React, { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CloseIcon, ArrowRightIcon } from './icons';
import { ContactModalProps } from '../types';

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  // Body scroll locking when modal is open
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow || '';
    };
  }, [isOpen]);

  // Global Escape key listener to dismiss modal
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Focus close button when modal opens for accessibility
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        closeBtnRef.current?.focus();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Focus trap for accessible keyboard navigation
  const handleKeyDownTrap = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== 'Tab' || !modalRef.current) return;

    const focusable = modalRef.current.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  };

  // Backdrop click dismissal (clicking directly on the viewport background)
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={modalRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
          tabIndex={-1}
          onKeyDown={handleKeyDownTrap}
          onClick={handleBackdropClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col justify-between p-5 sm:p-8 md:p-16 bg-[#111012] overflow-y-auto"
        >
          {/* Header Row (Figma Node #11:26) */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-between w-full max-w-[1440px] mx-auto pb-4"
          >
            <h2
              id="contact-modal-title"
              className="font-display font-black text-2xl sm:text-[32px] uppercase text-[#E63B19] tracking-wider leading-none"
            >
              Contact
            </h2>
            <button
              ref={closeBtnRef}
              type="button"
              onClick={onClose}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-[1.5px] border-white flex items-center justify-center bg-transparent text-white hover:bg-white hover:text-[#111012] focus:outline-none focus:ring-2 focus:ring-[#E63B19] transition-all duration-200 cursor-pointer"
              aria-label="Close contact page"
            >
              <CloseIcon className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
            </button>
          </motion.div>

          {/* Content Container (Figma Node #11:30) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-[1440px] flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 sm:gap-12 lg:gap-[120px] w-full pt-6 sm:pt-12 pb-4 md:pb-8 my-auto"
          >
            {/* Left Column: Inquiries & Contact Details (Figma Node #11:31) */}
            <div className="flex flex-col gap-6 sm:gap-10 md:gap-12 flex-1 max-w-2xl">
              {/* Headline Stack (Figma Node #11:32) */}
              <div className="flex flex-col font-display font-black uppercase text-white leading-[0.85] tracking-tight text-5xl sm:text-8xl md:text-9xl lg:text-[140px]">
                <span>Let's</span>
                <span>Talk.</span>
              </div>

              {/* Details Stack (Figma Node #11:35) */}
              <div className="flex flex-col gap-6 sm:gap-8">
                {/* Subtext Prompt Copy (Figma Node #11:36) */}
                <p className="font-mono text-xs sm:text-sm md:text-[14px] text-[#8D8B91] max-w-[420px] leading-[1.6]">
                  Ready to elevate your brand? Slide into our DMs and our team will get back to you within 24 hours.
                </p>

                {/* Contact Links Stack (Figma Node #11:37) */}
                <div className="flex flex-col gap-2">
                  <a
                    href="mailto:kartiksharma17012007@gmail.com"
                    className="font-mono font-medium text-xs sm:text-[13px] lowercase text-white hover:text-[#E63B19] focus:text-[#E63B19] transition-colors inline-block w-fit focus:outline-none focus:underline"
                  >
                    kartiksharma17012007@gmail.com
                  </a>
                  <a
                    href="tel:+919599829714"
                    className="font-mono font-medium text-xs sm:text-[13px] uppercase text-white hover:text-[#E63B19] focus:text-[#E63B19] transition-colors inline-block w-fit focus:outline-none focus:underline"
                  >
                    +91 95998 29714
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Inquire / Connect Cards */}
            <div className="flex flex-col w-full lg:w-[580px] max-w-[580px] gap-5 sm:gap-6 shrink-0">
              {/* Accent Header */}
              <h3 className="font-display font-black text-2xl sm:text-4xl lg:text-[44px] uppercase tracking-tight text-[#E63B19] leading-none">
                Start a conversation.
              </h3>

              {/* Action 1: Connect to Call Button */}
              <a
                href="https://cal.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect to Call or Schedule Meeting"
                className="group relative flex items-center justify-between bg-white text-black p-5 sm:p-7 rounded-[4px] overflow-hidden hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 ease-out cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#E63B19]"
              >
                <div
                  className="absolute inset-0 bg-[#E63B19] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out pointer-events-none"
                  aria-hidden="true"
                />
                <div className="relative z-10 flex flex-col">
                  <span className="font-display font-black text-2xl sm:text-3xl lg:text-[34px] uppercase text-black group-hover:text-white transition-colors duration-200 leading-none">
                    Book a Call
                  </span>
                  <span className="font-mono text-[10px] sm:text-[11px] text-[#555] group-hover:text-white/80 transition-colors duration-200 uppercase tracking-widest mt-1.5">
                    15-min discovery & strategy
                  </span>
                </div>
                <div className="relative z-10 w-11 h-11 rounded-full bg-black flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105">
                  <ArrowRightIcon className="w-5 h-5 text-white transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </a>

              {/* Action 2: DM on Instagram Button */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DM us on Instagram"
                className="group relative flex items-center justify-between border-2 border-[#2B2A28] bg-[#161518] text-white p-5 sm:p-7 rounded-[4px] overflow-hidden hover:border-[#E63B19] hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 ease-out cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#E63B19]"
              >
                <div
                  className="absolute inset-0 bg-[#E63B19] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out pointer-events-none"
                  aria-hidden="true"
                />
                <div className="relative z-10 flex flex-col">
                  <span className="font-display font-black text-2xl sm:text-3xl lg:text-[34px] uppercase text-white group-hover:text-white leading-none">
                    DM on Instagram
                  </span>
                  <span className="font-mono text-[10px] sm:text-[11px] text-[#8D8B91] group-hover:text-white/80 transition-colors duration-200 uppercase tracking-widest mt-1.5">
                    Fast response / @Instagram
                  </span>
                </div>
                <div className="relative z-10 w-11 h-11 rounded-full bg-white/10 flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105 group-hover:bg-black">
                  <ArrowRightIcon className="w-5 h-5 text-white transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;

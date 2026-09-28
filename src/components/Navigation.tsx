import React, { useState } from 'react';
import { NavigationProps } from '../types';
import { cn } from '../utils/cn';

interface ExtendedNavigationProps extends NavigationProps {
  className?: string;
}

const NAV_LINKS = [
  { label: '01 / Philosophy', href: '#philosophy' },
  { label: '02 / Works', href: '#works' },
  { label: '03 / Capabilities', href: '#capabilities' },
];

export const Navigation: React.FC<ExtendedNavigationProps> = ({
  onOpenContact,
  className,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const handleContactClick = () => {
    setIsMobileMenuOpen(false);
    onOpenContact();
  };

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full h-20 bg-base/90 backdrop-blur-md border-b border-stroke-primary/50 transition-all',
        className
      )}
    >
      <div className="mx-auto max-w-[1440px] h-full px-5 sm:px-8 md:px-12 lg:px-20 flex items-center justify-between">
        {/* Brand Wordmark */}
        <a
          href="#hero"
          className="group inline-flex items-baseline font-serif text-[20px] font-semibold tracking-tight text-primary hover:opacity-90 transition-opacity"
        >
          <span>CREATIVE MARKETING</span>
          <span className="text-accent-orange">.</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-8 lg:gap-12"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-[12px] font-semibold uppercase tracking-wider text-primary hover:text-accent-orange transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={handleContactClick}
            className="hidden sm:inline-flex items-center justify-center border-[1.5px] border-white px-5 py-2.5 font-sans text-[12px] font-semibold uppercase tracking-wider text-primary hover:border-accent-orange hover:text-accent-orange hover:bg-accent-orange/10 active:scale-[0.98] transition-all duration-200"
          >
            <span>Contact Us</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-primary hover:text-accent-orange transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-stroke-primary bg-base px-6 py-6 space-y-4 shadow-2xl animate-fadeIn">
          <nav className="flex flex-col space-y-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="font-sans text-[13px] font-semibold uppercase tracking-wider text-primary hover:text-accent-orange transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <button
              type="button"
              onClick={handleContactClick}
              className="w-full text-center border-[1.5px] border-accent-orange bg-accent-orange/10 px-5 py-3 font-sans text-[12px] font-semibold uppercase tracking-wider text-accent-orange hover:bg-accent-orange hover:text-black transition-all duration-200"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;

import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { StatsFacts } from './components/StatsFacts';
import { SelectedWorks } from './components/SelectedWorks';
import { Capabilities } from './components/Capabilities';
import { ContactCTA } from './components/ContactCTA';
import { ContactModal } from './components/ContactModal';
import { CustomCursor } from './components/CustomCursor';

export const App: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#contact') {
        setIsContactOpen(true);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleCloseContact = () => {
    setIsContactOpen(false);
    if (window.location.hash === '#contact') {
      window.history.pushState(null, '', window.location.pathname);
    }
  };

  return (
    <div
      className="relative min-h-screen bg-base text-primary overflow-x-hidden font-sans selection:bg-accent-orange selection:text-white"
      style={{ backgroundColor: '#111012' }}
    >
      <main id="main-content" role="main">
        <Hero onOpenContact={() => setIsContactOpen(true)} />
        <StatsFacts />
        <SelectedWorks />
        <Capabilities />
        <ContactCTA onOpenContact={() => setIsContactOpen(true)} />
      </main>

      {/* Dedicated Contact Page / Modal triggered on button click */}
      <ContactModal isOpen={isContactOpen} onClose={handleCloseContact} />

      {/* Brutalist Custom Cursor */}
      <CustomCursor />
    </div>
  );
};

export default App;


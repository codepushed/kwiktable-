'use client';

import { useState } from 'react';
import ContactModal from '../ContactModal';
import './Header.scss';

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="header">
      <div className="header__pill">
        <div className="header__logo">Kwiktable</div>

        <button
          className={`header__hamburger ${menuOpen ? 'header__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          <a href="#list" className="header__link" onClick={() => setMenuOpen(false)}>
            List your Restaurant
          </a>
          <a href="#pricing" className="header__link" onClick={() => setMenuOpen(false)}>
            Pricing
          </a>
          <button
            className="header__button"
            onClick={() => { setModalOpen(true); setMenuOpen(false); }}
          >
            Get Started
          </button>
        </div>
      </div>

      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </nav>
  );
};

export default Header;

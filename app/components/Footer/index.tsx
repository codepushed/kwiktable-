'use client';

import { useState } from 'react';
import Image from 'next/image';
import ContactModal from '../ContactModal';
import './Footer.scss';

const Footer = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <footer className="footer">
      <div className="footer__hero">
        <div className="footer__black-bar" />
        <div className="footer__logo-wrap">
          <h2 className="footer__logo-text">Kwiktable</h2>
        </div>
        <div className="footer__image">
          <Image
            src="/footer.png"
            alt="Restaurant storefront"
            fill
            sizes="100vw"
          />
        </div>
      </div>

      <div className="footer__bottom">
        <nav className="footer__nav">
          <a href="#" className="footer__link">How It Works</a>
          <a href="#" className="footer__link">Features</a>
          <a href="#pricing" className="footer__link">Pricing</a>
          <a href="#list" className="footer__link">List Your Restaurant</a>
          <button className="footer__link footer__link--btn" onClick={() => setModalOpen(true)}>
            Contact us
          </button>
        </nav>
        <p className="footer__copyright">&copy; 2026 Kwiktable. All rights reserved.</p>
      </div>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </footer>
  );
};

export default Footer;

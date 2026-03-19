'use client';

import { useState } from 'react';
import Image from 'next/image';
import ContactModal from '../ContactModal';
import './Hero.scss';

const Hero = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="hero">
      <div className="hero__flower">
        <Image
          src="/assets/flower.png"
          alt="Abstract 3D glass flower"
          fill
          priority
        />
      </div>

      <div className="hero__content">
        <h1 className="hero__title">The Online</h1>
        <h1 className="hero__title hero__title--layer">layer</h1>
        <h2 className="hero__subtitle">For Restaurants</h2>
      </div>

      <div className="hero__cta">
        <button className="hero__button" onClick={() => setModalOpen(true)}>
          Get Started now
        </button>
      </div>

      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
};

export default Hero;

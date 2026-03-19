'use client';

import { useState } from 'react';
import ContactModal from '../ContactModal';
import './Stats.scss';

const Stats = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="stats">
      <div className="stats__glow" />

      <div className="stats__content">
        <div className="stats__headline">
          <h2 className="stats__number">250+</h2>
          <div className="stats__text">
            <span className="stats__text-top">restaurants, bars, clubs, hotels already</span>
            <span className="stats__text-bottom">using Kwiktable</span>
          </div>
        </div>

        <p className="stats__subtitle">
          Join them and start accepting bookings online.
        </p>

        <button className="stats__button" onClick={() => setModalOpen(true)}>
          Get Started Now
        </button>
      </div>

      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
};

export default Stats;

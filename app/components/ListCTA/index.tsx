'use client';

import { useState } from 'react';
import Image from 'next/image';
import ContactModal from '../ContactModal';
import './ListCTA.scss';

const ListCTA = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="list-cta" id="list">
      <div className='listingBackground'>
        <Image
          src="/assets/brand/listing.png"
          alt="List CTA"
          width={800}
          height={600}
        />
      </div>
      <div className='listingButton'>
        <button className="list-cta__button" onClick={() => setModalOpen(true)}>
          Get listed now
        </button>
      </div>

      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
};

export default ListCTA;

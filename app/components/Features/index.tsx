import Image from 'next/image';
import './Features.scss';

const Features = () => {
  return (
    <section className="features">
      <div className="features__background">
        <Image
          src="/assets/backgroundLineargradient.png"
          alt="Background gradient"
          fill
          priority
        />
      </div>

      <div className="features__content">
        <h2 className="features__title">No Chaos. Just booking</h2>
        <p className="features__subtitle">
          Kwiktable helps restaurants handle reservations the modern way.
        </p>

        <div className="features__browser">
          <Image
            src="/assets/tab2.png"
            alt="Kwiktable tablet preview"
            width={800}
            height={500}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Features;

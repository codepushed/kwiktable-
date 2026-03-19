import Image from 'next/image';
import './Brand.scss';

const Brand = () => {
  return (
    <section className="brand">
      <div className="brand__glow">
        <Image
          src="/assets/brand/linear-gradient.png"
          alt=""
          fill
        />
      </div>

      <div className="brand__content">
        <h2 className="brand__title">
          <span className="brand__title-light">Turn Your </span>
          <span className="brand__title-bold">Kitchen</span>
          <br />
          <span className="brand__title-light">Into a </span>
          <span className="brand__title-bold">Brand</span>
        </h2>

        <div className="brand__mockups">
          <div className="brand__mockup brand__mockup--top">
            <Image
              src="/assets/brand/kwiktable-top.png"
              alt="Kwiktable restaurant page"
              width={1200}
              height={800}
            />
          </div>
          <div className="brand__mockup brand__mockup--bottom">
            <Image
              src="/assets/brand/kwiktable-bottom.png"
              alt="Kwiktable food reels"
              width={1200}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brand;

import Image from 'next/image';
import './Discover.scss';

const Discover = () => {
  return (
    <section className="discover">
      <div className="discover__bg-top">
        <Image src="/assets/discover/top-linear.png" alt="" fill />
      </div>
      <div className="discover__bg-bottom">
        <Image src="/assets/discover/bottom-linear.png" alt="" fill />
      </div>

      <div className="discover__wrapper">
        <svg
          className="discover__svg"
          viewBox="0 0 1000 1450"
          fill="none"
        >
          {/* Segment 1: from discover line → right curve → down → left, stops at design text */}
          <path
            d="M 380,90 H 870 A 100,100 0 0 1 970,190 V 310 A 100,100 0 0 1 870,410 H 320"
            stroke="rgba(255,255,255,0.5)"
            strokeWidth="2"
          />

          {/* Segment 2: design left arc → down → right, stops at connect text */}
          <path
            d="M 130,410 A 100,100 0 0 0 30,510 V 630 A 100,100 0 0 0 130,730 H 475"
            stroke="rgba(255,255,255,0.5)"
            strokeWidth="2"
          />

          {/* Segment 3: from connect line → right curve → down → left, stops at manage text */}
          <path
            d="M 735,730 H 870 A 100,100 0 0 1 970,830 V 950 A 100,100 0 0 1 870,1050 H 320"
            stroke="rgba(255,255,255,0.5)"
            strokeWidth="2"
          />

          {/* Segment 4: manage left arc → down → right to arrow */}
          <path
            d="M 130,1050 A 100,100 0 0 0 30,1150 V 1270 A 100,100 0 0 0 130,1370 H 640"
            stroke="rgba(255,255,255,0.5)"
            strokeWidth="2"
          />

          {/* Discover */}
          <text x="30" y="90" className="discover__svg-title discover__svg-title--lg">
            discover
          </text>
          <text x="30" y="126" className="discover__svg-sub">
            understand your restaurant
          </text>
          <text x="30" y="149" className="discover__svg-sub">
            &amp; guests
          </text>

          {/* Design */}
          <text x="100" y="410" className="discover__svg-title">
            design
          </text>
          <text x="100" y="444" className="discover__svg-sub">
            build your online presence
          </text>

          {/* Connect */}
          <text x="485" y="730" className="discover__svg-title">
            connect
          </text>
          <text x="485" y="764" className="discover__svg-sub">
            tables, seats &amp; pre-orders
          </text>

          {/* Manage */}
          <text x="95" y="1050" className="discover__svg-title">
            manage
          </text>
          <text x="95" y="1084" className="discover__svg-sub">
            every booking. one place.
          </text>

          {/* Arrow button */}
          <circle cx="675" cy="1370" r="25" fill="white" />
          <path
            d="M656 1370h18M667 1361l9 9-9 9"
            stroke="#111"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
};

export default Discover;

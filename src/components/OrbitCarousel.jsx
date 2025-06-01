// src/components/OrbitRing.jsx
import { useEffect, useRef } from 'react';
import anime from 'animejs';
import '../styles/OrbitRing.css';

const icons = [
  '/assets/images/swiper_icon_1.52f8cee4..png',
  '/assets/images/swiper_icon_1.52f8cee4..png',
  '/assets/images/swiper_icon_1.52f8cee4..png',
  '/assets/images/swiper_icon_1.52f8cee4..png',
  '/assets/images/swiper_icon_1.52f8cee4..png',
  '/assets/images/swiper_icon_1.52f8cee4..png'
];

export default function OrbitRing() {
  const orbitRef = useRef(null);

  useEffect(() => {
    anime({
      targets: orbitRef.current,
      rotate: 360,
      duration: 25000,
      easing: 'linear',
      loop: true,
    });
  }, []);

  return (
    <div className="orbit-ring-wrapper">
      <div className="orbit-ring" ref={orbitRef}>
        {icons.map((src, i) => (
          <div
            key={i}
            className="orbit-icon"
            style={{ transform: `rotate(${(360 / icons.length) * i}deg) translateY(-200px)` }}
          >
            <img src={src} alt={`icon-${i}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
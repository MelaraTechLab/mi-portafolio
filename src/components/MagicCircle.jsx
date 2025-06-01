import { useEffect, useRef, useState } from 'react';
import anime from 'animejs';
import InfoPanel from './InfoPanel';
import '../styles/MagicCircle.css';

const icons = [
  '/assets/images/swiper_icon_1.52f8cee4..png',
  '/assets/images/swiper_icon_1.52f8cee4..png',
  '/assets/images/swiper_icon_1.52f8cee4..png',
];

export default function MagicCircle() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    requestAnimationFrame(() => {
      anime({ targets: '.layer-center', rotate: -360, duration: 40000, easing: 'linear', loop: true });
      anime({ targets: '.layer-phone-quan', rotate: 360, duration: 30000, easing: 'linear', loop: true });
      anime({ targets: '.layer-d2', rotate: 360, duration: 40000, easing: 'linear', loop: true });
      anime({ targets: '.layer-d', rotate: -360, duration: 50000, easing: 'linear', loop: true });
      anime({ targets: '.layer-niequan', rotate: 360, duration: 60000, easing: 'linear', loop: true });
      anime({ targets: '.circle-center', rotate: -360, duration: 40000, easing: 'linear', loop: true });
    });
  }, []);

  const handleIconClick = (index, event) => {
    setActiveIndex(index);

    const icon = event.currentTarget;
    anime({
      targets: icon,
      scale: 1.5,
      duration: 600,
      easing: 'easeOutExpo'
    });

    anime({
      targets: '.orbit-icon',
      opacity: (el, i) => (i === index ? 1 : 0),
      duration: 400,
      easing: 'easeInOutQuad'
    });

    anime({
      targets: '.angled-orbit',
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      duration: 800,
      easing: 'easeOutExpo'
    });
  };

  const handleClose = () => {
    setActiveIndex(null);

    anime({
      targets: '.orbit-icon',
      opacity: 1,
      scale: 1,
      duration: 400,
      easing: 'easeOutQuad'
    });

    anime({
      targets: '.angled-orbit',
      rotateX: 65,
      rotateY: -20,
      rotateZ: 10,
      duration: 800,
      easing: 'easeOutExpo'
    });
  };

  return (
    <div className="circle-container" ref={containerRef}>
      <div className="tilted-system angled-orbit">
        <img src="/assets/images/p2_lp_a.f61e309b..png" className="circle-layer layer-center" alt="center" />
        <img src="/assets/images/p2_phone_quan_a.e3fe3012..png" className="circle-layer layer-phone-quan" alt="phone-quan" />
        <img src="/assets/images/p2_lp_d_2.0ce5cc81..png" className="circle-layer layer-d2" alt="layer-d2" />
        <img src="/assets/images/p2_lp_d.2ab2ced4..png" className="circle-layer layer-d" alt="layer-d" />
        <img src="/assets/images/p2_phone_niequan_b.6b6da7ba..png" className="circle-layer layer-niequan" alt="niequan" />
        <img src="/assets/images/p2_lp_top.5026f4f7..png" className="circle-layer layer-top-offset" alt="top-offset" />

        <div className="circle-layer circle-center">
          <img src="/assets/images/p2_lp_a.f61e309b..png" alt="center" />
          <div className="orbit-icons">
            {icons.map((src, i) => (
              <div
                key={i}
                className="orbit-icon"
                style={{ transform: `rotate(${(360 / icons.length) * i}deg) translateY(300px)` }}
                onClick={(e) => handleIconClick(i, e)}
              >
                <div className="orbit-icon-inner">
                  <img src={src} alt={`icon-${i}`} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {activeIndex !== null && (
          <InfoPanel
            title={`Elemento ${activeIndex + 1}`}
            text="Aquí puedes mostrar una descripción del contenido relacionado con este ícono."
            onClose={handleClose}
          />
        )}
      </div>
    </div>
  );
}

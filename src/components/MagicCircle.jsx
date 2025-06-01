import { useEffect, useRef } from 'react';
import anime from 'animejs';
import '../styles/MagicCircle.css';
import OrbitCarousel from './OrbitCarousel';
import OrbitRing from './OrbitRing';

export default function MagicCircle() {
  const containerRef = useRef(null);

  useEffect(() => {
    requestAnimationFrame(() => {
      anime({ targets: '.layer-center', rotate: -360, duration: 40000, easing: 'linear', loop: true });
      anime({ targets: '.layer-phone-quan', rotate: 360, duration: 30000, easing: 'linear', loop: true });
      anime({ targets: '.layer-d2', rotate: 360, duration: 40000, easing: 'linear', loop: true });
      anime({ targets: '.layer-d', rotate: -360, duration: 50000, easing: 'linear', loop: true });
      anime({ targets: '.layer-niequan', rotate: 360, duration: 60000, easing: 'linear', loop: true });
    });
  }, []);

  return (
    <div className="circle-container" ref={containerRef}>
      <div className="tilted-system angled-orbit">
        <img src="/assets/images/p2_lp_a.f61e309b..png" className="circle-layer layer-center" alt="center" />
        <img src="/assets/images/p2_phone_quan_a.e3fe3012..png" className="circle-layer layer-phone-quan" alt="phone-quan" />
        <img src="/assets/images/p2_lp_d_2.0ce5cc81..png" className="circle-layer layer-d2" alt="layer-d2" />
        <img src="/assets/images/p2_lp_d.2ab2ced4..png" className="circle-layer layer-d" alt="layer-d" />
        <img src="/assets/images/p2_phone_niequan_b.6b6da7ba..png" className="circle-layer layer-niequan" alt="niequan" />
        <img src="/assets/images/p2_lp_top.5026f4f7..png" className="circle-layer layer-top-offset" alt="top-offset" />
        <OrbitRing />
      </div>
    </div>
  );
}

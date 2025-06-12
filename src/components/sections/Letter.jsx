// src/components/sections/Letter.jsx
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useInView } from 'react-intersection-observer';
import SplitText from "../animations/SplitText";
import DecryptedText from '../animations/DecryptedText';
import '../../styles/sections/Letter.scss';

gsap.registerPlugin(ScrollTrigger);

function Letter() {
  const sectionRef = useRef(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (!inView || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(sectionRef.current, {
        opacity: 0,
        scale: 0.95,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [inView]);

  const text = 'Mi amor, hoy quise regalarte algo que pudieras guardar para siempre, Este pequeño rincón digital es solo para ti, un espacio que refleja cuánto te amo, Cada momento a tu lado es un regalo que atesoro, como las tardes viendo tus películas favoritas, Amo cómo sonríes al ver un ramo de tulipanes, o cómo el aroma a vainilla te calma, Así como el mar es inmenso e infinito, así es mi amor por ti.';

  return (
    <section className="letter" ref={ref}>
      {inView && (
        <div ref={sectionRef}>
          <SplitText
            text="CARTA PARA EL AMOR DE MI VIDA"
            className="text-2xl font-semibold text-center"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="left"
            onLetterAnimationComplete={() => console.log('FINISHED!')}
          />
          <div className="carta-content">
            <DecryptedText
              text={text}
              animateOn="view"
              speed={100}
              revealDirection="start"
              useOriginalCharsOnly={true}
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Letter;

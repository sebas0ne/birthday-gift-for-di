// src/components/MessageFinal.jsx
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/sections/MessageFinal.scss';

gsap.registerPlugin(ScrollTrigger);

function MessageFinal() {
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 2.5,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 60%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <section className="message-final-section">
      <div className="message-content" ref={contentRef}>
        <h2>Para ti, mi amor</h2>
        <p>
          Gracias por ser mi lugar seguro, mi inspiración, mi sonrisa cada día.
          <br />
          No existen palabras suficientes para expresar cuánto te amo, pero aquí queda este pequeño rincón eterno que he creado para ti.
          <br /><br />
          Feliz cumpleaños, mi vida. Por muchos más momentos juntos, siempre. ❤️
        </p>
        <div className="signature">Con todo mi amor,<br />Sebas.</div>
      </div>
    </section>
  );
}

export default MessageFinal;

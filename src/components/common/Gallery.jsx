// src/components/common/Gallery.jsx
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitText from "../animations/SplitText";
import '../../styles/sections/SectionGallery.scss';

gsap.registerPlugin(ScrollTrigger);

const Gallery = ({
  images,
  title,
}) => {
  const itemsRef = useRef([]);

  useEffect(() => {
    itemsRef.current.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  return (
    <section>
      <SplitText
        text={title}
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
      />
      <div className="galeria-grid">
        {images.map((item, index) => (
          <div
            key={index}
            ref={(el) => (itemsRef.current[index] = el)}
            className="galeria-item"
          >
            <img src={item.img} alt={`Foto ${index + 1}`} />
            <div className="galeria-caption">{item.caption}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;

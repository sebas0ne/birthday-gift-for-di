// src/components/sections/RandomGallerySection.jsx
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useInView } from 'react-intersection-observer';
import Gallery from "../../common/Gallery";
import '../../../styles/sections/SectionGallery.scss';

gsap.registerPlugin(ScrollTrigger);

const RandomGallerySection = () => {
  const galleryContainerRef = useRef(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (!inView || !galleryContainerRef.current) return;

    const elements = galleryContainerRef.current.querySelectorAll('.galeria-item');

    elements.forEach((el) => {
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
  }, [inView]);

  const galleryItems = [
    {
      img: '/images/gallery/random-1.webp',
      caption: 'Nosotros y un filtro gracioso.',
    },
    {
      img: '/images/gallery/random-2.webp',
      caption: 'Playa y tu sonrisa.',
    },
    {
      img: '/images/gallery/random-3.webp',
      caption: 'Viendo tu peli favorita en Live Action',
    }
  ];

  return (
    <section className="galeria" ref={ref}>
      {inView && (
        <div ref={galleryContainerRef}>
          <Gallery images={galleryItems} title={'FOTOS RANDOM'} />
        </div>
      )}
    </section>
  );
};

export default RandomGallerySection;

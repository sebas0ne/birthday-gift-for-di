import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useInView } from 'react-intersection-observer';
import Gallery from "../../common/Gallery";
import '../../../styles/sections/SectionGallerySecondary.scss';

gsap.registerPlugin(ScrollTrigger);

const FirstYearGallerySection = () => {
  const sectionRef = useRef(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (!inView || !sectionRef.current) return;

    const elements = sectionRef.current.querySelectorAll('.galeria-item');
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
      img: '/images/gallery/sebasydi-primerviaje.webp',
      caption: 'Nuestro primer viaje juntos.',
    },
    {
      img: '/images/gallery/sebasydi-primera-navidad.webp',
      caption: 'Nuestra primera navidad.',
    },
    {
      img: '/images/gallery/sebasydi-primer-anonuevo.webp',
      caption: 'Nuestro primer año nuevo.',
    }
  ];

  return (
    <section className="galeria-secondary" ref={ref}>
      <div ref={sectionRef}>
        {inView && (
          <Gallery images={galleryItems} title={'NUESTRO PRIMER AÑO'} />
        )}
      </div>
    </section>
  );
};

export default FirstYearGallerySection;

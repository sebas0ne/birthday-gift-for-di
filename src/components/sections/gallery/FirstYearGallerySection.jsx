// src/components/sections/FirstYearGallerySection.jsx
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Gallery from "../../common/Gallery";
import '../../../styles/sections/SectionGallerySecondary.scss';

gsap.registerPlugin(ScrollTrigger);

const FirstYearGallerySection = () => {
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

  const galleryItems = [
    {
      img: '/images/sebasydi-primerviaje.webp',
      caption: 'Nuestro primer viaje juntos.',
    },
    {
      img: '/images/sebasydi-primera-navidad.webp',
      caption: 'Nuestra primera navidad.',
    },
    {
      img: '/images/sebasydi-primer-añonuevo.webp',
      caption: 'Nuestro primer año nuevo.',
    }
  ];

  return (
    <section className="galeria-secondary">
        <Gallery images={galleryItems} title={'NUESTRO PRIMER AÑO'}/>
    </section>
  );
}

export default FirstYearGallerySection;

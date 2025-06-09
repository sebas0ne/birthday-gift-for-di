// src/components/sections/FirstYearGallerySection.jsx
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Gallery from "../../common/Gallery";
import '../../../styles/sections/SectionGallerySecondary.scss';

gsap.registerPlugin(ScrollTrigger);

const SpecialDayGallerySection = () => {
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
        img: '/images/specialday-1.jpg',
        caption: 'La IA nos hizo parte del universo de HP.',
    },
    {
      img: '/images/specialday-2.jpg',
      caption: 'Juntos en la playa con estilo GTA, gracias IA.',
    },
    {
      img: '/images/specialday-3.jpg',
      caption: 'La IA hizo estilo Disney nuestra foto favorita.',
    }
  ];

  return (
    <section className="galeria-secondary">
        <Gallery images={galleryItems} title={'DÍA ESPECIAL (TÚ ULTIMO CUMPLEAÑOS)'}/>
    </section>
  );
}

export default SpecialDayGallerySection;

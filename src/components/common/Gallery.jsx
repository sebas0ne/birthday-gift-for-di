// src/components/common/Gallery.jsx
import SplitText from "../animations/SplitText";
import '../../styles/sections/SectionGallery.scss';

const Gallery = ({ images, title, forwardedRef }) => {
  return (
    <section ref={forwardedRef}>
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
          <div className="galeria-item" key={index}>
            <img
              src={item.img}
              alt={item.caption || `Imagen ${index + 1}`}
              loading="lazy"
              width="100%"
              height="auto"
            />
            <div className="galeria-caption">{item.caption}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;

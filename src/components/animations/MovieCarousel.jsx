// src/components/animations/MovieCarousel.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import ScrollVelocity from '../../components/animations/ScrollVelocity';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import '../../styles/animations/MovieCarousel.scss';

const pathImage = '/images/movies/';
const movies = [
    { content: "1. Barbie", image: `${pathImage}Barbie.png` },
    { content: "2. Escabe bajo fuego", image: `${pathImage}Escape.jpg` },
    { content: "3. Gran Turismo", image: `${pathImage}gran_turismo.jpg` },
    { content: "4. Dobles de acción", image: `${pathImage}doble_accion.jpg` },
    { content: "5. Los indestructibles 4", image: `${pathImage}indestrucibles.jpg`},
    { content: "6. Los increibles", image: `${pathImage}losincreibles.jpg` },
    { content: "7. Toy Story", image: `${pathImage}toyStory.jpg` },
    { content: "8. Sin Aire", image: `${pathImage}sinaire.jpg` },
    { content: "9. Five Night at Freddy's", image: `${pathImage}FiveNightsatFreddys.jpg`},
    { content: "10. Coco", image: `${pathImage}Coco.jpg` },
    { content: "11. El Justiciero: Capítulo Final", image: `${pathImage}Eljusticiero.jpg` },
    { content: "12. Los Juegos del hambre: Balada de pájaron cantores y serpientes", image: `${pathImage}juegosdelhambre.jpg` },
    { content: "13. Wish: El poder de los deseos", image: `${pathImage}Wish.jpg` },
    { content: "14. Hipnosis: Arma invisible", image: `${pathImage}Hipnosis.jpg` },
    { content: "15. Wonka", image: `${pathImage}Wonka.jpg` },
    { content: "16. Venganza silenciosa", image: `${pathImage}VenganzaSilenciosa.jpg` },
    { content: "17. Viernes negro", image: `${pathImage}ViernesNegro.jpg` },
    { content: "18. Aquaman 2: El reino perdido", image: `${pathImage}Aquaman.jpg` },
    { content: "19. Hojas de Otoño", image: `${pathImage}HojasDeOtoño.jpg` },
    { content: "20. El juego de la muerte", image: `${pathImage}ElJuegoDeLaMuerte.jpg` },
    { content: "21. Muerto de risa", image: `${pathImage}MuertoDeRisa.jpg` },
    { content: "22. Con todo menos contigo", image: `${pathImage}ConTodosMenosContigo.jpg` },
    { content: "23. Beekeeper: sentencia de muerte", image: `${pathImage}Beekeeper.jpg` },
    { content: "24. Pobres criaturas", image: `${pathImage}PobresCriaturas.jpg`},
    { content: "25. Vidas pasadas", image: `${pathImage}VidasPasadas.jpg`},
    { content: "26. Cuando asecha la maldad", image: `${pathImage}CuandoAcechaLaMaldad.jpg`},
    { content: "27. Madame web", image: `${pathImage}MadameWeb.jpg`},
    { content: "28. Demon Slayer: To the hasher training", image: `${pathImage}DemonSlayer.jpg`},
    { content: "29. Red", image: `${pathImage}Red.jpg`},
    { content: "30. Ferrari", image: `${pathImage}Ferrari.jpg`},
    { content: "31. Garra de hierro", image: `${pathImage}GarraDeHierro.jpg`},
    { content: "32. Sleep: El mal no duerme", image: `${pathImage}Sleep.jpg`},
    { content: "33. Kung fu panda 4", image: `${pathImage}KungFuPanda4.jpg`},
    { content: "34. Alicia en el país de las pesadillas", image: `${pathImage}Alicia.jpg`},
    { content: "35. Godzilla y Kong: El nuevo imperio", image: `${pathImage}GodzillaYKong.jpg`},
    { content: "36. Arthur", image: `${pathImage}Arthur.jpg`},
    { content: "37. Ghostbusters: apocalipsis fantasma", image: `${pathImage}Ghostbusters.jpg`},
    { content: "38. Back to black", image: `${pathImage}BackToBlack.jpg`},
    { content: "39. Profesión peligro", image: `${pathImage}ProfesionPeligro.jpg`},
    { content: "40. Vaguito", image: `${pathImage}Vaguito.jpeg`},
    { content: "41. Desafiantes", image: `${pathImage}Desafiantes.jpg`},
    { content: "42. Guerra civil", image: `${pathImage}GuerraCivil.jpg`},
    { content: "43. Lazos de vida", image: `${pathImage}LazosDeVida.jpg`},
    { content: "44. Gardfield: Fuera de casa", image: `${pathImage}Garfield.jpg`},
    { content: "45. Amigos imaginario", image: `${pathImage}AmigosImaginarios.jpg`},
    { content: "46. Los extraños: Capitulo 1", image: `${pathImage}LosExtraños.jpg`},
    { content: "47. Furiosa: De la saga Mad Max", image: `${pathImage}Furiosa.jpg`},
    { content: "48: Harry Potter y el prisionero de Azkabam", image: `${pathImage}HarryPotter-Prisionero.jpg`},
    { content: "49: Hachiko 2: Siempre a tu lado", image: `${pathImage}Hachiko.jpg`},
    { content: "50: Bad boys: Hasta la muerte", image: `${pathImage}BadBoys.jpg`},
    { content: "51: Monkey Man: El despertar de la bestia", image: `${pathImage}Monkeyman.jpeg`},
    { content: "52: Intensamente 2", image: `${pathImage}Intensamente2.jpg`},
    { content: "53: Un lugar en silencio: Día uno", image: `${pathImage}UnLugarEnSilencio.jpg`},
    { content: "54: Deadpool & Wolverine", image: `${pathImage}deadpoolywolverine.jpg`},
    { content: "55: De noche con el diablo" , image: `${pathImage}noche-diablo.jpg`},
    { content: "56: Tornados", image: `${pathImage}tornados.jpg`},
    { content: "57: Cómplices del engaño" , image: `${pathImage}complice.jpg`},
    { content: "58: Romper el circulo", image: `${pathImage}romper-circulo.jpg`},
    { content: "59: La trampa", image: `${pathImage}la-trampa.jpg`},
    { content: "60: Harry Potter y la piedra filosofal", image: `${pathImage}harrypotter-piedra.jpg`},
    { content: "61: Longlegs: Coleccionista de almas", image: `${pathImage}longless.jpg`},
    { content: "62: Sherk 2", image: `${pathImage}sherk-2.jpg`},
    { content: "63: Coraline", image: `${pathImage}coraline.jpg`},
    { content: "64: Parpadea 2 veces", image: `${pathImage}parpadea2veces.jpg`},
    { content: "65: Exhuma: La tumba del diablo", image: `${pathImage}exhuma.jpg`},
    { content: "66: No hables con extraños", image: `${pathImage}nohables.jpg`},
    { content: "67: La sustancia", image: `${pathImage}la-sustancia.jpg`},
    { content: "68: Sonrie 2", image: `${pathImage}sonrie-2.jpg`},
    { content: "69: Venom: El ultimo baile", image: `${pathImage}venom.jpg`},
    { content: "70: El tiempo que tenemos", image: `${pathImage}tiempo-que-tenemos.jpg`},
    { content: "71: Gladiador II", image: `${pathImage}gladiador-2.jpg`},
    { content: "71: Wicked", image: `${pathImage}wicked.jpg`},
    { content: "73: Kraven el cazador", image: `${pathImage}kraven.jpg`},
    { content: "74: Mufasa el rey león", image: `${pathImage}mufasa.jpg`},
    { content: "75: Interestelar", image: `${pathImage}Interstellar.jpg`},
    { content: "76: El robo perfecto: Pantera", image: `${pathImage}robo-perfecto-pantera.jpg`},
    { content: "77: Compañera perfecta", image: `${pathImage}compañera-perfecta.jpg`},
    { content: "78: Cónclave", image: `${pathImage}conclave.jpg`},
    { content: "79: Blanca Nieves", image: `${pathImage}blanca-nieves.jpg`},
    { content: "80: Rescate implacable", image: `${pathImage}rescate-implacable.jpg`},
    { content: "81: El amateur: Operación Venganza", image: `${pathImage}amateur.jpg`},
    { content: "82: Pecadores", image: `${pathImage}los-pecadores.jpg`},
    { content: "83: Thunderbolts", image: `${pathImage}thunderbolts.jpg`},
    { content: "84: Karate Kid Leyendas", image: `${pathImage}karate-kids-legends.jpg`},
    { content: "85: Destino final: Lazos de Sangre", image: `${pathImage}destino-final.jpg`},
    { content: "86: Mission Impossible Sentencia final", image: `${pathImage}mission-impossible.jpg`},
    { content: "87: Encerrado", image: `${pathImage}encerrado.jpg`},
    { content: "88: Bailarina", image: `${pathImage}bailarina.jpg`},
  ];

export default function MovieCarousel() {
  return (
    <div className="movie-carousel-container">
      <ScrollVelocity
        texts={['* PELICULAS QUE']}
        velocity={100} 
        className="custom-scroll-text"
      />
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={true}

        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        className="movie-carousel"
      >
        {movies.map((movie, index) => (
          <SwiperSlide key={index} className="movie-slide">
            <img
              src={movie.image}
              alt={movie.content}
              className="movie-poster"
            />
             <div className="carrusel-caption">{movie.content}</div>
          </SwiperSlide>
        ))}
      </Swiper>
      <ScrollVelocity
        texts={['VIMOS EN EL CINE *']}
        velocity={100} 
        className="custom-scroll-text"
      />
    </div>
  );
}

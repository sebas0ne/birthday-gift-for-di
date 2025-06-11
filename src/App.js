// src/App.jsx
import { useState } from 'react';
import CountdownGate from './components/CountdownGate';
import FirstSection from './components/sections/FirstSection';
import Letter from './components/sections/Letter';
import ThingsAboutYou from './components/sections/ThingsAboutYou';
import MoviesFavorites from './components/sections/MoviesFavorites';
import MessageFinal from './components/MessageFinal';
import SectionWrapper from './components/animations/SectionWrapper';
// GALLERY SECTIONS 
import FirstYearGallerySection from './components/sections/gallery/FirstYearGallerySection';
import IaGallerySection from './components/sections/gallery/IaGallerySection';
import RandomGallerySection from './components/sections/gallery/RandomGallerySection';
import BeachGallerySection from './components/sections/gallery/BeachGallerySection';
import SpecialDayGallerySection from './components/sections/gallery/SpecialDayGallerySection';
import MyFavoritePhotosGallerySection from './components/sections/gallery/MyFavoritePhotosGallerySection';
import './styles/main.scss';

function App() {
  const [showContent, setShowContent] = useState(false);
  const birthdayDate = '2025-06-01T00:00:00';

  return (
    <div className="App">
      {!showContent && (
        <CountdownGate
          targetDate={birthdayDate}
          onComplete={() => setShowContent(true)}
        />
      )}
      {showContent && ( 
        <>
          <FirstSection />

          <SectionWrapper>
            <FirstYearGallerySection />
          </SectionWrapper>

          <SectionWrapper>
            <ThingsAboutYou />
          </SectionWrapper>

          <SectionWrapper>
            <IaGallerySection />
          </SectionWrapper>

          <SectionWrapper>
            <BeachGallerySection />
          </SectionWrapper>

          <SectionWrapper>
            <SpecialDayGallerySection />
          </SectionWrapper>

          <SectionWrapper>
            <MyFavoritePhotosGallerySection />
          </SectionWrapper>

          <SectionWrapper>
            <Letter />
          </SectionWrapper>

          <SectionWrapper>
          <MoviesFavorites />
          </SectionWrapper>

          <SectionWrapper>
            <RandomGallerySection />
          </SectionWrapper>

          <SectionWrapper>
            <MessageFinal />
          </SectionWrapper>
        </>
       )}
    </div>
  );
}

export default App;

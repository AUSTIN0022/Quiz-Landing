import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';
import Guidelines from '../components/Guidelines';
import HeroBanner from '../components/HeroBanner';
import PrizesSection from '../components/PrizesSection';
import TechGenius from '../components/TechGenius';

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-900 to-blue-900 relative overflow-hidden">
      {/* Starry background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-64 left-1/4 w-1.5 h-1.5 bg-yellow-200 rounded-full animate-pulse"></div>
        <div className="absolute top-96 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-64 left-16 w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-10 w-1 h-1 bg-white rounded-full animate-pulse"></div>
      </div>
      
      <div style={{ position: 'relative', zIndex: 1 }}>
        <HeroBanner />
        <TechGenius />
        <AboutSection />
        <Guidelines />
        <PrizesSection />
        <Footer />
      </div>
    </div>
  );
};

export default Landing;
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';
import Guidelines from '../components/Guidelines';
import HeroBanner from '../components/HeroBanner';
import PrizesSection from '../components/PrizesSection';
import TechGenius from '../components/TechGenius';

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Starry background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute top-64 left-1/4 w-2.5 h-2.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-96 right-1/3 w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-64 left-16 w-3 h-3 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-10 w-2 h-2 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full animate-pulse"></div>
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
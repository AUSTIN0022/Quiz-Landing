import { Play } from 'lucide-react';
import { useState } from 'react';

const TechGenius = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoPlay = () => {
    setIsPlaying(true);
  };

  // Extract video ID from YouTube URL
  const videoId = 'EuFGrGM51CU';

  return (
    <div className="py-16 px-4 bg-gradient-to-r from-cyan-50 via-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">TECH GENIUS?</span> <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">WIN BIG PRIZES NOW!</span>
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-2 flex-shrink-0 shadow-md"></div>
                <p className="text-gray-700 text-lg">Global exposure to showcase skills.</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mt-2 flex-shrink-0 shadow-md"></div>
                <p className="text-gray-700 text-lg">
                  Access to YSM's tech platform, downloads, manuals, and dedicated portals for learning.
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mt-2 flex-shrink-0 shadow-md"></div>
                <p className="text-gray-700 text-lg">Skill enhancement and knowledge testing.</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mt-2 flex-shrink-0 shadow-md"></div>
                <p className="text-gray-700 text-lg">
                  Opportunities for cash rewards, certificates, and job invitations from industry leaders.
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Video */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-2xl overflow-hidden aspect-video shadow-2xl border-4 border-white">
              {!isPlaying ? (
                <>
                  {/* YouTube thumbnail */}
                  <img
                    src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                    alt="Video thumbnail"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={handleVideoPlay}
                      className="bg-gradient-to-r from-white to-blue-50 bg-opacity-95 hover:bg-opacity-100 rounded-full p-6 transition-all duration-300 transform hover:scale-110 shadow-2xl border-2 border-blue-200"
                    >
                      <Play className="w-12 h-12 text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text ml-1" />
                    </button>
                  </div>
                  <div className="absolute top-4 left-4 text-white font-bold text-xl">
                    YSM
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-gradient-to-r from-white to-blue-50 bg-opacity-30 backdrop-blur-sm rounded-lg p-4 border border-white border-opacity-30">
                      <p className="text-white text-sm">
                        Learn more about QuizBuzz and the opportunities it provides
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="rounded-2xl"
                ></iframe>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechGenius;
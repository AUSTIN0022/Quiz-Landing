import { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HeroBanner = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const navigate = useNavigate();

  // Memoize target date to avoid recalculation
  const targetDate = useMemo(() => new Date('2025-08-31T07:30:00.000Z').getTime(), []);

  // Memoize time calculation function
  const calculateTimeLeft = useCallback(() => {
    const distance = targetDate - Date.now();
    
    if (distance <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(distance / 86400000), // 1000 * 60 * 60 * 24
      hours: Math.floor((distance % 86400000) / 3600000), // 1000 * 60 * 60
      minutes: Math.floor((distance % 3600000) / 60000), // 1000 * 60
      seconds: Math.floor((distance % 60000) / 1000)
    };
  }, [targetDate]);

  useEffect(() => {
    // Initial calculation
    setTimeLeft(calculateTimeLeft());
    
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  // Simplified format function
  const formatTime = (time) => time.toString().padStart(2, '0');

  // Memoized timer blocks to avoid re-rendering
  const TimerBlock = ({ value, label }) => (
    <div className="bg-white bg-opacity-80 backdrop-blur-sm shadow-lg border border-gray-200 p-4 rounded-lg text-center min-w-20">
      <div className="text-gray-900 text-2xl md:text-3xl font-bold">
        {formatTime(value)}
      </div>
      <div className="text-gray-600 text-sm">{label}</div>
    </div>
  );

  return (
    <div className="relative py-8 px-4 text-center bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* YSM Logo */}
        <img 
          src="/ysm-logo.avif" 
          alt="YSM Logo" 
          className="mx-auto w-28 h-14 object-contain mb-6"
        />

        {/* Quiz Logo */}
        <img 
          src="/quizBuzz-logo.avif" 
          alt="Quiz Buzz Logo" 
          className="mx-auto w-72 h-72 object-contain mb-6"
        />

        {/* Competition Title */}
        <h1 className="text-gray-900 text-2xl md:text-4xl font-bold mb-4">
          Technical Quiz Competition
        </h1>

        {/* Date */}
        <p className="text-gray-700 text-lg md:text-xl mb-8">
          Date: 31st August 2025
        </p>

        {/* Countdown Timer */}
        <div className="flex justify-center gap-4 mb-8">
          <TimerBlock value={timeLeft.days} label="Days" />
          <TimerBlock value={timeLeft.hours} label="Hours" />
          <TimerBlock value={timeLeft.minutes} label="Minutes" />
          <TimerBlock value={timeLeft.seconds} label="Seconds" />
        </div>

        {/* Registration Button */}
        <button 
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 shadow-lg"
          onClick={() => navigate('/register')}
        >
          Registration Open
        </button>
      </div>
    </div>
  );
};

export default HeroBanner;
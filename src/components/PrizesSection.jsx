import { Award, Medal, Trophy } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PrizesSection = () => {
    const navigate = useNavigate();
  const prizes = [
    {
      position: "Grand Prize (1st Place)",
      cashPrize: "₹ 20,000",
      benefits: [
        "6-Month Fullstack Python Internship Program",
        "Certificate Of Achievement",
        "Medal Of Recognition"
      ],
      icon: <Trophy className="w-12 h-12 text-yellow-600" />,
      gradient: "from-yellow-400 to-orange-400"
    },
    {
      position: "2nd Place",
      cashPrize: "₹ 15,000",
      benefits: [
        "6-Month Fullstack Python Internship Program",
        "Certificate Of Achievement",
        "Medal Of Recognition"
      ],
      icon: <Medal className="w-12 h-12 text-gray-600" />,
      gradient: "from-gray-400 to-gray-500"
    },
    {
      position: "3rd Place",
      cashPrize: "₹ 10,000",
      benefits: [
        "6-Month Fullstack Python Internship Program",
        "Certificate Of Achievement",
        "Medal Of Recognition"
      ],
      icon: <Medal className="w-12 h-12 text-amber-700" />,
      gradient: "from-amber-500 to-amber-600"
    },
    {
      position: "4th - 10th Place",
      cashPrize: "₹ 5,000",
      benefits: [
        "6-Month Fullstack Python Internship Program",
        "Certificate Of Achievement",
        "Medal Of Recognition"
      ],
      icon: <Award className="w-12 h-12 text-green-600" />,
      gradient: "from-green-400 to-green-500"
    },
    {
      position: "11th - 20th Place",
      cashPrize: "₹ 2,000",
      benefits: [
        "6-Month Fullstack Python Internship Program",
        "Certificate Of Achievement",
        "Medal Of Recognition"
      ],
      icon: <Award className="w-12 h-12 text-blue-600" />,
      gradient: "from-blue-400 to-blue-500"
    },
    {
      position: "21st - 50th Place",
      cashPrize: "₹ 1,000",
      benefits: [
        "6-Month Fullstack Python Internship Program",
        "Certificate Of Achievement",
        "Medal Of Recognition"
      ],
      icon: <Award className="w-12 h-12 text-purple-600" />,
      gradient: "from-purple-400 to-purple-500"
    }
  ];

  return (
    <div className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            CONTEST <span className="text-green-600">PRIZES</span>
          </h2>
        </div>

        {/* Prizes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {prizes.map((prize, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-green-400 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="text-center mb-6">
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${prize.gradient} rounded-full mb-4 shadow-md`}>
                  {prize.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{prize.position}</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {prize.cashPrize}
                </div>
                <p className="text-gray-600 text-sm">Cash Prize</p>
              </div>
              
              <ul className="space-y-2 text-gray-700">
                {prize.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span className="text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
          <h3 className="text-3xl font-bold text-gray-800 mb-2">
            HURRY UP!
          </h3>
          <p className="text-2xl text-gray-800 mb-6">
            <span className="text-green-600">BE FIRST</span> TO JOIN THE CONTEST
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
            onClick={() => navigate('/register')}
          >
            Registration Open
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrizesSection;
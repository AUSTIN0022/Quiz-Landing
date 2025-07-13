import { Award, BookOpen, Download, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AboutSection = () => {
    const navigate = useNavigate();
    
    const handleDownload = () => {
        
        try {
            window.open("https://s3-eu-west-1.amazonaws.com/landingi-editor-uploads/jc3IFo7p/QuizzBuzz_Syllabus.pdf", "_blank");
        } catch (error) {
            console.error("Error opening PDF:", error);
            // Fallback: try direct navigation
            window.location.href = "https://s3-eu-west-1.amazonaws.com/landingi-editor-uploads/jc3IFo7p/QuizzBuzz_Syllabus.pdf";
        }
    };
    
  return (
    <div className="py-16 px-4 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Eligibility Section */}
          <div className="bg-white rounded-2xl p-8 border-2 border-rose-200 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full mb-4 shadow-lg">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent mb-2">Eligibility</h3>
              {/* <h4 className="text-lgs font-semibold text-gray-900">ABOUT QUIZZBUZZ</h4> */}
            </div>
            
            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex items-start space-x-2">
                <span className="text-rose-500 mt-1 text-lg">•</span>
                <span>Open worldwide for IT individuals.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-rose-500 mt-1 text-lg">•</span>
                <span>Registrations are open for tech enthusiasts, professionals, and students.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-rose-500 mt-1 text-lg">•</span>
                <span>Registration confirmation is contingent upon payment.</span>
              </li>
            </ul>
            
           <button className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
            onClick={() => navigate('/register')}
        >
          Registration Open
        </button>
          </div>

          {/* Benefits Section */}
          <div className="bg-white rounded-2xl p-8 border-2 border-purple-200 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full mb-4 shadow-lg">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">Benefits</h3>
            </div>
            
            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex items-start space-x-2">
                <span className="text-purple-500 mt-1 text-lg">•</span>
                <span>Enhanced student engagement and academic excellence.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-purple-500 mt-1 text-lg">•</span>
                <span>Skill development in full-stack development and understanding industry trends.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-purple-500 mt-1 text-lg">•</span>
                <span>Internship opportunities to gain practical experience and start a career in the tech industry.</span>
              </li>
            </ul>
            
            <button className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                 onClick={() => navigate('/register')}
            >
              Registration Open
            </button>
          </div>

          {/* Syllabus Section */}
          <div className="bg-white rounded-2xl p-8 border-2 border-cyan-200 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-4 shadow-lg">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">Syllabus</h3>
              
            </div>
            
            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex items-start space-x-2">
                <span className="text-cyan-500 mt-1 text-lg">•</span>
                <span>Comprehensive Algorithms and Data Structures coverage.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-cyan-500 mt-1 text-lg">•</span>
                <span>In-depth Programming Languages exploration.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-cyan-500 mt-1 text-lg">•</span>
                <span>Understanding Software Engineering Principles and Methodologies.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-cyan-500 mt-1 text-lg">•</span>
                <span>Database Management Systems and Web Development essentials.</span>
              </li>
            </ul>
            
            <button 
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer shadow-md hover:shadow-lg transform hover:scale-105"
                onClick={handleDownload}
                type="button"
            >
              <Download className="w-5 h-5" />
              <span>Download Syllabus</span>
            </button>
        
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
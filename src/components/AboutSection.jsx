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
    <div className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Eligibility Section */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-500 rounded-full mb-4">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Eligibility</h3>
              {/* <h4 className="text-lgs font-semibold text-gray-900">ABOUT QUIZZBUZZ</h4> */}
            </div>
            
            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex items-start space-x-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>Open worldwide for IT individuals.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>Registrations are open for tech enthusiasts, professionals, and students.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>Registration confirmation is contingent upon payment.</span>
              </li>
            </ul>
            
           <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 shadow-md"
            onClick={() => navigate('/register')}
        >
          Registration Open
        </button>
          </div>

          {/* Benefits Section */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-500 rounded-full mb-4">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Benefits</h3>
            </div>
            
            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex items-start space-x-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>Enhanced student engagement and academic excellence.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>Skill development in full-stack development and understanding industry trends.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>Internship opportunities to gain practical experience and start a career in the tech industry.</span>
              </li>
            </ul>
            
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 shadow-md"
                 onClick={() => navigate('/register')}
            >
              Registration Open
            </button>
          </div>

          {/* Syllabus Section */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-500 rounded-full mb-4">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Syllabus</h3>
              
            </div>
            
            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex items-start space-x-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>Comprehensive Algorithms and Data Structures coverage.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>In-depth Programming Languages exploration.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>Understanding Software Engineering Principles and Methodologies.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>Database Management Systems and Web Development essentials.</span>
              </li>
            </ul>
            
            <button 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2 cursor-pointer shadow-md"
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
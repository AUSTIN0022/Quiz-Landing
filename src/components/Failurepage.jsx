import { AlertCircle, XCircle } from "lucide-react";

const FailurePage = ({ error, onRetry }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="mb-8">
            <XCircle className="w-20 h-20 text-red-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Registration Failed</h1>
            <p className="text-gray-600 text-lg">
              We encountered an issue while processing your registration.
            </p>
          </div>
          
          <div className="bg-red-50 p-6 rounded-lg mb-8">
            <div className="flex items-center justify-center mb-3">
              <AlertCircle className="w-6 h-6 text-red-600 mr-2" />
              <h2 className="text-xl font-semibold text-red-800">Error Details</h2>
            </div>
            <p className="text-red-700">{error}</p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">What you can do:</h3>
            <div className="text-left text-gray-700 space-y-2">
              <p>• Try registering again with the same details</p>
              <p>• Check your internet connection</p>
              <p>• Ensure all required fields are filled correctly</p>
              <p>• Contact support if the issue persists</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onRetry}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Try Again
            </button>
            <button
              onClick={() => window.location.href = '/'}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Back to Home
            </button>
            <button
              onClick={() => window.location.href = '/contact'}
              className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FailurePage;
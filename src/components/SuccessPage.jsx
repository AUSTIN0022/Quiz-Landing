import { CheckCircle } from 'lucide-react';

// Success Component
const SuccessPage = ({ registrationData }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="mb-8">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Registration Successful!</h1>
            <p className="text-gray-600 text-lg">
              Your payment has been processed successfully.
            </p>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-green-800 mb-4">Registration Details</h2>
            <div className="space-y-2 text-left">
              <div className="flex justify-between">
                <span className="text-gray-600">Name:</span>
                <span className="font-medium">{registrationData.firstName} {registrationData.lastName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Email:</span>
                <span className="font-medium">{registrationData.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Registration ID:</span>
                <span className="font-medium">{registrationData.registrationId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Payment ID:</span>
                <span className="font-medium">{registrationData.paymentId}</span>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">What's Next?</h3>
            <div className="text-left text-blue-700 space-y-2">
              <p>✓ Check your email for confirmation and competition details</p>
              <p>✓ Join our group for updates (link in email)</p>
              <p>✓ Competition starts on 24th August 2025 at [Time]</p>
              <p>✓ Login credentials will be shared 24 hours before the event</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.location.href = '/'}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Back to Home
            </button>
            <button
              onClick={() => window.print()}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Print Confirmation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
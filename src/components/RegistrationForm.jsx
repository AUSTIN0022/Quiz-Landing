import { ArrowRight, Clock, CreditCard, GraduationCap, Mail, Phone, Trophy, User } from 'lucide-react';
import { useState } from 'react';
import { registerAndCreateOrder } from '../api/register';
import { verifyPaymentOnServer } from '../api/verifyPayment';

const RegistrationForm = ({ onSuccess, onError }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    college: '',
    yearOfStudy: '',
    department: '',
    experience: ''
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [currentStep, setCurrentStep] = useState(1);

  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
      if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
      if (!formData.email.trim()) newErrors.email = 'Email is required';
       else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
      if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
       else if (!/^\+?[\d\s\-()]+$/.test(formData.phone)) newErrors.phone = 'Phone number is invalid';
       else if (formData.phone.replace(/\D/g, '').length !== 10) newErrors.phone = 'Phone number must be exactly 10 digits';

    }

    if (step === 2) {
      if (!formData.college.trim()) newErrors.college = 'College name is required';
      if (!formData.yearOfStudy) newErrors.yearOfStudy = 'Year of study is required';
      if (!formData.department.trim()) newErrors.department = 'Department is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleNextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep(2)) return;
    setLoading(true);

    try {
      const data = await registerAndCreateOrder(formData);

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: data.amount,
        currency: 'INR',
        name: 'Quiz Competition 2025',
        description: 'Registration Fee',
        order_id: data.orderId,
        handler: async function (response) {
          await verifyPayment(response);
        },
        prefill: {
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          contact: formData.phone
        },
        theme: {
          color: '#3B82F6'
        },
        modal: {
          ondismiss: function () {
            setLoading(false);
          }
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      setLoading(false);
      onError(error.message);
    }
  };

  const verifyPayment = async (paymentResponse) => {
    try {
      const data = await verifyPaymentOnServer(paymentResponse);
      onSuccess({
        ...formData,
        paymentId: paymentResponse.razorpay_payment_id,
        registrationId: data.registrationId
      });
    } catch (error) {
      onError(error.message);
    }
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <User className="w-12 h-12 text-blue-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Personal Information</h2>
        <p className="text-gray-600 mt-2">Tell us about yourself</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-lg ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Enter your first name"
          />
          {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-lg ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Enter your last name"
          />
          {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <Mail className="inline w-4 h-4 mr-1" />
          Email Address *
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className={`w-full px-4 py-3 border rounded-lg ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
          placeholder="Enter your email address"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <Phone className="inline w-4 h-4 mr-1" />
          Phone Number *
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          className={`w-full px-4 py-3 border rounded-lg ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
          placeholder="Enter your phone number"
        />
        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <GraduationCap className="w-12 h-12 text-blue-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Academic Information</h2>
        <p className="text-gray-600 mt-2">Tell us about your academic background</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">College/University Name *</label>
        <input
          type="text"
          name="college"
          value={formData.college}
          onChange={handleInputChange}
          className={`w-full px-4 py-3 border rounded-lg ${errors.college ? 'border-red-500' : 'border-gray-300'}`}
          placeholder="Enter your college/university name"
        />
        {errors.college && <p className="text-red-500 text-sm mt-1">{errors.college}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Year of Study *</label>
          <select
            name="yearOfStudy"
            value={formData.yearOfStudy}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-lg ${errors.yearOfStudy ? 'border-red-500' : 'border-gray-300'}`}
          >
            <option value="">Select year</option>
            <option value="1st Year">1st Year</option>
            <option value="2nd Year">2nd Year</option>
            <option value="3rd Year">3rd Year</option>
            <option value="4th Year">4th Year</option>
            <option value="Graduate">Graduate</option>
            <option value="Post Graduate">Post Graduate</option>
          </select>
          {errors.yearOfStudy && <p className="text-red-500 text-sm mt-1">{errors.yearOfStudy}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Department *</label>
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-lg ${errors.department ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="e.g., Computer Science, Engineering"
          />
          {errors.department && <p className="text-red-500 text-sm mt-1">{errors.department}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Quiz Competition Experience (Optional)</label>
        <textarea
          name="experience"
          value={formData.experience}
          onChange={handleInputChange}
          rows="4"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg"
          placeholder="Tell us about your previous quiz competition experience..."
        />
      </div>

      <div className="bg-blue-50 p-6 rounded-lg">
        <div className="flex items-center mb-4">
          <CreditCard className="w-6 h-6 text-blue-600 mr-2" />
          <h3 className="text-lg font-semibold text-blue-900">Registration Fee</h3>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-700">Competition Entry Fee:</span>
          <span className="text-2xl font-bold text-blue-600">₹99</span>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          Secure payment processed by Razorpay. You'll be redirected to complete payment after registration.
        </p>
      </div>
    </div>
  );

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center mb-8">
      <div className="flex items-center space-x-4">
        <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
          currentStep >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
        }`}>1</div>
        <div className={`w-16 h-1 ${currentStep >= 2 ? 'bg-blue-600' : 'bg-gray-200'}`} />
        <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
          currentStep >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
        }`}>2</div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <Trophy className="w-16 h-16 text-yellow-500" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">QuizBuzz Competition 2025</h1>
            <p className="text-gray-600 mt-2">Register now and compete with the best minds!</p>
          </div>

          {renderStepIndicator()}

          <form onSubmit={handleSubmit}>
            {currentStep === 1 && renderStep1()}
            {currentStep === 2 && renderStep2()}

            <div className="flex justify-between mt-8">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                >
                  Previous
                </button>
              )}

              {currentStep < 2 ? (
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="ml-auto px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center"
                >
                  Next <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={loading}
                  className="ml-auto px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 flex items-center"
                >
                  {loading ? (
                    <>
                      <Clock className="w-4 h-4 mr-2 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <CreditCard className="w-4 h-4 mr-2" />
                      Proceed to Payment
                    </>
                  )}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;

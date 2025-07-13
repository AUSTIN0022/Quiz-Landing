import { useState } from 'react';
import FailurePage from '../components/Failurepage';
import RegistrationForm from '../components/RegistrationForm';
import SuccessPage from '../components/SuccessPage';

// Main Register Component
const Register = () => {
  const [currentView, setCurrentView] = useState('form'); // 'form', 'success', 'failure'
  const [registrationData, setRegistrationData] = useState(null);
  const [error, setError] = useState('');

  const handleSuccess = (data) => {
    setRegistrationData(data);
    setCurrentView('success');
  };

  const handleError = (errorMessage) => {
    setError(errorMessage);
    setCurrentView('failure');
  };

  const handleRetry = () => {
    setError('');
    setCurrentView('form');
  };

  if (currentView === 'success') {
    return <SuccessPage registrationData={registrationData} />;
  }

  if (currentView === 'failure') {
    return <FailurePage error={error} onRetry={handleRetry} />;
  }

  return <RegistrationForm onSuccess={handleSuccess} onError={handleError} />;
};

export default Register;
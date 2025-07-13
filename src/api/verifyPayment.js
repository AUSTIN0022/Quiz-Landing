
export const verifyPaymentOnServer = async (paymentResponse) => {
  const response = await fetch(`${import.meta.env.VITE_URL}/api/payment/verify`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', 
    },
    body: JSON.stringify({
      razorpay_order_id: paymentResponse.razorpay_order_id,
      razorpay_payment_id: paymentResponse.razorpay_payment_id,
      razorpay_signature: paymentResponse.razorpay_signature,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Payment verification failed');
  }

  return data; // { registrationId }
};

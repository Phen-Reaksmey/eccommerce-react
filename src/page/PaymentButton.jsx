import React, { useEffect } from 'react';

const PaymentButton = ({ totalAmount, onPaymentSuccess, onPaymentError }) => {

  useEffect(() => {
    const loadPayPalScript = async () => {
      const script = document.createElement('script');
      script.src = `https://www.paypal.com/sdk/js?client-id=AfX4NPIeqG4TfwbAL1ehrFNGqT10C8LxUbjAGHLV0hiJLMSQ2NR8jjSfLaOr9gxLYFOqypa-yeg_cSNL&buyer-country=US&currency=USD&components=buttons`;
      script.async = true;

      script.onload = () => {
        if (window.paypal && window.paypal.Buttons) {
          window.paypal.Buttons({
            createOrder(data, actions) {
              return actions.order.create({
                purchase_units: [{
                  amount: {
                    value: totalAmount, // Total amount for the transaction
                  },
                }],
              });
            },
            onApprove(data, actions) {
              return actions.order.capture().then(function(details) {
                onPaymentSuccess(details);
              }).catch(error => {
                console.error("Error capturing payment:", error);
                onPaymentError(error);
              });
            },
            onError(error) {
              onPaymentError(error);
            },
          }).render('#paypal-button-container');  // Render the button inside this container
        } else {
          console.error('PayPal Buttons SDK is not loaded correctly');
        }
      };

      script.onerror = () => {
        console.error('PayPal script failed to load');
      };

      document.body.appendChild(script);
    };

    loadPayPalScript();
  }, [totalAmount, onPaymentSuccess, onPaymentError]); // Re-run when these props change

  return (
    <div id="paypal-button-container" style={{ textAlign: 'center', marginTop: '20px' }}>
      {/* PayPal button will be rendered here */}
    </div>
  );
};

export default PaymentButton;

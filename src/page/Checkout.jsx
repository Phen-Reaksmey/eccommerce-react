import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const Checkout = ({ cart, setCart }) => {
  // Calculate total price of items in the cart
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const onApprove = (data, actions) => {
    actions.order.capture().then((details) => {
      // Display transaction details and clear cart after payment
      alert('Transaction completed by ' + details.payer.name.given_name);
      setCart([]);  // Optionally clear the cart after successful payment
    }).catch((error) => {
      console.error('Payment error:', error);
      alert('Payment failed. Please try again.');
    });
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Checkout</h2>
      <h4 className="my-4">Your Order:</h4>

      <ul className="list-group mb-3">
        {cart.map((item) => (
          <li key={item.id} className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">{item.title}</h6>
              <small className="text-muted">x {item.quantity}</small>
            </div>
            <span className="text-muted">${(item.price * item.quantity).toFixed(2)}</span>
          </li>
        ))}
      </ul>

      <h4 className="text-end">Total Price: ${totalPrice.toFixed(2)}</h4>

      <div className="d-flex justify-content-center mt-4">
        <PayPalScriptProvider options={{ "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID }}>
          <PayPalButtons
            style={{ layout: 'vertical' }}
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: totalPrice.toFixed(2),
                    },
                  },
                ],
              });
            }}
            onApprove={onApprove}
          />
        </PayPalScriptProvider>
      </div>
    </div>
  );
};

export default Checkout;

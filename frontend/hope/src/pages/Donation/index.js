import React, { useState } from 'react';
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// the key is located in the .env file
const stripePromise = loadStripe(
  'pk_live_51HV03zJuRjbktOF0CQ08Ng2fz2cRuu81ebLxecY9ZRLLak7JS8sLSFxmR2Y0mpUDlVhM0y4QVUsRFKsXUilUBkNf00o1ofbu6o',
);

// import { Container } from './styles';

const Donation = () => {
  const [email, setEmail] = useState('');

  const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) => {
      e.preventDefault();

      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
      });
    };
    return (
      <form>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button type="submit" className="">
          Donate
        </button>
      </form>
    );
  };

  return (
    <>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </>
  );
};

export default Donation;

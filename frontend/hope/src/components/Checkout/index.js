import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

const CheckoutForm = props => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [checkoutErrorMsg, setCheckoutErrorMsg] = useState('');
  const [buttonMsg, setButtonMsg] = useState('Donate');

  const stripe = useStripe();
  const element = useElements();

  const handleChange = e => {
    if (e.error) {
      return setCheckoutErrorMsg(e.error.message);
    }
    setCheckoutErrorMsg('Invalid try again!');
  };

  const handlePayment = async e => {
    e.preventDefault();

    setIsProcessing(true);
    setButtonMsg('Processing...');

    const cardElement = element.getElement('card');

    const billingInfo = {
      name: e.target.name.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      address: {
        line1: e.target.address.value,
      },
    };

    try {
      // Got our client secret
      const paymentIntent = await axios.post('http://localhost:5000/payment', {
        amount: props.product.price * 100,
      });

      // Create PaymentMethod Object
      const paymentMethodObj = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: billingInfo,
      });

      if (paymentMethodObj.error) {
        setCheckoutErrorMsg(paymentMethodObj.error.message);
        setIsProcessing(false);
        setButtonMsg('Donate');
        return;
      }

      // Confirm Payment Method
      const confirmPayment = await stripe.confirmCardPayment(
        paymentIntent.data,
        {
          payment_method: paymentMethodObj.paymentMethod.id,
        },
      );

      if (confirmPayment.error) {
        setCheckoutErrorMsg(confirmPayment.error.message);
        setIsProcessing(false);
        setButtonMsg('Donate');
        return;
      }

      setButtonMsg('Success! Payment is Complete');

      setTimeout(() => {
        setButtonMsg('Donate');
        setIsProcessing(false);
      }, 2000);
    } catch (error) {
      setCheckoutErrorMsg(error.message);
      setIsProcessing(false);
    }
  };

  return (
    <div>
      <br />
      <h3 className="text-dark">
        &nbsp;&nbsp;Donate:
      <span>{props.product.name}</span>
        {props.product.price}
        &nbsp;
      </h3>
      <form onSubmit={handlePayment}>
        <input
          className="form-control"
          type="text"
          placeholder="Full name"
          name="name"
          required
        />
        <br />
        <input
          className="form-control"
          type="text"
          placeholder="Phone number"
          name="phone"
          required
        />
        <br />
        <input
          className="form-control"
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        <br />
        <input
          className="form-control"
          type="text"
          placeholder="Address"
          name="address"
          required
        />
        <br />
        <p className="alert-danger">{checkoutErrorMsg}</p>
        <CardElement
          className="form-control"
          options={{
            hidePostalCode: true,
            style: {
              base: {
                fontSize: '20px',
              },
            },
          }}
          onChange={handleChange}
        />
        <br />
        <button
          className="btn btn-danger btn-lg btn-block"
          type="submit"
          disabled={isProcessing}
        >
          {buttonMsg}
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;

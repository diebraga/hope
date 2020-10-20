import React, {useState} from 'react';
import ProductCard from "../../components/Product";
import CheckoutForm from "../../components/Checkout";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Header from '../../components/Header';

const stripePromise = loadStripe('< YOUR_STRIPE_PUBLIC_KEY >')

stripePromise.then(data => {
  console.log(data)
})

const Donation = () => {

  const [products, setProducts] = useState([
    {
    img: "https://images.pexels.com/photos/358482/pexels-photo-358482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    name: "$",
    price: 50
    },
    {
      img: "https://images.pexels.com/photos/352550/pexels-photo-352550.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      name: "$",
      price: 100
    },
    {
      img: "https://images.pexels.com/photos/1080722/pexels-photo-1080722.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      name: "$",
      price: 200
    },
    {
      img: "https://images.pexels.com/photos/51387/mount-everest-himalayas-nuptse-lhotse-51387.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      name: "$",
      price: 400
    }
  ])

  const [product, setProduct] = useState('')

  const displayProducts = () => {
    return products.map(product => {
      return (
        <ProductCard
          product={product}
          setProduct={setProduct}
        />
      )
    })
  }

  return (
    <Elements
      stripe={stripePromise}
    >
     <Header />
      <div className="container-fluid col-sm-8">
        <br/>
        <h2 className="text-center text-dark">4_Hope</h2>
        <br/>
        <div>
          <div>
            {displayProducts()}
          </div>
          <CheckoutForm
            product={product}
          />
        </div>
      </div>
      <br/>
    </Elements>
  );
}

export default Donation;

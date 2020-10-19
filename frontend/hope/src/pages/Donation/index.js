import React, {useState} from 'react';
import ProductCard from "../../components/Product"
import CheckoutForm from "../../components/Checkout"
import {Elements} from "@stripe/react-stripe-js"
import {loadStripe} from "@stripe/stripe-js"

const stripePromise = loadStripe('pk_live_51HV03zJuRjbktOF0CQ08Ng2fz2cRuu81ebLxecY9ZRLLak7JS8sLSFxmR2Y0mpUDlVhM0y4QVUsRFKsXUilUBkNf00o1ofbu6o')

stripePromise.then(data => {
  console.log(data)
})

const Donation = () => {

  const [products, setProducts] = useState([
    {
    img: "http",
    name: "",
    price: 50
    },
    {
      img: "",
      name: "",
      price: 100
    },
    {
      img: "",
      name: "",
      price: 200
    },
    {
      img: "",
      name: "",
      price: 400
    }
  ])

  const [product, setProduct] = useState({
    name: "Organic Apple",
    price: 70
  })

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
      <div className="container-fluid">
        <div className="">
          {displayProducts()}
        </div>
        <CheckoutForm
          product={product}
        />
      </div>
    </Elements>
  );
}

export default Donation;

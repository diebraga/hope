import React from 'react';
import { Container } from './styles';

const ProductCard = props => {
  const setProduct = () => {
    props.setProduct({
      name: props.product.name,
      price: props.product.price,
    });
  };

  return (
    <div onClick={setProduct}>
      <div>
        <Container>
          <img
            src={props.product.img}
            className="card"
            style={{ maxWidth: '100%' }}
          />
          <p className="text-primary">
            &nbsp;&nbsp;$
            {props.product.price}
          </p>
        </Container>
      </div>
    </div>
  );
};

export default ProductCard;

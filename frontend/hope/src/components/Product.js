import React from 'react'

function ProductCard(props) {

    const setProduct = () => {
        props.setProduct({
            name: props.product.name,
            price: props.product.price
        })
    }

    return (
        <div className="ProductCard" onClick={setProduct}>
            <img src={props.product.img} className="card" style={{height: '300px', width: '300px'}}/>
            <h3 className="card-name">{props.product.name}</h3>
            <p className="card-price">${props.product.price}</p>
        </div>
    )
}


export default ProductCard

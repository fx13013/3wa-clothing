import React from 'react';
import './checkoutItem.styles.scss';

const CheckoutItem = ({ cartItem: { name, quantity, imageUrl, price} }) => (
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt={name}/>
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>{quantity}</span>
        <span className='price'>{price} €</span>
        <div className="remove-button">&#10008;</div>
    </div>
)

export default CheckoutItem;
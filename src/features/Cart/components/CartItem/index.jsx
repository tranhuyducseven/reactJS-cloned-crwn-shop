import React from 'react'
import './style.scss'
function CartItem(props) {
    const { item } = props;
    const { imageUrl, name, price, quantity } = item;
    return (
        <div className='cart-item'>
            <img src={imageUrl} alt='item' />
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='price'>
                    {quantity} x ${price}
                </span>
            </div>
        </div>
    )
}

CartItem.propTypes = {

}

export default CartItem


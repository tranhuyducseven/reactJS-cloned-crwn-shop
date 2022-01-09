import { addItem, clearItem, removeItem } from 'features/Cart/cartSlice';
import React from 'react';
import { useDispatch } from 'react-redux';
import './style.scss'
function CheckoutItem(props) {
    const { item } = props;
    const { id, name, quantity, imageUrl, price } = item;
    const dispatch = useDispatch();
    const handleRemoveItem = () => {
        const action = clearItem(id);
        dispatch(action);
    }
    const handleDecreaseQuantity = () => {
        const action = removeItem(item);
        dispatch(action);
    }
    const handleIncreaseQuantity = () => {
        const action = addItem(item);
        dispatch(action);
    }
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item' />
            </div>
            <span className='name'>{name}</span>
            <div className='quantity'>
                <div className='arrow' onClick={handleDecreaseQuantity}> &#10094;</div>
                <span className='value'>  {quantity}</span>
                <div className='arrow' onClick={handleIncreaseQuantity}> &#10095;</div>
            </div>
            <span className='price'>{price}</span>
            <div onClick={handleRemoveItem} className='remove-button'>&#10005;</div>
        </div>
    )
}


export default CheckoutItem


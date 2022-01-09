import { selectCartItems, selectCartTotal } from 'features/Cart/cart.selector';
import React from 'react';
import { useSelector } from 'react-redux';
import CheckoutItem from '../components/CheckoutItem';
import './style.scss';
function MainPage(props) {
    const cartItems = useSelector(selectCartItems);
    const total = useSelector(selectCartTotal);
    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map(item =>
                (<CheckoutItem key={item.id} item={item} />)
            )}
            <div className='total'>TOTAL: ${total}</div>
        </div>
    )
}

MainPage.propTypes = {

}

export default MainPage


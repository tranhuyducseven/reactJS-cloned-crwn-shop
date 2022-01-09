import { selectCartItems } from 'features/Cart/cart.selector';
import { toggleCartDropdown } from 'features/Cart/cartSlice';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { Button } from 'reactstrap'
import CartItem from '../CartItem';
import './style.scss'
function CartDropdown(props) {
    const cartItems = useSelector(selectCartItems);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleCheckout = () => {
        const action = toggleCartDropdown();
        dispatch(action);
        navigate('/checkout');

    }
    return (
        <div className='cart-dropdown'>
            <div className='cart-items' >
                {
                    cartItems.length ?
                        cartItems.map(item => (
                            <CartItem key={item.id} item={item} />
                        )) :
                        <span className="empty-message">Your cart is empty</span>
                }
            </div>
            <Button onClick={handleCheckout}>GO TO CHECKOUT</Button>
        </div>
    )
}

CartDropdown.propTypes = {

}

export default CartDropdown


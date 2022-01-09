import { ReactComponent as ShoppingIcon } from 'assets/images/shopping-bag.svg';
import { selectCartItemsCount } from 'features/Cart/cart.selector';
import { toggleCartDropdown } from 'features/Cart/cartSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './style.scss';
function CartIcon(props) {
    const dispatch = useDispatch();   
    const itemsCount = useSelector(selectCartItemsCount);  
    const handleCartIconClick = () => {
        const action = toggleCartDropdown();
        dispatch(action);
    }
    return (
        <div className="cart-icon" onClick={handleCartIconClick}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{itemsCount}</span>
        </div>
    )
}

CartIcon.propTypes = {

}

export default CartIcon


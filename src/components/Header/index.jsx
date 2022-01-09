import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from 'assets/images/crown.svg'
import './style.scss'
import { auth } from 'firebaseConfig/firebase.utils';
import { useSelector } from 'react-redux';
import CartIcon from 'features/Cart/components/CartIcon';
import CartDropdown from 'features/Cart/components/CartDropdown';
import { selectCartHidden } from 'features/Cart/cart.selector';
function Header() {
    const users = useSelector(state => state.users);
    const currentUser = users.currentUser;
    const carDropDownStyle = useSelector(selectCartHidden);
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/shop'>
                    CONTACT
                </Link>

                {
                    currentUser ? <div className='option' onClick={() => {
                        auth.signOut();
                        console.log(auth)
                    }}>SIGN OUT</div> : <Link className='option' to='/sign-in'>
                        SIGN IN
                    </Link>

                }
                <CartIcon />
            </div>
            {
                carDropDownStyle ? null : <CartDropdown />
            }

        </div>
    )
}

Header.propTypes = {

}

export default Header
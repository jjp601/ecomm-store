import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../firebase/firebase.utils';
import CartIcon from './CartIcon';
import CartDropdown from './CartDropdown';
import { selectCartHidden } from '../redux/cart/cartSelectors';
import { selectCurrentUser } from '../redux/user/userSelector';
import { signOutStart } from '../redux/user/userActions';

import { ReactComponent as Logo } from '../assets/crown.svg';
import '../styles/Header.scss';

const Header = ({ currentUser, hidden, signOutStart }) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className='logo' />
        </Link>
        <div className="options">
            <Link className="option" to='/shop'>
                SHOP
            </Link>
            <Link className="option" to='/shop'>
                CONTACT
            </Link>
            {
                currentUser ? 
                (
                    <div className="option" onClick={signOutStart}>SIGN OUT</div>
                ) :
                (
                    <Link className="option" to='/signin'>SIGN IN</Link>
                )
            }
            <CartIcon />
        </div>
        {!hidden && <CartDropdown />}
        
    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})
const mapDispatchToProps = (dispatch) => ({
    signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
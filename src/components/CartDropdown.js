import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import Button from './Button';
import CartItem from './CartItem';
import { selectCartItems } from '../redux/cart/cartSelectors';
import { toggleCartHidden } from '../redux/cart/cartActions';

import '../styles/CartDropdown.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {   
                cartItems.length ? (
                cartItems.map((item) => (
                    <CartItem key={item.id} item={item} />
                ))
                ) : (
                    <span className="empty-message">Your cart is empty</span>
                )
            }
        </div>
        <Button onClick={() => {
            history.push('/checkout')
            dispatch(toggleCartHidden());
        }}>
            GO TO CHECKOUT
        </Button>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));
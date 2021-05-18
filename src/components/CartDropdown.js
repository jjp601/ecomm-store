import React from 'react';
import { connect } from 'react-redux';

import Button from './Button';
import CartItem from './CartItem';

import '../styles/CartDropdown.scss';

const CartDropdown = ({ cartItems }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.map((item) => (
                    <CartItem key={item.id} item={item} />
                ))
            }
        </div>
        <Button>GO TO CHECKOUT</Button>
    </div>
)

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
})

export default connect(mapStateToProps)(CartDropdown);
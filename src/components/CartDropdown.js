import React from 'react';

import Button from './Button';

import '../styles/CartDropdown.scss';

const CartDropdown = () => (
    <div className="cart-dropdown">
        <div className="cart-items" />
        <Button>GO TO CHECKOUT</Button>
    </div>
)

export default CartDropdown;
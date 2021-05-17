import React from 'react';

import '../styles/Button.scss';

const Button = ({ children, isGoogleSignin, inverted, ...props }) => (
    <button className={`${inverted ? 'inverted' : ''} ${isGoogleSignin ? 'google-sign-in' : ''} custom-button`} {...props}>
        {children}
    </button>
);

export default Button;
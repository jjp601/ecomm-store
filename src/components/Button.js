import React from 'react';

import '../styles/Button.scss';

const Button = ({ children, isGoogleSignin, ...props }) => (
    <button className={`${isGoogleSignin ? 'google-sign-in' : ''} custom-button`} {...props}>
        {children}
    </button>
);

export default Button;
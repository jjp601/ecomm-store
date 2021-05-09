import React from 'react';

import '../styles/Button.scss';

const Button = ({ children, ...props }) => (
    <button className='custom-button' {...props}>
        {children}
    </button>
);

export default Button;
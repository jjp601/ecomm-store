import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceInCents = price * 100;
    const publishableKey = 'pk_test_51IvYJwDyhqzrQqKQap7mghp4G6mPBxErnY27RKP6EHM4qqluBskIqqtT1cq4azknhrOv9BHy2HtVw8OiYxNgiiht00zaXO40IP'
    
    const onToken = (token) => {
        console.log(token);
        alert('Payment Successful');
    }
    
    return (
        <StripeCheckout 
            label='Pay Now'
            name='ECOMM Store'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your Total is $${price}`}
            amount={priceInCents}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;
import React from 'react';

import Signin from '../components/SignIn';
import SignUp from '../components/SignUp';

import '../styles/SignInPage.scss';

const SignInPage = () => {
    return (
        <div className='sign-in-and-sign-up'>
            <Signin />
            <SignUp />
        </div>
    );
};

export default SignInPage;
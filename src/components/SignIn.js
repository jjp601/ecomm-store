import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from './FormInput';
import Button from './Button';

import { googleSignInStart, emailSignInStart } from '../redux/user/userActions';

import '../styles/SignIn.scss'

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
    const [userCredentials, setCredentials] = useState({ email: '', password: '' })
    const { email, password } = userCredentials;

    const handleSubmit = async (e) => {
        e.preventDefault()

        emailSignInStart(email, password);
    }

    const handleChange = (e) => {
        const { value, name } = e.target;

        setCredentials({
            ...userCredentials,
            [name]: value
        })
    }

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                
                <FormInput 
                    name='email' 
                    type='email' 
                    value={email} 
                    handleChange={handleChange}
                    label="email"
                    required
                />
            
                <FormInput 
                    name='password' 
                    type='password' 
                    value={password} 
                    handleChange={handleChange}
                    label="password"
                    required 
                />
                <div className="buttons">
                    <Button type="submit">Sign In</Button>
                    <Button type="button" onClick={googleSignInStart} isGoogleSignin>Sign In With Google</Button>
                </div>
            </form>
        </div>
    );
    
}

const mapDispatchToProps = (dispatch) => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);

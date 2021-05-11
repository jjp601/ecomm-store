import React, { Component } from 'react';

import FormInput from './FormInput';
import Button from './Button';

import { signInWithGoogle } from '../firebase/firebase.utils';

import '../styles/SignIn.scss'

class SignIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()

        this.setState(() => ({
            email: '',
            password: ''
        }))
    }

    handleChange = (e) => {
        const { value, name } = e.target;

        this.setState(() => ({
            [name]: value
        }))
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    
                    <FormInput 
                        name='email' 
                        type='email' 
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        label="email"
                        required
                    />
                
                    <FormInput 
                        name='password' 
                        type='password' 
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        label="password"
                        required 
                    />
                    <div className="buttons">
                        <Button type="submit">Sign In</Button>
                        <Button onClick={signInWithGoogle} isGoogleSignin>Sign In With Google</Button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;
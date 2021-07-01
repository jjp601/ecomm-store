import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormInput from './FormInput';
import Button from './Button';

import { signUpStart } from '../redux/user/userActions';

import '../styles/SignUp.scss'

class SignUp extends Component {
    constructor(props) {
        super(props)

        this.state= {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault()

        const { signUpStart } = this.props;
        const { displayName, email, password, confirmPassword } = this.state

        if (password !== confirmPassword) {
            alert('Passwords do not match.')
            return;
        }

        signUpStart({ displayName, email, password })
    }

    handleChange = (e) => {
        const { value, name } = e.target;

        this.setState(() => ({
            [name]: value
        }))
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an account.</h2>
                <span>Sign in with your email and password</span>

                <form className='sign-up-form' onSubmit={this.handleSubmit}>

                    <FormInput 
                        name='displayName' 
                        type='text' 
                        value={displayName} 
                        onChange={this.handleChange}
                        label="Display Name"
                        required 
                    />
                    
                    <FormInput 
                        name='email' 
                        type='email' 
                        value={email} 
                        onChange={this.handleChange}
                        label="Email"
                        required
                    />
                
                    <FormInput 
                        name='password' 
                        type='password' 
                        value={password} 
                        onChange={this.handleChange}
                        label="Password"
                        required 
                    />

                    <FormInput 
                        name='confirmPassword' 
                        type='password' 
                        value={confirmPassword} 
                        onChange={this.handleChange}
                        label="Confirm Password"
                        required 
                    />

                    <div className="buttons">
                        <Button type="submit">Sign Up</Button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);

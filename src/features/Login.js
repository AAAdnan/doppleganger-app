import React, { Component } from 'react';
import { loginWithGoogle } from '../helpers/auth';
import { firebaseAuth } from '../config/constants';

export default class Login extends Component {
    render() {
        return (
            <div>this is my Login component</div>
        );
    }
}
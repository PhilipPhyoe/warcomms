import React, { useState } from 'react';
import './Login.css';
import Logo from '../src/images/Logo.png'
import { auth } from './Firebase';
import { useDispatch } from 'react-redux';
import { login } from './userSlice';

function Login (){

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const registerNow = () => {
        if (!firstName){
            return alert("Please enter your first name.")
        }

        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user.updateProfile({
                    displayName: firstName,
                    
                })
                .then(() => {
                    dispatch(login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: firstName,
                        
                    }))
                })
            })
            .catch((error) => {
                alert(error);
            });
    };

    const loginApp = (e) => {
        e.preventDefault();

    };

    return(
        <div className='login'>
            <img src={Logo} alt='' />
            <h1>Please log in here.</h1>

            <form className='login-form'>
                <input value={firstName} onChange={e => setFirstName(e.target.value)} placeholder='How can I call you?' type='text' />
                <input value={lastName} onChange={e => setLastName(e.target.value)} placeholder='Your Family Name' type='text' />
                <input value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' type='text' />
                <input value={password} onChange={e => setPassword(e.target.value)} placeholder='Password' type='password' />
                <button className='login-button' onClick={loginApp}>Sign In</button>
            </form>
            <p>Not a member? 
                <span className='register' onClick={registerNow}>Register Here</span>
            </p>
        </div>
    );
}

export default Login;
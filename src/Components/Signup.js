import { Fragment, useRef } from 'react';
import Input from './Input';
import classes from './Form.module.css';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const nameInputRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const navigate = useNavigate();

    function signupSubmitHandler(event) {
        event.preventDefault();
        const signupdata = {
            Name: nameInputRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            confirmPassword: confirmPasswordRef.current.value
        }
        //props.onSignup(signupdata);
        sendSignupRequest(signupdata)
    }

    async function sendSignupRequest(signup) {
        //console.log(signup);
        const response = await fetch('https://localhost:7244/api/Account/signup', {
            method: 'POST',
            body: JSON.stringify(signup),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.text();
        console.log(data);

        //return redirect('/users');
        navigate('/users');
    }

    return (
        <Fragment>
            <form method='POST' onSubmit={signupSubmitHandler} className={classes.form}>
                <h1>Sign up</h1>
                <Input id='Name' type='text' label='Name' ref={nameInputRef}  />
                <Input id='Email' type='text' label='Email' ref={emailRef} required />
                <Input id='Password' type='password' label='Password' ref={passwordRef} required />
                <Input id='ConfirmPassword' type='password' label='ConfirmPassword' ref={confirmPasswordRef}  />
                <div className={classes.actions}>                    
                    <button type='submit' className="btn btn-primary">Signup</button>
                </div>
            </form>
        </Fragment>
    )
}

export default Signup;


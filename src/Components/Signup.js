import { useRef, useState } from 'react';
function Signup(props) {

    const firstNameInputRef = useRef();
    const lastNameInputRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();


    function signupSubmitHandler(event) {
        event.preventDefault();

        const signupdata = {
            firstName: firstNameInputRef.current.value,
            lastName : lastNameInputRef.current.value,
            email : emailRef.current.value,
            password : passwordRef.current.value,
            confirmPassword : confirmPasswordRef.current.value
        }

        props.onSignup(signupdata);
    }
    return (
        <>
            <h2>Welcome to Signup Page</h2>
            <form method='POST' onSubmit={signupSubmitHandler}>
                <p>
                    <label htmlFor='FirstName'>FirstName</label>
                    <input id='FirstNameId' type='text' ref={firstNameInputRef} name='FirstName' required />
                </p>
                <p>
                    <label htmlFor='LastName'>LastName</label>
                    <input id='LastNameId' type='text' ref={lastNameInputRef} name='LastName' required />
                </p>
                <p>
                    <label htmlFor='Email'>Email</label>
                    <input id='EmailId' type='text' ref={emailRef} name='Email' required />
                </p>
                <p>
                    <label htmlFor='Password'>Password</label>
                    <input id='PasswordId' type='password' ref={passwordRef} name='Password' required />
                </p>
                <p>
                    <label htmlFor='ConfirmPassword'>Confirm Password</label>
                    <input id='ConfirmPasswordId' type='password' ref={confirmPasswordRef} name='ConfirmPassword' required/>
                </p>
                <div>
                    <button type='submit'>Signup</button>
                </div>
            </form>
        </>
    )
}

export default Signup;
import { useEffect, useRef } from 'react';
function Login(props) {
    const inputEmailref = useRef();
    const inputPasswordref = useRef();

    const loginSubmitHandler = (event) => {
        event.preventDefault();
        // const enteredEmail = inputEmailref.current.value;
        // const enteredPassword = inputPasswordref.current.value;
        // console.log(enteredEmail);
        // console.log(enteredPassword);

        const login = {
            email: inputEmailref.current.value,
            password: inputPasswordref.current.value
          };

        props.onLogin(login);
    }
    return (
        <>
            <h2>Welcome to Login Page</h2>
            <form method='GET' onSubmit={loginSubmitHandler}>
                <p>
                    <label htmlFor='Email'>Email</label>
                    <input id='Email' type='text' name='Email' ref={inputEmailref} required />
                </p>
                <p>
                    <label htmlFor='Password'>Password</label>
                    <input id='Password' type='text' name='Password' ref={inputPasswordref} required />
                </p>
                <button type='submit'>Login</button>
            </form>
        </>
    )
}

export default Login;
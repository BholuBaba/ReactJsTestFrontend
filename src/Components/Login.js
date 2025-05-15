import { useRef, Fragment, useState, useEffect } from 'react';
import Input from './Input';
import classes from './Form.module.css';
import Dashboard from './DashBoard';

function Login() {
    const inputEmailref = useRef();
    const inputPasswordref = useRef();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');
        const storedUserLoggedEmail = localStorage.getItem('LoginUser');
        if (storedUserLoggedInInformation === '1' && storedUserLoggedEmail === inputEmailref) {
            setIsLoggedIn(true);
        }
    }, []);

    const loginSubmitHandler = (event) => {
        event.preventDefault();
        const login = {
            email: inputEmailref.current.value,
            password: inputPasswordref.current.value
        };
        //props.onLogin(login);
        sendLoginRequest(login);
    }

    const sendLoginRequest = async (login) => {
        const response = await fetch('https://localhost:7244/api/Account/login', {
            method: 'POST',
            body: JSON.stringify(login),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        //const data = await response.json();
        const data = await response.text();
        localStorage.setItem('isLoggedIn', '1');
        localStorage.setItem('LoginUser', login.email);
        setIsLoggedIn(true);
    }

    return (
        <Fragment>
            {!isLoggedIn && (
                <form method='POST' onSubmit={loginSubmitHandler} className={classes.form}>
                    <h1>Log In</h1>
                    {/* <p>
                    <label htmlFor='Email'>Email</label>
                    <input id='Email' type='text' name='Email'
                        ref={inputEmailref} required />
                </p> */}
                    <Input id='Email' type='text' label='Email' ref={inputEmailref} required />
                    <Input id='Password' type='text' label='Password' ref={inputPasswordref} required />
                    <div className={classes.actions}>
                        <button type='submit' className="btn btn-primary">Login</button>
                    </div>
                </form>)}
            {isLoggedIn && <Dashboard />}
        </Fragment>
    )
}

export default Login;


import { Fragment, useRef, useState } from "react";
import classes from './Form.module.css';

function TestApi() {
    const postRef = useRef();
    const [inputdata, setInputdata] = useState('');
    const [display, setDisplay] = useState(false);

    const postHandler = async() =>{
        const namedata = postRef.current.value;
        const response = await fetch('https://localhost:7244/api/Account/TestPost', {
            method: 'POST',
            body: JSON.stringify(namedata),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (!response.ok) {
            throw new Response(JSON.stringify({ message: 'Could not fetch data.' }), {
                status: 500,
            });
        }
        const data = await response.text();
        setInputdata(data);
        postRef.current.value = '';
        setDisplay(true);
    }

    const getHandler = async()=>{
         const response = await fetch('https://localhost:7244/api/Account/TestGET');
        if (!response.ok) {
            throw new Response(JSON.stringify({ message: 'Could not fetch data.' }), {
                status: 500,
            });
        }
        const data = await response.text();
        setInputdata(data);
    }

    return (
        <Fragment>
            <div className={classes.form}>
                <h1>Welcome to Test API page</h1>
                <h2>{inputdata}</h2>
                {!display && (
                    <div>
                        <input type="text" id="name" ref={postRef} />
                        <button type='submit' onClick={postHandler}>Post Button</button>
                    </div>
                )}
                {display && <button type='submit' onClick={getHandler}>Get Button</button>}
            </div>
        </Fragment>
    )
}

export default TestApi;

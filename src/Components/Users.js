import { Fragment } from "react";
import { useLoaderData } from 'react-router-dom';
import classes from './Form.module.css';


function Users() {
    const users = useLoaderData();
    //console.log(users);
    return (
        <Fragment>
            {/* <div style={{textAlign: 'center'}}> */}
            {/* <h1>All Users</h1>             */}
                <table className={classes.center}>
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            {/* </div> */}
        </Fragment>
    )
}

export default Users;

async function loadEvents() {
    const response = await fetch('https://localhost:7244/api/Account/GetAllUsers', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (!response.ok) {
        return { isError: true, message: 'Could not fetch users.' };
    } else {
        const resData = await response.json();
        //console.log(resData);
        return resData;
    }
}

export function loader() {
    return loadEvents();
}
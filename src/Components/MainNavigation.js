import { NavLink } from "react-router-dom";
import classes from './MainNavigation.module.css';

function MainNavigation() {

    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li>
                        <NavLink to='/users' className="nav-link">Users</NavLink>
                    </li>
                    <li>
                        <NavLink to='/login' className="nav-link">Login</NavLink>
                    </li>
                    <li>
                        <NavLink to='/signup' className="nav-link">Signup</NavLink>
                    </li>
                    <li>
                        <NavLink to='/test' className="nav-link">Test</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;
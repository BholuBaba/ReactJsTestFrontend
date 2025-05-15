import { useNavigate } from "react-router-dom";

function Dashboard() {
    const navigate = useNavigate();

    const userLoggedName = localStorage.getItem('LoginUser');

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('LoginUser');

        navigate('/');
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>{userLoggedName}</h2>
            <h2>Welcome to DashBoard</h2>
            <input type='button' value="Logout" onClick={logoutHandler} />
        </div>
    )
}

export default Dashboard;
//import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Signup from './Components/Signup';

function App() {

  async function sendLoginRquest(login) {
    //console.log(login);
    const response = await fetch('https://localhost:7244/api/Account/login', {
      method: 'POST',
      body: JSON.stringify(login),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    //const data = await response.json();
    const data = await response.text();
    console.log(data);
  }

  async function sendSignupRquest(signup) {
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

  }

  return (
    <div className="App">
      <h2>Home Page</h2>
      <Login onLogin={sendLoginRquest}/>       
      <Signup onSignup={sendSignupRquest} />
    </div>
  );
}

export default App;

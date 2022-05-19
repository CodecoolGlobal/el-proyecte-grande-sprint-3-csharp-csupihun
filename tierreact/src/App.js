import './App.css';
import Registration from './Registration.js';
import Login from './Login.js';
import Card from './Card.js';
import logo from './image/TierPaw.png';
import { useState, useEffect } from 'react';

const CardManager = (props) => {

  const [isTop, setTop] = useState(1)

  const toggleTop = () => {
    setTop(isTop === 1  ? -1 : 1)
  }
    
  return (
  <div>
    <div className='centering' style={{zIndex: isTop}}>
      <Card onToggle={toggleTop} swipeState={props.swipeState} setSwipeState={props.setSwipeState}/>
    </div>
    <div className='centering' style={{zIndex: 0}}>
      <Card onToggle={toggleTop} swipeState={props.swipeState} setSwipeState={props.setSwipeState}/>
    </div>
  </div>
  );
}

function App() {
  const [registerState, setRegisterState] = useState(false)
  const [loginState, setLoginState] = useState(false)
  const ShowRegistration = () => {setRegisterState(!registerState)}
  const ShowLogin = () => {setLoginState(!loginState)}
  return (
    <div className="App">
      <header className="App-header">
        <div className='Header-text'><button onClick={ShowRegistration} className='Header-button'>
          <strong> Register </strong></button><button onClick={ShowLogin} className='Header-button'><strong> Login </strong>
        </button></div>   
      </header>
          <CardManager/>
          <img className='logo' src={logo} height={350}></img>
          <Registration  state={registerState} stateChange={ShowRegistration} loginButton={ShowLogin}/>
          <Login  state={loginState} stateChange={ShowLogin} registerButton={ShowRegistration}/>
    </div>
  );
}

export default App;

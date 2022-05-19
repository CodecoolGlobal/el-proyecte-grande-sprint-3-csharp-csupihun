import './App.css';
import Registration from './Registration.js';
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
  const [formstate, setFormState] = useState(false)
  const ShowRegistration = () => {setFormState(!formstate)}
  return (
    <div className="App">
      <header className="App-header">
        <div className='Header-text'><button onClick={ShowRegistration} className='Header-button'>
          <strong> Register </strong></button><button className='Header-button'><strong> Login </strong>
        </button></div>   
      </header>
          <CardManager/>
          <img className='logo' src={logo} height={350}></img>
          <Registration  state={formstate} stateChange={ShowRegistration}/>
    </div>
  );
}

export default App;

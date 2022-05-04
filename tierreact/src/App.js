import logo from './logo.svg';
import './App.css';
import Registration from './Registration.js';
import Swipe from './Swipe.js';
import image from './image/TierPaw.png';
import { useState } from 'react';

function App() {
  const [formstate, setFormState] = useState(false)
  const ShowRegistration = () => {setFormState(!formstate)}
  return (
    <div className="App">
      <header className="App-header">
        <div className='Header-text'><button onClick={ShowRegistration} className='Header-button'><strong> Register </strong></button><button className='Header-button'><strong> Login </strong></button></div>
        
      </header>
          <div className='Swipe-container'><Swipe /></div>
          <img className='logo' src={image} height={350}></img>
          <Registration  state={formstate} stateChange={ShowRegistration}/>
    </div>
  );
}

export default App;

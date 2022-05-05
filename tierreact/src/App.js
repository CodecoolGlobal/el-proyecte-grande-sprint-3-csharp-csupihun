import './App.css';
import Registration from './Registration.js';
import Card from './Card.js';
import image from './image/TierPaw.png';
import { useState } from 'react';
import TinderCard from 'react-tinder-card';

function App() {
  const [formstate, setFormState] = useState(false)
  const ShowRegistration = () => {setFormState(!formstate)}
  const onSwipe = (direction) => {
    console.log('You swiped: ' + direction)
  }

  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + ' left the screen')
  } 
  return (
    <div className="App">
      <header className="App-header">
        <div className='Header-text'><button onClick={ShowRegistration} className='Header-button'><strong> Register </strong></button><button className='Header-button'><strong> Login </strong></button></div>
        
      </header>
      <TinderCard onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('dogCard')} ><div className='Swipe-container'><Card /></div></TinderCard>
          <img className='logo' src={image} height={350}></img>
          <Registration  state={formstate} stateChange={ShowRegistration}/>
    </div>
  );
}

export default App;

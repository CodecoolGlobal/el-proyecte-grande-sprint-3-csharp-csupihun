import './App.css';
import Registration from './Registration.js';
import Card from './Card.js';
import logo from './image/TierPaw.png';
import { useState } from 'react';
import TinderCard from 'react-tinder-card';

function App() {
  const [swipeState, setSwipeState] = useState(false)
  const [formstate, setFormState] = useState(false)
  const ShowRegistration = () => {setFormState(!formstate)}
  const onSwipe = (direction) => {
    console.log('You swiped: ' + direction)
    if (direction == 'left' || direction == 'down') {
      console.log("this dog wasn't good enough for you")

      setSwipeState(!swipeState)
    }
    else  {
      console.log("you liked this dog")
      fetch('/api/LikeDog')
      setSwipeState(!swipeState)
    } 
  }
  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + ' left the screen')
  } 
  const CardManager = (props) => {

    return (
      <TinderCard onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('dogCard')} ><div className='Card-container'><Card swipeState={props.swipeState} setSwipeState={props.setSwipeState}/></div></TinderCard>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className='Header-text'><button onClick={ShowRegistration} className='Header-button'><strong> Register </strong></button><button className='Header-button'><strong> Login </strong></button></div>   
      </header>
          <CardManager swipeState={swipeState} setSwipeState={setSwipeState}/>
          <img className='logo' src={logo} height={350}></img>
          <Registration  state={formstate} stateChange={ShowRegistration}/>
    </div>
  );
}

export default App;

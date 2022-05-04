import logo from './logo.svg';
import './App.css';
import Card from './Card.js';
import Swipe from './Swipe.js';
import image from './image/TierPaw.png';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <div className='Header-text'><button className='Header-button'><strong> Register </strong></button><button className='Header-button'><strong> Login </strong></button></div>
        
      </header>
          {/* <Card /> */}
          <div className='Swipe-container'><Swipe /></div>
          <img className='logo' src={image} height={350}></img>
    </div>
  );
}

export default App;

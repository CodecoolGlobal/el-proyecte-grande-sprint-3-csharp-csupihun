import logo from './logo.svg';
import './App.css';
import Card from './Card.js';
import image from './image/TierPaw.png';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <div className='Header-text'>Register Login</div>
        
      </header>
          <Card />
          <img className='logo' src={image} height={350}></img>
    </div>
  );
}

export default App;

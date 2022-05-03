import logo from './logo.svg';
import './App.css';
import Card from './Card.js';
// import { useEffect } from 'react';

// function GetApi(url){
//   return fetch(url).then(r => r.json())
// }

function App() {

//   useEffect(()=> {
//     GetApi('/api/getRandomDog').then((result) => {console.log(result)})
  // },[])
  
  return (
    <div className="App">
      <header className="App-header">
        
        
          <Card />
        
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

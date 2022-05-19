import React, { useState } from 'react'
import { useEffect, useRef } from 'react';
import TinderCard from 'react-tinder-card';

function GetApi(url){
    return fetch(url).then(r => r.json())
}




const Card = (props) => {
      const [currentDog, setCurrentDog] = useState(null);
      const LikeDog = () => {
      
        console.log("you liked this dog")
        
        fetch('/api/LikeDog')
        onCardLeftScreen('DogCard')
      }
      const GetDogData = () => {
        GetApi('/api/getRandomDog').then((result) => {setCurrentDog(result)})
      }
      const Reload = () => {
        
        setCurrentDog(null);
        props.onToggle();
      }
      useEffect(()=> {
        if (currentDog === null){
          GetDogData() 
          return
        }
        },[currentDog])
        
      

      const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
        if (direction == 'left' || direction == 'down') {
          console.log("this dog wasn't good enough for you")
        }
        else  {
          
          console.log("you liked this dog")
          fetch('/api/LikeDog')
          // setSwipeState(!swipeState)
          
          
        } 
        
      }

      
    
      const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
        Reload()
        
      }
        if (currentDog === null){
          return <div></div>;
        }
      return (
        <div >
    <TinderCard onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('DogCard')} ><div className='Card-container'>
    <div className='Dog-card' >
      <div className='Dog-image'><img className='Api-image' src={currentDog.Picture} /><br /></div>
      <div className='Dog-container'>
        <div className='Dog-name'><strong>{currentDog.Name}, {currentDog.Age} </strong></div>
        <div className='Dog-sex'><strong>{currentDog.Sex}</strong></div><br />
      </div>
      <div className='Dog-breed'><strong>{currentDog.Breed}</strong><br /></div>
      <div className='Buttons'>
        <button onClick={()=>{onCardLeftScreen('DogCard')}} className='Swipe-button' >❌</button> 
        <button className='Swipe-button' onClick={LikeDog} >💚</button>
      </div>
      </div>
  </div>
  
      </TinderCard>
      </div>
  )
}

export default Card;

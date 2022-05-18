import React, { useState } from 'react'
import { useEffect } from 'react';
import TinderCard from 'react-tinder-card';

function GetApi(url){
    return fetch(url).then(r => r.json())
}


const Card = (props) => {
      const [currentDog, setCurrentDog] = useState([]);
      const [reload, setState] = useState({reload: false})
      const LikeDog = () => {
      
        console.log("you liked this dog")
        
        onSwipe("right")
      }
      const GetDogData = () => {
        GetApi('/api/getRandomDog').then((result) => {setCurrentDog(result)})
      }
      const Reload = () => {
        props.setTop(props.isTop === 1 ? 0 : 1)
        setState({reload: !reload});
      }
      useEffect(()=> {
          GetDogData() 
        },[])
        
      

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
        Reload()
        
        
        
      }
    
      const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
      }
        
      return (
        <div >
    <TinderCard onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('dogCard')} ><div className='Card-container'>
    <div className='Dog-card' >
      <div className='Dog-image'><img className='Api-image' src={currentDog.Picture} /><br /></div>
      <div className='Dog-container'>
        <div className='Dog-name'><strong>{currentDog.Name}, {currentDog.Age} </strong></div>
        <div className='Dog-sex'><strong>{currentDog.Sex}</strong></div><br />
      </div>
      <div className='Dog-breed'><strong>{currentDog.Breed}</strong><br /></div>
      <div className='Buttons'>
        <button onClick={()=>{onSwipe("left")}} className='Swipe-button' >❌</button> 
        <button className='Swipe-button' onClick={LikeDog} >💚</button>
      </div>
      </div>
  </div>
  
      </TinderCard>
      </div>
  )
}

export default Card;

import React, { useState } from 'react'
import { useEffect } from 'react';

function GetApi(url){
    return fetch(url).then(r => r.json())
}

const Card = (props) => {
      const [currentDog, setCurrentDog] = useState([]);
      const LikeDog = () => {
        fetch('/api/LikeDog')
        console.log("you liked this dog")
        Reload()
      }
      const GetDogData = () => {
        GetApi('/api/getRandomDog').then((result) => {setCurrentDog(result)})
      }
      const Reload = () => {
        props.setSwipeState(!props.swipeState)
      }
      useEffect(()=> {
          GetDogData() 
        },[])
        
      return (
    <div className='Dog-card'>
      <div className='Dog-image'><img className='Api-image' src={currentDog.Picture} /><br /></div>
      <div className='Dog-container'>
        <div className='Dog-name'><strong>{currentDog.Name}, {currentDog.Age} </strong></div>
        <div className='Dog-sex'><strong>{currentDog.Sex}</strong></div><br />
      </div>
      <div className='Dog-breed'><strong>{currentDog.Breed}</strong><br /></div>
      <div className='Buttons'>
        <button onClick={Reload} className='Swipe-button' >❌</button> 
        <button className='Swipe-button' onClick={LikeDog} >💚</button>
      </div>
  </div>
  )
}

export default Card;

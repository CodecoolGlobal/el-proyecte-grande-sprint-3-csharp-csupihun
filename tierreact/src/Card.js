import React, { useState } from 'react'
import { useEffect } from 'react';


function GetApi(url){
    return fetch(url).then(r => r.json())
}


const Card = () => {
      const [currentDog, setCurrentDog] = useState([]);
      useEffect(()=> {
          GetApi('/api/getRandomDog').then((result) => {setCurrentDog(result)
          })
          
        },[])
        
      return (
    <div className='Dog-card'>
      
      
      <img src={currentDog.Picture} style={{"maxWidth": "200px"}} /><br />
      <div className='Dog-container'><p className='Dog-name'>{currentDog.Name}  {currentDog.Age}</p><p className='Dog-sex'>{currentDog.Sex}</p><br />
      <p className='Dog-breed'>{currentDog.Breed}<br /></p></div>
      <button >X</button> <button >Like</button>
      

    </div>
  )

}

export default Card

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
    <div>
      {currentDog.Name}<br />
      {currentDog.Breed}<br />
      <img src={currentDog.Picture} style={{"maxWidth": "200px"}} /><br />
      Age: {currentDog.Age}<br />
      {currentDog.Sex}

    </div>
  )

}

export default Card

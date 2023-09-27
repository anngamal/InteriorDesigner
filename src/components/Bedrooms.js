import {useState} from 'react'
export default function Bedrooms({image ,bedrooms}){
    const [likes, setLikes]=useState(0)
    function handleClick(event){
        setLikes(prevVal => prevVal +1) 
        
    }
    return(
        <div>
        <ul className="cards">
          {bedrooms.map((bedroom) => (
            <div key={bedroom.id}>
              <img id="componentImages" src={bedroom.image}  />
              <button className="likes" onClick={handleClick}>❤️ {likes}</button>
            </div>
          ))}
          
        </ul>
        
      </div>
    );
  }
  
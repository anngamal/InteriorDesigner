
import {useState} from 'react'

export default function Restrooms({restrooms}){
    const [likes, setLikes]=useState(0)
    function handleClick(event){
        setLikes(prevVal => prevVal +1) 
        
    }
    return(
        <div>
               <ul className="cards">
                {restrooms.map((restroom)=>(
                    <div key={restroom.id} className='allCategories-card'>
                    <div className="allCategories-image-container">
                 <img className='allCategories-image' src={restroom.image}  />
                 <button className="likes" onClick={handleClick}>❤️ {likes}</button>
                 </div>
               </div>
             ))}
            </ul>
        </div>
    )
}


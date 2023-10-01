import {useState} from 'react'
export default function KidsBedrooms({kidsBedrooms}){
    const [likes, setLikes]=useState(0)
    function handleClick(event){
        setLikes(prevVal => prevVal +1) 
        
    }
    return(
        <div>
            <ul className="cards">
                {kidsBedrooms.map((kidsBedroom)=>(
                    <div key={kidsBedroom.id} className='allCategories-card'>
                    <div className="allCategories-image-container">
                 <img className='allCategories-image' src={kidsBedroom.image}  />
                 <button className="likes" onClick={handleClick}>❤️ {likes}</button>
                 </div>
               </div>
             ))}
               
            </ul>

        </div>
    )
}

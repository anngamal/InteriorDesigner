import React, { useState } from "react";

export default function Balcony({balcony, balconies }){
    const [likes, setLikes]=useState(0)
    function handleClick(event){
        setLikes(prevVal => prevVal +1) 
        
    }
    return(
<div>
<ul className="cards">
{balconies.map((balcony)=>(
    <div key={balcony.id} className='allCategories-card'>
         <div className="allCategories-image-container">
      <img className='allCategories-image' src={balcony.image}  />
      <button className="likes" onClick={handleClick}>❤️ {likes}</button>
      </div>
    </div>
  ))}
  
</ul>

</div>
);
}


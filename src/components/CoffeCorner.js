import React, { useState } from "react";

export default function CoffeCorner({corners}){
  
    return(
        <div>
            <ul className="cards">
                    {corners.map((corner)=>(
                         <div key={corner.id}>
                           <img id="componentImages" src={corner.image} />
                           </div>
                    ))}
                 
            </ul>
        </div>
    )
}

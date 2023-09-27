import React, { useState } from "react";

export default function Balcony({balcony, balconies }){

    return(
        <div>
            <ul className="cards">
                {balconies.map((balcony)=>(
                   <div key={balcony.id}>
                    <img id="componentImages" src={balcony.image}/>
                    <button className="likes">❤️</button>
                   </div> 
                ))}
            </ul>
        </div>
    )
}



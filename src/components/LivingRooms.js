

export default function LivingRooms({livingrooms}){


    return(
        <div>
            <ul className="cards">
                {livingrooms.map((livingroom)=>(
                   <div key={livingroom.id}>
                    <img id="componentImages" src={livingroom.image}/>
                   </div> 
                ))}
            </ul>
        </div>
    )
}



 

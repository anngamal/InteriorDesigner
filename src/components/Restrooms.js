

export default function Restrooms({restrooms}){


    return(
        <div>
               <ul className="cards">
                {restrooms.map((restroom)=>(
                   <div key={restroom.id}>
                    <img id="componentImages" src={restroom.image}/>
                   </div> 
                ))}
            </ul>
        </div>
    )
}

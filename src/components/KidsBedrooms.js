
export default function KidsBedrooms({kidsBedrooms}){


    return(
        <div>
            <ul className="cards">
                {kidsBedrooms.map((kidsBedroom)=>(
                     <div key={kidsBedroom.id}>
                     <img id="componentImages" src={kidsBedroom.image} />
                 </div>
                ))}
               
            </ul>

        </div>
    )
}

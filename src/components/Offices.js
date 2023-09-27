

export default function Offices({offices}){
 

    return(
        <div>
              <ul className="cards">
                {offices.map((office)=>(
                   <div key={office.id}>
                    <img id="componentImages" src={office.image}/>
                   </div> 
                ))}
            </ul>
        </div>
    )
}

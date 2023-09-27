

export default function Kitchens({kitchens}){


    return(
        <div>
              <ul className="cards">
                {kitchens.map((kitchen)=>(
                   <div key={kitchen.id}>
                    <img id="componentImages" src={kitchen.image}/>
                   </div> 
                ))}
            </ul>
        </div>
    )
}

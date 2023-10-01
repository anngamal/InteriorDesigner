
import {useState} from 'react'
import KitchensCard from './KitchensCard'
export default function Kitchens({kitchens , user, setKitchens}){
  

    return(
        <div>
              <ul className="cards">
                {kitchens.map((kitchen)=>(
               <KitchensCard kitchen={kitchen} setKitchens={setKitchens} user={user} />
         ))}
            </ul>
        </div>
    )
}




import {useState} from 'react'
import LivingRoomCard from './LivingRoomCard'
export default function LivingRooms({livingrooms , setLivingRooms ,user}){
  

    return(
        <div>
            <ul className="cards">
                {livingrooms.map((livingroom)=>(
                  <LivingRoomCard livingroom={livingroom} setLivingRooms={setLivingRooms} user={user} />
           ))}
            </ul>
        </div>
    )
}


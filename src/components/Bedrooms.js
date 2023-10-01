import {useState} from 'react'
import BedroomCard from './BedroomCard';
export default function Bedrooms({image ,bedrooms , setBedrooms , user}){
  console.log("rendering bedrooms")
 
    return(
        <div>
        <ul className="cards">
          {bedrooms.map((bedroom) =>(
            <BedroomCard bedroom={bedroom} setBedrooms={setBedrooms} user={user} />
            
          ))}
          
        </ul>
        
      </div>
    );
  }
  
import React,{useState, useEffect } from "react";
export default function Bedrooms({image}){
    const [bedrooms, setBedrooms]= useState([])
    useEffect(()=>{
        fetch(" http://localhost:8085/bedrooms")
        .then((res)=> res.json())
        .then((bedrooms)=>setBedrooms(bedrooms))
        console.log(bedrooms)
      },[])
    return(
        <div>
             <ul className="cards">
                { bedrooms.map((bedroom)=>(
                <div key={bedroom.id}>
                    {bedroom.image}
                </div> 
            ))}

        </ul>
        </div>
    )
}
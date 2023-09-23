export default function CategoryCard({image , name}){
    return(
    
     <li className="card">
        <img id="Categoryimg" src={image} alt="image" />
        <h3>{name}</h3>
     </li>
   
    )
}
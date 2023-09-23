import CategoryCard from "./CategoryCard";
import React from "react";

export default function CategoriesContainer({categories}){
    return(
        <ul className="cards">{
            categories.map((category)=>(
                <CategoryCard key={category.id} { ...category}/>
            ))
        }

        </ul>
    )
}
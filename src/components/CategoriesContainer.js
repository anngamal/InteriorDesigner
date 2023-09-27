import { Route } from "react-router-dom/cjs/react-router-dom.min";
import CategoryCard from "./CategoryCard";
import React from "react";
import { Link } from "react-router-dom"
import Bedrooms from "./Bedrooms";
import LivingRooms from "./LivingRooms";
import bedroomImage from "../assets/bedroom.jpg"
import livingroomImage from "../assets/livingroom.jpg"
import kitchenImage from "../assets/kitchen.jpg"
import restroomImage from "../assets/restroom.jpg"
import kidsroomImage from "../assets/kidrsoom.jpg"
import offficesImage from "../assets/offices.jpg"
import balconyImage from "../assets/balcony.jpg"
import cornerImage from "../assets/corner.jpg"

export default function CategoriesContainer({categories ,bedroom,image}){
    return(
    
        <ul className="cards">
           
            
            <Link to="/bedrooms" >
            <img id="bedroomImage" src={bedroomImage} />
            <h4>Bedrooms</h4>
            </Link>
            
         
            <Link to="/livingroom">
            <img  id="livingroomImage" src={livingroomImage} />
            <h4>Living Rooms</h4>
            </Link>

            <Link to="/kitchen" >     
            <img id="kitchenImage" src={kitchenImage} />
            <h4>Kitchens</h4>
            </Link>
            
            
            <Link to="/restrooms">
            <img id="restrooms" src={restroomImage} />
            <h4>Restrooms</h4>
            </Link>

            <Link to="/kidsrooms">
                <img id="kidsrooms" src={kidsroomImage} />
                <h4>Kids Rooms</h4>
            </Link>
            <Link to="/offices">
                <img id="offices" src={offficesImage} />
                <h4>Offices</h4>
            </Link>
            <Link to="/balcony">
                <img id="balconyImage" src={balconyImage} />
                <h4>Balcony</h4>
            </Link>
            <Link to="/coffeCorner">
                <img id="coffeCornerImage" src={cornerImage} />
                <h4>Corners</h4>
            </Link>
            
          
        </ul>
    )
}

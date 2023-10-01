import React from "react";
import { Link } from "react-router-dom"
import image from "../assets/IMG-8581.jpg";
export default function Navbar({user}){
    function handleClick(){
        window.open('https://www.instagram.com/daliaaboelmagd.interiors/')
    }
    function handleFbClick(){
        window.open("https://www.facebook.com/DaliaAboElmagd.Interiors?mibextid=LQQJ4d")
    }
    return(
    <div>
        <nav id="mainNavBar">
            <div>
                <img id="logoInNav" src={image} alt="logo" />
            </div>
            <div id="navbarLinks">
            {user.username ? <p id="pSigninHi">Hello {user.username} !</p>: null }
                <Link to="/">Home</Link>
                <Link to="/contactUs">Contact Us</Link>
                <Link to="/instagram">
                    <img  onClick={handleClick} id="instaLogo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIcDyCA016g44reJs44LZtQWvnyOdUd7Y-aw&usqp=CAU"/>
                </Link>
                <Link to="/facebook">
                    <img onClick={handleFbClick}id="fbLogo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy-TNGkP2z9MW5mV_i2QJsFfO3fxkzPZdieA&usqp=CAU" />
                </Link>
              
            </div>
        </nav>
    </div>
    )
}
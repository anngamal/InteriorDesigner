import { Link } from "react-router-dom"
export default function MainGallery(){
    return(
        <div id="mainGalleryDiv">
            <div id="mainGalleryImg">
                <img  id="mainImg"src="https://coolaiid.com/blog/images/retro-future.png" alt="img" />
            </div>
            <div id="mainGalleryInfo">
                <h2>Get your design from Here</h2>
                <h3>We are here to help you to customize your design</h3>
                <h4>Enjoy Your Home and have fun</h4>
                <h4>Our service is special</h4>
                <h4>We're here to help</h4>
                <h5>347-404-9884</h5>  <h5>347-900-8908</h5>
                <Link to="/signUp">
               <button id="signUpBtn"> SIGN UP</button>
             </Link>
               
            </div>

        </div>
    )
} 
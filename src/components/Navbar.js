import React from "react";
import { Link } from "react-router-dom"
export default function Navbar(){
    return(
    <div>
        <nav id="mainNavBar">
            <div>
                <img id="logoInNav" src="https://mail.google.com/mail/u/0?ui=2&ik=d9e36ada45&attid=0.1&permmsgid=msg-f:1777748689680416011&th=18abd503ac513d0b&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ9HRBhEjYun52nCCKGr445VbU-dl0r40rExIno_lWFkrriSKFJO13HoRCj6ojY1JkBj9hpCVfrgjJC-C1dpWq0MUMWIw2xSlJpqIf6i6pPpGlJKVhZMqn-v814&disp=emb&realattid=43729ab8460c202e_0.1.1" alt="logo" />
            </div>
            <div id="navbarLinks">
                <Link to="/">Home</Link>
                <Link to="/">Contact Us</Link>
            </div>
        </nav>
    </div>
    )
}
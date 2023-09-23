export default function Footer(){
    return(
<footer id="footer">
<table id="footerTable">
    <tbody>
        <tr id="footerTitles">
        <th>Map info</th>
        <th>Our Location</th>
        <th>Contact Us</th>
        <th>Subscribe </th>
        </tr>
        <tr id="footerContent">
            <td>
                 <img id="mapImage" src="https://www.maptive.com/wp-content/uploads/2021/08/map-multiple-locations-google-maps.jpg" alt="map" width="200px"/>
            
            </td>
            <td>
            <p id="p1">New York</p>
            </td>
            <td>
            <p id="p3">daliainterior@gmail.com</p>  
            </td>
            <td>
            <label>
                        <input id="input1" type="text" placeholder="Your Email" />
                        <br></br>
                        <input id="input2" type="text" placeholder="Your Phone Number" />
                    </label>
                    <br></br>
            </td>
        </tr>
        <tr>
            <td></td>
            <td>
            <p id="p2">2nd Floor</p>
            </td>
            <td>
            <p id="p4">347-404-8746</p>
            </td>
            <td>
            <button id="subscribeBtn">Subscribe</button> 
            </td>
        </tr>
    </tbody>
</table>


</footer>
    )
}

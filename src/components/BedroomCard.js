import React, { useState } from "react";
export default function BedroomCard({bedroom, image, setBedrooms ,user }){
    const [likes, setLikes]=useState(0)
    function handleClick(event){
        setLikes(prevVal => prevVal +1) 
        
    }



  

    function handleSubmit(event) {
        event.preventDefault();
        const newComment={
        'message': event.target.comments.value,
        "username": user.username

        }
        console.log(user.username)

       
        fetch(`http://localhost:8085/bedrooms/${bedroom.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({comments : [...bedroom.comments, newComment] })
        })
            .then(resp => resp.json())
            .then(data => {
                setBedrooms(prevBedrooms => [...prevBedrooms, data]);
                event.target.reset();
            });
    }

    return(
        <div>
        <div key={bedroom.id} className='allCategories-card'>
                 <div className="allCategories-image-container">
              <img className='allCategories-image' src={bedroom.image}  />
              <button className="likes" onClick={handleClick}>❤️ {likes}</button>
              {bedroom.comments.map(comment =><p>{comment.message} - {comment.username}</p>)}
              <form onSubmit={handleSubmit}>
              <input  id="comments"  type="text"  name="comments" placeholder="Write your comment ..."  />
              </form>
              </div>
            </div>
        </div>
    )
}
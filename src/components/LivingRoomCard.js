import React, { useState } from "react";
export default function LivingRoomCard({livingroom, image, setLivingRooms ,user }){
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
        console.log(user.name)

       
        fetch(` http://localhost:8085/livingrooms/${livingroom.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({comments : [...livingroom.comments, newComment] })
        })
            .then(resp => resp.json())
            .then(data => {
                setLivingRooms(prevLivingRooms => [...prevLivingRooms, data]);
                event.target.reset();
            });
    }

    return(
        <div>
        <div key={livingroom.id} className='allCategories-card'>
                 <div className="allCategories-image-container">
              <img className='allCategories-image' src={livingroom.image}  />
              <button className="likes" onClick={handleClick}>❤️ {likes}</button>
              {livingroom.comments.map(comment =><p>{comment.message} - {comment.username}</p>)}
              <form onSubmit={handleSubmit}>
              <input  id="comments"  type="text"  name="comments" placeholder="Write your comment ..."  />
              </form>
              </div>
            </div>
        </div>
    )
}
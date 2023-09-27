import React,{useState, useEffect } from "react";
export default function ContactUs({setMessages}){
    const resetForm={
        "name":"",
        "email":"",
        "message":""
    }
    const [formData, setFormData] = useState({
     resetForm
    })
    function handleChange(event){
        setFormData(prev =>{
            return{
                ...prev, 
                [event.target.name]: event.target.value
            }
        })
    }
    function handleSubmit(event){
        event.preventDefault();
        fetch(" http://localhost:8085/contactUs", {
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(formData)
        })
        .then(resp => resp.json())
        .then(data => {
            setMessages(prevMessages => [...prevMessages, data]);
        });
        setFormData(resetForm)
    }
    return(
        <div id="contactUsSection">
            <div id="contactUsForm">
                <form id="contactUSformInfo" onSubmit={handleSubmit}>
                    <h2 id="h2Contactus">SEND US A MESSAGE</h2>
                    <input type="text" id="nameContact" name="name" placeholder="Name"  onChange={handleChange} value={formData.name}/>
                    <input type="email" id="emailContact" name="email" placeholder="Email" onChange={handleChange} value={formData.email} />
                    <input type="message" id="msgContact" name="message" placeholder="Message" onChange={handleChange} value={formData.message} />
                    <button id="ContactUsBtn">Contact US</button>
                </form>
            </div>
        </div>
    )
}
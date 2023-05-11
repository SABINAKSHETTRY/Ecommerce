import React, { useState } from "react";
import "./Contact.css";
import { useAuth0 } from "@auth0/auth0-react";

const Contact = () => {
    const[email,setemail]=useState('')
    const[name,setname]=useState('')
    const[message,setmessage]=useState('')
    const { user, isAuthenticated} = useAuth0();

    return (
        <div className="forms">
            <form className="formclass" action="/submit-form" >
                <div className="names form-element">
                    <label for="name">Name:</label>
                    <input
                    className="name" 
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        autoComplete="off"
                        required
                        onChange={(e)=>{
                             setname(e.target.value)
                        }}
                        value={isAuthenticated?user.name:""}
                    ></input>
                </div>
                <div className="form-element">
                    <label for="email">Email:</label>
                    <input
                    className="name" 
                        type="text"
                        id="email"
                        name="Email"
                        placeholder="Enter your email"
                        autoComplete="off"
                        required
                        onChange={(e)=>{
                            setemail(e.target.value)
                       }}
                       value={isAuthenticated?user.email:""}
                    ></input>
                </div>
                <div className="messages form-element">
                  <div> <label className="msg" for="message">Message:</label></div>
                   
                   <div>
                   <textarea
                    className="text"
                        type="text"
                        id="message"
                        name="Message"
                        required
                        rows={5}
                        
                        placeholder="Enter your message"
                        autoComplete="off"
                        onChange={(e)=>{
                            setmessage(e.target.value)
                       }}
                       value={message}
                        
                        // columns={18}
                    ></textarea>
                   </div>
                    
                </div>
                <div>
                    <button className="buttonsss" type="submit" onClick={(event)=>{
                        event.preventDefault()
                        if(name.trim()==="" ||email.trim()===""||message.trim()==="")
                        alert("All fields should be filled!")
                        else
                        alert("your form is submitted")
                        setname('')
                        setemail('')
                        setmessage('')


                    }}>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Contact;

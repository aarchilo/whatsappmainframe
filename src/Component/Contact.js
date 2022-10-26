import React, { useState } from "react";
import Eachcontact from "./Eachcontact";
import Users from "./Users";
import pic from "./this1.png";
import "./Style.css"
export default function Contact(){
    return (
    <>
<div class="col" id="contacts">
    <div class="row">
   <b>whatsapp beta</b>
    </div>
    <div class="row" id="chatheading">
 <div class="chatheading2"> <h2>Chats</h2> <div>+</div></div>
    </div>
    <div class="row" id="searchicon">
  search
    </div>
    <div class="row">
        {
            Users.map((s)=>{
               return(
                <Eachcontact n={s.name} t={s.time} i={pic}></Eachcontact>
            );
            })
       
    }
    </div>
  </div>
    </>);
}
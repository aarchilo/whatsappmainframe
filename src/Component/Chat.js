import React from "react";
import "./Style.css"
export default function Chat(){
    return (
    <>
<div class="col-6"id="chat">
    <div>
        <h3>Aarchi</h3>
        <p>
            online
        </p>
    </div>
    <div id="thischat" >
        <p id="bottom">
        <input className="form" type="text" placeholder="Enter message"id="message" />
        <button>send</button>
        </p>

    </div>
  </div>
    </>);
}
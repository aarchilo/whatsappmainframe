
import React from "react";
import "./Style.css"
export default function Eachcontact(props){
    return (
    <>

<p className="eachchat"><p> <img src={props.i} className="person"></img>  {props.n}  </p>  <p>{props.t}  </p>   </p>
    </>);
}
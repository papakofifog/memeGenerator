import React from "react";
import Logo from '../assets/troll-face.png'
export default function Image(props){
    return(
        <img className="memeImage" src={props.Image||Logo} alt="memeImg" />
    );
}
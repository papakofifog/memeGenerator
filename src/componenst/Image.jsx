import React from "react";
import Logo from '../assets/troll-face.png'
export default function Image(props){
    return(
        <div className="meme">
            <img className="memeImage meme" src={props.Image||Logo} alt="memeImg" />
            <h1 className="meme--text top ">{props.topText}</h1>
            <h1 className="meme--text bottom">{props.bottomText}</h1>
        </div>
        
    );
}
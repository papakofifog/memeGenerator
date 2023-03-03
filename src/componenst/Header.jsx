import React from "react";
import Trollface from '../assets/troll-face.png';

export default function Header(){
    return(
        <header className="header">
            <div className="header--brand">
                <img src={Trollface} alt="logo" />
                <h2>Meme Generator</h2>
            </div>
            <h4 className="header--courseName">React Cource - Project 3</h4>
        </header>
    );
}
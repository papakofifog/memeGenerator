import {React, useState} from "react";
import Input from "./Input";
import Button from "./Button";
import Image from "./Image";
import memesData from "../assets/memesData";

export default function MemeForm(){
    const [image, setImage]= useState('')

    function newRandomNumber(){
        return Math.floor(Math.random()* (memesData.data.memes.length-0+1)) + 0;
    }

    function handleMemeSelection(){
        let randomNumber= newRandomNumber();
        let randomMeme=memesData.data.memes[randomNumber];
        setImage(function(){
            return randomMeme.url;
        });
    }

    return (
        <div className="memeForm">
            <div className="flex inputsFlex">
                <Input type="text" placeholder="Shut up"  />
                <Input type="text" placeholder="and take money" />
            </div>
            <div className="flex-center">
                <Button title="Get a new meme image" 
                onClick={handleMemeSelection}
                />
            </div>
            <Image Image={image} />
            
        </div>
    );
}
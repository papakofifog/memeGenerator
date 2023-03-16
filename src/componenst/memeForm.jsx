import {React, useState, useEffect} from "react";
import Input from "./Input";
import Button from "./Button";
import Image from "./Image";


export default function MemeForm(){
    

    const [AllmemeData, setMemeData]= useState([])

    const [meme, setMeme] = useState({
        "topText":'',
        "bottomText":'',
        "randomImage":'https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
    })

    function newRandomNumber(){

        return Math.floor(Math.random()* (AllmemeData.data.memes.length-0+1)) + 0;
    }

    function handleChange(event){
        const {name, value} = event.target
        setMeme(function(prevMeme){
            return {
                ...prevMeme,
                [name]:value
            
            }
        })
    }

    function handleMemeSelection(){
        let randomNumber= newRandomNumber();
        let randomMeme=AllmemeData.data.memes[randomNumber];
        

        setMeme((prevMeme)=>{
            return {...prevMeme,"randomImage":randomMeme.url}
        })
        
        
    }

    useEffect(function(){
        fetch("https://api.imgflip.com/get_memes")
        .then(response=> response.json())
        .then((data)=>{
            setMemeData(data)
        })
    })

    return (
        <div className="memeForm">
            <div className="flex inputsFlex">
                <Input 
                type="text" 
                placeholder="Shut up"
                name="topText"
                value={meme.topText}
                onChange={handleChange}
                   
                />
                <Input 
                type="text" 
                placeholder="and take money" 
                name="bottomText"
                value={meme.bottomText}
                onChange={handleChange}
                
                />
            </div>.
            <div className="flex-center">
                <Button title="Get a new meme image" 
                onClick={handleMemeSelection}
                />
            </div>
            <Image Image={meme.randomImage} topText={meme.topText} bottomText={meme.bottomText} />
            
        </div>
    );
}
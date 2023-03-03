import React from "react";
import Input from "./Input";
import Button from "./Button";
import Image from "./Image";
export default function MemeForm(){
    return (
        <div className="memeForm">
            <div className="flex inputsFlex">
                <Input type="text" placeholder="Shut up"  />
                <Input type="text" placeholder="and take money" />
            </div>
            <div className="flex-center">
                <Button title="Get a new meme image" />
            </div>
            <Image />
            
        </div>
    );
}
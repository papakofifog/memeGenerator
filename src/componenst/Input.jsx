import React from "react";

export default function Input(props){
    return (
        <input 
        type={props.type} 
        placeholder={props.placeholder} 
        className="inputs"
        name={props.name}
        value={props.value}
        onChange={props.onChange}

        />

    );
}
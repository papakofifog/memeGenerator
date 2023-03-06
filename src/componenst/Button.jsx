import React from "react";

export default function Button(props){
    return (
        <button className="btn memebtn" onClick={props.onClick}>
           {props.title} { props.image && <span>{props.image}</span>}
        </button>

    );

}
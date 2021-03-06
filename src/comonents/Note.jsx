import React from "react";

export default function note(props){

    return(
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button className="del-btn" onClick={() => {
                props.delete(props.id)
            }}>Delete</button>
        </div>
    );
}
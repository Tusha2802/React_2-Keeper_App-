import React, { useState } from "react";

function CreateNote(props){

    const[input_Values, setInput] = useState({title : "", content: ""});
    
    function Change(event){
        const {name,value} = event.target;
        //const id1 = {IncId}
        setInput((prevValue) => {
            // return{
            //     ...prevValue,
            //     [name] : value
            // }
            if(name === "title"){
                return({
                    title : value,
                    content : prevValue.content
                })
            }
            else if(name === "content"){
                return({
                    title : prevValue.title,
                    content : value 
                })
            }
        })
        
    }

    return(
        <div className="addNote">
            <input className="addNote_input" type="text" placeholder="Title" onChange={Change} name="title" value={input_Values.title}></input><br></br>
            <textarea className="addNote_input" placeholder="Take a note" rows="5" cols="45" name="content" onChange={Change} value={input_Values.content}></textarea>
            <input className="button-box" type="button" value="Add" 
            onClick={() => 
            {props.adn(input_Values)
            setInput({title: "", content: ""})
            }}></input>
        </div>
    );
}

export default CreateNote;
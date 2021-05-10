import React, { useState } from "react";
import Header from "./comonents/Header";
import AddNote from "./comonents/CreateNote";
import Footer from "./comonents/Footer"
import Note from "./comonents/Note";
//import notes from "../src/Notes";

function App() {

  const[allNotes, setAllNotes] = useState([]);
  

  function Addnote(note){
    //console.log(note);
    setAllNotes((allNotes) => {
      if(note.title.length!==0 && note.content.length!==0){
        return [...allNotes,note];
      }
      else{
        return [...allNotes];
      }
      
    }) 

  }

  function Deletenote(id){
    //console.log("delete was triggered");
    setAllNotes((prevValue) => {
      return prevValue.filter((item, index) =>{
        return index!==id;
      })
    })
  }

  return (
    <div>
      <Header/>
      <AddNote adn={Addnote}/>
      {allNotes.map((n,index) => {
        return(<Note key={index} id={index} title={n.title} content={n.content} delete={Deletenote}/>)
        })}
      <Footer/>
    </div>
  );
}

export default App;

import React from "react";
import Header from "./comonents/Header";
import Footer from "./comonents/Footer"
import Note from "./comonents/Note";
import notes from "../src/Notes";

function App() {
  return (
    <div>
      <Header/>
      {notes.map(n => {
        return(<Note key={n.id} title={n.title} content={n.content}/>)
        })}
      <Footer/>
    </div>
  );
}

export default App;

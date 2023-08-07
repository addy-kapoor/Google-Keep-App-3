import './App.css';
import Header from './header.js';
import Footer from './Footer';
import CreateNotes from "./CreateNotes";
import Notes from './Notes';
import React, { useState } from "react";

function App() {
  const [AllNotes, SetAllNotes] = useState([]);
  const addNotes = (Notes) => {
    SetAllNotes((prevNotes) => [...prevNotes, Notes])
  }
  const delNotes = (key) => {
        const filteredNotes = AllNotes.filter((note, index) => index !== key);
        SetAllNotes(filteredNotes);
  }
  return (
    <div>
      <Header />
      <CreateNotes addingNotes={addNotes} />
      <div className="notes-container">
        {AllNotes.map((note, index) => (
          <Notes key={index} title={note.title} body={note.body} deletingNotes={delNotes} index={index}/>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;

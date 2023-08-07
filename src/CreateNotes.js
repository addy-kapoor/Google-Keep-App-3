import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa";

const CreateNotes = ({ addingNotes }) => {
  const [Notes, SetNotes] = useState({
    title: "",
    body: "",
  });
  const finalAdd = () => {
    addingNotes(Notes);
    SetNotes({
      title: "",
      body: "",
    });
    // console.log(AllNotes);
  };
  const addNotes = (event) => {
    const { name, value } = event.target;
    SetNotes((preValue) => ({
      ...preValue,
      [name]: value,
    }));
    // console.log(Notes);
  };
  return (
    <div>
      <div className="keep-note">
        <input
          type="text"
          placeholder="Title"
          value={Notes.title}
          name="title"
          onChange={addNotes}
        />
        <textarea
          placeholder="Take a note..."
          value={Notes.body}
          name="body"
          onChange={addNotes}
        ></textarea>
        <button className="add-button" onClick={finalAdd}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default CreateNotes;

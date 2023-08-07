import React from 'react';
import { MdDelete } from "react-icons/md";

const Notes = ({ key, title, body, deletingNotes, index}) => {
  return (
    <>
      <div className="notes">
        <input type="text" placeholder={title} />
        <textarea placeholder={body}></textarea>
        <button className="add-button" onClick={() => deletingNotes(index)}>
          <MdDelete />
        </button>
      </div>
    </>
  );
};

export default Notes;

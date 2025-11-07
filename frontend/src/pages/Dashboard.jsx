import React, { useState } from "react";
import NoteCard from "../components/NoteCard";

const Dashboard = () => {
  const [notes, setNotes] = useState([
    { _id: "1", title: "First Note", description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of  The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,comes from a line in section 1.10.32" },
    { _id: "2", title: "Second Note", description: "This is the second note" },
    { _id: "3", title: "Shopping List", description: "Buy milk, bread, eggs" },
  ]);

  const handleEdit = (note) => {
    alert(`Edit note: ${note.title}`);
  };

  const handleDelete = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this note?");
    if (confirmed) {
      setNotes(notes.filter((note) => note._id !== id));
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {notes.map((note) => (
        <NoteCard
          key={note._id}
          note={note}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default Dashboard;

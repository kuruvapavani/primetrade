import React from "react";
import { X } from "lucide-react";

const AddNoteModal = ({ show, onClose, newNote, setNewNote, handleAddNote }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-bg p-6 rounded-lg max-w-md w-full relative animate-scaleIn">
        <button
          className="absolute top-2 right-2 text-hero hover:text-headingSub"
          onClick={onClose}
        >
          <X size={20} />
        </button>
        <h2 className="text-xl font-bold mb-4 text-hero">Add Note</h2>
        <input
          type="text"
          placeholder="Title"
          className="border outline-hero p-2 mb-4 w-full rounded"
          value={newNote.title}
          onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
        />
        <textarea
          placeholder="Description"
          className="border p-2 mb-4 w-full rounded outline-hero"
          value={newNote.description}
          onChange={(e) => setNewNote({ ...newNote, description: e.target.value })}
        />
        <button
          className="bg-hero text-bg px-4 py-2 rounded hover:bg-headingSub transition-all duration-300 transform hover:scale-105"
          onClick={handleAddNote}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddNoteModal;

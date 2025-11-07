// src/components/modals/DeleteNoteModal.jsx
import React from "react";
import { X } from "lucide-react";

const DeleteNoteModal = ({ deleteNoteId, setDeleteNoteId, handleDeleteNote }) => {
  if (!deleteNoteId) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-bg p-6 rounded-lg max-w-sm w-full relative animate-scaleIn">
        <button
          className="absolute top-2 right-2 text-hero hover:text-headingSub"
          onClick={() => setDeleteNoteId(null)}
        >
          <X size={20} />
        </button>
        <h2 className="text-xl font-bold mb-4 text-hero">Delete Note</h2>
        <p className="mb-6">
          Are you sure you want to delete this note? This action cannot be undone.
        </p>
        <div className="flex justify-end space-x-4">
          <button
            className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 transition-all"
            onClick={() => setDeleteNoteId(null)}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 rounded bg-hero hover:bg-headingSub text-white transition-all"
            onClick={handleDeleteNote}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteNoteModal;

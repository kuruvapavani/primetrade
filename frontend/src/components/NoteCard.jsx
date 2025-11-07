import React, { useState } from "react";
import { Edit, Trash2, Eye, X } from "lucide-react";

const NoteCard = ({ note, onEdit, onDelete }) => {
  const [showModal, setShowModal] = useState(false);

  const truncatedDescription =
    note.description.length > 100
      ? note.description.substring(0, 100) + "..."
      : note.description;

  return (
    <>
      {/* Card */}
      <div className="rounded-lg shadow-md overflow-hidden flex flex-col justify-between h-60">
        {/* Top */}
        <div className="p-4 flex justify-between items-start bg-hero text-bg">
          <h2 className="text-lg font-semibold">{note.title}</h2>
          <div className="flex space-x-2">
            {note.description.length > 100 && (
              <button onClick={() => setShowModal(true)}>
                <Eye size={18} className="hover:text-headingSub transition-colors" />
              </button>
            )}
            <button onClick={() => onEdit(note)}>
              <Edit size={18} className="hover:text-headingSub transition-colors" />
            </button>
            <button onClick={() => onDelete(note._id)}>
              <Trash2 size={18} className="hover:text-red-400 transition-colors" />
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="p-4 flex-1">
          <p>{truncatedDescription}</p>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-bg p-6 rounded-lg max-w-lg w-full relative animate-fadeIn scale-95 transform transition duration-300">
            <button
              className="absolute top-2 right-2 text-hero hover:text-headingSub"
              onClick={() => setShowModal(false)}
            >
              <X size={24} />
            </button>
            <h2 className="text-xl font-bold mb-4 text-hero">{note.title}</h2>
            <p>{note.description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default NoteCard;

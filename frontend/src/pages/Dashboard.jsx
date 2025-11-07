// src/pages/Dashboard.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import NoteCard from "../components/NoteCard";
import { toast } from "sonner";

import AddNoteModal from "../components/modals/AddNoteModal";
import EditNoteModal from "../components/modals/EditNoteModal";
import DeleteNoteModal from "../components/modals/DeleteNoteModal";
import ProfileModal from "../components/modals/ProfileModal";

const Dashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showAddModal, setShowAddModal] = useState(false);
  const [newNote, setNewNote] = useState({ title: "", description: "" });

  const [editNote, setEditNote] = useState(null);
  const [deleteNoteId, setDeleteNoteId] = useState(null);

  const [showProfileModal, setShowProfileModal] = useState(false);
  const [profile, setProfile] = useState({
    name: user?.name || "",
    email: user?.email || "",
    changePassword: false,
    showOldPassword: false,
    showNewPassword: false,
  });

  useEffect(() => {
    if (!user || !token) {
      toast.error("Please login first!");
      navigate("/login");
    }else{
      fetchNotes();
    }
  }, [user, token, navigate]);

  // Fetch notes
  const fetchNotes = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/notes`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setNotes(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
      toast.error("Failed to fetch notes!");
    }
  };

  // Add note
  const handleAddNote = async () => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/notes`,
        newNote,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setNotes([data, ...notes]);
      setShowAddModal(false);
      setNewNote({ title: "", description: "" });
      toast.success("Note added successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to add note!");
    }
  };

  // Update note
  const handleUpdateNote = async () => {
    try {
      const { data } = await axios.put(
        `${process.env.REACT_APP_BASE_URL}/api/notes/${editNote._id}`,
        editNote,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setNotes(notes.map((n) => (n._id === data._id ? data : n)));
      setEditNote(null);
      toast.success("Note updated successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update note!");
    }
  };

  // Delete note
  const handleDeleteNote = async () => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/api/notes/${deleteNoteId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setNotes(notes.filter((note) => note._id !== deleteNoteId));
      setDeleteNoteId(null);
      toast.success("Note deleted successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete note!");
    }
  };

  // Update profile
  const handleUpdateProfile = async () => {
    try {
      const updateData = { name: profile.name };
      if (profile.changePassword) {
        updateData.oldPassword = profile.oldPassword;
        updateData.newPassword = profile.newPassword;
      }
      const { data } = await axios.put(
        `${process.env.REACT_APP_BASE_URL}/api/users/profile`,
        updateData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      localStorage.setItem("user", JSON.stringify(data));
      setShowProfileModal(false);
      toast.success("Profile updated successfully!");
      window.location.reload();
    } catch (error) {
      if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        console.error(error);
        toast.error("Failed to update profile!");
      }
    }
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 space-y-4 sm:space-y-0">
        <h1 className="text-2xl font-bold text-hero text-center sm:text-left">
          Welcome back, {user?.name}
        </h1>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-hero text-bg px-4 py-2 rounded hover:bg-headingSub transition-all duration-300 transform hover:scale-105"
          >
            Add Note
          </button>
          <button
            onClick={() => setShowProfileModal(true)}
            className="bg-hero text-bg px-4 py-2 rounded hover:bg-headingSub transition-all duration-300 transform hover:scale-105"
          >
            Update Profile
          </button>
        </div>
      </div>

      {/* Notes Grid */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-hero"></div>
        </div>
      ) : notes.length === 0 ? (
        <p className="text-center text-hero text-lg mt-8">
          No notes. Create one now!
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map((note) => (
            <NoteCard
              key={note._id}
              note={note}
              onEdit={setEditNote}
              onDelete={() => setDeleteNoteId(note._id)}
            />
          ))}
        </div>
      )}

      {/* Modals */}
      <AddNoteModal
        show={showAddModal}
        onClose={() => setShowAddModal(false)}
        newNote={newNote}
        setNewNote={setNewNote}
        handleAddNote={handleAddNote}
      />
      <EditNoteModal
        editNote={editNote}
        setEditNote={setEditNote}
        handleUpdateNote={handleUpdateNote}
      />
      <DeleteNoteModal
        deleteNoteId={deleteNoteId}
        setDeleteNoteId={setDeleteNoteId}
        handleDeleteNote={handleDeleteNote}
      />
      <ProfileModal
        show={showProfileModal}
        onClose={() => setShowProfileModal(false)}
        profile={profile}
        setProfile={setProfile}
        handleUpdateProfile={handleUpdateProfile}
      />
    </div>
  );
};

export default Dashboard;

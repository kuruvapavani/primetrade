// src/components/modals/ProfileModal.jsx
import React from "react";
import { X, Eye, EyeOff } from "lucide-react";

const ProfileModal = ({ show, onClose, profile, setProfile, handleUpdateProfile }) => {
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
        <h2 className="text-xl font-bold mb-4 text-hero">Update Profile</h2>

        <input
          type="text"
          placeholder="Name"
          className="border outline-hero p-2 mb-4 w-full rounded"
          value={profile.name}
          onChange={(e) => setProfile({ ...profile, name: e.target.value })}
        />

        <input
          type="email"
          placeholder="Email"
          className="border p-2 mb-4 w-full rounded bg-gray-100 cursor-not-allowed"
          value={profile.email}
          readOnly
        />

        {!profile.changePassword && (
          <button
            className="text-hero px-6 md:px-12 mb-4 underline"
            onClick={() => setProfile({ ...profile, changePassword: true })}
          >
            Change Password
          </button>
        )}

        {profile.changePassword && (
          <>
            <div className="relative mb-4">
              <input
                type={profile.showOldPassword ? "text" : "password"}
                placeholder="Old Password"
                className="border p-2 w-full rounded outline-hero"
                value={profile.oldPassword || ""}
                onChange={(e) =>
                  setProfile({ ...profile, oldPassword: e.target.value })
                }
              />
              <button
                type="button"
                className="absolute top-2 right-2"
                onClick={() =>
                  setProfile({ ...profile, showOldPassword: !profile.showOldPassword })
                }
              >
                {profile.showOldPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <div className="relative mb-4">
              <input
                type={profile.showNewPassword ? "text" : "password"}
                placeholder="New Password"
                className="border p-2 w-full rounded outline-hero"
                value={profile.newPassword || ""}
                onChange={(e) =>
                  setProfile({ ...profile, newPassword: e.target.value })
                }
              />
              <button
                type="button"
                className="absolute top-2 right-2"
                onClick={() =>
                  setProfile({ ...profile, showNewPassword: !profile.showNewPassword })
                }
              >
                {profile.showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </>
        )}

        <button
          className="bg-hero text-bg px-4 py-2 rounded hover:bg-headingSub transition-all duration-300 transform hover:scale-105"
          onClick={handleUpdateProfile}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default ProfileModal;

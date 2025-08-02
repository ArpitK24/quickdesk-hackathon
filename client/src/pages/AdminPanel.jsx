import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function AdminProfile() {

  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    name: "Admin User",
    role: "user",
    interest: "",
    language: "English",
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleUpgrade = () => {
    setProfile({ ...profile, role: "admin" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-purple-100 via-white to-blue-100 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-xl bg-white rounded-3xl shadow-2xl p-6 sm:p-8 space-y-6">

        {/* Profile Picture */}
        <div className="flex justify-center">
          <div className="relative w-24 h-24 sm:w-28 sm:h-28">
            <div className="absolute inset-0 rounded-full border-4 border-purple-300 shadow-lg bg-gradient-to-br from-blue-500 via-purple-400 to-pink-400 flex items-center justify-center overflow-hidden">
              <img
                src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                  profile.name
                )}&background=fff&color=6D28D9&size=128`}
                alt="Avatar"
                className="w-full h-full object-cover rounded-full border-4 border-white"
              />
            </div>
            <div className="absolute bottom-0 right-0 bg-green-500 w-6 h-6 sm:w-8 sm:h-8 border-2 border-white rounded-full flex items-center justify-center text-white text-xs sm:text-base font-bold shadow-md animate-bounce">
              ✓
            </div>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-center text-xl sm:text-2xl font-bold text-purple-800">Admin Profile</h2>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <button className="px-4 py-1 text-sm font-semibold border-2 border-blue-400 text-blue-600 rounded-full hover:bg-blue-100 transition">
            Dashboard
          </button>
          <button className="px-4 py-1 text-sm font-semibold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white rounded-full hover:opacity-90 transition">
            Admin
          </button>
        </div>

        {/* Form */}
        <form className="space-y-5">
          {/* Name */}
          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-purple-200 rounded-xl bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
            />
          </div>

          {/* Role */}
          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-700">Role</label>
            <div className="flex items-center gap-3">
              <select
                name="role"
                value={profile.role}
                onChange={handleChange}
                className="w-full px-4 py-2 border-2 border-pink-200 rounded-xl bg-pink-50 text-sm text-pink-800 font-semibold focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
              >
                <option value="endusers">End Users</option>
                <option value="supportagent">Support Agent</option>
                <option value="admin">Admin</option>
              </select>
              <button
                type="button"
                onClick={handleUpgrade}
                className="px-3 py-1 text-sm font-semibold bg-gradient-to-r from-green-400 to-green-600 text-white rounded-xl hover:scale-105 transition"
              >
                Upgrade
              </button>
            </div>
          </div>

          {/* Category */}
          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-700">Category of Interest</label>
            <input
              type="text"
              name="interest"
              value={profile.interest}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-blue-200 rounded-xl bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm"
            />
          </div>

          {/* Language */}
          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-700">Language</label>
            <select
              name="language"
              value={profile.language}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-purple-200 rounded-xl bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-300 text-sm"
            >
              <option>English</option>
              <option>Hindi</option>
              <option>Marathi</option>
            </select>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button
              type="button"
              className="px-6 py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold rounded-xl shadow-lg hover:scale-105 transition"
              onClick={() => navigate('/navbar')}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

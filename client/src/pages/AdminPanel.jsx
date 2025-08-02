import { useState } from "react";

export default function AdminProfile() {
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
    <div className="min-h-screen bg-gradient-to-br from-yellow-200 via-pink-200 to-blue-200 px-2 py-4 flex justify-center items-center">
      <div className="w-full max-w-xl md:max-w-2xl bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-4 md:p-8 text-gray-900 relative border-2 border-pink-300">

        {/* Top navigation */}
        <div className="flex flex-col md:flex-row justify-end items-end space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <button className="border-2 border-yellow-400 px-4 py-1 rounded-full text-yellow-700 bg-white/80 hover:bg-yellow-200 hover:text-yellow-900 text-sm font-bold shadow-lg transition">
            DashBoard
          </button>
          <button className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 px-4 py-1 rounded-full text-white text-sm font-bold shadow-lg hover:scale-105 transition">
            Admin
          </button>
        </div>

        {/* Profile section */}
        <h2 className="text-3xl mb-6 border-b-2 pb-2 border-blue-300 font-extrabold text-center md:text-left bg-gradient-to-r from-yellow-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
          Profile
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <div>
              <label className="block mb-1 text-pink-700 font-bold">Name:</label>
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border-2 border-yellow-300 rounded-xl bg-pink-100/60 text-blue-900 font-bold focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              />
            </div>

            <div>
              <label className="block mb-1 text-purple-700 font-bold">Role:</label>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={profile.role}
                  disabled
                  className="w-full px-3 py-2 border-2 border-purple-300 rounded-xl bg-purple-100/60 text-purple-900 font-bold"
                />
                <button
                  onClick={handleUpgrade}
                  className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 px-3 py-1 rounded-xl text-white text-sm font-bold shadow-lg transition"
                >
                  Upgrade
                </button>
              </div>
            </div>

            <div>
              <label className="block mb-1 text-blue-700 font-bold">Category In Interest</label>
              <input
                type="text"
                name="interest"
                value={profile.interest}
                onChange={handleChange}
                className="w-full px-3 py-2 border-2 border-blue-300 rounded-xl bg-blue-100/60 text-blue-900 font-bold focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
            </div>

            <div>
              <label className="block mb-1 text-purple-700 font-bold">Change Language</label>
              <select
                name="language"
                value={profile.language}
                onChange={handleChange}
                className="w-full px-3 py-2 border-2 border-purple-300 rounded-xl bg-purple-100/60 text-purple-900 font-bold focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
              >
                <option>English</option>
                <option>Hindi</option>
                <option>Marathi</option>
              </select>
            </div>
          </div>

          {/* Profile Image & Tag */}
          <div className="flex flex-col items-center justify-center space-y-8">
            <div className="relative w-32 h-32 md:w-40 md:h-40">
              {/* Outer Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-400 to-blue-400 opacity-70 blur-xl"></div>
              {/* Glassmorphism Circle */}
              <div className="absolute inset-2 rounded-full bg-white/40 backdrop-blur-md border-4 border-white/80 shadow-2xl flex items-center justify-center">
                <span className="text-transparent bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-500 bg-clip-text text-2xl md:text-3xl font-extrabold drop-shadow-lg">
                  Profile Image
                </span>
              </div>
              {/* Animated Verified Icon */}
              <div className="absolute bottom-3 right-3 bg-gradient-to-tr from-green-400 to-green-600 rounded-full w-10 h-10 border-2 border-white flex items-center justify-center text-2xl text-white font-bold shadow-lg animate-bounce">
                ✓
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}

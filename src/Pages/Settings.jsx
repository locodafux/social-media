import { useState } from "react";

export default function Settings() {
  const [username, setUsername] = useState("Leonardo");
  const [email, setEmail] = useState("leonardo@example.com");
  const [language, setLanguage] = useState("English");
  const [onlineStatus, setOnlineStatus] = useState(true);
  const [emailNotif, setEmailNotif] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const saveSettings = () => {
    alert("✅ Your settings have been saved successfully!");
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center ${
        darkMode
          ? "bg-gradient-to-b from-[#060b17] to-[#0b1220] text-gray-100"
          : "bg-gray-50 text-gray-900"
      } font-inter transition-colors duration-300`}
    >
      {/* Page Header */}
      <header className="w-full border-b border-white/10 bg-white/5 py-6 mb-10">
        <h1 className="text-center text-2xl md:text-2xl font-bold tracking-tight">
          Settings
        </h1>
        <p className="text-center text-sm text-gray-400">
          Manage your profile, privacy, and preferences
        </p>
      </header>

      {/* Settings Container */}
      <main className="w-full max-w-3xl px-6 pb-16 flex flex-col gap-8">
        {/* Profile Section */}
        <section className="bg-[#0b1220]/90 border border-white/10 rounded-2xl p-6 shadow-lg backdrop-blur-sm">
          <h2 className="text-lg font-semibold border-b border-white/10 pb-3 mb-5">
            👤 Profile Information
          </h2>

          <div className="flex flex-col gap-5">
            <div>
              <label className="text-sm font-medium mb-1 block">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full rounded-lg px-3 py-2 bg-white/5 border border-white/10 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-1 block">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg px-3 py-2 bg-white/5 border border-white/10 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-1 block">Language</label>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full rounded-lg px-3 py-2 bg-white/5 border border-white/10 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option>English</option>
                <option>Filipino</option>
                <option>Spanish</option>
              </select>
            </div>
          </div>
        </section>

        {/* Privacy Section */}
        <section className="bg-[#0b1220]/90 border border-white/10 rounded-2xl p-6 shadow-lg backdrop-blur-sm">
          <h2 className="text-lg font-semibold border-b border-white/10 pb-3 mb-5">
            🔒 Privacy Settings
          </h2>

          <div className="flex flex-col gap-4">
            <ToggleRow
              label="Show Online Status"
              checked={onlineStatus}
              onChange={() => setOnlineStatus(!onlineStatus)}
            />
            <ToggleRow
              label="Receive Email Notifications"
              checked={emailNotif}
              onChange={() => setEmailNotif(!emailNotif)}
            />
          </div>
        </section>

        {/* Theme Section */}
        <section className="bg-[#0b1220]/90 border border-white/10 rounded-2xl p-6 shadow-lg backdrop-blur-sm">
          <h2 className="text-lg font-semibold border-b border-white/10 pb-3 mb-5">
            🎨 Appearance
          </h2>

          <ToggleRow
            label="Enable Dark Mode"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
        </section>

        {/* Save Button */}
        <div className="flex justify-end">
          <button
            onClick={saveSettings}
            className="bg-blue-500 hover:bg-blue-600 transition text-white font-semibold py-2.5 px-6 rounded-lg shadow-lg"
          >
            Save Changes
          </button>
        </div>
      </main>
    </div>
  );
}

/* ✅ Reusable toggle switch row */
function ToggleRow({ label, checked, onChange }) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-sm font-medium">{label}</span>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="sr-only peer"
        />
        <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-blue-500 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full" />
      </label>
    </div>
  );
}

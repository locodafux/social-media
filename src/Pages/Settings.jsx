import { useState } from "react";

export default function Settings() {
  const [username, setUsername] = useState("Leonardo");
  const [email, setEmail] = useState("leonardo@example.com");
  const [language, setLanguage] = useState("English");
  const [onlineStatus, setOnlineStatus] = useState(true);
  const [emailNotif, setEmailNotif] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const saveSettings = () => {
    alert("Your settings have been saved successfully!");
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center ${
        darkMode
          ? "bg-gradient-to-b from-[#061022] to-[#07111a] text-gray-100"
          : "bg-gray-50 text-gray-900"
      } font-inter`}
    >
      <header className="w-full text-center font-bold text-xl md:text-2xl py-5 bg-white/5 border-b border-white/10">
        Settings
      </header>

      <main className="w-full max-w-2xl mx-auto my-10 bg-[#0b1220]/90 border border-white/10 rounded-xl p-6 flex flex-col gap-8 shadow-lg">
        {/* Profile Settings */}
        <section>
          <h2 className="text-lg font-semibold border-b border-white/10 pb-2 mb-4">
            Profile Settings
          </h2>

          <div className="flex flex-col gap-4">
            <div>
              <label className="text-sm font-semibold mb-1 block">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                className="w-full bg-transparent border border-white/10 rounded-lg p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="text-sm font-semibold mb-1 block">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-transparent border border-white/10 rounded-lg p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="text-sm font-semibold mb-1 block">
                Language
              </label>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full bg-transparent border border-white/10 rounded-lg p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option>English</option>
                <option>Filipino</option>
                <option>Spanish</option>
              </select>
            </div>
          </div>
        </section>

        {/* Privacy Settings */}
        <section>
          <h2 className="text-lg font-semibold border-b border-white/10 pb-2 mb-4">
            Privacy Settings
          </h2>

          <div className="flex justify-between items-center py-2">
            <span>Show Online Status</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={onlineStatus}
                onChange={() => setOnlineStatus(!onlineStatus)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-500 peer-focus:outline-none rounded-full peer peer-checked:bg-blue-500 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full" />
            </label>
          </div>

          <div className="flex justify-between items-center py-2">
            <span>Receive Email Notifications</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={emailNotif}
                onChange={() => setEmailNotif(!emailNotif)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-500 peer-focus:outline-none rounded-full peer peer-checked:bg-blue-500 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full" />
            </label>
          </div>
        </section>

        {/* Theme Settings */}
        <section>
          <h2 className="text-lg font-semibold border-b border-white/10 pb-2 mb-4">
            Theme Settings
          </h2>

          <div className="flex justify-between items-center py-2">
            <span>Dark Mode</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-500 peer-focus:outline-none rounded-full peer peer-checked:bg-blue-500 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full" />
            </label>
          </div>
        </section>

        <button
          onClick={saveSettings}
          className="self-end bg-blue-500 hover:bg-blue-600 transition text-white font-semibold py-2 px-4 rounded-lg"
        >
          Save Changes
        </button>
      </main>
    </div>
  );
}

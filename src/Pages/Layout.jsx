import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Topbar from "./TopBar"; // ✅ import the new component

export default function Layout() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 600);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#071023] to-[#07111a] text-[#e6eef8] font-['Inter'] flex flex-col">
      {/* 🔝 TOPBAR COMPONENT */}
      <Topbar query={query} setQuery={setQuery} handleSearch={handleSearch} />

      {/* 🧩 PAGE CONTENT */}
      <main className="flex-1 overflow-y-auto w-full">
        <Outlet context={{ query, loading }} />
      </main>
    </div>
  );
}

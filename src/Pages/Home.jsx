import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#071023] to-[#07111a] text-[#e6eef8] font-['Inter'] p-8 flex justify-center items-start">
      <div className="grid w-full max-w-[1200px] grid-cols-[260px_1fr_320px] gap-6 items-start max-[1100px]:grid-cols-1 max-[1100px]:p-0">

        {/* LEFT SIDEBAR */}
        <aside className="bg-gradient-to-b from-[#0b1220] to-[#0b1220]/85 rounded-2xl p-5 shadow-[0_6px_20px_rgba(2,6,23,0.6)] sticky top-8 h-[calc(100vh-64px)] overflow-auto max-[1100px]:relative max-[1100px]:h-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center font-extrabold">C</div>
            <div>
              <h1 className="text-base font-semibold">Connect</h1>
              <div className="text-sm text-[#98a0b3]">Where professionals meet</div>
            </div>
          </div>

          <nav>
            <ul className="space-y-1 mt-2">
              {[
                { name: "Home", active: true, href: "#" },
                { name: "My Network", href: "./network-page.html" },
                { name: "Messages", href: "./messages.html" },
                { name: "Notifications", href: "./notification.html" },
                { name: "Jobs", href: "./jobs.html" },
                { name: "Settings", href: "./settings.html" },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg no-underline ${
                      item.active
                        ? "bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-400 font-semibold"
                        : "text-[#98a0b3] hover:bg-white/5 hover:text-[#e6eef8]"
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Profile Card */}
          <div className="mt-4 p-3 rounded-xl bg-gradient-to-b from-white/5 to-transparent">
            <div className="flex items-center gap-3">
              <div className="w-13 h-13 rounded-xl bg-gradient-to-tr from-teal-400 to-blue-400 flex items-center justify-center font-bold text-lg">LW</div>
              <div>
                <div className="font-semibold">Leonardo Wilcon</div>
                <div className="text-sm text-[#98a0b3]">Product Designer • Manila</div>
              </div>
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent my-3" />
            <div className="text-sm text-[#98a0b3]">
              Connections{" "}
              <strong className="text-blue-400">124</strong> • New messages{" "}
              <strong className="text-blue-400">2</strong>
            </div>
          </div>

          <div className="mt-4">
            <div className="text-sm text-[#98a0b3]">Folders</div>
            <div className="flex gap-2 mt-2">
              <div className="px-3 py-1.5 rounded-full bg-white/5 text-sm">Saved</div>
              <div className="px-3 py-1.5 rounded-full bg-white/5 text-sm">Drafts</div>
            </div>
          </div>
        </aside>

        {/* MAIN FEED */}
        <main className="relative min-h-[calc(100vh-64px)]">
          {/* Post Composer */}
          <section className="bg-white/[0.02] rounded-2xl p-4 shadow-[0_6px_20px_rgba(2,6,23,0.6)] mb-4">
            <div className="flex gap-3">
              <div className="w-11 h-11 rounded-lg bg-gradient-to-tr from-teal-400 to-blue-400 flex items-center justify-center font-bold text-lg">
                LW
              </div>
              <textarea
                placeholder="Share an update, article or idea with your network..."
                className="flex-1 min-h-[64px] resize-y bg-transparent border-none text-inherit outline-none text-[15px]"
              />
            </div>
            <div className="flex justify-between items-center mt-3">
              <div className="flex gap-2">
                {["Add Photo", "Add Link", "Schedule"].map((b) => (
                  <button
                    key={b}
                    className="border border-white/5 bg-transparent text-[#98a0b3] px-3 py-2 rounded-lg hover:text-white transition"
                  >
                    {b}
                  </button>
                ))}
              </div>
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-lg font-semibold">
                Post
              </button>
            </div>
          </section>

          {/* Feed Posts */}
          <section className="flex flex-col gap-3">
            {/* Post 1 */}
            <article className="bg-white/[0.02] p-4 rounded-xl shadow-[0_8px_18px_rgba(2,6,23,0.45)]">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-teal-400 to-blue-400 flex items-center justify-center font-semibold">
                  A
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <strong>Anne Cortez</strong>
                    <span className="text-sm text-[#98a0b3]">• 2h</span>
                  </div>
                  <div className="text-sm text-[#98a0b3]">
                    Senior Dev • Tech · Remote
                  </div>
                </div>
              </div>
              <div className="mt-3 text-[#dbe9ff]">
                <p>
                  Excited to share our team's latest achievements: we cut build
                  time by 40% and launched canary releases to 10% of traffic.
                  Here are the key takeaways and how we did it.
                </p>
                <img
                  className="w-full rounded-lg mt-3 max-h-[420px] object-cover"
                  src="https://via.placeholder.com/1200x600/10252b/e6eef8?text=Project+Snapshot"
                  alt="Post media"
                />
                <div className="flex gap-2 mt-3">
                  <button className="flex items-center gap-2 bg-white/[0.02] px-3 py-2 rounded-md text-red-400">
                    ❤️ Like
                  </button>
                  <button className="flex items-center gap-2 bg-white/[0.02] px-3 py-2 rounded-md text-[#98a0b3]">
                    💬 Comment
                  </button>
                  <button className="flex items-center gap-2 bg-white/[0.02] px-3 py-2 rounded-md text-[#98a0b3]">
                    ↗️ Share
                  </button>
                </div>
              </div>
            </article>

            {/* Post 2 */}
            <article className="bg-white/[0.02] p-4 rounded-xl shadow-[0_8px_18px_rgba(2,6,23,0.45)]">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-blue-400 to-purple-400 flex items-center justify-center font-semibold">
                  K
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <strong>Khaled Omar</strong>
                    <span className="text-sm text-[#98a0b3]">• 1d</span>
                  </div>
                  <div className="text-sm text-[#98a0b3]">
                    Data Scientist • FinTech
                  </div>
                </div>
              </div>
              <div className="mt-3 text-[#dbe9ff]">
                <p>
                  On the importance of solid data contracts across teams. When
                  data producers and consumers agree on schemas early, rollouts
                  are smoother and incidents drop dramatically.
                </p>
                <div className="flex gap-2 mt-3">
                  <button className="flex items-center gap-2 bg-white/[0.02] px-3 py-2 rounded-md text-[#98a0b3]">
                    👍 Like
                  </button>
                  <button className="flex items-center gap-2 bg-white/[0.02] px-3 py-2 rounded-md text-[#98a0b3]">
                    💬 Comment
                  </button>
                  <button className="flex items-center gap-2 bg-white/[0.02] px-3 py-2 rounded-md text-[#98a0b3]">
                    🔖 Save
                  </button>
                </div>
              </div>
            </article>
          </section>
        </main>

        {/* RIGHT SIDEBAR */}
        <aside className="bg-gradient-to-b from-[#0b1220] to-[#0b1220]/85 rounded-2xl p-5 shadow-[0_6px_20px_rgba(2,6,23,0.6)] sticky top-8 h-[calc(100vh-64px)] overflow-auto max-[1100px]:relative max-[1100px]:h-auto">
          <div className="flex gap-2 mb-4">
            <input
              placeholder="Search people, posts or jobs"
              aria-label="Search"
              className="flex-1 p-2.5 rounded-lg bg-transparent border border-white/5 text-inherit"
            />
            <button className="border border-white/5 bg-transparent text-[#98a0b3] px-3 py-2 rounded-lg hover:text-white transition">
              Go
            </button>
          </div>

          <div>
            <h3 className="m-0 font-semibold">Trending</h3>
            {[
              { tag: "#AI", posts: "32.1k posts" },
              { tag: "#DesignSystems", posts: "9.6k posts" },
            ].map((trend) => (
              <div
                key={trend.tag}
                className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-white/5 transition"
              >
                <div>
                  <strong>{trend.tag}</strong>
                  <div className="text-sm text-[#98a0b3]">{trend.posts}</div>
                </div>
                <div className="px-3 py-1.5 rounded-full bg-white/5 text-sm">
                  Follow
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <h3 className="font-semibold">Suggested</h3>
            <div className="flex flex-col gap-2 mt-2">
              {[
                { initials: "JS", name: "J. Santos", info: "Marketing • 2 mutual" },
                { initials: "MR", name: "M. Reyes", info: "Product • 1 mutual" },
              ].map((user) => (
                <div
                  key={user.name}
                  className="flex items-center justify-between bg-transparent rounded-lg px-2 py-1"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-blue-400 to-purple-400 flex items-center justify-center font-semibold">
                      {user.initials}
                    </div>
                    <div>
                      <strong>{user.name}</strong>
                      <div className="text-sm text-[#98a0b3]">{user.info}</div>
                    </div>
                  </div>
                  <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-3 py-1.5 rounded-lg font-semibold text-sm">
                    Connect
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 text-sm text-[#98a0b3]">© Connect • 2025</div>
        </aside>
      </div>
    </div>
  );
}

import React, { useState } from "react";

export default function Messages() {
  const [conversations, setConversations] = useState([
    {
      id: 1,
      name: "Anne Cortez",
      initials: "A",
      last: "Great work on the new UI design!",
      messages: [
        { text: "Hey Anne, have you checked the new design?", from: "me" },
        { text: "Yes, looks great! We can ship tomorrow.", from: "them" },
      ],
    },
    {
      id: 2,
      name: "Khaled Omar",
      initials: "K",
      last: "Sending you the dataset now.",
      messages: [
        { text: "Can you share the latest dataset?", from: "me" },
        { text: "Sure, sending it now.", from: "them" },
      ],
    },
    {
      id: 3,
      name: "M. Reyes",
      initials: "MR",
      last: "Let’s align after lunch.",
      messages: [
        { text: "Team meeting rescheduled?", from: "me" },
        { text: "Yes, let’s align after lunch.", from: "them" },
      ],
    },
  ]);

  const [activeId, setActiveId] = useState(null);
  const [query, setQuery] = useState("");
  const [message, setMessage] = useState("");

  const activeConv = conversations.find((c) => c.id === activeId);

  const openChat = (id) => setActiveId(id);

  const sendMessage = () => {
    if (!message.trim() || !activeId) return;
    setConversations((prev) =>
      prev.map((conv) =>
        conv.id === activeId
          ? { ...conv, messages: [...conv.messages, { text: message, from: "me" }] }
          : conv
      )
    );
    setMessage("");
  };

  const filteredConversations = conversations.filter((c) =>
    c.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="h-screen flex bg-gradient-to-b from-[#061022] to-[#07111a] text-[#e6eef8] font-[Inter]">

      {/* Sidebar */}
      <aside className="w-[300px] bg-[#0b1220]/90 border-r border-white/10 flex flex-col max-md:w-full max-md:h-[200px] max-md:flex-row max-md:overflow-x-auto">
        <div className="p-4 border-b border-white/10 font-semibold text-lg">Messages</div>
        <div className="p-3 w-full max-md:min-w-[180px]">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-3 py-2 rounded-lg border border-white/10 bg-transparent text-white"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="flex-1 overflow-y-auto">
          {filteredConversations.map((c) => (
            <div
              key={c.id}
              onClick={() => openChat(c.id)}
              className={`flex items-center gap-3 px-4 py-3 border-b border-white/5 cursor-pointer transition ${
                c.id === activeId ? "bg-blue-500/10" : "hover:bg-white/5"
              } max-md:flex-col max-md:py-4 max-md:min-w-[160px]`}
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-400 to-blue-400 flex items-center justify-center font-bold">
                {c.initials}
              </div>
              <div className="flex-1 max-md:text-center">
                <div className="font-semibold">{c.name}</div>
                <div className="text-sm text-gray-400 truncate">{c.last}</div>
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* Chat Section */}
      <section className="flex-1 flex flex-col relative max-md:h-[calc(100vh-200px)]">
        <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10 bg-white/5">
          {activeConv ? (
            <>
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-400 to-blue-400 flex items-center justify-center font-bold">
                {activeConv.initials}
              </div>
              <div className="font-semibold text-base">{activeConv.name}</div>
            </>
          ) : (
            <div className="text-gray-400 font-medium">Select a chat</div>
          )}
        </div>

        <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3">
          {activeConv &&
            activeConv.messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[60%] px-4 py-2 rounded-xl text-[15px] leading-snug ${
                  m.from === "me"
                    ? "self-end bg-gradient-to-r from-blue-500 to-purple-600"
                    : "self-start bg-white/5"
                }`}
              >
                {m.text}
                <div className="text-xs text-gray-400 mt-1 text-right">
                  {m.from === "me" ? "You" : "Them"}
                </div>
              </div>
            ))}
        </div>

        <div className="flex items-center gap-3 p-3 border-t border-white/10 bg-white/5">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 px-3 py-2 rounded-lg border border-white/10 bg-transparent text-white text-[15px]"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            onClick={sendMessage}
            className="bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-lg font-semibold"
          >
            Send
          </button>
        </div>
      </section>
    </div>
  );
}

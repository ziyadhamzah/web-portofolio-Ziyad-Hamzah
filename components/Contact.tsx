"use client";

import { FormEvent, useState } from "react";
import { useReveal } from "@/lib/useReveal";

type Comment = {
  id: number;
  name: string;
  comment: string;
};

const socialLinks = [
  {
    name: "Instagram",
    username: "@ziyadhamzah",
    href: "https://instagram.com/ziyadhamzah",
    className:
      "hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#E1306C] hover:to-[#FCAF45] hover:border-transparent",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className="w-full h-full"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },

  {
    name: "TikTok",
    username: "@ziyadhamzah",
    href: "https://tiktok.com/@ziyadhamzah",
    className:
      "hover:bg-[#050505] hover:border-[#25F4EE] hover:shadow-[3px_3px_0_#FE2C55]",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M16.6 3c.3 1.8 1.3 3.1 3.1 3.4v3.1c-1.1 0-2.2-.3-3.1-.8v6.7c0 3.5-2.5 5.6-5.6 5.6-3 0-5.3-2.1-5.3-5 0-3.2 2.6-5.4 5.8-5.4.3 0 .7 0 1 .1v3.1c-.3-.1-.6-.1-.9-.1-1.4 0-2.6.9-2.6 2.3 0 1.3 1 2.1 2.1 2.1 1.4 0 2.3-.9 2.3-2.5V3h3.2Z" />
      </svg>
    ),
  },

  {
    name: "LinkedIn",
    username: "Ziyad Hamzah",
    href: "https://linkedin.com/in/ziyadhamzah",
    className:
      "hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:shadow-[0_8px_25px_rgba(10,102,194,0.25)]",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M5.2 3.5A2.2 2.2 0 1 1 5.2 8a2.2 2.2 0 0 1 0-4.5ZM3.4 9.5H7v11H3.4v-11Zm5.8 0h3.5V11c.5-1 1.8-1.9 3.7-1.9 3.9 0 4.6 2.5 4.6 5.8v5.6h-3.6v-5c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7v5.1H9.2v-11Z" />
      </svg>
    ),
  },

  {
    name: "WhatsApp",
    username: "Chat with me",
    href: "https://wa.me/6281234567890",
    className:
      "hover:bg-[#25D366] hover:border-[#25D366] hover:shadow-[0_8px_25px_rgba(37,211,102,0.25)]",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className="w-full h-full"
      >
        <path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4A8 8 0 1 1 20 11.5Z" />
        <path d="M8.5 8.5c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.7c.1.2.1.4-.1.6l-.6.7c.7 1.2 1.6 2.1 2.8 2.8l.7-.6c.2-.2.4-.2.6-.1l1.7.7c.3.1.4.3.4.5v.5c0 .3 0 .5-.4.7-.4.2-1 .3-1.5.2-2.1-.4-4.9-3.2-5.3-5.3-.1-.5 0-1.1.2-1.5Z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const leftRef = useReveal<HTMLDivElement>();
  const rightRef = useReveal<HTMLDivElement>();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [msgStatus, setMsgStatus] = useState<"idle" | "error" | "sent">("idle");

  const [commentName, setCommentName] = useState("");
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);

  function handleSendMessage(e: FormEvent) {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      setMsgStatus("error");
      return;
    }

    setMsgStatus("sent");

    setName("");
    setEmail("");
    setMessage("");

    setTimeout(() => {
      setMsgStatus("idle");
    }, 3500);
  }

  function handlePostComment(e: FormEvent) {
    e.preventDefault();

    if (!commentName.trim() || !commentText.trim()) return;

    setComments((prev) => [
      {
        id: Date.now(),
        name: commentName.trim(),
        comment: commentText.trim(),
      },
      ...prev,
    ]);

    setCommentName("");
    setCommentText("");
  }

  return (
    <section
      id="contact"
      className="py-28 md:py-32 bg-black bg-grid bg-[length:40px_40px]"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* ================= HEADER ================= */}

        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-muted mb-3">
            Get In Touch
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Let&apos;s work together.
          </h2>

          <p className="text-muted mt-4 max-w-xl text-sm md:text-base leading-relaxed">
            Have a project, idea, or opportunity? Feel free to reach out.
            I&apos;m always open to interesting collaborations.
          </p>
        </div>

        {/* ================= CONTACT + COMMENTS ================= */}

        <div className="grid md:grid-cols-2 gap-8">
          {/* MESSAGE FORM */}

          <div
            ref={leftRef}
            className="reveal bg-card border border-border rounded-card p-8 md:p-10"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-2">
              Send a Message
            </h3>

            <p className="text-muted text-sm mb-8">
              Tell me a little about your project.
            </p>

            <form onSubmit={handleSendMessage} noValidate>
              {/* NAME */}

              <div className="mb-5">
                <label className="block text-xs font-medium text-muted mb-2">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#141414] border border-border rounded-xl px-4 py-3.5 text-sm outline-none placeholder:text-[#555] transition-all focus:border-[#777] focus:bg-[#171717]"
                />
              </div>

              {/* EMAIL */}

              <div className="mb-5">
                <label className="block text-xs font-medium text-muted mb-2">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#141414] border border-border rounded-xl px-4 py-3.5 text-sm outline-none placeholder:text-[#555] transition-all focus:border-[#777] focus:bg-[#171717]"
                />
              </div>

              {/* MESSAGE */}

              <div className="mb-5">
                <label className="block text-xs font-medium text-muted mb-2">
                  Message
                </label>

                <textarea
                  placeholder="Tell me about your project..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-[#141414] border border-border rounded-xl px-4 py-3.5 text-sm min-h-[120px] resize-none outline-none placeholder:text-[#555] transition-all focus:border-[#777] focus:bg-[#171717]"
                />
              </div>

              {/* STATUS */}

              {msgStatus === "error" && (
                <p className="text-xs text-red-400 mb-4">
                  Please fill in all fields before sending.
                </p>
              )}

              {msgStatus === "sent" && (
                <p className="text-xs text-[#3ddc84] mb-4">
                  Message ready — form validated successfully.
                </p>
              )}

              {/* BUTTON */}

              <button
                type="submit"
                className="w-full bg-white text-black py-4 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_8px_30px_rgba(255,255,255,0.12)] active:scale-[0.99]"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* ================= COMMENTS ================= */}

          <div
            ref={rightRef}
            className="reveal bg-card border border-border rounded-card p-8 md:p-10"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-2">
              Leave a Comment
            </h3>

            <p className="text-muted text-sm mb-8">
              Share your thoughts about my portfolio.
            </p>

            <form onSubmit={handlePostComment}>
              {/* COMMENT NAME */}

              <div className="mb-5">
                <label className="block text-xs font-medium text-muted mb-2">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Your name"
                  value={commentName}
                  onChange={(e) => setCommentName(e.target.value)}
                  className="w-full bg-[#141414] border border-border rounded-xl px-4 py-3.5 text-sm outline-none placeholder:text-[#555] transition-all focus:border-[#777] focus:bg-[#171717]"
                />
              </div>

              {/* COMMENT */}

              <div className="mb-5">
                <label className="block text-xs font-medium text-muted mb-2">
                  Comment
                </label>

                <textarea
                  placeholder="Write your comment..."
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  className="w-full bg-[#141414] border border-border rounded-xl px-4 py-3.5 text-sm min-h-[120px] resize-none outline-none placeholder:text-[#555] transition-all focus:border-[#777] focus:bg-[#171717]"
                />
              </div>

              {/* COMMENT BUTTON */}

              <button
                type="submit"
                className="w-full bg-[#1a1a1a] border border-border text-white py-4 rounded-xl font-bold text-sm transition-all duration-300 hover:bg-white hover:text-black hover:border-white active:scale-[0.99]"
              >
                Post Comment
              </button>
            </form>

            {/* COMMENTS LIST */}

            {comments.length > 0 && (
              <div className="mt-7 flex flex-col gap-3 max-h-[240px] overflow-y-auto pr-1">
                {comments.map((c) => (
                  <div
                    key={c.id}
                    className="border border-border rounded-xl p-4 bg-[#0a0a0a]"
                  >
                    <p className="text-sm font-semibold mb-1">{c.name}</p>

                    <p className="text-xs text-muted leading-relaxed">
                      {c.comment}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ================= SOCIAL MEDIA ================= */}

        <div className="mt-8">
          <div className="border border-border rounded-card bg-card p-6 md:p-8">
            <div className="mb-6">
              <p className="text-xs uppercase tracking-[0.25em] text-muted mb-2">
                Social Media
              </p>

              <h3 className="text-xl font-bold">Connect with me</h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    group
                    flex
                    items-center
                    gap-3
                    border
                    border-border
                    rounded-xl
                    px-4
                    py-4
                    transition-all
                    duration-300
                    hover:text-white
                    hover:-translate-y-1
                    active:scale-[0.98]
                    ${social.className}
                  `}
                >
                  {/* ICON */}

                  <span className="w-5 h-5 shrink-0 transition-transform duration-300 group-hover:scale-110">
                    {social.icon}
                  </span>

                  {/* TEXT */}

                  <span className="min-w-0">
                    <span className="block text-xs font-semibold">
                      {social.name}
                    </span>

                    <span className="block text-[10px] text-muted group-hover:text-white/70 truncate mt-0.5">
                      {social.username}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ================= FOOTER ================= */}

        <div className="mt-8 pt-6 border-t border-border flex flex-col md:flex-row justify-between gap-3 text-xs text-muted">
          <span>© 2026 Ziyad Hamzah. All rights reserved.</span>

          <span>Designed & built with Next.js & React.</span>
        </div>
      </div>
    </section>
  );
}

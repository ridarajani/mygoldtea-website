"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Message {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  date: string;
}

export default function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);

  async function fetchMessages() {
    try {
      const res = await fetch("/api/messages");
      const data = await res.json();
      setMessages(data);
    } catch {
      console.error("Failed to fetch messages");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchMessages();
  }, []);

  async function handleDelete(id: string) {
    if (!confirm("Are you sure you want to delete this message?")) return;

    setDeleting(id);
    try {
      const res = await fetch("/api/messages", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      if (res.ok) {
        setMessages((prev) => prev.filter((m) => m.id !== id));
      }
    } catch {
      console.error("Failed to delete message");
    } finally {
      setDeleting(null);
    }
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-10">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-brown-dark">
                Contact <span className="text-gold-dark italic">Messages</span>
              </h1>
              <p className="mt-2 text-brown-light">
                {messages.length} message{messages.length !== 1 ? "s" : ""}{" "}
                received
              </p>
            </div>
            <Link
              href="/contact"
              className="rounded-full border-2 border-gold/30 px-5 py-2 text-sm font-semibold text-gold-dark hover:bg-gold/10 transition-colors"
            >
              View Contact Page
            </Link>
          </div>

          {/* Messages */}
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="w-8 h-8 border-3 border-gold/30 border-t-gold rounded-full animate-spin" />
            </div>
          ) : messages.length === 0 ? (
            <div className="rounded-2xl bg-cream border border-cream-dark p-12 text-center">
              <svg
                className="mx-auto w-12 h-12 text-brown-light/50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                />
              </svg>
              <p className="mt-4 text-brown-light text-lg">
                No messages yet.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className="rounded-2xl bg-white border border-cream-dark p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      {/* Name & Date */}
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-lg font-bold text-brown-dark">
                          {msg.name}
                        </h3>
                        <span className="text-xs text-brown-light bg-cream rounded-full px-3 py-1">
                          {new Date(msg.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </span>
                      </div>

                      {/* Contact info */}
                      <div className="mt-2 flex items-center gap-4 text-sm text-brown-light">
                        <span className="flex items-center gap-1.5">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                          {msg.email}
                        </span>
                        {msg.phone && (
                          <span className="flex items-center gap-1.5">
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                              />
                            </svg>
                            {msg.phone}
                          </span>
                        )}
                      </div>

                      {/* Message */}
                      <p className="mt-4 text-brown leading-relaxed whitespace-pre-wrap">
                        {msg.message}
                      </p>
                    </div>

                    {/* Delete button */}
                    <button
                      onClick={() => handleDelete(msg.id)}
                      disabled={deleting === msg.id}
                      className="flex-shrink-0 p-2 rounded-lg text-brown-light hover:text-red-500 hover:bg-red-50 transition-colors disabled:opacity-50"
                      title="Delete message"
                    >
                      {deleting === msg.id ? (
                        <div className="w-5 h-5 border-2 border-red-300 border-t-red-500 rounded-full animate-spin" />
                      ) : (
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

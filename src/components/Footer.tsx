"use client";

import { Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-[#0a0a0b] border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-zinc-400">
            <span>Made with</span>
            <Heart size={16} className="text-red-400 fill-current" />
            <span>by 심재형 · PLUCK</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-zinc-500">
            <span>&copy; {new Date().getFullYear()} PLUCK. All rights reserved.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:border-indigo-400 hover:text-indigo-300 transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}

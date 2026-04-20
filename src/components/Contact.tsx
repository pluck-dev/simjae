"use client";

import { Mail, Github, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#0d0d0f] border-t border-zinc-900">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-indigo-300 mb-3">
            Get in Touch
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-50">연락하기</h2>
          <p className="text-zinc-400">새로운 프로젝트와 기회에 대해 항상 열려 있습니다</p>
        </div>

        <div className="bg-zinc-900/60 backdrop-blur p-8 md:p-12 rounded-2xl border border-zinc-800 text-center relative overflow-hidden">
          <div className="absolute inset-0 -z-0 opacity-50">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[420px] h-[300px] bg-indigo-500/10 rounded-full blur-3xl" />
          </div>
          <div className="max-w-md mx-auto relative z-10">
            <p className="text-zinc-400 mb-8 leading-relaxed">
              프로젝트 협업, 채용 문의, 기타 궁금한 점이 있으시면
              언제든지 이메일로 연락 주세요.
            </p>

            <a
              href="mailto:hello@pluck.co.kr"
              className="inline-flex items-center gap-3 px-8 py-4 bg-indigo-500 text-white rounded-xl font-medium hover:bg-indigo-400 transition-all duration-300 shadow-[0_0_30px_rgba(99,102,241,0.35)] hover:shadow-[0_0_40px_rgba(99,102,241,0.55)]"
            >
              <Mail size={20} />
              hello@pluck.co.kr
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 mt-10 pt-8 border-t border-zinc-800 relative z-10">
            <a
              href="https://github.com/pluck-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-zinc-400 hover:text-indigo-300 transition-colors"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <div className="flex items-center gap-2 text-zinc-500">
              <MapPin size={20} />
              <span>서울, 대한민국</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/*
// Formspree 폼 버전 - 나중에 필요 시 활성화
// 1. formspree.io 에서 폼 생성
// 2. YOUR_FORM_ID를 실제 ID로 교체

import { useState } from "react";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
const [errorMessage, setErrorMessage] = useState("");

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setStatus("loading");
  const form = e.currentTarget;
  const formData = new FormData(form);

  try {
    const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });
    if (response.ok) {
      setStatus("success");
      form.reset();
    } else {
      setErrorMessage("전송에 실패했습니다.");
      setStatus("error");
    }
  } catch {
    setErrorMessage("네트워크 오류가 발생했습니다.");
    setStatus("error");
  }
};
*/

"use client";

import { Sparkles, Wrench, Film, Monitor } from "lucide-react";

const aiWorks = [
  {
    type: "AI AGENT",
    icon: Sparkles,
    title: "사주 오케스트레이터",
    subtitle: "5단계 LLM 파이프라인 · MCP 서버 · Webhook 연동",
    description:
      "사주팔자 분석을 5단계 LLM 파이프라인으로 자동화하고, CLI / MCP Server / n8n Webhook 3가지 모드로 배포한 프로덕션급 AI 오케스트레이터",
    highlights: [
      "5-Stage Pipeline: 명식 → 카테고리 → 월운 → Q&A → 종합분석",
      "중앙 프롬프트 관리 + JSON 파싱 fallback",
      "DOCX/PDF 리포트 자동 생성 · 3가지 배포 모드",
    ],
    tags: ["Claude API", "MCP Server", "n8n Webhook", "Node.js"],
  },
  {
    type: "DEV TOOL",
    icon: Wrench,
    title: "Claude Planning Kit",
    subtitle: "6단계 개발 라이프사이클 자동화 프레임워크",
    description:
      "기획 → 설계 → 셋업 → 프론트엔드 → 테스트 → Living Spec까지 전체 개발 과정을 Claude Code 스킬/커맨드/에이전트로 자동화하는 68파일 규모 프레임워크",
    highlights: [
      "6 Skills · 10 Commands · 3 Agents 설계",
      "/orchestra init → scan → next 자동 파이프라인",
      "Living Spec: 코드 ↔ 문서 실시간 동기화 시스템",
    ],
    tags: ["Claude Code", "68 Files", "Obsidian", "React"],
  },
  {
    type: "AUTOMATION",
    icon: Film,
    title: "Claude Video Kit",
    subtitle: "Remotion 기반 영상 제작 자동화",
    description:
      "대본 생성 → TTS → 씬 빌드 → 렌더링 → YouTube 배포까지 영상 제작 전체를 자동화하는 모노레포 기반 프레임워크",
    highlights: [
      "script-writer · scene-builder · video-reviewer 3 Agent",
      "Remotion 4.0 + FFmpeg 렌더링 파이프라인",
      "YouTube SEO 최적화 · 썸네일 자동 생성",
    ],
    tags: ["Remotion", "FFmpeg", "TTS", "Monorepo"],
  },
  {
    type: "DESKTOP APP",
    icon: Monitor,
    title: "Pluck Orchestrator",
    subtitle: "Claude Code 인프라 관리 데스크톱 앱",
    description:
      "Hooks, Skills, Agents, Config를 GUI로 관리하는 Electron 기반 데스크톱 애플리케이션. macOS/Windows/Linux 크로스플랫폼 지원",
    highlights: [
      "Electron + React + Zustand 아키텍처",
      "electron-builder 크로스플랫폼 패키징",
      "Claude Code 스킬/에이전트 시각적 관리",
    ],
    tags: ["Electron", "React", "Vite", "Zustand"],
  },
];

export default function AIWorks() {
  return (
    <section id="ai" className="py-24 bg-[#0d0d0f] border-y border-zinc-900 relative overflow-hidden">
      <div className="absolute inset-0 -z-0 opacity-40">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-cyan-300 mb-3">
            AI &amp; Automation
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-50">
            AI 에이전트를 직접 설계하고 오케스트레이션합니다
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Claude Code 기반 스킬/커맨드/에이전트를 직접 설계하고, LLM 파이프라인 오케스트레이터를 구축합니다. 개발 자동화를 넘어 콘텐츠 생산, 데이터 분석까지 AI로 확장합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {aiWorks.map((work, idx) => {
            const Icon = work.icon;
            return (
              <div
                key={idx}
                className="bg-zinc-900/60 backdrop-blur rounded-2xl p-6 border border-zinc-800 border-t-4 border-t-cyan-400/80 hover-card"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-zinc-100">{work.title}</h3>
                      <p className="text-xs text-zinc-500">{work.subtitle}</p>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 text-[10px] font-semibold tracking-wider rounded">
                    {work.type}
                  </span>
                </div>

                <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                  {work.description}
                </p>

                <div className="space-y-1.5 mb-4">
                  {work.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 text-xs text-zinc-500"
                    >
                      <span className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0 bg-cyan-400" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {work.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

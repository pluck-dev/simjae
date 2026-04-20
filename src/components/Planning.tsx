"use client";

import { FileText, Workflow, Building } from "lucide-react";

const planningCards = [
  {
    label: "문서 체계",
    icon: FileText,
    accent: "blue",
    title: "표준화된 기획 문서 시스템",
    description:
      "PRD, 유저 페르소나/시나리오, 화면설계서, 기능명세서, API 명세서, 데이터 정의서, 권한 매트릭스까지 — 21개 Templater 템플릿 기반 문서 자동 생성 체계 구축",
    highlights: [
      "PRD-### · FNC-### · SCR-### · API-### ID 체계",
      "문서 간 [[양방향 링크]] 자동 참조",
      "진행률 대시보드 자동 집계",
    ],
    tags: ["Obsidian", "Templater", "21개 템플릿"],
  },
  {
    label: "워크플로우",
    icon: Workflow,
    accent: "green",
    title: "1인 풀스펙 기획 프로세스",
    description:
      "클라이언트 미팅에서 시작해 비즈니스 목표 정의, 유저 리서치, 화면설계, 기능명세, API 설계까지 — 외주 프로젝트의 기획 전 과정을 혼자 리드합니다.",
    highlights: [
      "PRD (KPI · 제약사항 · 마일스톤 정의)",
      "유저 페르소나 · 유저 시나리오 작성",
      "화면설계서 · 기능명세서 · IA",
      "API 명세서 · 데이터 정의서 · RBAC",
    ],
    tags: ["1인 풀기획", "RBAC 설계", "Obsidian 기반"],
  },
  {
    label: "비즈니스",
    icon: Building,
    accent: "purple",
    title: "사업 기획 & 제안서",
    description:
      "개인 사업(플럭) 운영 경험을 통해 클라이언트 제안서, 사업계획서, 서비스 기획까지 비즈니스 전반의 문서 작업 역량 보유",
    highlights: [
      "BizPilot 2026 사업계획서 (docx/pdf)",
      "서비스 기획서 · 업무범위 요약서",
      "클라이언트 포트폴리오 · 제안서",
    ],
    tags: ["제안서", "사업계획서", "플럭(개인사업)"],
  },
];

const accentMap = {
  blue: {
    border: "border-l-indigo-400",
    text: "text-indigo-300",
    bg: "bg-indigo-500/10 border-indigo-500/20",
    dot: "bg-indigo-400",
  },
  green: {
    border: "border-l-emerald-400",
    text: "text-emerald-300",
    bg: "bg-emerald-500/10 border-emerald-500/20",
    dot: "bg-emerald-400",
  },
  purple: {
    border: "border-l-purple-400",
    text: "text-purple-300",
    bg: "bg-purple-500/10 border-purple-500/20",
    dot: "bg-purple-400",
  },
};

export default function Planning() {
  return (
    <section id="planning" className="py-24 bg-[#0a0a0b]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-indigo-300 mb-3">
            Planning &amp; Design
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-50">
            개발자가 기획까지 합니다
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            외주 프로젝트에서 클라이언트 미팅부터 PRD 작성, 화면설계, 기능명세, API 설계까지 전 과정을 1인 리드합니다. Obsidian 기반으로 324개 이상의 기획 문서를 체계적으로 관리합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {planningCards.map((card, idx) => {
            const a = accentMap[card.accent as keyof typeof accentMap];
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className={`bg-zinc-900/60 backdrop-blur rounded-2xl p-6 border border-zinc-800 border-l-4 ${a.border} hover-card`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg border ${a.bg} ${a.text}`}>
                    <Icon size={18} />
                  </div>
                  <p className={`text-xs font-semibold tracking-[0.1em] uppercase ${a.text}`}>
                    {card.label}
                  </p>
                </div>
                <h3 className="font-bold text-lg mb-3 text-zinc-100">{card.title}</h3>
                <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                  {card.description}
                </p>
                <div className="space-y-1.5 mb-4">
                  {card.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 text-xs text-zinc-500"
                    >
                      <span className={`w-1 h-1 rounded-full mt-1.5 flex-shrink-0 ${a.dot}`} />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-zinc-800/80 text-zinc-300 border border-zinc-700 rounded text-xs"
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

"use client";

import { FileText, Briefcase, Building } from "lucide-react";

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
    label: "실전 사례",
    icon: Briefcase,
    accent: "green",
    title: "BROJ CRM — 풀 기획 산출물",
    description:
      "피트니스 센터 SaaS CRM 프로젝트 전체 기획을 1인 수행. 비즈니스 목표 설정부터 기술 제약사항 정의까지 모든 의사결정 주도",
    highlights: [
      "PRD 1건 (200+ lines, KPI 포함)",
      "유저 페르소나 4건 · 시나리오 3건",
      "화면설계서 18건 · 기능명세서 9건",
      "API 명세서 5건 · 데이터 정의서 5건",
    ],
    tags: ["82개 문서", "6개 유저타입", "RBAC 설계"],
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
    border: "border-l-blue-500",
    text: "text-blue-600",
    bg: "bg-blue-50",
    dot: "bg-blue-500",
  },
  green: {
    border: "border-l-green-500",
    text: "text-green-600",
    bg: "bg-green-50",
    dot: "bg-green-500",
  },
  purple: {
    border: "border-l-purple-500",
    text: "text-purple-600",
    bg: "bg-purple-50",
    dot: "bg-purple-500",
  },
};

export default function Planning() {
  return (
    <section id="planning" className="py-24 bg-gray-50/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-blue-600 mb-3">
            Planning &amp; Design
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            개발자가 기획까지 합니다
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
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
                className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-100 border-l-4 ${a.border} hover-card`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg ${a.bg} ${a.text}`}>
                    <Icon size={18} />
                  </div>
                  <p className={`text-xs font-semibold tracking-[0.1em] uppercase ${a.text}`}>
                    {card.label}
                  </p>
                </div>
                <h3 className="font-bold text-lg mb-3">{card.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {card.description}
                </p>
                <div className="space-y-1.5 mb-4">
                  {card.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 text-xs text-gray-500"
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
                      className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs"
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

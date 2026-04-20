"use client";

import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    company: "애드락애드버테인먼트",
    position: "프론트엔드 개발자 (플랫폼개발팀)",
    period: "2024.07 - 현재",
    description: "프론트엔드 총괄 관리 및 React Native 앱 개발 총괄. Next.js 보일러플레이트 구축, CI/CD 파이프라인 구성",
    projects: [
      "운전면허플러스 - SEO 기반 웹 리뉴얼, 관리자/이벤트/쿠폰 도메인 개발",
      "도로로 앱 - React Native(Expo) 기반 운전 연습 & 분석 앱 100% 단독 개발",
      "블록픽 플랫폼 - 블록체인 게임 플랫폼 웹앱 프론트엔드 개발",
      "운전면허플러스 Android - 앱 리뉴얼 전면 퍼블리싱",
    ],
    techStack: ["Next.js", "TypeScript", "React Native", "Expo", "Zustand", "React Query", "TailwindCSS", "Supabase"],
    current: true,
  },
  {
    company: "아이비씨티",
    position: "프론트엔드 리드 개발자 (개발본부/매니저)",
    period: "2023.05 - 2024.07",
    description: "GETBIT, 밀리스타 프로젝트 프론트엔드 리드. 기획부터 개발까지 전 과정 참여",
    projects: [
      "GETBIT - BTC 경매 시스템 (클라이언트 FO/관리자 BO 전체 개발)",
      "밀리스타 [MIL] - 주한미군 콜택시 & 렌트 서비스 앱 (기획/프론트엔드)",
      "트론 & LEDGIS 블록체인 연동, PayPal 결제 시스템 연동",
    ],
    techStack: ["React", "Next.js", "React Native", "TypeScript", "React Query", "GraphQL", "Naver Maps", "PayPal"],
    current: false,
  },
  {
    company: "방배동밸리",
    position: "프론트엔드 리드 개발자 (개발팀/대리)",
    period: "2022.04 - 2023.05",
    description: "아더에러 자사몰 구축 프론트엔드 리드. 카페24 분리 후 자체 시스템 구축",
    projects: [
      "아더에러 자사몰 - 클라이언트/관리자 페이지 전체 퍼블리싱 & 기능 구현",
      "반응형 웹, i18n 다국어, Google 지도 API, 드래그앤드롭 상품 진열",
      "와인SNS - 주류 커뮤니티 앱 전 페이지 퍼블리싱",
    ],
    techStack: ["Tailwind CSS", "JavaScript", "HTML5", "CSS3", "Swiper.js", "i18n"],
    current: false,
  },
  {
    company: "디어플로리스트",
    position: "전시 프론트엔드 & 백엔드 개발자 (개발팀/사원)",
    period: "2021.09 - 2022.02",
    description: "동네꽃집 프로젝트 - 꽃집과 소비자 연결 중계 플랫폼 개발",
    projects: [
      "동네꽃집 - 클라이언트 전 페이지 퍼블리싱 & 기능 구현",
      "Intersection Observer 무한스크롤, 스페셜오더 채팅봇 구현",
      "Vendor(꽃집) 대시보드 페이지 개발",
    ],
    techStack: ["Java", "JavaScript", "PHP", "MySQL", "jQuery", "Swiper.js"],
    current: false,
  },
  {
    company: "룩인사이트",
    position: "자바 개발자 (연구개발팀/주임)",
    period: "2021.04 - 2021.09",
    description: "약올려 프로젝트 - 의약품 중계 플랫폼 개발 및 웹 유지보수",
    projects: [
      "약올려 - 카카오 알림톡 연동 (비지톡 API)",
      "카카오톡 SNS 로그인 구현",
      "메인 페이지 리뉴얼",
    ],
    techStack: ["Java", "Spring MVC", "jQuery", "CSS3"],
    current: false,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#0d0d0f] border-y border-zinc-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-indigo-300 mb-3">
            Career Timeline
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-50">경력</h2>
          <p className="text-zinc-400">개발자로서의 성장 여정</p>
        </div>

        <div className="divide-y divide-zinc-800 border-t border-b border-zinc-800">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2 md:gap-8 py-8 transition-colors hover:bg-zinc-900/40"
            >
              {/* Period column */}
              <div className="flex md:flex-col items-start gap-2 md:gap-1.5 pt-1">
                <div className="flex items-center gap-1.5 text-sm text-zinc-400 font-medium">
                  <Calendar size={14} className="text-indigo-300" />
                  <span>{exp.period}</span>
                </div>
                {exp.current && (
                  <span className="px-2 py-0.5 bg-indigo-500/15 text-indigo-300 border border-indigo-500/30 text-xs font-medium rounded-full w-fit">
                    현재
                  </span>
                )}
              </div>

              {/* Content column */}
              <div>
                <h3 className="font-bold text-xl tracking-tight mb-1 text-zinc-50">
                  {exp.company}
                </h3>
                <p className="text-indigo-300 text-sm font-medium mb-3">
                  {exp.position}
                </p>
                <p className="text-zinc-400 mb-4 leading-relaxed">
                  {exp.description}
                </p>

                <div className="space-y-2 mb-4">
                  {exp.projects.map((project, pIndex) => (
                    <div
                      key={pIndex}
                      className="flex items-start gap-2 text-sm text-zinc-400"
                    >
                      <Briefcase size={14} className="mt-1 flex-shrink-0 text-zinc-600" />
                      <span>{project}</span>
                    </div>
                  ))}
                </div>

                {exp.techStack && (
                  <div className="flex flex-wrap gap-1.5">
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

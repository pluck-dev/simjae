"use client";

import { Code2, Layers, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "풀스택 개발",
    description: "프론트엔드부터 백엔드까지 전체 개발",
  },
  {
    icon: Layers,
    title: "모던 스택",
    description: "Next.js 15/16, React 19, TypeScript",
  },
  {
    icon: Rocket,
    title: "성능 최적화",
    description: "최적화된 UX와 빠른 로딩 속도",
  },
];

const skills = {
  frontend: [
    "Next.js 14/15/16",
    "React 18/19",
    "TypeScript",
    "Tailwind CSS",
    "shadcn/ui",
    "Zustand",
    "TanStack Query",
    "Framer Motion",
  ],
  backend: [
    "NestJS",
    "Node.js",
    "Python",
    "FastAPI",
    "PostgreSQL",
    "Prisma",
    "Supabase",
    "GraphQL",
    "REST API",
    "JWT Auth",
  ],
  mobile: [
    "React Native",
    "Expo",
    "Flutter",
  ],
  tools: [
    "Git",
    "Docker",
    "Vercel",
    "Railway",
    "PortOne",
    "Toss Payments",
  ],
};

export default function About() {
  return (
    <>
      <section id="about" className="py-24 bg-gray-50/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-blue-600 mb-3">
              About Me
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">소개</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              코드를 통해 최고의 사용자 경험을 전달합니다
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 section-title">About Me</h3>
              <p className="text-lg text-blue-600 font-medium mb-4">
                "AI와 함께 만드는 개발자, 심재형입니다."
              </p>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  스타트업 5년차, 5번의 이직을 거치며 기획부터 디자인, 개발, 마케팅까지
                  서비스의 전 과정을 경험했습니다. 월급이 밀리기도 하고, 회사가 망하기도
                  했지만, 그 과정에서 "혼자서도 서비스를 만들어낼 수 있는 개발자"로
                  성장했습니다.
                </p>
                <p>
                  프론트엔드를 중심으로 백엔드, 모바일까지 다루며, AI 도구를 적극 활용해
                  기획-디자인-개발을 혼자서도 빠르게 완성합니다. 빠른 실행력과 다양한
                  경험을 바탕으로, 작은 팀에서도 큰 임팩트를 만들어낼 수 있습니다.
                </p>
              </div>
            </div>

            <div className="grid gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover-card"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-blue-600 mb-3">
              Tech Stack
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">기술 스택</h2>
            <p className="text-gray-600">사용하는 기술들</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full" />
                Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <span className="w-2 h-2 bg-green-600 rounded-full" />
                Backend
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-green-50 text-green-700 rounded-full text-sm font-medium hover:bg-green-100 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-600 rounded-full" />
                Mobile
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.mobile.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-purple-50 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-100 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-600 rounded-full" />
                Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-orange-50 text-orange-700 rounded-full text-sm font-medium hover:bg-orange-100 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

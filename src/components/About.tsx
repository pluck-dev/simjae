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

const skillStyles = {
  frontend: { dot: "bg-indigo-400", chip: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20 hover:border-indigo-400/40" },
  backend: { dot: "bg-emerald-400", chip: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20 hover:border-emerald-400/40" },
  mobile: { dot: "bg-purple-400", chip: "bg-purple-500/10 text-purple-300 border-purple-500/20 hover:border-purple-400/40" },
  tools: { dot: "bg-orange-400", chip: "bg-orange-500/10 text-orange-300 border-orange-500/20 hover:border-orange-400/40" },
};

export default function About() {
  return (
    <>
      <section id="about" className="py-24 bg-[#0d0d0f] border-y border-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-indigo-300 mb-3">
              About Me
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-50">소개</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              코드를 통해 최고의 사용자 경험을 전달합니다
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 section-title text-zinc-50">About Me</h3>
              <p className="text-lg text-indigo-300 font-medium mb-4">
                &ldquo;AI와 함께 만드는 개발자, 심재형입니다.&rdquo;
              </p>
              <div className="space-y-4 text-zinc-400 leading-relaxed">
                <p>
                  스타트업 5년차, 5번의 이직을 거치며 기획부터 디자인, 개발, 마케팅까지
                  서비스의 전 과정을 경험했습니다. 월급이 밀리기도 하고, 회사가 망하기도
                  했지만, 그 과정에서 &ldquo;혼자서도 서비스를 만들어낼 수 있는 개발자&rdquo;로
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
                  className="p-6 bg-zinc-900/60 backdrop-blur rounded-2xl border border-zinc-800 hover-card"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-indigo-500/10 border border-indigo-500/20 rounded-xl text-indigo-300">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1 text-zinc-100">{item.title}</h4>
                      <p className="text-zinc-400 text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-24 bg-[#0a0a0b]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-indigo-300 mb-3">
              Tech Stack
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-50">기술 스택</h2>
            <p className="text-zinc-400">사용하는 기술들</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(Object.keys(skills) as Array<keyof typeof skills>).map((category) => {
              const styles = skillStyles[category];
              const labelMap: Record<string, string> = {
                frontend: "Frontend",
                backend: "Backend",
                mobile: "Mobile",
                tools: "Tools",
              };
              return (
                <div key={category} className="space-y-4">
                  <h3 className="font-semibold text-lg flex items-center gap-2 text-zinc-100">
                    <span className={`w-2 h-2 rounded-full ${styles.dot}`} />
                    {labelMap[category]}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills[category].map((skill) => (
                      <span
                        key={skill}
                        className={`px-3 py-1.5 border rounded-full text-sm font-medium transition-colors ${styles.chip}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

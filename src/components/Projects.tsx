"use client";

import { ExternalLink, Globe, Smartphone, Server, Github, Building2, Users } from "lucide-react";

// 정규 프로젝트 (회사)
const companyProjects = [
  // 애드락애드버테인먼트
  {
    title: "도로로 앱",
    subtitle: "운전면허 연습 & 분석 앱",
    company: "애드락애드버테인먼트",
    description: "실차 운전 연습 및 운전 능력 분석을 제공하는 React Native 앱. 100% 단독 개발",
    tags: ["React Native", "Expo", "Firebase", "Supabase", "Google Maps"],
    type: "mobile",
    featured: true,
    highlights: ["소셜 로그인 (Kakao, Naver, Google)", "위치 기반 매장 검색", "운전 데이터 분석 차트", "QR코드 인식 & 카메라 촬영"],
    link: "https://play.google.com/store/apps/details?id=kr.co.dororo&hl=ko",
  },
  {
    title: "드라이빙존 웹 리뉴얼",
    subtitle: "SEO 기반 웹앱",
    company: "애드락애드버테인먼트",
    description: "기존 운전면허플러스 웹을 Next.js 기반으로 전면 리뉴얼. SEO 최적화 및 신규 도메인 개발",
    tags: ["Next.js", "TypeScript", "Zustand", "TailwindCSS"],
    type: "web",
    featured: true,
    highlights: ["SEO 최적화", "관리자 페이지 개발", "이벤트 도메인 개발", "쿠폰 선물하기 기능"],
    link: "https://www.drivingzone.co.kr/",
  },
  {
    title: "블록픽 플랫폼",
    subtitle: "블록체인 게임 플랫폼",
    company: "애드락애드버테인먼트",
    description: "블록 선택 생존 경쟁 게임형 플랫폼. MetaMask 지갑 연동 및 폴리곤 블록체인 데이터 기록",
    tags: ["Flutter", "Dart", "MetaMask", "Polygon", "Firebase"],
    type: "mobile",
    featured: false,
    highlights: ["MetaMask 지갑 연동", "블록체인(폴리곤) 데이터 기록", "BP 포인트 시스템"],
    link: "https://app-blockpick.vercel.app/",
  },
  {
    title: "운전면허플러스 Android 리뉴얼",
    subtitle: "네이티브 앱 퍼블리싱",
    company: "애드락애드버테인먼트",
    description: "운영 중인 Android 앱 전면 UI 개편. XML 기반 전면 퍼블리싱",
    tags: ["Android Studio", "XML", "Kotlin"],
    type: "mobile",
    featured: false,
    highlights: ["전면 UI 개편", "XML 기반 퍼블리싱"],
    link: "https://play.google.com/store/apps/details?id=com.adrock.driverlicense300&hl=ko",
  },
  // 아이비씨티
  {
    title: "GETBIT",
    subtitle: "BTC 경매 시스템",
    company: "아이비씨티",
    description: "BTC 경매 시스템. 클라이언트/관리자 전 페이지 개발. 프론트엔드 리드 개발자로 참여",
    tags: ["React", "Next.js", "React Query", "GraphQL", "Framer Motion"],
    type: "web",
    featured: true,
    highlights: ["클라이언트(FO) & 관리자(BO) 전체 개발", "트론 & LEDGIS 블록체인 연동", "딥링크/QR 월렛 서명", "실시간 경매 타이머"],
    link: "https://project-getbit-front-git-develop-ibct.vercel.app/",
  },
  {
    title: "밀리스타 [MIL]",
    subtitle: "주한미군 콜택시 서비스 앱",
    company: "아이비씨티",
    description: "USFK(주한미군) 전용 콜택시 & 렌트 서비스 모바일 앱. 기획 및 프론트엔드 개발 담당",
    tags: ["React Native", "Naver Maps", "PayPal", "GIS"],
    type: "mobile",
    featured: true,
    highlights: ["캐리(콜택시) & 렌트 기능", "PayPal 결제 연동", "GIS 위치 기반 서비스", "기획문서 전체 작성"],
  },
  // 방배동밸리
  {
    title: "아더에러 자사몰",
    subtitle: "패션 브랜드 커머스",
    company: "방배동밸리",
    description: "글로벌 패션 브랜드 아더에러 자사몰 구축. 카페24 분리 후 자체 시스템 개발. 프론트엔드 리드",
    tags: ["JavaScript", "Tailwind CSS", "i18n", "Google Maps"],
    type: "web",
    featured: true,
    highlights: ["클라이언트/관리자 전체 퍼블리싱", "반응형 웹 & 다국어 지원", "드래그앤드롭 상품 진열"],
    link: "http://116.124.128.246/",
  },
  {
    title: "와인SNS",
    subtitle: "주류 커뮤니티 앱",
    company: "방배동밸리",
    description: "주류 커뮤니티 어플리케이션. 전 페이지 퍼블리싱 및 TailwindCSS 적용",
    tags: ["JavaScript", "Tailwind CSS", "Swiper.js", "FullCalendar"],
    type: "mobile",
    featured: false,
    highlights: ["전 페이지 퍼블리싱", "Swiper.js & FullCalendar 연동"],
  },
  // 디어플로리스트
  {
    title: "동네꽃집",
    subtitle: "꽃집-소비자 중계 플랫폼",
    company: "디어플로리스트",
    description: "꽃집과 소비자를 연결하는 중계 플랫폼. 클라이언트 전 페이지 개발 및 스페셜오더 채팅봇 구현",
    tags: ["Java", "JavaScript", "PHP", "MySQL", "jQuery"],
    type: "web",
    featured: false,
    highlights: ["무한스크롤 (Intersection Observer)", "스페셜오더 채팅봇", "Vendor 대시보드"],
  },
  // 룩인사이트
  {
    title: "약올려",
    subtitle: "의약품 중계 플랫폼",
    company: "룩인사이트",
    description: "의약품 중계 플랫폼 개발 및 웹 유지보수. 카카오 알림톡 연동 및 SNS 로그인 구현",
    tags: ["Java", "Spring MVC", "jQuery", "비지톡 API"],
    type: "web",
    featured: false,
    highlights: ["카카오 알림톡 연동", "카카오톡 SNS 로그인", "메인 페이지 리뉴얼"],
    link: "https://www.yakollyeo.com/",
  },
];

// 외주 프로젝트
const freelanceProjects = [
  {
    title: "NDrop",
    subtitle: "디지털 명함 플랫폼",
    description: "QR 코드 기반 명함 교환 및 네트워킹 이벤트 B2B/B2C 플랫폼",
    tags: ["Next.js 15", "Supabase", "JWT", "Framer Motion"],
    type: "web",
    highlights: ["QR 코드 생성/스캔", "OAuth 연동", "통합 인증"],
    link: "https://www.ndrop.kr/",
  },
  {
    title: "칼가는곳",
    subtitle: "칼 연마 서비스 앱",
    description: "칼 연마 서비스를 위한 예약, 주문 추적, 구독 관리 모바일 웹 앱",
    tags: ["Next.js 15", "JWT Cookie", "SMS 인증", "Google Maps"],
    type: "web",
    highlights: ["예약 시스템", "주문 추적", "구독 관리"],
    link: "https://www.xn--o39a1r88koy7a.com/",
  },
  {
    title: "DVIA",
    subtitle: "기업 웹사이트",
    description: "진동절연 시스템 전문 기업의 글로벌 웹사이트. 제품 소개, 뉴스룸, 견적 문의",
    tags: ["Next.js 14", "Three.js", "GSAP", "다국어"],
    type: "web",
    highlights: ["3D 시각화", "고급 애니메이션", "영/한 다국어"],
    link: "https://web-daeilsys-v2.vercel.app/",
  },
  {
    title: "정푸드",
    subtitle: "식자재 관리 시스템",
    description: "식자재 유통 관리 시스템. 상품 관리, 주문 처리, 견적 생성",
    tags: ["Next.js 15", "Supabase", "TanStack Query", "dnd-kit"],
    type: "web",
    highlights: ["드래그앤드롭 정렬", "견적 생성", "주문 처리"],
    link: "https://admin-murex-pi.vercel.app/products",
  },
  {
    title: "바야다 코리아",
    subtitle: "간병 서비스 플랫폼",
    description: "간병인-환자 매칭 및 일정 관리 플랫폼",
    tags: ["Next.js 15", "Supabase", "React Hook Form", "Zod"],
    type: "web",
    highlights: ["매칭 시스템", "일정 관리", "리뷰 시스템"],
    link: "https://bayada-web.vercel.app/",
  },
  {
    title: "Pando",
    subtitle: "피트니스 CRM 플랫폼",
    description: "헬스장 통합 관리 CRM. 어드민 + 트레이너용 모바일 클라이언트로 구성",
    tags: ["Next.js", "Prisma", "Supabase", "FullCalendar"],
    type: "fullstack",
    highlights: ["어드민 + 모바일 클라이언트 분리", "스케줄/회원/매출 관리", "데이터 Import/Export"],
    link: "https://admin-pando.vercel.app/",
  },
  {
    title: "보령항공여행사",
    subtitle: "여행사 공식 웹사이트",
    description: "Turbo 모노레포 + Prisma + Playwright E2E 테스트 환경 구축",
    tags: ["Next.js", "Turbo", "Prisma", "Playwright"],
    type: "web",
    highlights: ["Turbo 모노레포 구성", "Prisma DB 모델링", "Playwright E2E"],
    link: "https://www.boryoung.co.kr/",
  },
  {
    title: "카영",
    subtitle: "다이렉트 보험 플랫폼",
    description: "다이렉트 보험 서비스 플랫폼. 랜딩 + 어드민 + 딜러용 클라이언트 3분할 구성",
    tags: ["Next.js", "TypeScript", "TailwindCSS"],
    type: "fullstack",
    highlights: ["랜딩/어드민/딜러 3분할", "보험 견적 시스템", "딜러 관리"],
    link: "https://landing-phi-smoky.vercel.app/",
  },
  {
    title: "Auth-Onboarding",
    subtitle: "모듈형 인증 라이브러리",
    description: "재사용 가능한 인증/온보딩 시스템 라이브러리. 3계층 아키텍처 + SMS Factory 패턴",
    tags: ["TypeScript", "Next.js", "JWT", "SMS"],
    type: "library",
    highlights: ["3계층 아키텍처", "SMS Factory 패턴", "모듈형 재사용 설계"],
  },
  {
    title: "Instagram 카드뉴스 생성기",
    subtitle: "AI 콘텐츠 자동화",
    description: "8가지 템플릿 스타일, Puppeteer HTML→PNG 변환, AI 에이전트 기반 자동 콘텐츠 생성",
    tags: ["Node.js", "Puppeteer", "AI Agent", "TypeScript"],
    type: "fullstack",
    highlights: ["8가지 템플릿 스타일", "HTML→PNG 변환", "AI 자동 콘텐츠"],
  },
];

// 개인 프로젝트
const personalProjects = [
  {
    title: "몇기야",
    subtitle: "ROTC 동기 커뮤니티 플랫폼",
    description: "ROTC 동문 네트워킹 플랫폼. 동기 찾기, 비즈니스 네트워크, 커뮤니티, 채팅, 블로그, 모임 관리 기능",
    tags: ["Next.js 16", "Supabase", "TipTap", "React Query"],
    type: "web",
    featured: true,
    highlights: ["동기 검색 & 네트워킹", "리치 텍스트 블로그", "실시간 채팅"],
    link: "https://www.myotgiya.com/",
  },
  {
    title: "플럭 드로우",
    subtitle: "추첨/경품 추첨 앱",
    description: "QR코드 기반 이벤트 추첨 및 경품 당첨 관리 웹 앱. 초대코드, 게임, 예약 기능",
    tags: ["Next.js 16", "Supabase", "QRCode", "Confetti"],
    type: "web",
    featured: true,
    highlights: ["QR코드 생성/스캔", "실시간 추첨 애니메이션", "관리자 대시보드"],
    link: "https://draw.pluck.co.kr/",
  },
  {
    title: "플럭 랜딩",
    subtitle: "에이전시 랜딩 페이지",
    description: "개인 프리랜서 에이전시 소개 랜딩 페이지. 3D 그래픽, 애니메이션, 다크모드, 다국어 지원",
    tags: ["Next.js 14", "Three.js", "Framer Motion", "i18n"],
    type: "web",
    highlights: ["3D 인터랙티브 그래픽", "스크롤 애니메이션", "다국어 지원"],
    link: "https://www.pluck.co.kr/",
  },
  {
    title: "시니어 케어",
    subtitle: "시니어 돌봄 관리 앱",
    description: "시니어 케어 관리 앱. AI 기반 분석, 차트 시각화, 다국어(i18n) 지원",
    tags: ["Next.js 16", "OpenAI", "Chart.js", "next-intl"],
    type: "web",
    highlights: ["OpenAI 연동", "차트 시각화", "다국어 지원"],
    link: "https://senior-hazel.vercel.app/",
  },
  {
    title: "Threads 자동화",
    subtitle: "SNS 자동화 도구",
    description: "Threads 자동화 도구. 자동 좋아요, 팔로우, 댓글. 봇 감지 우회 및 웹 대시보드",
    tags: ["TypeScript", "Playwright", "Electron", "Express"],
    type: "fullstack",
    highlights: ["봇 감지 우회", "웹 대시보드", "Electron 데스크탑 앱"],
  },
  {
    title: "쿠팡 소싱 자동화",
    subtitle: "이커머스 마진 분석 도구",
    description: "쿠팡 셀러를 위한 상품 분석 & 중국 소싱 자동화. 쿠팡/테무/알리/1688 크롤링 및 마진 계산",
    tags: ["Python", "Playwright", "Flask", "BeautifulSoup"],
    type: "fullstack",
    highlights: ["멀티 플랫폼 크롤링", "마진 자동 계산", "웹 대시보드"],
  },
  {
    title: "Plane 프로젝트 자동화",
    subtitle: "AI 기획 자동화 도구",
    description: "Claude Code + Plane.so 연동 프로젝트 기획 자동화. 마크다운 기획서 → Plane 이슈 자동 생성",
    tags: ["Python", "Claude API", "Plane API", "Markdown"],
    type: "library",
    highlights: ["AI 기획서 생성", "Plane 자동 업로드", "스프린트 자동 구성"],
  },
  {
    title: "뉴딜리티",
    subtitle: "AI 컨설팅 에이전시",
    description: "AI 기반 비즈니스 컨설팅 및 솔루션 제공 에이전시 웹사이트",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
    type: "web",
    featured: true,
    highlights: ["AI 컨설팅 서비스", "반응형 디자인", "모던 UI/UX"],
    link: "https://newdility.com/",
  },
  {
    title: "모두카",
    subtitle: "차량 서비스 플랫폼",
    description: "차량 관련 종합 서비스 플랫폼",
    tags: ["Next.js", "TypeScript", "TailwindCSS"],
    type: "web",
    highlights: ["차량 서비스", "반응형 웹"],
    link: "https://modoo-three.vercel.app/",
  },
  {
    title: "크립토 시그널",
    subtitle: "암호화폐 시그널 플랫폼",
    description: "암호화폐 거래 시그널 및 분석 정보 제공 플랫폼",
    tags: ["Next.js", "Python", "FastAPI", "Railway"],
    type: "fullstack",
    highlights: ["시그널 알림", "차트 분석", "실시간 데이터"],
    link: "https://www.cryptopluck.com/",
  },
  {
    title: "조광 모바일 메뉴판",
    subtitle: "디지털 메뉴판",
    description: "식당용 모바일 디지털 메뉴판 서비스",
    tags: ["Next.js", "TypeScript", "TailwindCSS"],
    type: "web",
    highlights: ["모바일 최적화", "메뉴 관리"],
    link: "https://v0-recreate-ui-screenshot-hh.vercel.app/",
  },
  {
    title: "인사 플랫폼",
    subtitle: "HR 관리 시스템",
    description: "기업용 인사 관리 대시보드 및 HR 솔루션",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Recharts"],
    type: "web",
    highlights: ["대시보드", "인사 관리", "데이터 시각화"],
    link: "https://v0-hr-master-website.vercel.app/dashboard",
  },
];

// 포트폴리오 작업물
const portfolioWorks = [
  { title: "인사 플랫폼", description: "HR 관리 시스템", link: "https://v0-hr-master-website.vercel.app/" },
  { title: "정육점 사이트", description: "정육 쇼핑몰", link: "https://v0--rust-seven.vercel.app/" },
  { title: "법률사무소", description: "법률 서비스 웹사이트", link: "https://v0-law-firm-website-design-three.vercel.app/" },
  { title: "장례식장", description: "장례 서비스 웹사이트", link: "https://v0-funeral-page-design.vercel.app/" },
  { title: "한상스테이", description: "숙박 브랜딩 웹사이트", link: "https://v0-ml0d3l.vercel.app/" },
  { title: "따우전스 브랜딩", description: "브랜드 웹사이트", link: "https://v0-customizing-korean-website.vercel.app/" },
  { title: "견적서 템플릿", description: "견적서 생성 도구", link: "https://v0-proposal-document-creation.vercel.app/" },
  { title: "모바일 청첩장", description: "디지털 청첩장 서비스", link: "https://v0-mobile-wedding-invitation-ochre.vercel.app/" },
  { title: "분양 사무소", description: "부동산 분양 웹사이트", link: "https://v0-handphone-mockups.vercel.app/" },
];

const typeIcons = {
  web: Globe,
  mobile: Smartphone,
  fullstack: Server,
  library: Github,
};

const typeColors = {
  web: "bg-blue-50 text-blue-600",
  mobile: "bg-purple-50 text-purple-600",
  fullstack: "bg-green-50 text-green-600",
  library: "bg-orange-50 text-orange-600",
};

// 회사별로 프로젝트 그룹화
const projectsByCompany = {
  "애드락애드버테인먼트": companyProjects.filter(p => p.company === "애드락애드버테인먼트"),
  "아이비씨티": companyProjects.filter(p => p.company === "아이비씨티"),
  "방배동밸리": companyProjects.filter(p => p.company === "방배동밸리"),
  "디어플로리스트": companyProjects.filter(p => p.company === "디어플로리스트"),
  "룩인사이트": companyProjects.filter(p => p.company === "룩인사이트"),
};

const companyColors = {
  "애드락애드버테인먼트": "border-blue-500",
  "아이비씨티": "border-purple-500",
  "방배동밸리": "border-green-500",
  "디어플로리스트": "border-pink-500",
  "룩인사이트": "border-orange-500",
};

const companyCardBorder = {
  "애드락애드버테인먼트": "border-l-blue-500",
  "아이비씨티": "border-l-purple-500",
  "방배동밸리": "border-l-green-500",
  "디어플로리스트": "border-l-pink-500",
  "룩인사이트": "border-l-orange-500",
};

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-blue-600 mb-3">
            Selected Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">프로젝트</h2>
          <p className="text-gray-600">정규, 외주, 개인 프로젝트 모음</p>
        </div>

        {/* Company Projects by Company */}
        <div className="mb-16">
          <div className="mb-8">
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-blue-600 mb-2">
              In-House
            </p>
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Building2 size={20} className="text-blue-600" />
              회사 프로젝트
            </h3>
          </div>

          {Object.entries(projectsByCompany).map(([company, projects]) => (
            <div key={company} className="mb-12">
              <h4 className={`text-lg font-semibold mb-6 pl-4 border-l-4 ${companyColors[company as keyof typeof companyColors]}`}>
                {company}
              </h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => {
                  const Icon = typeIcons[project.type as keyof typeof typeIcons];
                  const colorClass = typeColors[project.type as keyof typeof typeColors];
                  const cardBorder = companyCardBorder[company as keyof typeof companyCardBorder];

                  return (
                    <div
                      key={index}
                      className={`group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 border-l-4 ${cardBorder} hover-card relative ${
                        project.featured ? "ring-2 ring-blue-100" : ""
                      }`}
                    >
                      <span className="absolute top-3 right-3 px-2 py-0.5 bg-blue-50 text-blue-700 border border-blue-100 text-[10px] font-semibold tracking-wider rounded">
                        회사
                      </span>
                      <div className="flex items-center gap-3 mb-3 pr-12">
                        <div className={`p-2 rounded-lg ${colorClass}`}>
                          <Icon size={18} />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-bold">{project.title}</h4>
                            {project.featured && (
                              <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                                주요
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-gray-500">{project.subtitle}</p>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      {project.highlights && (
                        <div className="space-y-1 mb-4">
                          {project.highlights.slice(0, 2).map((h, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs text-gray-500">
                              <span className="w-1 h-1 bg-blue-600 rounded-full" />
                              {h}
                            </div>
                          ))}
                        </div>
                      )}
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-1.5">
                          {project.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 bg-gray-100 text-gray-500 rounded text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
                          >
                            <ExternalLink size={16} className="text-gray-400 hover:text-blue-600" />
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Freelance Projects */}
        <div className="mb-16">
          <div className="mb-8">
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-purple-600 mb-2">
              Freelance
            </p>
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Users size={20} className="text-purple-600" />
              외주 프로젝트
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {freelanceProjects.map((project, index) => {
              const Icon = typeIcons[project.type as keyof typeof typeIcons];
              const colorClass = typeColors[project.type as keyof typeof typeColors];

              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 border-l-4 border-l-purple-500 hover-card relative"
                >
                  <span className="absolute top-3 right-3 px-2 py-0.5 bg-purple-50 text-purple-700 border border-purple-100 text-[10px] font-semibold tracking-wider rounded">
                    외주
                  </span>
                  <div className="flex items-center gap-3 mb-4 pr-12">
                    <div className={`p-2 rounded-lg ${colorClass}`}>
                      <Icon size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold">{project.title}</h4>
                      <p className="text-xs text-gray-500">{project.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="space-y-1 mb-4">
                    {project.highlights.slice(0, 2).map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-gray-500">
                        <span className="w-1 h-1 bg-purple-600 rounded-full" />
                        {h}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 bg-purple-50 text-purple-600 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <ExternalLink size={16} className="text-gray-400 hover:text-purple-600" />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Personal Projects */}
        <div className="mb-16">
          <div className="mb-8">
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-orange-600 mb-2">
              Side Projects
            </p>
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Github size={20} className="text-orange-600" />
              개인 프로젝트
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {personalProjects.map((project, index) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 border-l-4 border-l-orange-500 hover-card relative ${
                  project.featured ? "ring-2 ring-orange-100" : ""
                }`}
              >
                <span className="absolute top-3 right-3 px-2 py-0.5 bg-orange-50 text-orange-700 border border-orange-100 text-[10px] font-semibold tracking-wider rounded">
                  개인
                </span>
                <div className="flex items-center gap-3 mb-4 pr-12">
                  <div className="p-2 rounded-lg bg-orange-50 text-orange-600">
                    <Github size={18} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold">{project.title}</h4>
                      {project.featured && (
                        <span className="px-2 py-0.5 bg-orange-100 text-orange-700 text-xs font-medium rounded-full">
                          주요
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-500">{project.subtitle}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                <div className="space-y-1 mb-4">
                  {project.highlights.slice(0, 2).map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-gray-500">
                      <span className="w-1 h-1 bg-orange-600 rounded-full" />
                      {h}
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-orange-50 text-orange-600 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <ExternalLink size={16} className="text-gray-400 hover:text-orange-600" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Portfolio Works */}
        <div>
          <div className="mb-8">
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-gray-500 mb-2">
              More Works
            </p>
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Globe size={20} className="text-gray-600" />
              포트폴리오 작업물
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {portfolioWorks.map((work, index) => (
              <a
                key={index}
                href={work.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group flex flex-col justify-between"
              >
                <div>
                  <h4 className="font-medium text-sm group-hover:text-blue-600 transition-colors">
                    {work.title}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">{work.description}</p>
                </div>
                <ExternalLink size={14} className="text-gray-300 group-hover:text-blue-500 mt-2 transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

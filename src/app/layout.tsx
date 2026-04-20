import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://hello-simjae.vercel.app";

export const metadata: Metadata = {
  title: "심재형 | Fullstack Developer",
  description: "AI와 함께 만드는 개발자, 심재형입니다. Next.js, React, TypeScript, Python 기반 풀스택 개발자 포트폴리오",
  keywords: [
    "심재형",
    "프론트엔드 개발자",
    "풀스택 개발자",
    "React",
    "Next.js",
    "TypeScript",
    "Python",
    "FastAPI",
    "React Native",
    "Flutter",
  ],
  authors: [{ name: "심재형", url: siteUrl }],
  creator: "심재형",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "심재형 | Fullstack Developer",
    description: "AI와 함께 만드는 개발자, 심재형입니다. 스타트업 5년차, 기획부터 개발까지 혼자서도 서비스를 만들어내는 풀스택 개발자",
    url: siteUrl,
    siteName: "심재형 포트폴리오",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "심재형 - Fullstack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "심재형 | Fullstack Developer",
    description: "AI와 함께 만드는 개발자, 심재형입니다. Next.js, React, TypeScript 풀스택 개발자",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0b] text-zinc-100`}
      >
        {children}
      </body>
    </html>
  );
}

"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown, Github, Mail } from "lucide-react";

const techStack = [
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#000000" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Node.js", color: "#339933" },
  { name: "Tailwind", color: "#06B6D4" },
];

const floatingIcons = [
  { icon: "⚛️", x: "10%", y: "20%", delay: 0 },
  { icon: "🚀", x: "85%", y: "15%", delay: 0.5 },
  { icon: "💻", x: "75%", y: "70%", delay: 1 },
  { icon: "⚡", x: "15%", y: "75%", delay: 1.5 },
  { icon: "🎨", x: "90%", y: "45%", delay: 2 },
  { icon: "📱", x: "5%", y: "50%", delay: 2.5 },
];

const roles = ["Fullstack Developer", "React Specialist", "AI-Powered Builder"];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  // Typing effect
  useEffect(() => {
    const currentText = roles[currentRole];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  // Mouse parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        mouseX.set(x * 50);
        mouseY.set(y * 50);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const backgroundX = useTransform(smoothX, (v) => v * -1);
  const backgroundY = useTransform(smoothY, (v) => v * -1);

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0a0a0b]"
    >
      {/* Grid pattern background */}
      <div className="absolute inset-0 -z-10 bg-grid bg-grid-mask" />

      {/* Animated glow orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl"
          style={{ x: backgroundX, y: backgroundY }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          style={{ x: useTransform(smoothX, (v) => v * 1.5), y: useTransform(smoothY, (v) => v * 1.5) }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.55, 0.4],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-indigo-500/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Floating icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute text-3xl select-none pointer-events-none hidden md:block"
          style={{ left: item.x, top: item.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 1.2, 1],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: item.delay,
          }}
        >
          {item.icon}
        </motion.div>
      ))}

      <div className="max-w-6xl mx-auto px-6 py-20 text-center relative z-10">
        {/* Main content with staggered animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Role badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-400/20 text-indigo-300 rounded-full text-sm font-medium">
              <motion.span
                className="w-2 h-2 bg-green-500 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              Available for work
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-[1.2] md:leading-tight px-2 text-zinc-50"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            안녕하세요,{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                심재형
              </span>
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-3 bg-indigo-500/30 -z-10 rounded"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
            </span>
            <span className="whitespace-nowrap">입니다</span>
          </motion.h1>

          {/* Typing effect */}
          <motion.div
            className="h-10 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-xl md:text-2xl text-zinc-400">
              <span className="text-indigo-300 font-semibold">{displayText}</span>
              <motion.span
                className="inline-block w-0.5 h-6 bg-indigo-400 ml-1"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-lg text-zinc-400 mb-10 max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            AI와 함께 빠르게 만들고, 끝까지 완성합니다
          </motion.p>

          {/* Tech stack pills */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {techStack.map((tech, index) => (
              <motion.span
                key={tech.name}
                className="px-4 py-2 bg-zinc-900/70 backdrop-blur rounded-full text-sm font-medium text-zinc-200 border border-zinc-800 hover:border-indigo-500/40 hover:-translate-y-1 transition-all cursor-default"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                style={{ borderLeftColor: tech.color, borderLeftWidth: 3 }}
              >
                {tech.name}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.a
            href="#projects"
            className="group px-8 py-4 bg-indigo-500 text-white rounded-full font-medium relative overflow-hidden shadow-[0_0_30px_rgba(99,102,241,0.35)] hover:shadow-[0_0_40px_rgba(99,102,241,0.55)] transition-shadow"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">프로젝트 보기</span>
            <motion.div
              className="absolute inset-0 bg-indigo-400"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
          <motion.a
            href="#contact"
            className="px-8 py-4 border border-zinc-700 text-zinc-300 rounded-full font-medium hover:border-indigo-400 hover:text-indigo-300 hover:bg-white/[0.02] transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            연락하기
          </motion.a>
        </motion.div>

        {/* Social links */}
        <motion.div
          className="flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <motion.a
            href="https://github.com/pluck-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-zinc-900/60 backdrop-blur border border-zinc-800 text-zinc-400 hover:text-white hover:border-indigo-400 transition-all duration-300"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            aria-label="GitHub"
          >
            <Github size={20} />
          </motion.a>
          <motion.a
            href="mailto:hello@pluck.co.kr"
            className="p-3 rounded-full bg-zinc-900/60 backdrop-blur border border-zinc-800 text-zinc-400 hover:text-white hover:border-indigo-400 transition-all duration-300"
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Email"
          >
            <Mail size={20} />
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1.5 },
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-zinc-500 hover:text-indigo-300 transition-colors"
            aria-label="Scroll down"
          >
            <span className="text-xs font-medium tracking-widest">SCROLL</span>
            <ArrowDown size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

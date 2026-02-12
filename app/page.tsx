"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { motion, useScroll, useSpring } from "framer-motion"
import { useEffect, useState } from "react"

const skills = {
  languages: ["C++", "JavaScript", "C", "Python", "HTML", "CSS"],
  tools: ["MySQL", "AWS", "Oracle"],
  soft: ["Adaptability", "Communication Skills", "Team work"],
}

const projects = [
  {
    title: "Dynamic Memory Allocation",
    date: "March 2025",
    highlights: [
      "Demonstrated efficient memory management by allocating, resizing, and freeing memory at runtime, ensuring optimal utilization of system resources and preventing memory leaks.",
      "Decreased program crashes related to segmentation faults by 80% through safe pointer handling practices.",
      "Optimized runtime memory utilization by implementing dynamic memory allocation, reducing memory wastage by approximately 25–30% compared to static allocation.",
    ],
    linkLabel: "GitHub",
    linkUrl: "https://github.com/khushichaudhary9983/Dynamic-Memory-Allocation",
  },
]

const trainings = [
  {
    title: "Cloud Computing Fundamentals and AWS Services",
    date: "June–July 2025",
    details: [
      "Developed a strong foundation in cloud computing concepts, focusing on cloud architecture, deployment models, and service models (IaaS, PaaS, SaaS), while gaining hands-on experience with AWS core services.",
      "Objective of this course is to gain practical experience in building and deploying scalable cloud solutions, managing cloud infrastructure, and implementing cloud security best practices.",
    ],
    linkLabel: "Link",
  },
]

const certificates = [
  {
    name: "Build Generative AI Apps and Solutions with No-Code Tools (Dec 2025)",
    pdfUrl: "/Build Generative AI Apps and Solutions with No-Code Tools.pdf"
  },
  {
    name: "ChatGPT-4 Prompt Engineering: ChatGPT, Generative AI & LLM (Aug 2025)",
    pdfUrl: "/ChatGPT-4 Prompt Engineering ChatGPT, Generative AI & LLM.pdf"
  },
  {
    name: "Master Generative AI & Generative AI tools (ChatGPT & more) (Aug 2025)",
    pdfUrl: "/Master Generative AI & Generative AI tools.pdf"
  },
  {
    name: "Computational Theory: Language Principle & Finite Automata Theory (Aug 2025)",
    pdfUrl: "/Computational Theory Language Principle & Finite Automata Theory.pdf"
  },
  {
    name: "The Bits and Bytes of Computer Networking (Sep 2024)",
    pdfUrl: "/Coursera Google.pdf"
  },
  {
    name: "Introduction to Hardware and Operating Systems (Sep 2024)",
    pdfUrl: "/Coursera IBM.pdf"
  },
]

const achievements = [
  "Participated in Symposium 2.0 Hackathon.",
  "Participated in Smart India Hackathon.",
]

const education = [
  {
    school: "Lovely Professional University, Kapurthala, Punjab",
    detail:
      "Bachelor of Technology - Computer Science and Engineering; CGPA: 7.02",
    date: "Since August 2023",
  },
  {
    school: "Anand Prep Public School, Muzaffarpur, Bihar",
    detail: "Intermediate; Percentage: 80.04%",
    date: "April 2021 - March 2023",
  },
  {
    school: "Holy Mission Sr. Sec. School, Muzaffarpur, Bihar",
    detail: "Matriculation; Percentage: 92%",
    date: "April 2020 - March 2021",
  },
]

export default function Home() {
  const [activeSection, setActiveSection] = useState("about")
  const [showScrollTop, setShowScrollTop] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["Home", "aboutme", "skills", "projects", "achievements", "training", "certificates", "education"]
      const scrollPosition = window.scrollY + 200

      setShowScrollTop(window.scrollY > 500)

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 text-slate-100 overflow-x-hidden">
      {/* Animated Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 right-1/3 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"
        />
      </div>
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 z-[100] origin-left shadow-lg shadow-indigo-500/50"
        style={{ scaleX }}
      />
      
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(99,102,241,0.15),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e520_1px,transparent_1px),linear-gradient(to_bottom,#4f46e520_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      {/* Floating Dock Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-4 left-1/2 z-50 -translate-x-1/2 w-[95vw] sm:w-auto sm:max-w-[95vw]"
      >
        <div className="flex items-center justify-center gap-0.5 overflow-x-auto rounded-2xl border-2 border-indigo-400/50 bg-gradient-to-r from-slate-900/90 via-indigo-900/80 to-slate-900/90 px-1.5 py-1.5 shadow-2xl shadow-indigo-500/30 backdrop-blur-2xl sm:gap-1 sm:px-3 sm:py-2 scrollbar-hide ring-1 ring-white/10">
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, "about")}
            className={`group relative flex-shrink-0 rounded-xl p-2 sm:px-3 sm:py-2 text-xs font-semibold transition-all duration-300 ${
              activeSection === "about"
                ? "bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/60"
                : "text-slate-300 hover:bg-white/10 hover:text-white hover:shadow-md"
            }`}
          >
            <span className="flex items-center gap-1">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="hidden sm:inline">Home</span>
            </span>
          </a>
          <a
            href="#skills"
            onClick={(e) => handleNavClick(e, "skills")}
            className={`group relative flex-shrink-0 rounded-xl p-2 sm:px-3 sm:py-2 text-xs font-semibold transition-all duration-300 ${
              activeSection === "skills"
                ? "bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/60"
                : "text-slate-300 hover:bg-white/10 hover:text-white hover:shadow-md"
            }`}
          >
            <span className="flex items-center gap-1">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <span className="hidden sm:inline">Skills</span>
            </span>
          </a>
          <a
            href="#projects"
            onClick={(e) => handleNavClick(e, "projects")}
            className={`group relative flex-shrink-0 rounded-xl p-2 sm:px-3 sm:py-2 text-xs font-semibold transition-all duration-300 ${
              activeSection === "projects"
                ? "bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/60"
                : "text-slate-300 hover:bg-white/10 hover:text-white hover:shadow-md"
            }`}
          >
            <span className="flex items-center gap-1">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              <span className="hidden sm:inline">Projects</span>
            </span>
          </a>
          <a
            href="#training"
            onClick={(e) => handleNavClick(e, "training")}
            className={`group relative flex-shrink-0 rounded-xl p-2 sm:px-3 sm:py-2 text-xs font-semibold transition-all duration-300 ${
              activeSection === "training"
                ? "bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/60"
                : "text-slate-300 hover:bg-white/10 hover:text-white hover:shadow-md"
            }`}
          >
            <span className="flex items-center gap-1">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span className="hidden sm:inline">Training</span>
            </span>
          </a>
          <a
            href="#certificates"
            onClick={(e) => handleNavClick(e, "certificates")}
            className={`group relative flex-shrink-0 rounded-xl p-2 sm:px-3 sm:py-2 text-xs font-semibold transition-all duration-300 ${
              activeSection === "certificates"
                ? "bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/60"
                : "text-slate-300 hover:bg-white/10 hover:text-white hover:shadow-md"
            }`}
          >
            <span className="flex items-center gap-1">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <span className="hidden sm:inline">Certs</span>
            </span>
          </a>
          <a
            href="#education"
            onClick={(e) => handleNavClick(e, "education")}
            className={`group relative flex-shrink-0 rounded-xl p-2 sm:px-3 sm:py-2 text-xs font-semibold transition-all duration-300 ${
              activeSection === "education"
                ? "bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/60"
                : "text-slate-300 hover:bg-white/10 hover:text-white hover:shadow-md"
            }`}
          >
            <span className="flex items-center gap-1">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
              <span className="hidden sm:inline">Education</span>
            </span>
          </a>
        </div>
      </motion.nav>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0.8,
          y: showScrollTop ? 0 : 20
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
        onClick={scrollToTop}
        className="fixed bottom-6 right-4 sm:bottom-8 sm:right-8 z-50 rounded-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 p-2.5 sm:p-3 shadow-2xl shadow-indigo-500/40 transition-all hover:shadow-xl hover:shadow-indigo-500/60 ring-2 ring-white/20"
        style={{ pointerEvents: showScrollTop ? 'auto' : 'none' }}
      >
        <svg className="h-5 w-5 sm:h-6 sm:w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative mx-auto flex w-full max-w-7xl flex-col gap-6 px-3 pt-20 pb-20 sm:px-6 sm:pt-24 sm:gap-8 lg:gap-10 lg:px-8"
        style={{ scrollBehavior: "smooth" }}
      >
        <motion.section
          id="about"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="group relative flex min-h-[90vh] sm:min-h-screen items-center overflow-hidden rounded-2xl border border-indigo-400/30 bg-gradient-to-br from-slate-900/80 via-indigo-950/60 to-purple-950/80 p-4 shadow-2xl shadow-indigo-500/20 backdrop-blur-md transition-all hover:shadow-indigo-500/30 sm:p-8 lg:p-12 lg:rounded-3xl ring-1 ring-white/5"
        >
          <div className="absolute -right-12 -top-12 h-96 w-96 rounded-full bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 blur-3xl animate-pulse" />
          <div className="absolute -bottom-12 -left-12 h-96 w-96 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-3xl animate-pulse" />
          <div className="relative w-full">
            <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:gap-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-6"
            >
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="secondary" className="bg-indigo-500/20 text-indigo-200 border-indigo-400/30">
                  Portfolio
                </Badge>
                <Badge variant="outline" className="border-purple-400/30 text-purple-200">
                  B.Tech CSE
                </Badge>
              </div>
              <div className="space-y-3">
                <h1 className="bg-gradient-to-r from-white via-cyan-200 to-indigo-300 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-2xl">
                  Khushi Kumari
                </h1>
                <p className="text-base leading-relaxed text-slate-300 sm:text-lg md:text-xl">
                  Aspiring software engineer focused on clean code, strong
                  fundamentals, and building reliable, efficient solutions.
                </p>
              </div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
                className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap"
              >
                <motion.div variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}>
                  <Button asChild className="w-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/40 transition-all hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/60 sm:w-auto ring-2 ring-white/20">
                  <a
                    href="https://github.com/khushichaudhary9983"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    GitHub
                  </a>
                </Button>
                </motion.div>
                <motion.div variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-indigo-400/30 bg-indigo-500/10 text-white transition-all hover:scale-105 hover:bg-indigo-500/20 shadow-lg sm:w-auto"
                  >
                  <a
                    href="https://www.linkedin.com/in/khushi-chaudhary-324a65289/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </a>
                </Button>
                </motion.div>
                <motion.div variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-purple-400/30 bg-purple-500/10 text-purple-200 transition-all hover:scale-105 hover:bg-purple-500/20 shadow-lg sm:w-auto"
                  >
                    <a href="/Updated CV.pdf" download="Khushi_Kumari_CV.pdf">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download CV
                  </a>
                </Button>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card id="skills" className="border-indigo-500/20 bg-slate-800/40 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl text-white">Technical Skills</CardTitle>
                <CardDescription className="text-slate-400">
                  Tools and expertise
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="space-y-2.5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Languages</p>
                  <div className="flex flex-wrap gap-2">
                    {skills.languages.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-100 border-cyan-400/40 shadow-md shadow-cyan-500/20 hover:scale-105 transition-transform">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="space-y-2.5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Tools / Platforms</p>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-100 border-indigo-400/40 shadow-md shadow-indigo-500/20 hover:scale-105 transition-transform">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="space-y-2.5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Soft Skills</p>
                  <div className="flex flex-wrap gap-2">
                    {skills.soft.map((skill) => (
                      <Badge key={skill} variant="outline" className="border-purple-400/40 text-purple-100 bg-purple-500/10 shadow-sm shadow-purple-500/20 hover:scale-105 transition-transform">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
            </motion.div>
          </div>
          </div>
        </motion.section>

        {/* About Me Section */}
        <motion.section
          id="aboutme"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <Card className="border-indigo-500/20 bg-slate-900/70 backdrop-blur-sm shadow-xl transition-all hover:scale-[1.01] hover:shadow-indigo-500/10">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white">About Me</CardTitle>
              <CardDescription className="text-slate-400">
                Get to know me better
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-3">
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-indigo-300">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Who I Am
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-300">
                    I'm a passionate Computer Science student at Lovely Professional University, driven by a deep curiosity for technology and innovation. My journey in programming began with a fascination for problem-solving, which has evolved into a commitment to building efficient, scalable solutions that make a difference.
                  </p>
                </div>

                <Separator className="bg-indigo-500/20" />

                <div className="space-y-3">
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-purple-300">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    What Drives Me
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-300">
                    I thrive on challenges that push me to learn and grow. Whether it's optimizing memory allocation, exploring cloud computing and distributed systems, or participating in hackathons, I'm constantly seeking opportunities to expand my skill set and contribute to meaningful projects. My goal is to bridge the gap between theoretical knowledge and real-world cloud applications.
                  </p>
                </div>

                <Separator className="bg-indigo-500/20" />

                <div className="space-y-3">
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-indigo-300">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Current Focus
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
                      <p className="text-sm leading-relaxed text-slate-300">
                        Deepening my understanding of <span className="font-semibold text-indigo-300">Data Structures & Algorithms</span>
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-400" />
                      <p className="text-sm leading-relaxed text-slate-300">
                        Exploring <span className="font-semibold text-purple-300">Cloud Computing platforms</span> like AWS, Azure, and cloud-native technologies
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
                      <p className="text-sm leading-relaxed text-slate-300">
                        Building projects that solve <span className="font-semibold text-indigo-300">real-world problems</span>
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-400" />
                      <p className="text-sm leading-relaxed text-slate-300">
                        Collaborating on <span className="font-semibold text-purple-300">open-source projects</span> and learning from the community
                      </p>
                    </div>
                  </div>
                </div>

                <Separator className="bg-indigo-500/20" />

                <div className="space-y-3">
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-purple-300">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Let's Connect
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-300">
                    I'm always open to discussing new opportunities, collaborations, or just chatting about technology. Feel free to reach out through GitHub or LinkedIn, or download my CV to learn more about my journey.
                  </p>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <Badge variant="secondary" className="bg-indigo-500/20 text-indigo-200">
                      📍 Muzaffarpur, Bihar
                    </Badge>
                    <Badge variant="secondary" className="bg-purple-500/20 text-purple-200">
                      🎓 B.Tech CSE Student
                    </Badge>
                    <Badge variant="secondary" className="bg-indigo-500/20 text-indigo-200">
                      💻 Software Developer
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section
          id="projects"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4 sm:space-y-6"
        >
          <div className="mb-2 sm:mb-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">Projects</h2>
            <p className="text-sm sm:text-base text-slate-400">Selected academic and technical work</p>
          </div>
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <Card className="border-indigo-500/30 bg-gradient-to-br from-slate-900/90 via-indigo-950/30 to-slate-900/90 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:shadow-indigo-500/20 transition-all group">
                <CardHeader className="p-4 sm:p-6">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2 flex-1">
                        <div className="p-1.5 sm:p-2 rounded-lg bg-indigo-500/20 group-hover:bg-indigo-500/30 transition-colors">
                          <svg className="h-4 w-4 sm:h-5 sm:w-5 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                          </svg>
                        </div>
                        <h3 className="text-base sm:text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                          {project.title}
                        </h3>
                      </div>
                      {project.linkUrl && (
                        <a
                          href={project.linkUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-500/20 hover:bg-indigo-500/30 border border-indigo-400/30 text-indigo-300 text-xs font-semibold transition-all hover:scale-105"
                        >
                          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                          </svg>
                          <span className="hidden sm:inline">{project.linkLabel}</span>
                        </a>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-400 flex items-center gap-2">
                      <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {project.date}
                    </p>
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-0 sm:p-6 sm:pt-0">
                  <div className="space-y-2 sm:space-y-3">
                    {project.highlights.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 sm:gap-3 group/item">
                        <div className="mt-1 p-0.5 sm:p-1 rounded-full bg-indigo-500/20 group-hover/item:bg-indigo-500/30 transition-colors flex-shrink-0">
                          <svg className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-xs sm:text-sm leading-relaxed text-slate-300">{item}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}

          <motion.div
            id="achievements"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="border-purple-500/30 bg-gradient-to-br from-slate-900/90 via-purple-950/30 to-slate-900/90 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all">
              <CardHeader className="p-4 sm:p-6">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="p-1.5 sm:p-2 rounded-lg bg-purple-500/20">
                    <svg className="h-5 w-5 sm:h-6 sm:w-6 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div>
                    <CardTitle className="text-xl sm:text-2xl font-bold text-white">Achievements</CardTitle>
                    <CardDescription className="text-xs sm:text-sm text-slate-400">
                      Competitions & recognition
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4 pt-0 sm:p-6 sm:pt-0 space-y-3 sm:space-y-4">
                {achievements.map((item, idx) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg bg-purple-500/5 hover:bg-purple-500/10 transition-colors group"
                  >
                    <div className="p-1.5 rounded-full bg-purple-500/20 group-hover:bg-purple-500/30 transition-colors">
                      <svg className="h-4 w-4 text-purple-300" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <p className="text-xs sm:text-sm leading-relaxed text-slate-300 flex-1">{item}</p>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </motion.section>

        <motion.section
          id="training"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4 sm:space-y-6"
        >
          <Card className="border-indigo-500/20 bg-slate-900/70 backdrop-blur-sm shadow-xl transition-all hover:shadow-indigo-500/10">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-xl sm:text-2xl font-bold text-white">Training</CardTitle>
              <CardDescription className="text-xs sm:text-sm text-slate-400">
                Structured learning and specialization
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-0 sm:p-6 sm:pt-0 space-y-4 sm:space-y-6">
              {trainings.map((training) => (
                <div key={training.title} className="space-y-2 sm:space-y-3">
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-semibold text-white">
                      {training.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400">{training.date}</p>
                  </div>
                  <ul className="space-y-1.5 sm:space-y-2 pl-4 sm:pl-5 text-xs sm:text-sm leading-relaxed text-slate-300">
                    {training.details.map((item) => (
                      <li key={item} className="list-disc">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>

          <motion.div
            id="certificates"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-3 sm:space-y-4"
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="p-1.5 sm:p-2 rounded-lg bg-indigo-500/20">
                <svg className="h-5 w-5 sm:h-6 sm:w-6 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Certificates</h2>
                <p className="text-xs sm:text-sm text-slate-400">Verified credentials - Tap to view</p>
              </div>
            </div>
            <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
              {certificates.map((certificate, idx) => (
                <motion.a
                  key={certificate.name}
                  href={certificate.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.02, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  className="block"
                >
                  <Card className="border-indigo-500/30 bg-gradient-to-br from-slate-900/90 to-indigo-950/40 backdrop-blur-sm shadow-lg hover:shadow-xl hover:shadow-indigo-500/30 transition-all cursor-pointer group h-full">
                    <CardContent className="p-3 sm:p-4">
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="p-2 sm:p-3 rounded-lg bg-indigo-500/20 group-hover:bg-indigo-500/30 transition-colors flex-shrink-0">
                          <svg className="h-5 w-5 sm:h-6 sm:w-6 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xs sm:text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors line-clamp-2">
                            {certificate.name}
                          </h3>
                          <div className="flex items-center gap-2 mt-2">
                            <Badge variant="outline" className="border-indigo-400/40 text-indigo-300 text-xs">
                              View
                            </Badge>
                            <svg className="h-4 w-4 text-indigo-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          id="education"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="border-indigo-500/20 bg-slate-900/70 backdrop-blur-sm shadow-xl transition-all hover:shadow-indigo-500/10">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-xl sm:text-2xl font-bold text-white">Education</CardTitle>
              <CardDescription className="text-xs sm:text-sm text-slate-400">
                Academic background and milestones
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-0 sm:p-6 sm:pt-0 space-y-4 sm:space-y-6">
              {education.map((item, index) => (
                <div key={item.school} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:flex-wrap items-start justify-between gap-2 sm:gap-3">
                    <div className="space-y-1 flex-1">
                      <h3 className="text-sm sm:text-base font-semibold text-white">
                        {item.school}
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed text-slate-300">{item.detail}</p>
                    </div>
                    <Badge variant="outline" className="border-purple-400/30 text-purple-200 text-xs">
                      {item.date}
                    </Badge>
                  </div>
                  {index < education.length - 1 ? (
                    <Separator className="bg-indigo-500/20 mt-3 sm:mt-4" />
                  ) : null}
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.section>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-4 text-center"
        >
          <p className="text-sm text-slate-500">© 2026 Khushi Kumari. All rights reserved.</p>
        </motion.footer>
      </motion.main>
    </div>
  )
}

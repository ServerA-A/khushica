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
  languages: ["C++", "JavaScript", "C", "Python"],
  frameworks: ["HTML", "CSS"],
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
    linkLabel: "Link",
  },
]

const trainings = [
  {
    title: "Python Dynamics: From Algorithms to AI",
    date: "June–July 2025",
    details: [
      "Developed a strong foundation in Python programming, focusing on algorithmic problem-solving, data structures, and computational thinking, while progressively applying these concepts to machine learning and artificial intelligence applications.",
      "Objective of this course is to gain hands-on experience in building efficient, scalable solutions using Python libraries and frameworks.",
    ],
    linkLabel: "Link",
  },
]

const certificates = [
  "Build Generative AI Apps and Solutions with No-Code Tools (Dec 2025)",
  "ChatGPT-4 Prompt Engineering: ChatGPT, Generative AI & LLM (Aug 2025)",
  "Master Generative AI & Generative AI tools (ChatGPT & more) (Aug 2025)",
  "Computational Theory: Language Principle & Finite Automata Theory (Aug 2025)",
  "The Bits and Bytes of Computer Networking (Sep 2024)",
  "Introduction to Hardware and Operating Systems (Sep 2024)",
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
      const sections = ["about", "aboutme", "skills", "projects", "achievements", "training", "certificates", "education"]
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 text-slate-100">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 z-[100] origin-left"
        style={{ scaleX }}
      />
      
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(99,102,241,0.15),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e520_1px,transparent_1px),linear-gradient(to_bottom,#4f46e520_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      {/* Floating Dock Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-6 left-1/2 z-50 -translate-x-1/2 max-w-[95vw]"
      >
        <div className="flex items-center gap-1 overflow-x-auto rounded-full border border-indigo-500/30 bg-slate-900/90 px-3 py-2.5 shadow-2xl backdrop-blur-md sm:gap-2 sm:px-6 sm:py-3">
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, "about")}
            className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all sm:px-4 sm:py-2 sm:text-sm ${
              activeSection === "about"
                ? "bg-indigo-500/30 text-white shadow-lg shadow-indigo-500/20"
                : "text-slate-300 hover:bg-indigo-500/20 hover:text-white"
            }`}
          >
            About
          </a>
          <a
            href="#aboutme"
            onClick={(e) => handleNavClick(e, "aboutme")}
            className={`whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium transition-all sm:px-4 sm:py-2 sm:text-sm ${
              activeSection === "aboutme"
                ? "bg-indigo-500/30 text-white shadow-lg shadow-indigo-500/20"
                : "text-slate-300 hover:bg-indigo-500/20 hover:text-white"
            }`}
          >
            About Me
          </a>
          <a
            href="#skills"
            onClick={(e) => handleNavClick(e, "skills")}
            className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all sm:px-4 sm:py-2 sm:text-sm ${
              activeSection === "skills"
                ? "bg-indigo-500/30 text-white shadow-lg shadow-indigo-500/20"
                : "text-slate-300 hover:bg-indigo-500/20 hover:text-white"
            }`}
          >
            Skills
          </a>
          <a
            href="#projects"
            onClick={(e) => handleNavClick(e, "projects")}
            className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all sm:px-4 sm:py-2 sm:text-sm ${
              activeSection === "projects"
                ? "bg-indigo-500/30 text-white shadow-lg shadow-indigo-500/20"
                : "text-slate-300 hover:bg-indigo-500/20 hover:text-white"
            }`}
          >
            Projects
          </a>
          <a
            href="#achievements"
            onClick={(e) => handleNavClick(e, "achievements")}
            className={`whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium transition-all sm:px-4 sm:py-2 sm:text-sm ${
              activeSection === "achievements"
                ? "bg-indigo-500/30 text-white shadow-lg shadow-indigo-500/20"
                : "text-slate-300 hover:bg-indigo-500/20 hover:text-white"
            }`}
          >
            Achievements
          </a>
          <a
            href="#training"
            onClick={(e) => handleNavClick(e, "training")}
            className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all sm:px-4 sm:py-2 sm:text-sm ${
              activeSection === "training"
                ? "bg-indigo-500/30 text-white shadow-lg shadow-indigo-500/20"
                : "text-slate-300 hover:bg-indigo-500/20 hover:text-white"
            }`}
          >
            Training
          </a>
          <a
            href="#certificates"
            onClick={(e) => handleNavClick(e, "certificates")}
            className={`whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium transition-all sm:px-4 sm:py-2 sm:text-sm ${
              activeSection === "certificates"
                ? "bg-indigo-500/30 text-white shadow-lg shadow-indigo-500/20"
                : "text-slate-300 hover:bg-indigo-500/20 hover:text-white"
            }`}
          >
            Certificates
          </a>
          <a
            href="#education"
            onClick={(e) => handleNavClick(e, "education")}
            className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all sm:px-4 sm:py-2 sm:text-sm ${
              activeSection === "education"
                ? "bg-indigo-500/30 text-white shadow-lg shadow-indigo-500/20"
                : "text-slate-300 hover:bg-indigo-500/20 hover:text-white"
            }`}
          >
            Education
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
        className="fixed bottom-8 right-8 z-50 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 p-3 shadow-2xl shadow-indigo-500/30 transition-all hover:shadow-xl hover:shadow-indigo-500/50"
        style={{ pointerEvents: showScrollTop ? 'auto' : 'none' }}
      >
        <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 pb-20 sm:px-6 lg:gap-10 lg:px-8"
        style={{ scrollBehavior: "smooth" }}
      >
        <motion.section
          id="about"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="group relative flex min-h-screen items-center overflow-hidden rounded-2xl border border-indigo-500/20 bg-gradient-to-br from-slate-900/90 via-indigo-950/50 to-slate-900/90 p-6 shadow-2xl backdrop-blur-sm transition-all hover:shadow-indigo-500/10 sm:p-10 lg:p-12 lg:rounded-3xl"
        >
          <div className="absolute -right-12 -top-12 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="absolute -bottom-12 -left-12 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />
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
                <h1 className="bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl lg:text-6xl">
                  Khushi Kumari
                </h1>
                <p className="text-lg leading-relaxed text-slate-300 sm:text-xl">
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
                  <Button asChild className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/30 transition-all hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/40 sm:w-auto">
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
                    href="https://www.linkedin.com/in/khushi-chaudhary"
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
                      <Badge key={skill} variant="secondary" className="bg-blue-500/20 text-blue-200 border-blue-400/30">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="space-y-2.5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Frameworks</p>
                  <div className="flex flex-wrap gap-2">
                    {skills.frameworks.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-purple-500/20 text-purple-200 border-purple-400/30">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="space-y-2.5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Tools / Platforms</p>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-indigo-500/20 text-indigo-200 border-indigo-400/30">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="space-y-2.5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Soft Skills</p>
                  <div className="flex flex-wrap gap-2">
                    {skills.soft.map((skill) => (
                      <Badge key={skill} variant="outline" className="border-purple-400/30 text-purple-200">
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
                    I thrive on challenges that push me to learn and grow. Whether it's optimizing memory allocation, exploring AI and machine learning, or participating in hackathons, I'm constantly seeking opportunities to expand my skill set and contribute to meaningful projects. My goal is to bridge the gap between theoretical knowledge and real-world applications.
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
                        Exploring <span className="font-semibold text-purple-300">AI/ML applications</span> with Python and modern frameworks
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
          className="space-y-6"
        >
          <Card className="border-indigo-500/20 bg-slate-900/70 backdrop-blur-sm shadow-xl transition-all hover:scale-[1.01] hover:shadow-indigo-500/10">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white">Projects</CardTitle>
              <CardDescription className="text-slate-400">
                Selected academic and technical work
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {projects.map((project, idx) => (
                <div key={project.title} className="space-y-3">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold text-white">
                        {project.title}
                      </h3>
                      <p className="text-sm text-slate-400">{project.date}</p>
                    </div>
                    <Badge variant="outline" className="border-indigo-400/40 text-indigo-300 bg-indigo-500/10">
                      {project.linkLabel}
                    </Badge>
                  </div>
                  <ul className="space-y-2 pl-5 text-sm leading-relaxed text-slate-300">
                    {project.highlights.map((item) => (
                      <li key={item} className="list-disc">{item}</li>
                    ))}
                  </ul>
                  {idx < projects.length - 1 && <Separator className="my-4 bg-white/10" />}
                </div>
              ))}
            </CardContent>
          </Card>

          <Card id="achievements" className="border-indigo-500/20 bg-slate-900/70 backdrop-blur-sm shadow-xl transition-all hover:scale-[1.01] hover:shadow-indigo-500/10">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white">Achievements</CardTitle>
              <CardDescription className="text-slate-400">
                Competitions & recognition
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {achievements.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-400" />
                  <p className="text-sm leading-relaxed text-slate-300">{item}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.section>

        <motion.section
          id="training"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <Card className="border-indigo-500/20 bg-slate-900/70 backdrop-blur-sm shadow-xl transition-all hover:scale-[1.01] hover:shadow-indigo-500/10">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white">Training</CardTitle>
              <CardDescription className="text-slate-400">
                Structured learning and specialization
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {trainings.map((training) => (
                <div key={training.title} className="space-y-3">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold text-white">
                        {training.title}
                      </h3>
                      <p className="text-sm text-slate-400">{training.date}</p>
                    </div>
                    <Badge variant="outline" className="border-purple-400/40 text-purple-300 bg-purple-500/10">
                      {training.linkLabel}
                    </Badge>
                  </div>
                  <ul className="space-y-2 pl-5 text-sm leading-relaxed text-slate-300">
                    {training.details.map((item) => (
                      <li key={item} className="list-disc">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card id="certificates" className="border-indigo-500/20 bg-slate-900/70 backdrop-blur-sm shadow-xl transition-all hover:scale-[1.01] hover:shadow-indigo-500/10">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white">Certificates</CardTitle>
              <CardDescription className="text-slate-400">
                Verified credentials
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {certificates.map((certificate) => (
                  <Badge
                    key={certificate}
                    variant="secondary"
                    className="bg-indigo-500/20 text-xs text-indigo-200 border border-indigo-400/30"
                  >
                    {certificate}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section
          id="education"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="border-indigo-500/20 bg-slate-900/70 backdrop-blur-sm shadow-xl transition-all hover:scale-[1.01] hover:shadow-indigo-500/10">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white">Education</CardTitle>
              <CardDescription className="text-slate-400">
                Academic background and milestones
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {education.map((item, index) => (
                <div key={item.school} className="space-y-2">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="space-y-1 flex-1">
                      <h3 className="text-base font-semibold text-white">
                        {item.school}
                      </h3>
                      <p className="text-sm leading-relaxed text-slate-300">{item.detail}</p>
                    </div>
                    <Badge variant="outline" className="border-purple-400/30 text-purple-200">
                      {item.date}
                    </Badge>
                  </div>
                  {index < education.length - 1 ? (
                    <Separator className="bg-indigo-500/20" />
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

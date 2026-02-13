"use client"

import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

const skills = {
  languages: ["C++", "JavaScript", "C", "Python", "HTML", "CSS"],
  tools: ["MySQL", "AWS", "Oracle"],
  soft: ["Adaptability", "Communication Skills", "Team work", "Problem Solving", "Critical Thinking"],
}

const projects = [
  {
    title: "Dynamic Memory Allocation",
    date: "March 2025",
    tech: ["C++", "Memory Management", "Pointers"],
    highlights: [
      "Demonstrated efficient memory management by allocating, resizing, and freeing memory at runtime, ensuring optimal utilization of system resources and preventing memory leaks.",
      "Decreased program crashes related to segmentation faults by 80% through safe pointer handling practices.",
      "Optimized runtime memory utilization by implementing dynamic memory allocation, reducing memory wastage by approximately 25–30% compared to static allocation.",
    ],
    stats: [
      { label: "Crash Reduction", value: "80%" },
      { label: "Memory Saved", value: "25-30%" },
    ],
    linkLabel: "GitHub",
    linkUrl: "https://github.com/khushichaudhary9983/Dynamic-Memory-Allocation",
  },
]

const trainings = [
  {
    title: "Cloud Computing Fundamentals and AWS Services",
    date: "June–July 2025",
    icon: "cloud",
    details: [
      "Developed a strong foundation in cloud computing concepts, focusing on cloud architecture, deployment models, and service models (IaaS, PaaS, SaaS), while gaining hands-on experience with AWS core services.",
      "Objective of this course is to gain practical experience in building and deploying scalable cloud solutions, managing cloud infrastructure, and implementing cloud security best practices.",
    ],
    linkLabel: "Link",
  },
]

const certificates = [
  {
    name: "Build Generative AI Apps and Solutions with No-Code Tools",
    date: "Dec 2025",
    category: "AI/ML",
    pdfUrl: "/Build Generative AI Apps and Solutions with No-Code Tools.pdf"
  },
  {
    name: "ChatGPT-4 Prompt Engineering: ChatGPT, Generative AI & LLM",
    date: "Aug 2025",
    category: "AI/ML",
    pdfUrl: "/ChatGPT-4 Prompt Engineering ChatGPT, Generative AI & LLM.pdf"
  },
  {
    name: "Master Generative AI & Generative AI tools (ChatGPT & more)",
    date: "Aug 2025",
    category: "AI/ML",
    pdfUrl: "/Master Generative AI & Generative AI tools.pdf"
  },
  {
    name: "Computational Theory: Language Principle & Finite Automata Theory",
    date: "Aug 2025",
    category: "Theory",
    pdfUrl: "/Computational Theory Language Principle & Finite Automata Theory.pdf"
  },
  {
    name: "The Bits and Bytes of Computer Networking",
    date: "Sep 2024",
    category: "Networking",
    pdfUrl: "/Coursera Google.pdf"
  },
  {
    name: "Introduction to Hardware and Operating Systems",
    date: "Sep 2024",
    category: "Systems",
    pdfUrl: "/Coursera IBM.pdf"
  },
]

const achievements = [
  { title: "Symposium 2.0 Hackathon", description: "Participated and showcased innovative solutions", icon: "trophy" },
  { title: "Smart India Hackathon", description: "Collaborated on national-level problem statements", icon: "star" },
]

const education = [
  {
    school: "Lovely Professional University",
    location: "Kapurthala, Punjab",
    degree: "Bachelor of Technology",
    field: "Computer Science and Engineering",
    grade: "CGPA: 7.02",
    date: "Aug 2023 - Present",
    current: true,
  },
  {
    school: "Anand Prep Public School",
    location: "Muzaffarpur, Bihar",
    degree: "Intermediate",
    field: "Science",
    grade: "80.04%",
    date: "Apr 2021 - Mar 2023",
    current: false,
  },
  {
    school: "Holy Mission Sr. Sec. School",
    location: "Muzaffarpur, Bihar",
    degree: "Matriculation",
    field: "",
    grade: "92%",
    date: "Apr 2020 - Mar 2021",
    current: false,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export default function Home() {
  const [activeSection, setActiveSection] = useState("about")
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isNavOpen, setIsNavOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "projects", "training", "certificates", "education"]
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
    setIsNavOpen(false)
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

  const navItems = [
    { id: "about", label: "About", icon: "user" },
    { id: "skills", label: "Skills", icon: "code" },
    { id: "projects", label: "Projects", icon: "folder" },
    { id: "training", label: "Training", icon: "academic" },
    { id: "certificates", label: "Certificates", icon: "badge" },
    { id: "education", label: "Education", icon: "book" },
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-slate-100 overflow-x-hidden">
      {/* Animated gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#0d1117] to-[#0a0a0f]" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]" />
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px] animate-pulse" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Grid pattern overlay */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-[100] origin-left"
        style={{ scaleX }}
      />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur-xl backdrop-saturate-150">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a 
              href="#about"
              onClick={(e) => handleNavClick(e, "about")}
              className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:from-blue-300 hover:to-purple-300 transition-all"
            >
              Khushi Kumari
            </a>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1 p-1 rounded-full bg-white/5 border border-white/10">
              {navItems.slice(0, 4).map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`relative px-4 py-2 rounded-full text-sm transition-all ${
                    activeSection === item.id
                      ? "text-white"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-white/10 rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <a
                href="/Updated CV.pdf"
                download="Khushi_Kumari_CV.pdf"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-sm font-medium transition-all shadow-lg shadow-purple-500/25"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Resume
              </a>
              
              {/* Mobile menu button */}
              <button
                onClick={() => setIsNavOpen(!isNavOpen)}
                className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isNavOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isNavOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-white/5 bg-[#0a0a0f]/95 backdrop-blur-xl"
            >
              <div className="px-4 py-4 space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={`block px-4 py-3 rounded-lg text-sm transition-all ${
                      activeSection === item.id
                        ? "bg-white/10 text-white"
                        : "text-slate-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="/Updated CV.pdf"
                  download="Khushi_Kumari_CV.pdf"
                  className="flex items-center justify-center gap-2 mt-4 px-4 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Scroll to Top */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: showScrollTop ? 1 : 0, 
          scale: showScrollTop ? 1 : 0.8,
          y: showScrollTop ? 0 : 20
        }}
        className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-shadow"
        style={{ pointerEvents: showScrollTop ? 'auto' : 'none' }}
      >
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>

      <main className="relative mx-auto max-w-6xl px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section id="about" className="min-h-[85vh] flex items-center py-12 sm:py-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left content */}
              <div className="space-y-8">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-wrap items-center gap-3"
                >
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
                    <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                    B.Tech CSE
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Open to Work
                  </span>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-4"
                >
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                    <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                      Hi, I&apos;m
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Khushi Kumari
                    </span>
                  </h1>
                  <p className="text-lg sm:text-xl text-slate-400 max-w-xl leading-relaxed">
                    Aspiring software engineer focused on clean code, strong fundamentals, and building reliable, efficient solutions.
                  </p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-wrap gap-3"
                >
                  <p className="w-full text-sm text-slate-500 mb-2">Currently exploring</p>
                  <span className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/20 text-blue-300 text-sm">
                    ☁️ Cloud Computing
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-purple-500/10 to-purple-600/10 border border-purple-500/20 text-purple-300 text-sm">
                    🔗 Distributed Systems
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-pink-500/10 to-pink-600/10 border border-pink-500/20 text-pink-300 text-sm">
                    🤖 Generative AI
                  </span>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-wrap gap-4 pt-4"
                >
                  <a
                    href="https://github.com/khushichaudhary9983"
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 px-6 py-3 text-sm text-white transition-all"
                  >
                    <svg className="h-5 w-5 text-slate-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    GitHub
                    <svg className="h-4 w-4 text-slate-500 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/khushi-chaudhary-324a65289/"
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-3 rounded-xl bg-[#0077b5] hover:bg-[#0088cc] px-6 py-3 text-sm text-white transition-all shadow-lg shadow-[#0077b5]/25"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </a>
                  <a
                    href="mailto:khushichaudhary9983@gmail.com"
                    className="group inline-flex items-center gap-3 rounded-xl border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 px-6 py-3 text-sm text-slate-300 hover:text-white transition-all"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email Me
                  </a>
                </motion.div>
              </div>

              {/* Right content - Stats/Visual */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="hidden lg:block relative"
              >
                <div className="relative">
                  {/* Decorative elements */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl" />
                  
                  <div className="relative grid grid-cols-2 gap-4 p-8">
                    {/* Stats cards */}
                    <div className="col-span-2 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-slate-400 text-sm">Quick Stats</span>
                        <span className="px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs">2026</span>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <p className="text-3xl font-bold text-white">6+</p>
                          <p className="text-xs text-slate-500 mt-1">Languages</p>
                        </div>
                        <div>
                          <p className="text-3xl font-bold text-white">6+</p>
                          <p className="text-xs text-slate-500 mt-1">Certificates</p>
                        </div>
                        <div>
                          <p className="text-3xl font-bold text-white">2+</p>
                          <p className="text-xs text-slate-500 mt-1">Hackathons</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center mb-3">
                        <svg className="h-5 w-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <p className="text-white font-medium">Clean Code</p>
                      <p className="text-xs text-slate-500 mt-1">Writing maintainable solutions</p>
                    </div>
                    
                    <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/20">
                      <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center mb-3">
                        <svg className="h-5 w-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <p className="text-white font-medium">Fast Learner</p>
                      <p className="text-xs text-slate-500 mt-1">Adapting to new technologies</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                Technical Expertise
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">Technologies and tools I work with to bring ideas to life</p>
            </motion.div>

            <div className="grid gap-6 lg:grid-cols-3">
              {/* Languages */}
              <motion.div variants={itemVariants} className="group p-6 rounded-2xl bg-gradient-to-br from-blue-500/5 via-transparent to-blue-600/5 border border-white/10 hover:border-blue-500/30 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20">
                    <svg className="h-6 w-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Languages</h3>
                    <p className="text-sm text-slate-500">Programming & Markup</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill) => (
                    <span key={skill} className="px-3 py-2 rounded-lg bg-slate-800/50 border border-blue-500/20 text-sm text-slate-300 hover:text-blue-300 hover:border-blue-400/40 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Tools & Platforms */}
              <motion.div variants={itemVariants} className="group p-6 rounded-2xl bg-gradient-to-br from-emerald-500/5 via-transparent to-emerald-600/5 border border-white/10 hover:border-emerald-500/30 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                    <svg className="h-6 w-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Tools & Platforms</h3>
                    <p className="text-sm text-slate-500">Databases & Cloud</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <span key={skill} className="px-3 py-2 rounded-lg bg-slate-800/50 border border-emerald-500/20 text-sm text-slate-300 hover:text-emerald-300 hover:border-emerald-400/40 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-white/5">
                  <p className="text-xs text-slate-500 mb-3">Also familiar with</p>
                  <div className="flex flex-wrap gap-2">
                    {["Git", "VS Code", "Linux"].map((tool) => (
                      <span key={tool} className="px-2.5 py-1 rounded-lg bg-slate-800/50 border border-slate-700/50 text-xs text-slate-400">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Soft Skills */}
              <motion.div variants={itemVariants} className="group p-6 rounded-2xl bg-gradient-to-br from-purple-500/5 via-transparent to-purple-600/5 border border-white/10 hover:border-purple-500/30 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20">
                    <svg className="h-6 w-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Soft Skills</h3>
                    <p className="text-sm text-slate-500">Professional Qualities</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {skills.soft.map((skill, index) => (
                    <motion.div 
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/30 border border-slate-700/30 hover:border-purple-500/30 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center">
                        <svg className="h-4 w-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-slate-300">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-sm font-medium mb-4">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
                Featured Work
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Projects</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">Selected academic and technical work showcasing my skills</p>
            </motion.div>
            
            <div className="space-y-8">
              {projects.map((project, index) => (
                <motion.div 
                  key={project.title}
                  variants={itemVariants}
                  className="group relative"
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all duration-300">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                      {/* Project Info */}
                      <div className="flex-1 space-y-4">
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="text-xl sm:text-2xl font-bold text-white">{project.title}</h3>
                          <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-400 text-xs">{project.date}</span>
                        </div>
                        
                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span key={tech} className="px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs">
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Highlights */}
                        <ul className="space-y-3 pt-2">
                          {project.highlights.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-slate-400 leading-relaxed">
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Stats & Link */}
                      <div className="lg:w-64 space-y-4">
                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-3">
                          {project.stats.map((stat) => (
                            <div key={stat.label} className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 text-center">
                              <p className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">{stat.value}</p>
                              <p className="text-xs text-slate-500 mt-1">{stat.label}</p>
                            </div>
                          ))}
                        </div>
                        
                        {/* Links */}
                        {project.linkUrl && (
                          <a
                            href={project.linkUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white text-sm transition-all group/link"
                          >
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                            View on GitHub
                            <svg className="h-4 w-4 group-hover/link:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Achievements */}
            <motion.div variants={itemVariants} className="mt-12">
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-amber-500/5 via-orange-500/5 to-red-500/5 border border-amber-500/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20">
                    <svg className="h-6 w-6 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Achievements</h3>
                    <p className="text-sm text-slate-500">Recognition & Participation</p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {achievements.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/30 border border-slate-700/30">
                      <div className="p-2 rounded-lg bg-amber-500/10">
                        {item.icon === 'trophy' ? (
                          <svg className="h-5 w-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clipRule="evenodd" />
                            <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
                          </svg>
                        ) : (
                          <svg className="h-5 w-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-white">{item.title}</p>
                        <p className="text-sm text-slate-400 mt-1">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Training Section */}
        <section id="training" className="py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-4">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Professional Development
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Training & Learning</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">Structured learning and specialization programs</p>
            </motion.div>
            
            <div className="space-y-6">
              {trainings.map((training) => (
                <motion.div 
                  key={training.title} 
                  variants={itemVariants}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/30 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                      <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 self-start">
                        <svg className="h-6 w-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <h3 className="text-lg sm:text-xl font-semibold text-white">{training.title}</h3>
                          <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs">{training.date}</span>
                        </div>
                        <ul className="space-y-3">
                          {training.details.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-slate-400 leading-relaxed">
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Certificates Section */}
        <section id="certificates" className="py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                Verified Credentials
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Certificates</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">Professional certifications and course completions</p>
            </motion.div>
            
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {certificates.map((cert, index) => (
                <motion.a
                  key={cert.name}
                  variants={itemVariants}
                  href={cert.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className="absolute top-4 right-4">
                    <span className={`px-2 py-1 rounded-full text-[10px] font-medium ${
                      cert.category === 'AI/ML' ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20' :
                      cert.category === 'Theory' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' :
                      cert.category === 'Networking' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                      'bg-orange-500/10 text-orange-400 border border-orange-500/20'
                    }`}>
                      {cert.category}
                    </span>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-colors">
                      <svg className="h-5 w-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0 pt-6">
                      <p className="text-sm font-medium text-white group-hover:text-cyan-300 transition-colors line-clamp-2 mb-2">{cert.name}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-slate-500">{cert.date}</span>
                        <span className="inline-flex items-center gap-1 text-xs text-cyan-400 group-hover:translate-x-0.5 transition-transform">
                          View
                          <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-4">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
                Academic Background
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Education</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">My educational journey and academic achievements</p>
            </motion.div>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 via-violet-500/20 to-transparent hidden sm:block" />
              
              <div className="space-y-8">
                {education.map((item, index) => (
                  <motion.div 
                    key={item.school}
                    variants={itemVariants}
                    className="relative group"
                  >
                    <div className="flex items-start gap-6">
                      {/* Timeline dot */}
                      <div className="hidden sm:flex flex-col items-center">
                        <div className={`relative z-10 w-4 h-4 rounded-full border-2 ${
                          item.current 
                            ? 'border-violet-500 bg-violet-500/20' 
                            : 'border-slate-600 bg-slate-800'
                        }`}>
                          {item.current && (
                            <span className="absolute inset-0 rounded-full bg-violet-500/50 animate-ping" />
                          )}
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-violet-500/30 transition-all duration-300">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                          <div className="flex items-start gap-4">
                            <div className="p-3 rounded-xl bg-violet-500/10 border border-violet-500/20">
                              <svg className="h-6 w-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                              </svg>
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-white">{item.school}</h3>
                              <p className="text-sm text-slate-500">{item.location}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 flex-shrink-0">
                            {item.current && (
                              <span className="px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs">
                                Current
                              </span>
                            )}
                            <span className="px-3 py-1.5 rounded-lg bg-slate-800/50 text-slate-400 text-xs">
                              {item.date}
                            </span>
                          </div>
                        </div>
                        
                        <div className="pl-0 sm:pl-[52px]">
                          <div className="flex flex-wrap items-center gap-3">
                            <span className="px-3 py-1.5 rounded-lg bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm">
                              {item.degree}
                              {item.field && ` - ${item.field}`}
                            </span>
                            <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm font-medium">
                              {item.grade}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-3xl" />
            
            <div className="relative p-8 sm:p-12 rounded-3xl bg-white/[0.03] border border-white/10 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Let&apos;s Work Together
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto mb-8">
                I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, I&apos;ll do my best to get back to you!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="mailto:khushichaudhary9983@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium transition-all shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Get In Touch
                </a>
                <a
                  href="/Updated CV.pdf"
                  download="Khushi_Kumari_CV.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-medium transition-all"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-white/5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                K
              </div>
              <div>
                <p className="font-semibold text-white text-sm">Khushi Kumari</p>
                <p className="text-xs text-slate-500">B.Tech CSE Student</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/khushichaudhary9983"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/khushi-chaudhary-324a65289/"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="mailto:khushichaudhary9983@gmail.com"
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
            
            <p className="text-sm text-slate-500">
              © 2026 Khushi Kumari. Built with Next.js
            </p>
          </div>
        </footer>
      </main>
    </div>
  )
}

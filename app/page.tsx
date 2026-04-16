"use client";

import Navbar from "./components/Navbar";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { FaGithub, FaLinkedin, FaCode, FaDatabase, FaServer, FaRocket, FaReact, FaNodeJs } from "react-icons/fa";
import { MdEmail, MdBuild, MdStar } from "react-icons/md";
import { useRef, useEffect } from "react";

export default function Home() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({ 
    target: heroRef,
    offset: ["start end", "end start"]
  });
  const yHero = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  // Optimized particles - only 4
  const particles = [
    { icon: <FaCode size={20} />, top: "15%", left: "8%", delay: 0, color: "text-pink-400" },
    { icon: <FaRocket size={22} />, bottom: "25%", left: "4%", delay: 2, color: "text-purple-400" },
    { icon: <FaReact size={20} />, bottom: "15%", left: "20%", delay: 3, color: "text-teal-400" },
    { icon: <FaNodeJs size={20} />, bottom: "35%", right: "25%", delay: 4, color: "text-green-400" },
  ];

  useEffect(() => {
    if (shouldReduceMotion) {
      document.documentElement.classList.add('reduce-motion');
    }
  }, [shouldReduceMotion]);

  return (
    <main className="bg-gradient-to-br from-[#fff7ed] via-[#fef5e7] to-[#e6f3f7] text-gray-800 overflow-hidden relative min-h-screen">
      
      {/* Optimized background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Single lightweight background animation */}
        <motion.div 
          className="absolute inset-0"
          animate={{
            background: [
              "linear-gradient(135deg, #fff7ed 0%, #fef5e7 50%, #e6f3f7 100%)",
              "linear-gradient(135deg, #fef5e7 0%, #e6f3f7 50%, #fff7ed 100%)"
            ]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Only 2 blobs */}
        <div className="absolute top-24 left-12 w-[300px] h-[300px] bg-gradient-to-r from-pink-400/20 via-teal-400/15 to-pink-400/20 rounded-full mix-blend-multiply blur-xl animate-blob"></div>
        <div className="absolute top-[30vh] right-12 w-[250px] h-[250px] bg-gradient-to-r from-teal-400/20 via-pink-400/15 to-teal-400/20 rounded-full mix-blend-multiply blur-xl animate-blob animation-delay-3000"></div>

        {/* Lightweight particles */}
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className={`absolute shadow-xl backdrop-blur-sm rounded-2xl p-3 border border-white/30 ${particle.color}`}
            style={{
              top: particle.top,
              left: particle.left,
              right: particle.right,
              bottom: particle.bottom,
            }}
            animate={shouldReduceMotion ? {} : {
              y: [0, -20, 0],
              rotate: [0, 180],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut"
            }}
            whileHover={{ scale: 1.2 }}
          >
            {particle.icon}
          </motion.div>
        ))}
      </div>

      <Navbar />

      {/* Hero Section - Optimized */}
      <section ref={heroRef} id="home" className="min-h-screen flex items-center justify-center relative px-6 pt-24 z-10">
        <div className="relative z-30 text-center max-w-6xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-8 py-4 bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl mb-12 border border-white/60 hover:shadow-3xl transition-all duration-300 hover:-translate-y-1">
              <span className="text-lg bg-gradient-to-r from-pink-600 via-purple-600 to-teal-600 bg-clip-text text-transparent font-bold tracking-wide">
                🚀 Senior Full Stack Developer | Laravel Specialist | 3+ Years Experience
              </span>
            </div>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 0.1 }}
            className="text-7xl md:text-8xl lg:text-9xl font-black leading-[0.85] mb-10 tracking-tight"
          >
            Hi, I'm <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-teal-600 bg-clip-text text-transparent drop-shadow-2xl">Farida Ansari</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl font-medium text-gray-700 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Crafting scalable web apps with Laravel, React & modern tech stacks
          </motion.p>

          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-rose-500 via-purple-500 to-emerald-500 text-white font-black text-2xl rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 backdrop-blur-xl border border-white/30"
          >
            View My Work 
            <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} strokeMiterlimit={10} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>


        </div>
      </section>

    {/* About - Split Screen */}
      <section ref={aboutRef} id="about" className="py-32 px-6 min-h-screen flex items-center relative">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50/50 via-white to-emerald-50/30" />
        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative mx-auto w-100 h-100 lg:w-96 lg:h-100"
          >
            <div className="w-full h-full rounded-3xl bg-gradient-to-br from-white via-rose-50/50 to-emerald-50 shadow-2xl border-4 border-white/60 backdrop-blur-xl overflow-hidden group hover:scale-105 transition-all duration-700 hover:shadow-3xl">
              <div className="w-full h-full bg-gradient-to-br from-slate-200 to-white flex items-center justify-center">
                <div className="text-[8rem] lg:text-[10rem]">👩‍💻</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-rose-500/20 to-emerald-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
            {/* <p className="text-center mt-6 text-xl font-bold text-gray-800">Full Stack Developer</p> */}
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"
            >
              About Me
            </motion.h2>
            
            <div className="space-y-6 text-xl text-gray-700 leading-relaxed">
              <p>
                Passionate Full Stack Developer with 3+ years experience building scalable web applications. 
                Specializing in Laravel backend architecture, modern React/Next.js frontends, and production-grade systems.
              </p>
              <p>
                Delivered enterprise SaaS platforms, travel booking systems, HR management tools, and real-time 
                applications handling 10K+ monthly users with 99.9% uptime.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 pt-4">
              <div className="p-6 bg-white/70 backdrop-blur-xl rounded-2xl border border-white/60 shadow-xl">
                <h4 className="text-2xl font-black mb-3 text-rose-600">Expertise</h4>
                <div className="space-y-2 text-lg">
                  <div>• Laravel & PHP 8.3</div>
                  <div>• React & Next.js 15</div>
                  <div>• MySQL & Redis</div>
                </div>
              </div>
              <div className="p-6 bg-white/70 backdrop-blur-xl rounded-2xl border border-white/60 shadow-xl">
                <h4 className="text-2xl font-black mb-3 text-emerald-600">Impact</h4>
                <div className="space-y-2 text-lg">
                  <div>• 5+ Enterprise Apps</div>
                  <div>• 75% Faster APIs</div>
                  <div>• 99.9% Uptime</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience - Timeline Style */}
      <section id="experience" className="py-32 px-6 bg-gradient-to-b from-white/80 to-slate-50/50 relative min-h-screen">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl lg:text-6xl font-black text-center mb-24 bg-gradient-to-r from-gray-900 to-emerald-700 bg-clip-text text-transparent"
          >
            Professional Experience
          </motion.h2>

          <div className="relative max-w-4xl mx-auto space-y-12">
            {[
              {
                role: "PHP Full Stack Developer",
                company: "TTSIT Umar Tech Systems",
                time: "March 2025 – Present",
                desc: "Leading scalable API development & Laravel Octane implementation",
                achievements: ["5+ enterprise apps", "75% faster APIs", "CI/CD pipelines"],
                color: "from-rose-500 to-emerald-500"
              },
              {
                role: "PHP Laravel Developer", 
                company: "Wagnistrip",
                time: "June 2024 – March 2025",
                desc: "Travel booking platform with multi-gateway payments",
                achievements: ["10K+ transactions/month", "99.9% uptime", "Stripe/Razorpay"],
                color: "from-emerald-500 to-purple-500"
              },
              {
                role: "PHP Laravel Developer",
                company: "NDMEAA Technologies", 
                time: "Feb 2023 – June 2024",
                desc: "HR management system for 5000+ users",
                achievements: ["80% query optimization", "Real-time analytics", "SaaS ready"],
                color: "from-purple-500 to-rose-500"
              }
            ].map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group flex items-start gap-8 p-8 bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-3xl border border-white/70 transition-all duration-500 hover:-translate-y-4 relative"
              >
                <div className={`absolute left-0 w-2 h-full bg-gradient-to-b ${exp.color} rounded-full`} />
                <div className={`text-4xl p-4 bg-gradient-to-br ${exp.color} text-white rounded-2xl shadow-xl group-hover:scale-110 transition-all flex-shrink-0`}>
                  {i === 0 ? "🚀" : i === 1 ? "✈️" : "🔧"}
                </div>
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-black group-hover:text-rose-600 transition-colors">{exp.role}</h3>
                    <p className="text-xl font-bold text-gray-800">{exp.company}</p>
                    <p className="text-lg text-emerald-600 font-semibold mt-1">{exp.time}</p>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">{exp.desc}</p>
                  <div className="flex flex-wrap gap-3">
                    {exp.achievements.map((ach, idx) => (
                      <span key={idx} className="px-4 py-2 bg-gradient-to-r from-rose-500/10 to-emerald-500/10 text-sm font-semibold text-gray-800 rounded-xl border border-rose-200/50">
                        {ach}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

            {/* services */}

      <section id="services" className="py-32 px-6 relative min-h-screen flex items-center bg-gray-50/60">
  <div className="max-w-6xl mx-auto text-center relative z-20">

    <h2 className="text-5xl md:text-6xl font-black mb-20">
      What I Do
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">

      {[
        "Backend Development (Laravel / PHP)",
        "REST API Development & Integration",
        "Full Stack Web Application Development",
        "Database Design & Optimization",
        "Real-time Applications (WebSockets / Pusher)",
        "Payment Gateway Integration",
        "SaaS Platform Development",
        "Performance Optimization",
        "System Architecture Design"
      ].map((item, i) => (
        <div key={i} className="p-6 bg-white/80 rounded-2xl shadow-lg border border-white/50">
          <p className="text-lg font-semibold text-gray-800">✔ {item}</p>
        </div>
      ))}

    </div>

  </div>
      </section>


      {/* Achievement */}

      <section id="achievements" className="py-32 px-6 relative min-h-screen flex items-center">
  <div className="max-w-5xl mx-auto text-center relative z-20">

    <h2 className="text-5xl md:text-6xl font-black mb-20">
      Key Achievements
    </h2>

    <div className="space-y-6 text-left max-w-4xl mx-auto">

      {[
        "Built and deployed enterprise applications used by 10K+ users",
        "Improved API performance by up to 75% using optimization techniques",
        "Handled high traffic systems with 99.9% uptime reliability",
        "Developed scalable architecture for SaaS-based platforms",
        "Integrated multiple payment gateways (Stripe, Razorpay, PayPal)",
        "Optimized database queries and reduced load time by 60%"
      ].map((item, i) => (
        <div key={i} className="p-5 bg-gradient-to-r from-pink-50 to-teal-50 rounded-xl border border-white/60">
          <p className="text-lg text-gray-800 font-medium">• {item}</p>
        </div>
      ))}

    </div>

  </div>
     </section>

     {/* Approach */}

     <section id="approach" className="py-32 px-6 relative min-h-screen flex items-center bg-gray-50/50">
  <div className="max-w-5xl mx-auto text-center relative z-20">

    <h2 className="text-5xl md:text-6xl font-black mb-20">
      My Approach
    </h2>

    <div className="space-y-6 text-left max-w-4xl mx-auto">

      {[
        "Understand requirements deeply before starting development",
        "Design scalable and clean system architecture",
        "Build modular and reusable code structure",
        "Focus on performance and security from day one",
        "Test thoroughly before deployment",
        "Continuously improve and optimize production systems"
      ].map((item, i) => (
        <div key={i} className="p-5 bg-white/80 rounded-xl shadow-md border border-white/50">
          <p className="text-lg text-gray-800 font-medium">• {item}</p>
        </div>
      ))}

    </div>

  </div>
     </section>

      {/* Skills - Modern Grid */}
      <section id="skills" className="py-32 px-6 min-h-screen flex items-center relative bg-gradient-to-r from-slate-50 to-emerald-50/20">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl lg:text-6xl font-black text-center mb-24 bg-gradient-to-r from-gray-900 to-emerald-700 bg-clip-text text-transparent"
          >
            Tech Stack
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Backend", skills: ["Laravel", "PHP 8.3", "CodeIgniter", "Node.js"], icon: "⚙️", color: "from-rose-500 to-emerald-500"
              },
              {
                title: "Frontend", skills: ["React.js", "Next.js 15", "Vue.js", "TypeScript"], icon: "🎨", color: "from-emerald-500 to-purple-500"
              },
              {
                title: "Database", skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis"], icon: "🗄️", color: "from-purple-500 to-rose-500"
              },
              {
                title: "Tools", skills: ["Git/GitHub", "Docker", "AWS", "Vercel"], icon: "🔧", color: "from-orange-500 to-rose-500"
              }
            ].map((group, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -20, scale: 1.05 }}
                transition={{ delay: i * 0.1 }}
                className={`group p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border border-white/50 backdrop-blur-xl bg-gradient-to-br ${group.color} from-20%`}
              >
                <div className="text-5xl mb-8 opacity-90">{group.icon}</div>
                <h3 className="text-2xl font-black mb-8 text-white drop-shadow-lg">{group.title}</h3>
                <div className="space-y-3">
                  {group.skills.map((skill, idx) => (
                    <div key={idx} className="px-6 py-3 bg-white/20 backdrop-blur-xl rounded-2xl text-white font-semibold hover:bg-white/40 hover:scale-105 transition-all cursor-pointer border border-white/30">
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects - Featured Grid */}
      <section id="projects" className="py-32 px-6 bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl lg:text-6xl font-black text-center mb-24 bg-gradient-to-r from-gray-900 to-emerald-700 bg-clip-text text-transparent"
          >
            Featured Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                name: "Ogonn Platform", desc: "Full-stack e-commerce with multi-vendor & real-time tracking", 
                tech: "Laravel 11 • Vue.js • MySQL • Redis", stats: ["10K+ Users", "50+ Vendors", "99.9%"],
                color: "from-rose-500 to-purple-500"
              },
              {
                name: "Wagnistrip", desc: "Travel booking with AI recommendations & payments", 
                tech: "Laravel • Stripe • PostgreSQL", stats: ["100K+ Transactions", "50+ Destinations", "Live APIs"],
                color: "from-emerald-500 to-teal-500"
              },
              {
                name: "Zaadoo HRM", desc: "Enterprise HR system with payroll & analytics", 
                tech: "Laravel • React • AWS", stats: ["5K+ Employees", "20+ Modules", "SaaS"],
                color: "from-purple-500 to-rose-500"
              },
              {
                name: "Googly11", desc: "Fantasy sports with live scoring & wallets", 
                tech: "Laravel • Pusher • Redis", stats: ["50K+ Users", "Live Scoring", "WebSocket"],
                color: "from-orange-500 to-emerald-500"
              }
            ].map((project, i) => (
              <motion.a
                key={i}
                href="#"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -20, scale: 1.02 }}
                className={`group p-12 rounded-3xl shadow-2xl hover:shadow-4xl transition-all duration-700 border border-white/60 backdrop-blur-xl bg-gradient-to-br ${project.color} from-30% hover:-translate-y-6`}
              >
                <h3 className="text-3xl font-black mb-6 text-white drop-shadow-xl group-hover:scale-105">{project.name}</h3>
                <p className="text-lg text-white/90 mb-8 leading-relaxed drop-shadow-md">{project.desc}</p>
                <div className="flex gap-3 mb-8">
                  <span className="px-4 py-2 bg-white/30 backdrop-blur-xl rounded-2xl text-white font-bold border border-white/50">
                    {project.tech}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {project.stats.map((stat, idx) => (
                    <div key={idx} className="p-4 bg-white/20 backdrop-blur-xl rounded-2xl text-white font-bold text-center border border-white/40 group-hover:bg-white/40">
                      {stat}
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-3 text-white font-semibold">
                  View Project → 
                  <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section
  id="contact"
  className="py-32 px-6 min-h-screen flex items-center relative bg-gradient-to-br from-[#fff7ed] via-[#fef5e7] to-[#e6f3f7]"
>
  {/* soft animated bg */}
  <div className="absolute inset-0 bg-gradient-to-r from-pink-400/10 via-teal-400/10 to-pink-400/10 blur-3xl opacity-40" />

  <div className="max-w-5xl mx-auto text-center relative z-10">

    {/* Heading */}
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-5xl lg:text-7xl font-black mb-12 bg-gradient-to-r from-pink-500 via-purple-500 to-teal-500 bg-clip-text text-transparent"
    >
      Let's Build Together
    </motion.h2>

    <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/90 backdrop-blur-lg p-16 rounded-3xl shadow-3xl border border-white/70 hover:shadow-4xl transition-all duration-500 max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-3 gap-10 mb-16">
              <div className="flex flex-col items-center gap-4 p-8 bg-gradient-to-br from-pink-500/5 via-teal-500/5 to-purple-500/5 rounded-3xl backdrop-blur-md border border-white/50 hover:shadow-2xl transition-all hover:-translate-y-2">
                <MdEmail size={40} className="text-pink-500 drop-shadow-lg group-hover:scale-110 transition-all" />
                <div>
                  <h4 className="text-xl font-black text-gray-900 mb-1">Email Me</h4>
                  <a href="mailto:farida.ansari786000@gmail.com" className="text-lg font-semibold text-gray-800 hover:text-pink-600 transition-colors break-all">
                    farida.ansari786000@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4 p-8 bg-gradient-to-br from-teal-500/5 via-purple-500/5 to-pink-500/5 rounded-3xl backdrop-blur-md border border-white/50 hover:shadow-2xl transition-all hover:-translate-y-2">
                <FaGithub size={40} className="text-gray-900 drop-shadow-lg group-hover:scale-110 transition-all" />
                <div>
                  <h4 className="text-xl font-black text-gray-900 mb-1">GitHub</h4>
                  <a href="https://github.com/Sonaansari" className="text-lg font-semibold text-gray-800 hover:text-pink-600 transition-colors">
                    Sonaansari
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4 p-8 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-teal-500/5 rounded-3xl backdrop-blur-md border border-white/50 hover:shadow-2xl transition-all hover:-translate-y-2">
                <FaLinkedin size={40} className="text-blue-600 drop-shadow-lg group-hover:scale-110 transition-all" />
                <div>
                  <h4 className="text-xl font-black text-gray-900 mb-1">LinkedIn</h4>
                  <a href="https://linkedin.com/in/farida-ansari7860" className="text-lg font-semibold text-gray-800 hover:text-teal-600 transition-colors">
                    farida-ansari7860
                  </a>
                </div>
              </div>
            </div>

            <motion.a
              href="mailto:farida.ansari786000@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="group relative block w-fit mx-auto bg-gradient-to-r from-pink-500 via-purple-500 to-teal-500 text-white px-16 py-6 rounded-3xl font-black text-xl shadow-3xl hover:shadow-4xl transition-all duration-400 overflow-hidden backdrop-blur-md"
            >
              <span className="relative z-10">Start a Project Today 🚀</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </motion.a>
          </motion.div>
  </div>
</section>
    </main>
  );
}
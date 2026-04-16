"use client";

import Navbar from "./components/Navbar";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { FaGithub, FaLinkedin, FaCode, FaDatabase, FaServer, FaRocket, FaReact, FaNodeJs } from "react-icons/fa";
import { MdEmail, MdBuild, MdStar } from "react-icons/md";
import { useRef, useEffect } from "react";

export default function Home() {
  const heroRef = useRef(null);
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
        </div>
      </section>

      {/* about */}

      <section id="about" className="py-32 px-6 relative min-h-screen flex items-center">
  <div className="max-w-5xl mx-auto text-center relative z-20">

    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-5xl md:text-6xl font-black mb-16"
    >
      About Me
    </motion.h2>

    <p className="text-xl md:text-2xl leading-relaxed text-gray-700 mb-8">
      I am a passionate Full Stack Laravel Developer focused on building scalable, high-performance web applications.
      I specialize in backend architecture, API development, and system optimization.
    </p>

    <p className="text-xl md:text-2xl leading-relaxed text-gray-700 mb-8">
      My experience includes working on enterprise SaaS platforms, travel systems, HR management tools,
      and real-time applications handling thousands of users.
    </p>

    <p className="text-xl md:text-2xl leading-relaxed text-gray-700">
      I enjoy solving complex technical problems and turning ideas into production-ready systems.
    </p>

  </div>
       </section>

      {/* Objective */}

      <section id="objective" className="py-32 px-6 relative min-h-screen flex items-center">
  <div className="max-w-4xl mx-auto text-center relative z-20">

    <h2 className="text-5xl md:text-6xl font-black mb-12">
      Career Objective
    </h2>

    <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
      To work as a Full Stack Developer in a growth-driven organization where I can utilize my expertise
      in Laravel, backend systems, and scalable architecture to build impactful digital products while
      continuously learning and improving my technical skills.
    </p>

  </div>
</section>

      {/* Experience Section - Optimized */}
      <section id="experience" className="py-32 px-6 bg-gradient-to-b from-white/95 to-gray-50/90 relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-50/30 to-teal-50/30 backdrop-blur-sm" />
        <div className="relative z-20 max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-center mb-24 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent drop-shadow-2xl"
          >
            Professional Experience
          </motion.h2>

          <div className="relative max-w-5xl mx-auto">
            {[
              {
                role: "PHP Full Stack Developer",
                company: "TTSIT Umar Tech Systems",
                time: "March 2025 – Present",
                desc: "Leading backend development with scalable APIs, enterprise-grade security, and microservices architecture. Implemented Laravel Octane for 10x performance gains.",
                achievements: ["Architected 5+ enterprise applications", "Reduced API response time by 75%", "Implemented comprehensive CI/CD pipelines"],
                icon: "🚀",
                color: "from-pink-500 to-teal-500"
              },
              {
                role: "PHP Laravel Developer",
                company: "Wagnistrip",
                time: "June 2024 – March 2025",
                desc: "Built complete travel booking ecosystem with multi-gateway payment integrations, real-time notifications, and advanced search algorithms.",
                achievements: ["Integrated Stripe, Razorpay & PayPal", "Processed 10K+ transactions/month", "Achieved 99.9% uptime during peak seasons"],
                icon: "✈️",
                color: "from-teal-500 to-purple-500"
              },
              {
                role: "PHP Laravel Developer",
                company: "NDMEAA Technologies",
                time: "Feb 2023 – June 2024",
                desc: "Architected modular enterprise applications with optimized databases, 3rd-party API integrations, and advanced authentication systems.",
                achievements: ["Built HR management system for 5000+ users", "Optimized database queries by 80%", "Implemented real-time dashboard analytics"],
                icon: "🔧",
                color: "from-purple-500 to-pink-500"
              }
            ].map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                whileHover={{ x: 20, scale: 1.02 }}
                className="group flex gap-6 p-8 mb-16 bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl hover:shadow-3xl border border-white/60 transition-all duration-500 relative overflow-hidden hover:-translate-y-2"
              >
                <div className={`absolute left-0 w-1.5 h-full bg-gradient-to-b ${exp.color}`} />
                <motion.div 
                  className="text-4xl flex-shrink-0 p-3 bg-gradient-to-br from-pink-500/15 to-teal-500/15 rounded-2xl shadow-xl group-hover:scale-110 transition-all duration-300"
                  whileHover={{ rotate: 180 }}
                >
                  {exp.icon}
                </motion.div>
                <div className="flex-1 min-w-0 relative z-10">
                  <h3 className="text-2xl lg:text-3xl font-black mb-3 group-hover:text-pink-600 transition-colors duration-300 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text">
                    {exp.role}
                  </h3>
                  <p className="text-xl font-bold text-gray-800 mb-1">{exp.company}</p>
                  <p className="text-lg text-teal-600 font-semibold mb-6 tracking-wide">{exp.time}</p>
                  <p className="text-lg leading-relaxed text-gray-700 mb-6 max-w-xl">{exp.desc}</p>
                  
                  <div className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 bg-gradient-to-r from-pink-500/5 to-teal-500/5 rounded-xl border-l-3 border-teal-500 group-hover:border-pink-500 transition-all">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-pink-500 to-teal-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-base font-semibold text-gray-800">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section - Optimized */}
      <section id="skills" className="py-32 px-6 relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-50/50 to-teal-50/50 backdrop-blur-md" />
        <div className="relative z-20 max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-center mb-24 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent drop-shadow-2xl"
          >
            Tech Stack Mastery
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Backend",
                skills: ["Laravel", "PHP","Codeigniter","Node.js", "Next.js", "Python"],
                color: "from-pink-500 to-teal-500",
                icon: "⚙️"
              },
              {
                title: "Frontend",
                skills: ["React.js", "Next.js", "Vue.js", "Angular", "Tailwind CSS", "TypeScript"],
                color: "from-teal-500 to-purple-500",
                icon: "🎨"
              },
              {
                title: "Database",
                skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
                color: "from-purple-500 to-pink-500",
                icon: "🗄️"
              },
              {
                title: "DevOps & Tools",
                skills: ["Git/GitHub", "VS Code", "Laravel Forge", "Vercel", "AWS"],
                color: "from-orange-500 to-pink-500",
                icon: "🔧"
              }
            ].map((group, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -20, scale: 1.05 }}
                className={`group relative bg-gradient-to-br ${group.color}/10 to-white/80 p-10 rounded-3xl shadow-2xl border border-white/40 backdrop-blur-lg hover:shadow-4xl hover:scale-105 transition-all duration-500 overflow-hidden`}
              >
                <div className="text-4xl mb-6 relative z-10">{group.icon}</div>
                <h3 className="text-2xl font-black mb-8 text-gray-900 drop-shadow-lg relative z-10">
                  {group.title}
                </h3>
                <div className="space-y-3 relative z-10">
                  {group.skills.map((skill, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05, duration: 0.4 }}
                      whileHover={{ scale: 1.05, x: 8 }}
                      className="group-hover:opacity-100 opacity-90 px-5 py-3 bg-white/50 backdrop-blur-md rounded-2xl text-gray-900 font-semibold text-base cursor-pointer transition-all duration-300 hover:bg-white/70 hover:shadow-xl border border-white/50"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - Optimized */}
      <section id="projects" className="py-32 px-6 bg-gradient-to-br from-gray-50/95 via-white to-gray-50/90 relative min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto relative z-20">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-center mb-24 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent drop-shadow-2xl"
          >
            Featured Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                name: "Ogonn Platform",
                desc: "Complete full-stack e-commerce ecosystem with advanced inventory management, multi-vendor support, and real-time order tracking",
                tech: "Laravel 11 + Vue.js 3 + MySQL + Redis",
                link: "#",
                color: "from-pink-500 to-purple-500",
                stats: ["10K+ Users", "50+ Vendors", "99.9% Uptime"]
              },
              {
                name: "Wagnistrip",
                desc: "Advanced travel booking platform with AI-powered recommendations, multi-gateway payments, and real-time flight/hotel availability",
                tech: "Laravel + Stripe + PostgreSQL",
                link: "#",
                color: "from-teal-500 to-emerald-500",
                stats: ["100K+ Transactions", "50+ Destinations", "Real-time APIs"]
              },
              {
                name: "Zaadoo HRM",
                desc: "Enterprise HR management system with employee onboarding, payroll automation, performance analytics, and compliance tracking",
                tech: "Laravel + React + MySQL + AWS",
                link: "#",
                color: "from-purple-500 to-pink-500",
                stats: ["5K+ Employees", "20+ Modules", "SaaS Ready"]
              },
              {
                name: "Googly11",
                desc: "Fantasy sports platform with live scoring, real-time leaderboards, wallet system, and multi-match contest management",
                tech: "Laravel + Pusher + Vue.js + Redis",
                link: "#",
                color: "from-orange-500 to-red-500",
                stats: ["50K+ Users", "Live Scoring", "WebSocket"]
              }
            ].map((project, i) => (
              <motion.a
                key={i}
                href={project.link}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -20, scale: 1.03 }}
                className={`group relative bg-gradient-to-br ${project.color}/10 to-white/90 p-12 rounded-3xl shadow-2xl hover:shadow-4xl border border-white/50 backdrop-blur-lg transition-all duration-500 overflow-hidden hover:-translate-y-4`}
              >
                <div className="relative z-20">
                  <h3 className="text-3xl font-black mb-4 text-gray-900 drop-shadow-lg group-hover:scale-105 transition-all">
                    {project.name}
                  </h3>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-md drop-shadow-sm">
                    {project.desc}
                  </p>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-4 py-2 bg-white/60 backdrop-blur-md rounded-2xl text-gray-900 font-bold text-sm border border-white/70">
                      {project.tech}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {project.stats.map((stat, idx) => (
                      <div key={idx} className="text-center p-3 bg-white/50 backdrop-blur-md rounded-xl border border-white/60 group-hover:bg-white/70 transition-all">
                        <div className="text-xl font-black text-gray-900 drop-shadow-sm">{stat}</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-base font-semibold text-gray-800">View Project</span>
                    <svg className="w-6 h-6 text-gray-700 group-hover:translate-x-2 transition-transform duration-300 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.a>
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


<section className="py-32 px-6 relative min-h-screen flex items-center bg-gradient-to-r from-pink-50/40 to-teal-50/40">
  <div className="max-w-4xl mx-auto text-center relative z-20">

    <h2 className="text-5xl md:text-6xl font-black mb-10">
      Let’s Build Something Powerful
    </h2>

    <p className="text-xl text-gray-700 mb-12">
      I am available for freelance work, full-time roles, and long-term collaborations.
      Let’s discuss how I can help bring your ideas to life.
    </p>

    <a
      href="mailto:farida.ansari786000@gmail.com"
      className="inline-block bg-black text-white px-10 py-5 rounded-2xl text-lg font-bold hover:scale-105 transition-all"
    >
      Contact Me
    </a>

  </div>
</section>


      {/* Contact Section - Optimized */}
      <section id="contact" className="py-32 px-6 relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-400/10 via-white/90 to-teal-400/10 backdrop-blur-lg" />
        <div className="relative z-30 max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black mb-16 bg-gradient-to-r from-pink-600 via-purple-600 to-teal-600 bg-clip-text text-transparent drop-shadow-2xl"
          >
            Let's Create Something Amazing Together
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
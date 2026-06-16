import { useState } from 'react'
import developerPortrait from './assets/pic.jpeg'
import certDsa from './assets/dsa.png'
import certCpp from './assets/cpp.png'
import certWeb from './assets/web.png'
import {
  SiReact, SiJavascript, SiTailwindcss, SiHtml5, SiVite, SiTypescript,
  SiNodedotjs, SiExpress, SiPostgresql, SiMongodb, SiGraphql,
  SiDocker, SiLinux, SiVercel, SiGithub
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa'
import { TbApi, TbGitBranch } from 'react-icons/tb'

const SKILL_ICONS = {
  'React': { icon: SiReact, color: '#61DAFB' },
  'JavaScript (ES6+)': { icon: SiJavascript, color: '#F7DF1E' },
  'Tailwind CSS': { icon: SiTailwindcss, color: '#06B6D4' },
  'HTML5 & CSS3': { icon: SiHtml5, color: '#E34F26' },
  'Vite': { icon: SiVite, color: '#646CFF' },
  'TypeScript': { icon: SiTypescript, color: '#3178C6' },
  'Node.js': { icon: SiNodedotjs, color: '#339933' },
  'Express.js': { icon: SiExpress, color: '#aaaaaa' },
  'REST APIs': { icon: TbApi, color: '#FF6B6B' },
  'PostgreSQL': { icon: SiPostgresql, color: '#4169E1' },
  'MongoDB': { icon: SiMongodb, color: '#47A248' },
  'GraphQL': { icon: SiGraphql, color: '#E10098' },
  'Git & GitHub': { icon: SiGithub, color: '#aaaaaa' },
  'Docker': { icon: SiDocker, color: '#2496ED' },
  'AWS (S3/EC2)': { icon: FaAws, color: '#FF9900' },
  'CI/CD Pipelines': { icon: TbGitBranch, color: '#22D3EE' },
  'Linux Shell': { icon: SiLinux, color: '#FCC624' },
  'Vercel': { icon: SiVercel, color: '#aaaaaa' },
}

const SKILLS = [
  {
    category: "Frontend",
    items: ["React", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 & CSS3", "Vite", "TypeScript"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "PostgreSQL", "MongoDB", "GraphQL"]
  },
  {
    category: "Tools & DevOps",
    items: ["Git & GitHub", "Docker", "AWS (S3/EC2)", "CI/CD Pipelines", "Linux Shell", "Vercel"]
  }
]

const PROJECTS = [
  {
    title: "Cloud Task Orchestrator",
    description: "A centralized dashboard for distributed teams. Supports drag-and-drop workflow construction, automatic email alerts, and live sync.",
    tech: ["React", "Node.js", "Tailwind CSS", "MongoDB"],
    github: "https://github.com",
    live: "https://example.com"
  },
  {
    title: "E-Commerce Core Engine",
    description: "A headless shop with lightning-fast static page generation, full-text product search, and secure Stripe payment integration.",
    tech: ["React", "Vite", "Tailwind CSS", "Stripe API"],
    github: "https://github.com",
    live: "https://example.com"
  },
  {
    title: "CodeSync Collaboration Hub",
    description: "A real-time collaborative workspace with code syntax highlighting, cursor sharing, and integrated workspace controls.",
    tech: ["React", "Socket.io", "Tailwind CSS", "Express"],
    github: "https://github.com",
    live: "https://example.com"
  }
]

const CERTIFICATES = [
  {
    title: "Data Structures and Algorithm",
    issuer: "Lovely Professional University",
    date: "Dec 2024",
    credentialId: "20A10D635J9AK00L8",
    link: "https://lpucolab438.examly.io/certificate/U2FsdGVkX1%2BTDlpXyM%2BHGcn400eCT%2Ft94zB1F2GAuL8%3D",
    image: certDsa
  },
  {
    title: "Object Oriented Programming",
    issuer: "Lovely Professional University",
    date: "Dec 2024",
    credentialId: "270k8Cl2dm7D23d77",
    link: "https://lpucolab438.examly.io/certificate/U2FsdGVkX1%2BlfO1oQtDvi4S3wv7twfmjbGZNi8a2v%2B0%3D",
    image: certCpp
  },
  {
    title: "Legacy Responsive Web Design V8",
    issuer: "freeCodeCamp",
    date: "Dec 2023",
    credentialId: "fccb36e6efe-7b12-45b3-aaa0-bfb36942cd8d",
    link: "https://www.freecodecamp.org/certification/fccb36e6efe-7b12-45b3-aaa0-bfb36942cd8d/responsive-web-design",
    image: certWeb
  }
]

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [formStatus, setFormStatus] = useState('idle')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      return
    }
    setFormStatus('sending')
    setTimeout(() => {
      setFormStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 1200)
  }

  const resetFormStatus = () => {
    setFormStatus('idle')
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-300 font-sans selection:bg-neutral-800 selection:text-neutral-100">
      <header className="sticky top-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-900">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#hero" className="text-xl font-bold tracking-tight text-neutral-100">
            Portfolio
          </a>

          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <a href="#about" className="hover:text-neutral-100 transition-colors">About</a>
            <a href="#skills" className="hover:text-neutral-100 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-neutral-100 transition-colors">Projects</a>
            <a href="#certificates" className="hover:text-neutral-100 transition-colors">Certificates</a>
            <a href="#contact" className="hover:text-neutral-100 transition-colors">Contact</a>
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-400 hover:text-neutral-100 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden border-b border-neutral-900 bg-neutral-950 px-6 py-4 flex flex-col space-y-4 text-sm font-medium">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-neutral-100 transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-neutral-100 transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-neutral-100 transition-colors"
            >
              Projects
            </a>
            <a
              href="#certificates"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-neutral-100 transition-colors"
            >
              Certificates
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-neutral-100 transition-colors"
            >
              Contact
            </a>
          </nav>
        )}
      </header>

      <main>
        <section id="hero" className="max-w-6xl mx-auto px-6 py-20 md:py-32 flex flex-col-reverse md:flex-row items-center justify-between gap-12 border-b border-neutral-900">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-100 leading-tight">
              Hello, I'm <span className="text-neutral-50 underline decoration-neutral-700 underline-offset-8">Abhigyan</span>
            </h1>
            <p className="text-lg sm:text-xl text-neutral-400 max-w-lg leading-relaxed mx-auto md:mx-0">
              A dedicated software developer building clean, high-performance, and scalable web applications with modern technologies.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
              <a
                href="#contact"
                className="w-full sm:w-auto text-center bg-neutral-100 text-neutral-950 hover:bg-neutral-200 font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="w-full sm:w-auto text-center border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900/50 px-6 py-3 rounded-lg text-sm font-medium transition-colors"
              >
                View Projects
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900">
              <img
                src={developerPortrait}
                alt="Abhigyan's Portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        <section id="about" className="max-w-6xl mx-auto px-6 py-20 md:py-28 border-b border-neutral-900">
          <div className="space-y-4 max-w-3xl">
            <h2 className="text-sm font-semibold tracking-wider text-neutral-400 uppercase">
              About Me
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-neutral-100">
              Passionate developer driven by clean code and systems thinking.
            </h3>
            <p className="text-neutral-400 leading-relaxed text-base pt-2">
              I specialize in full-stack JavaScript development, with deep expertise in React, Node.js, and cloud ecosystems. I enjoy solving architectural challenges, optimizing frontend bundle sizes, and building intuitive user interfaces.
            </p>
            <p className="text-neutral-400 leading-relaxed text-base">
              My design philosophy is minimalist and user-centric. I believe code should be maintainable, documentation complete, and user interfaces clutter-free.
            </p>
          </div>

        </section>

        <section id="skills" className="max-w-6xl mx-auto px-6 py-20 md:py-28 border-b border-neutral-900">
          <div className="space-y-4 mb-12">
            <h2 className="text-sm font-semibold tracking-wider text-neutral-400 uppercase">
              Skills
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-neutral-100">
              Technical Competence
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {SKILLS.map((grp) => (
              <div key={grp.category} className="bg-neutral-900/50 border border-neutral-900 p-6 rounded-xl space-y-4">
                <h4 className="text-lg font-bold text-neutral-100 border-b border-neutral-800 pb-2">
                  {grp.category}
                </h4>
                <ul className="flex flex-wrap gap-2 pt-2">
                  {grp.items.map((skill) => {
                    const entry = SKILL_ICONS[skill]
                    const Icon = entry?.icon
                    return (
                      <li
                        key={skill}
                        className="flex items-center gap-1.5 bg-neutral-950 text-neutral-300 text-xs px-3 py-1.5 rounded-md border border-neutral-800 hover:border-neutral-700 transition-colors"
                      >
                        {Icon && <Icon style={{ color: entry.color }} className="shrink-0" size={13} />}
                        {skill}
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="max-w-6xl mx-auto px-6 py-20 md:py-28 border-b border-neutral-900">
          <div className="space-y-4 mb-12">
            <h2 className="text-sm font-semibold tracking-wider text-neutral-400 uppercase">
              Projects
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-neutral-100">
              Featured Work
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PROJECTS.map((proj) => (
              <div key={proj.title} className="bg-neutral-900/50 border border-neutral-900 rounded-xl overflow-hidden flex flex-col justify-between p-6">
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-neutral-100">
                    {proj.title}
                  </h4>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {proj.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {proj.tech.map((t) => (
                      <span key={t} className="text-[10px] uppercase font-mono tracking-wider bg-neutral-950 text-neutral-400 px-2.5 py-1 rounded border border-neutral-900">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-4 pt-6 border-t border-neutral-900 mt-6 text-sm">
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-neutral-300 hover:text-neutral-100 transition-colors"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                    </svg>
                    Source
                  </a>
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-neutral-300 hover:text-neutral-100 transition-colors"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="certificates" className="max-w-6xl mx-auto px-6 py-20 md:py-28 border-b border-neutral-900">
          <div className="space-y-4 mb-12">
            <h2 className="text-sm font-semibold tracking-wider text-neutral-400 uppercase">
              Certificates
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-neutral-100">
              Professional Credentials
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {CERTIFICATES.map((cert) => (
              <div key={cert.title} className="bg-neutral-900/50 border border-neutral-900 rounded-xl flex flex-col justify-between overflow-hidden">
                {/* Certificate image preview */}
                <a href={cert.link} target="_blank" rel="noreferrer" className="block">
                  {cert.image ? (
                    <img
                      src={cert.image}
                      alt={`${cert.title} certificate`}
                      className="w-full h-44 object-cover transition-opacity hover:opacity-90"
                    />
                  ) : (
                    <div className="w-full h-44 bg-neutral-900 border-b border-neutral-800 flex items-center justify-center">
                      <svg className="h-10 w-10 text-neutral-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                  )}
                </a>

                <div className="p-6 space-y-3 flex flex-col flex-1">
                  <div className="text-xs text-neutral-400 uppercase font-mono tracking-wider">
                    {cert.issuer} &bull; {cert.date}
                  </div>
                  <h4 className="text-base font-bold text-neutral-100">
                    {cert.title}
                  </h4>
                  <div className="text-xs text-neutral-400 bg-neutral-950 p-2.5 rounded border border-neutral-900 font-mono select-all">
                    ID: {cert.credentialId}
                  </div>

                  <div className="pt-4 border-t border-neutral-900 mt-auto text-sm">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-neutral-300 hover:text-neutral-100 transition-colors"
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      Verify Credential
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="max-w-6xl mx-auto px-6 py-20 md:py-28 border-b border-neutral-900">
          <div className="space-y-4 mb-12">
            <h2 className="text-sm font-semibold tracking-wider text-neutral-400 uppercase">
              Contact
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-neutral-100">
              Start a Conversation
            </h3>
          </div>

          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-2 space-y-6">
              <p className="text-neutral-400 leading-relaxed">
                If you have a project idea, want to collaborate, or have questions about my work, please reach out. I try to reply to all messages within 24 hours.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <svg className="h-5 w-5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:abhigyansmile@gmail.com" className="hover:text-neutral-100 transition-colors text-sm">
                    abhigyansmile@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="h-5 w-5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm">India</span>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 border border-neutral-900 hover:border-neutral-800 bg-neutral-900/40 hover:bg-neutral-900 hover:text-neutral-100 rounded-lg text-neutral-400 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 border border-neutral-900 hover:border-neutral-800 bg-neutral-900/40 hover:bg-neutral-900 hover:text-neutral-100 rounded-lg text-neutral-400 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="md:col-span-3">
              {formStatus === 'success' ? (
                <div className="bg-neutral-900/80 border border-neutral-800 p-8 rounded-xl text-center space-y-4">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-neutral-800 text-neutral-100">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-neutral-100">Message Sent Successfully</h4>
                  <p className="text-sm text-neutral-400">
                    Thank you for reaching out, I will get back to you as soon as possible.
                  </p>
                  <button
                    onClick={resetFormStatus}
                    className="mt-4 px-4 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-950 font-semibold rounded-lg text-xs transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-neutral-900 border border-neutral-800 focus:border-neutral-600 rounded-lg p-3 text-sm text-neutral-100 placeholder-neutral-600 focus:outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-neutral-900 border border-neutral-800 focus:border-neutral-600 rounded-lg p-3 text-sm text-neutral-100 placeholder-neutral-600 focus:outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full bg-neutral-900 border border-neutral-800 focus:border-neutral-600 rounded-lg p-3 text-sm text-neutral-100 placeholder-neutral-600 focus:outline-none transition-colors"
                      placeholder="Project Discussion"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full bg-neutral-900 border border-neutral-800 focus:border-neutral-600 rounded-lg p-3 text-sm text-neutral-100 placeholder-neutral-600 focus:outline-none resize-none transition-colors"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className="w-full bg-neutral-100 hover:bg-neutral-200 disabled:bg-neutral-800 text-neutral-950 font-semibold p-3 rounded-lg text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {formStatus === 'sending' ? (
                      <svg className="animate-spin h-5 w-5 text-neutral-950" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-neutral-950 border-t border-neutral-900 py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
          <div className="text-neutral-500">
            &copy; {new Date().getFullYear()} Abhig. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#about" className="text-neutral-500 hover:text-neutral-300 transition-colors">About</a>
            <a href="#skills" className="text-neutral-500 hover:text-neutral-300 transition-colors">Skills</a>
            <a href="#projects" className="text-neutral-500 hover:text-neutral-300 transition-colors">Projects</a>
            <a href="#contact" className="text-neutral-500 hover:text-neutral-300 transition-colors">Contact</a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-neutral-400 hover:text-neutral-100 transition-colors flex items-center gap-1.5 focus:outline-none"
              aria-label="Back to top"
            >
              Back to top &uarr;
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

'use client';

import { useState } from 'react';
import { Code2 as Github, Briefcase as Linkedin, Mail, ExternalLink, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Replace these with your actual details
  const name = "Keerthivasan R V";
  const headline = "Software Developer | Passionate about Building Scalable Applications";
  const about = "Your professional summary from LinkedIn. Highlight your expertise, years of experience, key achievements, and what drives you in software development. (Replace this text with your full About section.)";

  const skills = [
    "Git", "GitHub", "Docker", "Kubernetes", "Node.js", "Python",
    "SQL", "MongoDB", "Tailwind CSS", "Git", "AWS", "Docker" // Add or remove as per your skills
  ];

  const experiences = [
    {
      role: "Software Developer",
      company: "Company Name",
      period: "Month Year – Present",
      description: "Key responsibilities and achievements. Quantify where possible (e.g., improved performance by 40%).",
      technologies: ["React", "Node.js", "TypeScript"]
    },
    // Add more experiences as needed
  ];

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "University Name",
      period: "Year – Year",
      details: "Relevant coursework or achievements."
    }
  ];

  const projects = [
    {
      title: "Project Title 1",
      description: "Brief description of the project, its purpose, and your contribution.",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
      github: "https://github.com/yourusername/project1", // Add your GitHub link
      live: "https://project1.live" // Optional live demo link
    },
    // Add 3–6 projects with your GitHub links
  ];

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-900/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="text-2xl font-semibold tracking-tight">{name.split(' ')[0]}</div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
            <a href="#experience" className="hover:text-emerald-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-emerald-400 transition-colors">Skills</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://linkedin.com/in/keerthivasan-r-v-6238a622a/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:your.email@example.com" className="hover:text-emerald-400 transition-colors">
              <Mail size={20} />
            </a>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-zinc-900 border-t border-zinc-800 px-6 py-6 text-sm">
            <div className="flex flex-col gap-4">
              <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</a>
              <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
              <a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="hero-bg min-h-screen flex items-center pt-20">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-6">
              Hi, I&apos;m {name}
            </h1>
            <p className="text-2xl md:text-3xl text-zinc-400 mb-8">{headline}</p>
            <p className="text-lg text-zinc-300 max-w-2xl mb-10">{about}</p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects" 
                className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold rounded-full transition-all flex items-center gap-2"
              >
                View My Projects
              </a>
              <a 
                href="https://linkedin.com/in/keerthivasan-r-v-6238a622a/" 
                target="_blank" 
                className="px-8 py-4 border border-zinc-700 hover:border-zinc-400 rounded-full font-medium transition-all flex items-center gap-2"
              >
                Connect on LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-semibold mb-12">About Me</h2>
          <div className="prose prose-invert max-w-3xl text-lg leading-relaxed">
            <p>{about}</p>
            {/* You can expand this section with more paragraphs if needed */}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-semibold mb-12">Experience</h2>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="grid md:grid-cols-12 gap-8">
                <div className="md:col-span-4">
                  <p className="text-emerald-400 font-medium">{exp.period}</p>
                  <p className="text-xl font-semibold mt-1">{exp.role}</p>
                  <p className="text-zinc-400">{exp.company}</p>
                </div>
                <div className="md:col-span-8">
                  <p className="text-zinc-300 leading-relaxed mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="px-4 py-1 bg-zinc-800 text-xs rounded-full">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-semibold mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -8 }}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 group hover:border-emerald-500/50 transition-all"
              >
                <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                <p className="text-zinc-400 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="text-xs px-3 py-1 bg-zinc-800 rounded-full">{tech}</span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm hover:text-emerald-400 transition-colors"
                    >
                      <Github size={18} /> GitHub
                    </a>
                  )}
                  {project.live && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm hover:text-emerald-400 transition-colors"
                    >
                      <ExternalLink size={18} /> Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-zinc-500 mt-12 text-sm">You can add more projects in the array above. Include your GitHub repository links for each.</p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-zinc-900 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-semibold mb-12">Skills & Technologies</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span 
                key={index}
                className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-xl text-sm transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer className="py-16 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-zinc-500 mb-6">Let&apos;s connect and discuss opportunities.</p>
          <div className="flex justify-center gap-8 text-2xl mb-8">
            <a href="https://linkedin.com/in/keerthivasan-r-v-6238a622a/" target="_blank" className="hover:text-emerald-400"><Linkedin /></a>
            <a href="https://github.com/yourusername" target="_blank" className="hover:text-emerald-400"><Github /></a>
            <a href="mailto:your.email@example.com" className="hover:text-emerald-400"><Mail /></a>
          </div>
          <p className="text-xs text-zinc-600">© {new Date().getFullYear()} Keerthivasan R V. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}
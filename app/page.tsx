'use client';
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import { Github, Linkedin, Mail } from "lucide-react";
import React from "react";


export default function Home() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
<section id="home" className="section pt-24">
  <div className="container grid md:grid-cols-2 gap-10 items-center">
    <div className="space-y-5">
      <p className="text-brand-300 uppercase tracking-wider text-xs">
        <Typewriter
          words={['Hi, I’m']}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </p>

      <h1 className="text-4xl md:text-6xl font-extrabold">
        <Typewriter
          words={['Syed Abdul Latif']}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={40}
          delaySpeed={2000}
        />
      </h1>

      <p className="text-lg text-gray-300">
        <Typewriter
          words={[
            '.NET MVC & Django Developer',
            'Web Engineer crafting scalable apps',
            'UI/UX enthusiast creating delightful designs'
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={60}
          deleteSpeed={30}
          delaySpeed={1500}
        />
      </p>

      <div className="flex gap-3 pt-4">
        <a className="btn-primary" href="#contact">Get in touch</a>
        <a className="btn-ghost" href="/cv.pdf" target="_blank" rel="noreferrer">Download CV</a>
      </div>

      <div className="flex gap-4 pt-3">
        <a href="https://github.com/latifbukhari" target="_blank" rel="noreferrer" className="hover:text-brand-300">
          <Github className="w-5 h-5" />
        </a>
        <a href="https://www.linkedin.com/in/abdul-latif-a77a0a30a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" className="hover:text-brand-300">
          <Linkedin className="w-5 h-5" />
        </a>
        <a href="mailto:latifbukhari64@gmail.com" className="hover:text-brand-300">
          <Mail className="w-5 h-5" />
        </a>
      </div>
    </div>

    <div className="flex justify-center">
      <motion.img
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        src="/avatar.svg"
        className="w-56 h-56"
        alt="Avatar"
      />
    </div>
  </div>
</section>

      {/* About */}
      <Section id="about" title="About Me" subtitle="">
  <div className="grid md:grid-cols-2 gap-8">
    <p className="text-gray-300 leading-7">
      <Typewriter
        words={[
          'I am a results-driven web developer with a strong academic background in Computer Science.',
          'I specialize in frontend & backend development, database management, and secure solutions.',
          'Passionate about problem-solving, collaboration, and building apps that deliver real value.'
        ]}
        loop={true}
        cursor
        cursorStyle="|"
        typeSpeed={50}
        deleteSpeed={25}
        delaySpeed={2000}
      />
    </p>

    <motion.div
      initial={{ x: 50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="card p-6"
    >
      <ul className="space-y-2 text-sm">
        <li><strong>Location:</strong> Karachi, Pakistan</li>
        <li><strong>Experience:</strong> 1+ years</li>
        <li><strong>Email:</strong> latifbukhari64@gmail.com</li>
        <li><strong>Phone:</strong> +92 318 2048121</li>
      </ul>
    </motion.div>
  </div>
</Section>

      {/* Experience */}
    {/* Experience */}
<Section id="experience" title="Experience & Education" subtitle="Background">
  <div className="grid md:grid-cols-2 gap-6">
    {[
      {
        title: "Front End Web Developer — Krytix Solutions",
        date: "AUG 2025 — SEP 2025",
        desc: "Transforming ideas into powerful web applications using Django."
      },
      {
        title: "Full Stack Web Developer — NCL-NED",
        date: "Jan 2025 — Present",
        desc: "Transforming ideas into powerful web applications using Django."
      },
      {
        title: "Cyber Security Intern — PPL",
        date: "June 2024 — July 2024",
        desc: "Working on ISO 20000-1 for IT service excellence and ISO 27002 for robust information security."
      },
      {
        title: "BSCS — PAF-KIET",
        date: "2021 — 2025",
        desc: ""
      }
    ].map((exp, i) => (
      <motion.div
        key={i}
        className="card p-6 space-y-3"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: i * 0.2, ease: "easeOut" }}
      >
        <h3 className="font-semibold">{exp.title}</h3>
        <p className="text-sm text-gray-300">{exp.date}</p>
        {exp.desc && <p className="text-sm text-gray-300">{exp.desc}</p>}
      </motion.div>
    ))}
  </div>
</Section>

      {/* Portfolio */}
 {/* Portfolio */}
<Section id="portfolio" title="Portfolio" subtitle="Selected Work">
  <motion.div 
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6 }}
    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
  >
    <ProjectCard
      title="FYP-Management System"
      description="An all-in-one platform for managing and tracking final year projects efficiently, including supervisor assignments, task submissions, and jury evaluations."
      tags={["ASP.NET MVC", "SQL Server", "Bootstrap"]}
      image="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      link="https://fyp.somee.com/"
    />
    <ProjectCard
      title="Food Ordering System"
      description="A full-stack web application for managing online food orders, including customer accounts, menu browsing, order placement, and admin controls."
      tags={["Django", "HTML", "CSS"]}
      image="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      link="https://github.com/latifbukhari/website-Food-order-system"
    />
    <ProjectCard
      title="Food Ordering System"
      description="A full-stack web application for managing online food orders, including customer accounts, menu browsing, order placement, and admin controls."
      tags={["Django", "HTML", "CSS"]}
      image="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      link="https://github.com/latifbukhari/website-Food-order-system"
    />
  </motion.div>
</Section>

{/* Services */}
<Section id="services" title="Services" subtitle="What I do">
  <motion.div 
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="grid md:grid-cols-3 gap-6"
  >
    <div className="card p-6 space-y-2 hover:scale-105 transition-transform">
      <h3 className="font-semibold">Web Apps</h3>
      <p className="text-sm text-gray-300">SPA, SSR, dashboards and portals.</p>
    </div>
    <div className="card p-6 space-y-2 hover:scale-105 transition-transform">
      <h3 className="font-semibold">APIs</h3>
      <p className="text-sm text-gray-300">RESTful .NET APIs, auth, integrations.</p>
    </div>
    <div className="card p-6 space-y-2 hover:scale-105 transition-transform">
      <h3 className="font-semibold">UI/UX</h3>
      <p className="text-sm text-gray-300">Clean, responsive interfaces with accessibility.</p>
    </div>
  </motion.div>
</Section>

{/* Skills */}
<Section id="skills" title="Skills" subtitle="Stack">
  <motion.div 
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="grid sm:grid-cols-2 md:grid-cols-3 gap-3"
  >
    {["C#", "ASP.NET MVC", "Entity Framework", "React", "Next.js", "Tailwind", "SQL Server", "Git", "Python" , "Django", "ISO: 27001" , "ISO: 2000:1"].map((s, i) => (
      <motion.div 
        key={s} 
        className="card p-4 text-center text-sm hover:scale-105 transition-transform"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: i * 0.1 }}
      >
        {s}
      </motion.div>
    ))}
  </motion.div>
</Section>

{/* Contact */}
<Section id="contact" title="Contact" subtitle="Let’s talk">
  <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="grid md:grid-cols-3 gap-6"
  >
    <a href="mailto:latifbukhari64@gmail.com" className="card p-6 space-y-2 hover:bg-brand-300/10 transition">
      <h3 className="font-semibold">Email</h3>
      <p className="text-sm text-gray-300">latifbukhari64@gmail.com</p>
    </a>
    <a href="https://www.linkedin.com/in/abdul-latif-a77a0a30a" target="_blank" rel="noreferrer" className="card p-6 space-y-2 hover:bg-brand-300/10 transition">
      <h3 className="font-semibold">LinkedIn</h3>
      <p className="text-sm text-gray-300">Connect with me on LinkedIn</p>
    </a>
    <a href="https://github.com/latifbukhari" target="_blank" rel="noreferrer" className="card p-6 space-y-2 hover:bg-brand-300/10 transition">
      <h3 className="font-semibold">GitHub</h3>
      <p className="text-sm text-gray-300">Check out my projects</p>
    </a>
  </motion.div>
</Section>

{/* Footer */}
<footer className="py-10 border-t border-white/10">
  <div className="container text-sm text-gray-400 flex items-center justify-between">
    <p>© {new Date().getFullYear()} Syed Abdul Latif. All rights reserved.</p>
    <a href="#home" className="hover:text-brand-300">Back to top ↑</a>
  </div>
</footer>

    </main>
  );
}

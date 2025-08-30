import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section id="home" className="section pt-24">
        <div className="container grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-5">
            <p className="text-brand-300 uppercase tracking-wider text-xs">Hi, I’m</p>
            <h1 className="text-4xl md:text-6xl font-extrabold">Syed Abdul Latif</h1>
            <p className="text-lg text-gray-300">.NET MVC & Django Developer & Web Engineer crafting scalable web apps and delightful UIs.</p>
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
              <a href="latifbukhari64@gmail.com" className="hover:text-brand-300">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <img src="/avatar.svg" className="w-56 h-56" alt="Avatar" />
          </div>
        </div>
      </section>

      {/* About */}
      <Section id="about" title="About Me" subtitle="">
        <div className="grid md:grid-cols-2 gap-8">
          <p className="text-gray-300 leading-7">
            I am a results-driven web developer with a strong academic background in Computer Science and hands-on experience in developing modern web applications. My expertise includes frontend and backend development, database management, and implementing secure, scalable solutions. I am committed to delivering high-quality work, meeting deadlines, and continuously enhancing my technical skills to stay aligned with industry advancements. With a strong focus on problem-solving and collaboration, I aim to contribute to innovative projects that add real value to organizations and end-users.
          </p>
          <div className="card p-6">
            <ul className="space-y-2 text-sm">
              <li><strong>Location:</strong> Karachi, Pakistan</li>
              <li><strong>Experience:</strong> 1+ years</li>
              <li><strong>Email:</strong> latifbukhari64@gmail.com.com</li>
              <li><strong>Phone:</strong> +92 318 2048121</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Experience & Education" subtitle="Background">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-6 space-y-3">
            <h3 className="font-semibold">Full Stack Web Developer — NCL-NED</h3>
            <p className="text-sm text-gray-300">Jan 2025 — Present</p>
            <p className="text-sm text-gray-300">Transforming ideas into powerful web applications using Django.</p>
          </div>
          <div className="card p-6 space-y-3">
            <h3 className="font-semibold">Cyber Security Interm — PPL</h3>
            <p className="text-sm text-gray-300">June 2024 — July 2024</p>
            <p className="text-sm text-gray-300">Working on ISO 20000-1 for IT service excellence and ISO 27002 for robust information security.</p>
          </div>
          <div className="card p-6 space-y-3">
            <h3 className="font-semibold">BSCS — PAF-KIET</h3>
            <p className="text-sm text-gray-300">2021 — 2025</p>
          </div>
          <div className="card p-6 space-y-3">
            <h3 className="font-semibold">Certifications</h3>
            <p className="text-sm text-gray-300">ASP .NET MVC, etc.</p>
          </div>
        </div>
      </Section>

      {/* Portfolio */}
      <Section id="portfolio" title="Portfolio" subtitle="Selected Work">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
  title="FYP-Management System"
  description="An all-in-one platform for managing and tracking final year projects efficiently, including supervisor assignments, task submissions, and jury evaluations."
  tags={["ASP.NET MVC", "SQL Server", "Bootstrap"]}
  image="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  link="https://fyp.somee.com/" // replace this with your actual project link
/>

         <ProjectCard
  title="Food Ordering System"
  description="A full-stack web application for managing online food orders, including customer accounts, menu browsing, order placement, and admin controls."
  tags={["Django", "HTML", "CSS"]}
  image="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  link="https://github.com/latifbukhari/website-Food-order-system" // your GitHub repo link
/>


          <ProjectCard
  title="Food Ordering System"
  description="A full-stack web application for managing online food orders, including customer accounts, menu browsing, order placement, and admin controls."
  tags={["Django", "HTML", "CSS"]}
  image="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  link="https://github.com/latifbukhari/website-Food-order-system" // your GitHub repo link
/>

        </div>
      </Section>

      {/* Services */}
      <Section id="services" title="Services" subtitle="What I do">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card p-6 space-y-2">
            <h3 className="font-semibold">Web Apps</h3>
            <p className="text-sm text-gray-300">SPA, SSR, dashboards and portals.</p>
          </div>
          <div className="card p-6 space-y-2">
            <h3 className="font-semibold">APIs</h3>
            <p className="text-sm text-gray-300">RESTful .NET APIs, auth, integrations.</p>
          </div>
          <div className="card p-6 space-y-2">
            <h3 className="font-semibold">UI/UX</h3>
            <p className="text-sm text-gray-300">Clean, responsive interfaces with accessibility.</p>
          </div>
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Skills" subtitle="Stack">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {["C#", "ASP.NET MVC", "Entity Framework", "React", "Next.js", "Tailwind", "SQL Server", "Git", "Python" , "Django", "ISO: 27001" , "ISO: 2000:1"].map(s => (
            <div key={s} className="card p-4 text-center text-sm">{s}</div>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact" subtitle="Let’s talk">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            <p className="text-gray-300">Want to discuss a project or collaborate? Drop a message or email me.</p>
            <div className="card p-6 space-y-2 text-sm">
              <p><strong>Email:</strong> latifbukhari64@gmail.com</p>
              <p><strong>LinkedIn:</strong> https://www.linkedin.com/in/abdul-latif-a77a0a30a?</p>
              <p><strong>GitHub:</strong> https://github.com/latifbukhari</p>
            </div>
          </div>
          <form className="card p-6 space-y-4" action="https://formspree.io/f/your-id" method="POST">
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input name="name" required className="w-full rounded-xl bg-white/5 border border-white/10 p-3 outline-none" />
            </div>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input name="email" type="email" required className="w-full rounded-xl bg-white/5 border border-white/10 p-3 outline-none" />
            </div>
            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea name="message" rows={5} required className="w-full rounded-xl bg-white/5 border border-white/10 p-3 outline-none" />
            </div>
            <button className="btn-primary w-full" type="submit">Send</button>
          </form>
        </div>
      </Section>

      <footer className="py-10 border-t border-white/10">
        <div className="container text-sm text-gray-400 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <a href="#home" className="hover:text-brand-300">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}

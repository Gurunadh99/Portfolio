import Link from 'next/link'
import projects from '../lib/projects'
import ProjectCard from '../components/ProjectCard'
import { motion } from 'framer-motion'
import ContactForm from '../components/ContactForm'
import skills from '../lib/skills'
import { education, certifications, publications } from '../lib/profile'

const sectionFade = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-12 space-y-20">
      {/* HERO */}
      <section id="home" className="grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <motion.h1 className="text-4xl md:text-5xl font-bold mb-4" initial="hidden" animate="show" variants={sectionFade}>Hi — I’m Gurunadh Kothuru.</motion.h1>
          <motion.p initial="hidden" animate="show" variants={sectionFade} className="text-lg mb-6 max-w-xl">
            I build practical AI systems — research-backed prototypes and cloud-deployed apps in ML, computer vision, and NLP.
          </motion.p>
          <div className="flex gap-4">
            <Link href="#projects"><a className="px-5 py-3 bg-primary text-white rounded-lg">View projects</a></Link>
            <a href="/resume.pdf" className="px-5 py-3 border rounded-lg">Download resume</a>
          </div>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          <div className="p-6 rounded-xl border dark:border-gray-700">
            <h3 className="font-semibold mb-2">Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {skills.slice(0,9).map(s => <div key={s.name} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm">{s.name}</div>)}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <motion.h2 className="text-2xl font-semibold mb-4" initial="hidden" animate="show" variants={sectionFade}>About</motion.h2>
        <motion.p initial="hidden" animate="show" variants={sectionFade} className="max-w-3xl">
          I’m an aspiring AI Engineer with a B.Tech in Artificial Intelligence Engineering from Amrita School of Engineering (2020–2024).
          My work blends machine learning research with production-ready engineering — I prototype models, evaluate with clear metrics, and deploy services on the cloud.
        </motion.p>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <motion.h2 className="text-2xl font-semibold mb-6" initial="hidden" animate="show" variants={sectionFade}>Projects</motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(p => <ProjectCard key={p.slug} {...p} />)}
        </div>
        <div className="mt-4">
          <Link href="/projects"><a className="text-primary">See all projects →</a></Link>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education">
        <motion.h2 className="text-2xl font-semibold mb-4" initial="hidden" animate="show" variants={sectionFade}>Education</motion.h2>
        <div className="space-y-4">
          {education.map((e, i) => (
            <motion.div key={i} initial="hidden" animate="show" variants={sectionFade} className="p-4 border rounded">
              <div className="flex justify-between">
                <div>
                  <div className="font-semibold">{e.degree}</div>
                  <div className="text-sm text-gray-600">{e.institution}</div>
                </div>
                <div className="text-sm">{e.period}</div>
              </div>
              {e.details && <p className="mt-2 text-sm">{e.details}</p>}
            </motion.div>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications">
        <motion.h2 className="text-2xl font-semibold mb-4" initial="hidden" animate="show" variants={sectionFade}>Certifications</motion.h2>
        <div className="grid md:grid-cols-2 gap-4">
          {certifications.map((c, i) => (
            <motion.div key={i} initial="hidden" animate="show" variants={sectionFade} className="p-3 border rounded">
              <div className="font-medium">{c.title}</div>
              <div className="text-sm text-gray-600">{c.issuer} • {c.year}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PUBLICATIONS */}
      <section id="publications">
        <motion.h2 className="text-2xl font-semibold mb-4" initial="hidden" animate="show" variants={sectionFade}>Publications</motion.h2>
        <div className="space-y-3">
          {publications.map((p, i) => (
            <motion.div key={i} initial="hidden" animate="show" variants={sectionFade} className="p-3 border rounded">
              <div className="font-medium">{p.title}</div>
              <div className="text-sm text-gray-600">{p.venue} • {p.year}</div>
              {p.link && <a href={p.link} className="text-primary text-sm" target="_blank" rel="noreferrer">Read paper</a>}
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <motion.h2 className="text-2xl font-semibold mb-4" initial="hidden" animate="show" variants={sectionFade}>Contact</motion.h2>
        <ContactForm />
      </section>
    </div>
  )
}

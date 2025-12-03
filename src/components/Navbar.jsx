import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navbar({ onToggleDarkMode }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const path = typeof window !== 'undefined' ? window.location.pathname : '/'
    if (path.includes('/projects')) setActive('projects')
    else setActive('home')
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b dark:border-gray-800">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/"><a className="font-bold text-lg">Gurunadh K.</a></Link>
          <nav className="hidden md:flex gap-3 text-sm items-center">
            <a href="#about" className={`px-3 py-2 rounded ${active==='home'?'bg-gray-100 dark:bg-gray-800':''}`}>About</a>
            <a href="#projects" className="px-3 py-2 rounded">Projects</a>
            <a href="#education" className="px-3 py-2 rounded">Education</a>
            <a href="#certifications" className="px-3 py-2 rounded">Certifications</a>
            <a href="#publications" className="px-3 py-2 rounded">Publications</a>
            <a href="#contact" className="px-3 py-2 rounded">Contact</a>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <button onClick={onToggleDarkMode} aria-label="Toggle theme" className="px-3 py-2 rounded-md border dark:border-gray-700">
            Theme
          </button>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Open menu">
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t dark:border-gray-800">
          <div className="px-6 py-4 flex flex-col gap-3">
            <a href="#about" onClick={()=>setOpen(false)}>About</a>
            <a href="#projects" onClick={()=>setOpen(false)}>Projects</a>
            <a href="#education" onClick={()=>setOpen(false)}>Education</a>
            <a href="#certifications" onClick={()=>setOpen(false)}>Certifications</a>
            <a href="#publications" onClick={()=>setOpen(false)}>Publications</a>
            <a href="#contact" onClick={()=>setOpen(false)}>Contact</a>
            <a href="/resume.pdf" onClick={()=>setOpen(false)}>Resume</a>
          </div>
        </div>
      )}
    </header>
  )
}

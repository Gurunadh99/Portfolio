import Link from 'next/link'
import { useState } from 'react'

export default function Navbar({ onToggleDarkMode }) {
  const [open, setOpen] = useState(false)
  return (
    <header className="bg-white dark:bg-gray-900 border-b dark:border-gray-800">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/"><a className="font-bold">Gurunadh K.</a></Link>
          <nav className="hidden md:flex gap-4 text-sm">
            <Link href="/#projects"><a>Projects</a></Link>
            <Link href="/projects"><a>All Projects</a></Link>
            <Link href="/#about"><a>About</a></Link>
            <Link href="/#contact"><a>Contact</a></Link>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={onToggleDarkMode} aria-label="Toggle theme" className="px-3 py-2 rounded-md border">
            Theme
          </button>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Open menu">
            ☰
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t dark:border-gray-800">
          <div className="px-6 py-4 flex flex-col gap-3">
            <Link href="/projects"><a onClick={() => setOpen(false)}>Projects</a></Link>
            <a href="/resume.pdf" onClick={() => setOpen(false)}>Resume</a>
            <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </header>
  )
}

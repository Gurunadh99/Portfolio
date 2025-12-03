import Link from 'next/link'
import { motion } from 'framer-motion'

export default function ProjectCard({ title, summary, tech = [], year, metrics = [], publication, slug }) {
  const href = '/projects/' + (slug || title.toLowerCase().replace(/\s+/g,'-'))

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6, boxShadow: '0px 10px 30px rgba(0,0,0,0.08)' }}
      transition={{ duration: 0.35 }}
      className="p-4 border rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700"
    >
      <header className="flex justify-between items-start mb-2">
        <h3 className="font-semibold">{title}</h3>
        <span className="text-sm text-gray-500 dark:text-gray-400">{year}</span>
      </header>

      <p className="text-sm mb-3">{summary}</p>

      <div className="flex flex-wrap gap-2 mb-3">
        {tech.map((t, i) => (
          <motion.span key={t} whileHover={{ scale: 1.05 }} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">
            {t}
          </motion.span>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <div className="text-xs text-gray-600 dark:text-gray-400">
          {publication ? <span className="mr-2">Published: {publication}</span> : null}
        </div>
        <Link href={href}><a className="text-sm text-primary">Read case study →</a></Link>
      </div>
    </motion.article>
  )
}

import { useRouter } from 'next/router'
import projects from '../../lib/projects'
import Link from 'next/link'

export default function ProjectDetail() {
  const router = useRouter()
  const { slug } = router.query
  if (!slug) return null
  const project = projects.find(p => p.slug === slug)
  if (!project) {
    return <div className="container mx-auto px-6 py-12">Project not found</div>
  }
  return (
    <div className="container mx-auto px-6 py-12">
      <Link href="/projects"><a className="text-primary mb-4 inline-block">← Back to projects</a></Link>
      <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
      <div className="text-sm text-gray-600 mb-4">{project.year} • {project.tech.join(' • ')}</div>
      <p className="mb-4">{project.summary}</p>
      <h3 className="font-semibold mt-6 mb-2">Impact & Metrics</h3>
      <ul className="list-disc ml-6">
        {project.metrics && project.metrics.map((m,i) => <li key={i}>{m}</li>)}
      </ul>
      {project.publication && <p className="mt-4">Publication: <strong>{project.publication}</strong></p>}
      <section className="mt-8">
        <h4 className="font-semibold mb-2">Case study</h4>
        <p>This page is a template — expand with architecture diagrams, code links, dataset details and demos.</p>
      </section>
    </div>
  )
}

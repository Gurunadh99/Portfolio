import projects from '../lib/projects'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(p => <ProjectCard key={p.slug} {...p} />)}
      </div>
    </div>
  )
}

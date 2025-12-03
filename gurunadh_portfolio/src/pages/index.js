import Link from 'next/link'
import projects from '../lib/projects'
import ProjectCard from '../components/ProjectCard'

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-12">
      <section className="grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi — I’m Gurunadh Kothuru.
          </h1>
          <p className="text-lg mb-6">
            I build practical AI systems — research-backed prototypes and cloud-deployed apps in ML, computer vision, and NLP.
          </p>
          <div className="flex gap-4">
            <Link href="/projects"><a className="px-5 py-3 bg-primary text-white rounded-lg">View projects</a></Link>
            <a href="/resume.pdf" className="px-5 py-3 border rounded-lg">Download resume</a>
          </div>
        </div>
        <div className="space-y-3">
          <div className="p-6 rounded-xl border dark:border-gray-700">
            <h3 className="font-semibold mb-2">Skills</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">Python</span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">TensorFlow</span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">PyTorch</span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">AWS</span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">OpenCV</span>
            </div>
          </div>
          <div>
            <h4 className="font-medium mb-2">Selected projects</h4>
            <div className="grid md:grid-cols-2 gap-4">
              {projects.slice(0,4).map(p => <ProjectCard key={p.slug} {...p} />)}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-4">About</h2>
        <p className="max-w-2xl">
          I’m an aspiring AI Engineer with a B.Tech in Artificial Intelligence Engineering from Amrita School of Engineering (2020–2024).
          My work sits at the intersection of machine learning research and applied engineering: I enjoy prototyping models, evaluating them with careful metrics,
          and deploying solutions that people can actually use. I’ve published research on accessibility and cloud-deployed systems.
        </p>
      </section>
    </div>
  )
}

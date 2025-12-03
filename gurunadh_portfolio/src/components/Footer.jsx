export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t dark:border-gray-700 mt-12">
      <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between">
        <div className="text-sm">&copy; {new Date().getFullYear()} Gurunadh Kothuru</div>
        <div className="flex gap-4 mt-3 md:mt-0">
          <a href="mailto:guruvenkat99@gmail.com">Email</a>
          <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}

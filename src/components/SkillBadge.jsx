export default function SkillBadge({ name, level }) {
  return (
    <div className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">
      {name} {level ? `· ${level}` : ''}
    </div>
  )
}

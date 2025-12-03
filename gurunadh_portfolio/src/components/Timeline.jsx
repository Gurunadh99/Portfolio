export default function Timeline({ items = [] }) {
  return (
    <div className="space-y-6">
      {items.map((it, idx) => (
        <div key={idx} className="flex gap-4">
          <div className="w-24 text-sm text-gray-500">{it.year}</div>
          <div className="flex-1">
            <div className="font-semibold">{it.title}</div>
            <div className="text-sm text-gray-600">{it.content}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

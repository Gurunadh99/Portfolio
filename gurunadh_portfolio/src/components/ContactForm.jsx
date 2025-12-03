import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({name:'', email:'', message:''})
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    // This is a frontend-only stub. Replace with API endpoint or form handler.
    console.log('submit', form)
    setStatus('sent')
    setForm({name:'', email:'', message:''})
  }

  return (
    <form onSubmit={submit} className="max-w-xl">
      <label className="block mb-2">Name
        <input required value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} className="mt-1 w-full p-2 rounded border dark:bg-gray-800" />
      </label>
      <label className="block mb-2">Email
        <input required type="email" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} className="mt-1 w-full p-2 rounded border dark:bg-gray-800" />
      </label>
      <label className="block mb-2">Message
        <textarea required value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})} className="mt-1 w-full p-2 rounded border dark:bg-gray-800" rows="6" />
      </label>
      <button type="submit" className="px-4 py-2 bg-primary text-white rounded">Send message</button>
      {status === 'sent' && <p className="mt-2 text-sm text-green-600">Message sent (frontend only)</p>}
    </form>
  )
}

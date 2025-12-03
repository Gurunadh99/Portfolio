import { useEffect } from 'react'

export default function Resume() {
  useEffect(() => {
    window.location.href = '/resume.pdf'
  }, [])
  return null
}

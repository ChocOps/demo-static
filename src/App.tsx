import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const title = import.meta.env.VITE_TITLE || 'ChocOps'
  const [motd, setMotd] = useState(`Don't Panic.`)

  async function fetchMotd() {
    try {
      const res = await fetch(import.meta.env.VITE_FETCH)
      if (!res.ok) throw new Error()
      const data = await res.json()
      setMotd(data.motd)
    } catch {
      setMotd('This is a static website demo')
    }
  }

  useEffect(() => {
    fetch(import.meta.env.VITE_FETCH)
      .then((res) => {
        if (!res.ok) throw new Error()
        return res.json()
      })
      .then((data) => setMotd(data.motd))
      .catch(() => setMotd('This is a static website demo'))
  }, [])

  return (
    <section id="center">
      <div className="hero">
        <img src={heroImg} className="base" width="170" height="179" alt="" />
        <img src={reactLogo} className="framework" alt="React logo" />
        <img src={viteLogo} className="vite" alt="Vite logo" />
      </div>
      <div>
        <h1>{title}</h1>
        <p onClick={fetchMotd} style={{ cursor: 'pointer' }}>{motd}</p>
      </div>
    </section>
  )
}

export default App

import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [motd, setMotd] = useState('This is a static website demo')

  async function fetchMotd() {
    try {
      const res = await fetch(import.meta.env.VITE_MOTD_URL)
      if (!res.ok) throw new Error()
      const data = await res.json()
      setMotd(data.motd)
    } catch {
      setMotd('This is a static website demo')
    }
  }

  useEffect(() => {
    fetch(import.meta.env.VITE_MOTD_URL)
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
        <h1>ChocOps</h1>
        <p onClick={fetchMotd} style={{ cursor: 'pointer' }}>{motd}</p>
      </div>
    </section>
  )
}

export default App

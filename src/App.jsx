import { useState } from 'react'
import ProjectCarousel from './components/ProjectCarousel'

import './App.css'

function App() {


  return (
    <>
      <nav>
        Nav
      </nav>
      <main>
        <section>
          <div>Profile</div>
          <div>Skills</div>
        </section>
        <article>
          <div><ProjectCarousel /></div>
          <div>Solo Projects</div>
        </article>
      </main>
      <footer>
        Copy
      </footer>

    </>
  )
}

export default App

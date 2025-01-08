import { useState } from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Projects from './components/projects'


function App() {

  return (
<div class="bg-hawk font-inter">
  <Navbar/>
  <Hero/>
  <Projects/>
</div>
  )
}

export default App

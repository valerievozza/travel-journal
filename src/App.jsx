import { useState } from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Footer from './components/Footer'
import entries from './assets/entries.js'

function App() {

  const cards = entries.map(entry => {
    return <Card
              key={entry.id}
              entry={entry}
            />
  })
  
  return (
    <div className="App">
      <Navbar />
      <section className="cards-list">
        {cards}
      </section>
      <Footer />
    </div>
  )
}

export default App

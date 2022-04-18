import React from 'react'
import data from "./data"
import Card from "./components/Card"
import Navbar from './components/Navbar'

function App() {
  const cards = data.map( item => {
      return (
        <Card 
          {...item}
      />

      )
  })

  return (
    <div className='App'>
      <Navbar />
      {cards}
      
    </div>
  
  )
}

export default App

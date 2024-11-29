import { useState } from 'react'
import { BackgroundColorProvider } from "./contexts/BackgroundColorContext";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BackgroundColorProvider>
            {}
        </BackgroundColorProvider>
  )
}

export default App

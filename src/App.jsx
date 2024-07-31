import { useState } from 'react'
import { useEffect } from 'react'
// Components
import Scoreboard from './Scoreboard'
import Gameboard from './Gameboard'

//Images
import Logo from './assets/reardenDigitalLogo.jpg'

import './styles/App.css'
import './styles/normalize.css';

function App() {
  const [count, setCount] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const addCount = () => {
    setCount(count => count + 1);
  }
  useEffect(() => {
    if (highScore < count)
      setHighScore(count)
  }, [count, highScore])

  const resetCount = () => {
    setCount(0)
  }

  return (
    <div className="app">
      <header className="title">
        <div>NFL Memory Game</div>
        <div>Score points by clicking on an image, but dont click an image more than once</div> 
      </header>
      <div>
        
      </div>
      <div className="main">
        <Scoreboard count={count} highScore={highScore} />
        <Gameboard addCount={addCount} resetCount={resetCount}/>        
      </div>
      <footer className="footer">
        <div></div>
        <div>Rearden Digital</div>
        <img  src={Logo} className="logo"/>
      </footer>
    </div>
  )
}

export default App

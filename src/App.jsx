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
      <header className="header">
        <div className='blank'></div>
        <div className="plug">Rearden Digital Co.</div>
        <img  src={Logo} className="logo"/>
      </header>
      <div className="main">
        <div className="titleDiv">
          <div className="title">NFL Memory Game</div>
          <div>Score points by clicking on an team, but dont click a team more than once</div> 
        </div>
        <Scoreboard count={count} highScore={highScore} />
        <Gameboard addCount={addCount} resetCount={resetCount}/>        
      </div>
      <footer className="footer">
        <div><a href="mailto:jackhalcisak@outlook.com">jackhalcisak@outlook.com</a></div>
      </footer>
    </div>
  )
}

export default App

// eslint-disable-next-line react/prop-types
export default function Scoreboard({count, highScore}) {
    return (
        <div className="scoreboard">
            <div className="currentScore">Score {count}</div>
            <div className="bestScore">Best Score {highScore}</div>
        </div>
    )
}


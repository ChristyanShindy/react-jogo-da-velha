import { useState, useEffect } from 'react'
import GameOpition from '../gameOption/GameOption'
import GameInfo from '../gameInfo/GameInfo'
import Score from '../score/Score'
import styles from './Game.module.css'


const winnerTable = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

function Game () {
  const [gameState, setGameState] = useState(Array(9).fill(0))
  const [currentPlayer, setCurrentPlayer] = useState(-1)
  const [winner, setWinner] = useState(0)
  const [winnerLine, setWinnerLine] = useState([])
  const [draw, setDraw] = useState(false)
  const [xWinner, setXWinner] = useState(0)
  const [circleWinner, setCircleWinner] = useState(0)

  const handleClick = (pos) =>{
    if(gameState[pos] === 0 && winner === 0){
      let newGameState = [...gameState] /*copia os valores sem alterar o gameState*/
      newGameState[pos] = currentPlayer
      
      setGameState(newGameState)
    }
  }

  const verifyGame = () => {
    winnerTable.forEach((line) => {
      const values = line.map((pos) => gameState[pos])
      const sum = values.reduce((sum, value) => sum + value)
      if (sum === 3 || sum === -3){
        setWinner(sum / 3)
        setWinnerLine(line) 
        if(sum > 0) {
          setCircleWinner(circleWinner + 1)
        } else {
          setXWinner(xWinner + 1)
        }
        
      } 
    })
  }

  const verifyDraw = () => {
    if (gameState.find((value) => value === 0) === undefined && winner === 0) {
      setDraw(true)
    }
  }

  const handleReset = () => {
    setGameState(Array(9).fill(0))
    setWinner(0)
    setCurrentPlayer(-1)
    setWinnerLine([])
    setDraw(false)
  }

  const verifyWinnerLine = (pos) => winnerLine.find((value) => value === pos) != undefined

  useEffect(() => {
    setCurrentPlayer(currentPlayer * -1)
    verifyGame()
    verifyDraw()
  }, [gameState])

    useEffect(() => {
      if(winner !== 0) setDraw(false)
    },[winner])

  return (
    <>
    <div className={styles.gameContent}>
      <div className={styles.game}>
        {
          gameState.map((value, pos) => 
            <GameOpition 
              key={`game-option-pos-${pos}`}
              status={value}
              onClick={() => handleClick(pos)}
              isWinner={verifyWinnerLine(pos)}
              isDraw ={draw}
            />
          )
        }
      </div>
      <GameInfo 
      currentPlayer= {currentPlayer}
      winner={winner}
      onReset={handleReset}
      isDraw={draw}
      />
      
    </div>
    <Score 
      circleWinner={circleWinner}
      xWinner={xWinner}
    />
    </>
  )
}

export default Game
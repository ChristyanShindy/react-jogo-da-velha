import Icon from '../icon/Icon'
import Button from '../button/Button'
import styles from './GameInfo.module.css'

function GameInfo({ currentPlayer, winner, onReset, isDraw }) {

  const shouldEnableButton = () => winner !== 0 || isDraw
  /*
    {
    
    if (winner !== 0) return true
    if (isDraw) return true
  }*/

  return (
    <div className={styles.gameInfo}>
      {
        !isDraw && winner === 0 &&
        <>
          <h4>Próximo a Jogar:</h4>
          {
            currentPlayer === 1 && <Icon iconName="circle" />
          }
          {
            currentPlayer === -1 && <Icon iconName="x" />
          }
        </>
      }
      {
        !isDraw && winner !== 0 && 
          <>
          <h4>Fim de Jogo! Campeão!</h4>
          {
            winner === 1 && <Icon iconName="circle" />
          }
          {
            winner === -1 && <Icon iconName="x" />
          }
          </>
      }
      {
        isDraw && <h4>Empate</h4>
      }
      <Button
        onClick={onReset}
        disabled={!shouldEnableButton()}
      >
        Reinicar
      </Button>
    </div>
  )
}

export default GameInfo
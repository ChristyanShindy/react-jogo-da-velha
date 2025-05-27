import Icon from '../icon/Icon'
import Button from '../button/Button'
import styles from './GameInfo.module.css'

function GameInfo({ currentPlayer, winner, onReset }) {

  const shouldEnableButton = () => {
    if(winner !== 0) return true
  }

  return (
    <div className={styles.gameInfo}>
      {
        winner === 0 &&
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
        winner !== 0 && 
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
      <Button
        onClick={onReset}
        disabled={!shouldEnableButton()}
      >
        asads
      </Button>
    </div>
  )
}

export default GameInfo
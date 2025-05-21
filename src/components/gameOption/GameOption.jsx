import Icon from '../icon/Icon'
import styles from './GameOption.module.css'

const GameIcon = ({ iconName }) => <Icon iconName={iconName} size="25px"/>
function GameOpition ({ status, onClick }) {
  return (
    <div className={styles.gameOption} onClick={onClick}>
      {
        status === 1 && <GameIcon iconName="circle" />
      }
      {
        status === -1 && <GameIcon iconName="x" />
      }
    </div>
  )
}

export default GameOpition
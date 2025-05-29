import classNames from 'classnames'
import Icon from '../icon/Icon'
import styles from './GameOption.module.css'

const GameIcon = ({ iconName }) => <Icon iconName={iconName} size="25px"/>
function GameOpition ({ status, onClick, isWinner }) {
  return (
    <div 
      className=
        {
          classNames(styles.gameOption,{
            [styles.winner]: isWinner
          })
        } 
        onClick={onClick}
    >
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
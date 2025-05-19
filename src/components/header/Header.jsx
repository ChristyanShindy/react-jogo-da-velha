import Title from "../title/Title"
import Subtitle from "../subtitle/Subtitle"
import Icon from "../icon/Icon"

import styles from './Header.module.css'

function Header () {
  return (
    <div className={styles.header}>
      <Title>Jogo da Velha</Title>
      <Subtitle>Criado por Christyan</Subtitle>
      <div className={styles.iconContent}>
        <Icon iconName="github" link="https://github.com/ChristyanShindy"/>
      </div>
    </div>
  )
}

export default Header
import React, {FC} from 'react'
import styles from './Main.module.scss'

type Props = {}

const Main:FC = (props: Props) => {
  return (
	  <div className={styles.mainWrapper}>Main</div>
  )
}

export default Main;
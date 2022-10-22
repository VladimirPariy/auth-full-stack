import React from 'react'
import styles from './Navbar.module.scss'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.logo}>Logo</div>
      <div className={styles.auth}>
        <button>Registration</button>
        <button>Login</button>
      </div>
    </div>
  )
}

export default Navbar

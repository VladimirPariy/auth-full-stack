import React from 'react'
import styles from './Navbar.module.scss'
import {NavLink} from 'react-router-dom'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.logo}>Logo</div>
      <div className={styles.auth}>
        <button><NavLink to='/registration'>Registration</NavLink></button>
        <button><NavLink to='/login'>Login</NavLink></button>
      </div>
    </div>
  )
}

export default Navbar

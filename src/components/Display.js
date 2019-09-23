import React from 'react'
import styles from './Display.module.css'

const Display = ({ seconds }) => {
  return <div className={styles.display}>{seconds}</div>
}

export default Display

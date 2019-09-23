import React from 'react'
import styles from './Display.module.css'

const Display = ({ seconds }) => {
  const mins = Math.floor(seconds / 60)
  const secs = String(seconds % 60).padStart(2, '0')
  return (
    <div className={styles.display}>
      {mins}:{secs}
    </div>
  )
}

export default Display

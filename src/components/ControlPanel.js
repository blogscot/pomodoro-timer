import React, { Component } from 'react'
import styles from './ControlPanel.module.css'

class ControlPanel extends Component {
  render() {
    return (
      <div className={styles.controlPanel}>
        <span>
          <img src="./icons/play-arrow.svg" alt="start timer" />
        </span>
        <span>
          <img src="./icons/pause-button.svg" alt="pause timer" />
        </span>
        <span>
          <img src="./icons/reset.svg" alt="reset timer" />
        </span>
      </div>
    )
  }
}

export default ControlPanel

import React, { Component } from 'react'
import styles from './ControlPanel.module.css'

class ControlPanel extends Component {
  state = {
    running: false,
  }
  constructor() {
    super()
    this.toggleRunning = this.toggleRunning.bind(this)
    this.reset = this.reset.bind(this)
  }
  toggleRunning() {
    console.log('toggle running')
    this.setState({
      running: !this.state.running,
    })
  }
  reset() {
    console.log('reset')
  }
  render() {
    const { running } = this.state
    return (
      <div className={styles.controlPanel}>
        {!running && (
          <span onClick={this.toggleRunning}>
            <img src="./icons/play-arrow.svg" alt="start timer" />
          </span>
        )}
        {running && (
          <span onClick={this.toggleRunning}>
            <img src="./icons/pause-button.svg" alt="pause timer" />
          </span>
        )}
        <span onClick={this.reset}>
          <img src="./icons/reset.svg" alt="reset timer" />
        </span>
      </div>
    )
  }
}

export default ControlPanel

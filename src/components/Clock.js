import React, { Component } from 'react'
import Timer from './Timer'
import Display from './Display'
import styles from './Clock.module.css'

class Clock extends Component {
  currentTime = 0
  state = {
    duration: 180,
    currentTime: 0,
  }
  componentDidMount() {
    const timer = setInterval(() => {
      const newTime = this.state.currentTime + 1
      this.setState({
        currentTime: newTime,
      })
      if (newTime >= this.state.duration) {
        clearInterval(timer)
      }
    }, 1000)
  }
  render() {
    let { duration, currentTime } = this.state
    const remainingTime = duration - currentTime
    return (
      <div className={styles.clock}>
        <Display seconds={remainingTime}></Display>
        <Timer total={this.state.duration} current={this.state.currentTime} />
      </div>
    )
  }
}

export default Clock

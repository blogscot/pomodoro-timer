import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleRunning, setElapsedTime } from '../actions'
import Timer from './Timer'
import Display from './Display'
import Alarm from '../utils/Alarm'
import styles from './Clock.module.css'

class Clock extends Component {
  running = false
  timerID = null
  constructor(props) {
    super(props)
    this.startClock = this.startTimer.bind(this)
    this.tick = this.tick.bind(this)
  }

  componentDidUpdate() {
    if (!this.running && this.props.running) {
      this.running = true
      this.startTimer()
    } else if (this.running && !this.props.running) {
      this.running = false
      clearInterval(this.timerID)
    }
  }
  componentWillUnmount() {
    clearInterval(this.timerID)
  }
  startTimer() {
    this.timerID = setInterval(this.tick, 1000)
  }
  tick() {
    const { elapsedTime, duration } = this.props
    const newTime = elapsedTime + 1
    this.props.setElapsedTime(newTime)
    if (newTime >= duration) {
      Alarm.play()
      clearInterval(this.timerID)
      this.props.toggleRunning()
      this.running = false
    }
  }
  render() {
    const { elapsedTime, duration } = this.props
    return (
      <div className={styles.clock}>
        <Display seconds={duration - elapsedTime}></Display>
        <Timer total={duration} current={elapsedTime} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  running: state.running,
  duration: state.duration,
  elapsedTime: state.elapsedTime,
})

const mapDispatchToProps = dispatch => ({
  toggleRunning: () => dispatch(toggleRunning()),
  setElapsedTime: time => dispatch(setElapsedTime(time)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Clock)

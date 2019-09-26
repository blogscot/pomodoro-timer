import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleRunning, setElapsedTime } from '../actions'
import Timer from './Timer'
import Display from './Display'
import Alarm from '../utils/Alarm'
import styles from './Clock.module.css'

const SESSION = 'SESSION'
const BREAK = 'BREAK'

class Clock extends Component {
  running = false
  currentTimer = SESSION
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
    const { elapsedTime } = this.props
    const newTime = elapsedTime + 1
    this.props.setElapsedTime(newTime)
    if (newTime >= this.currentDuration) {
      Alarm.play()
      clearInterval(this.timerID)
      this.currentTimer = this.sessionTimerRunning ? BREAK : SESSION
      this.props.setElapsedTime(0)
      this.startTimer()
    }
  }
  get sessionTimerRunning() {
    return this.currentTimer === SESSION
  }
  get breakTimerRunning() {
    return !this.sessionTimerRunning
  }
  get currentDuration() {
    const { duration, breakDuration } = this.props
    return this.sessionTimerRunning ? duration : breakDuration
  }
  render() {
    const { elapsedTime } = this.props
    return (
      <div className={styles.clock}>
        <Display seconds={this.currentDuration - elapsedTime}></Display>
        <Timer total={this.currentDuration} current={elapsedTime} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  running: state.running,
  duration: state.duration,
  breakDuration: state.breakDuration,
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

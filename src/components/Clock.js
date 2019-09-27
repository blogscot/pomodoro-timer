import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  setElapsedTime,
  setTimer,
  SESSION_TIMER,
  BREAK_TIMER,
} from '../actions'
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
    const { elapsedTime, setElapsedTime, setTimer } = this.props
    const newTime = elapsedTime + 1
    setElapsedTime(newTime)
    if (newTime > this.currentDuration) {
      Alarm.play()
      clearInterval(this.timerID)
      setTimer(this.sessionTimerRunning ? BREAK_TIMER : SESSION_TIMER)
      setElapsedTime(0)
      this.startTimer()
    }
  }
  get sessionTimerRunning() {
    return this.props.currentTimer === SESSION_TIMER
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
  currentTimer: state.timerType,
})

const mapDispatchToProps = dispatch => ({
  setElapsedTime: time => dispatch(setElapsedTime(time)),
  setTimer: timerType => dispatch(setTimer(timerType)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Clock)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  toggleRunning,
  stopTimer,
  setDuration,
  setBreakDuration,
  setElapsedTime,
  DEFAULT_DURATION,
  DEFAULT_BREAK_DURATION,
  setTimer,
  SESSION_TIMER,
} from '../actions'
import Alarm from '../utils/Alarm'
import styles from './ControlPanel.module.css'

class ControlPanel extends Component {
  constructor() {
    super()
    this.toggleRunning = this.toggleRunning.bind(this)
    this.reset = this.reset.bind(this)
  }
  toggleRunning() {
    this.props.toggleRunning()
  }
  reset() {
    this.props.stopTimer()
    this.props.setTimer(SESSION_TIMER)
    this.props.setDuration(DEFAULT_DURATION)
    this.props.setBreakDuration(DEFAULT_BREAK_DURATION)
    this.props.setElapsedTime(0)
    Alarm.stop()
  }
  render() {
    return (
      <div className={styles.controlPanel}>
        {!this.props.running && (
          <span onClick={this.toggleRunning}>
            <img src="./icons/play-arrow.svg" alt="start timer" />
          </span>
        )}
        {this.props.running && (
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

const mapStateToProps = state => ({
  running: state.running,
})

const mapDispatchToProps = dispatch => ({
  toggleRunning: () => dispatch(toggleRunning()),
  stopTimer: () => dispatch(stopTimer()),
  setDuration: duration => dispatch(setDuration(duration)),
  setBreakDuration: duration => dispatch(setBreakDuration(duration)),
  setElapsedTime: time => dispatch(setElapsedTime(time)),
  setTimer: timerType => dispatch(setTimer(timerType)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlPanel)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleRunning, setElapsedTime } from '../actions'
import Timer from './Timer'
import Display from './Display'
import styles from './Clock.module.css'

class Clock extends Component {
  running = false
  timer = null
  constructor(props) {
    super(props)
    this.startClock = this.startClock.bind(this)
  }
  componentDidUpdate() {
    if (!this.running && this.props.running) {
      this.running = true
      this.startClock()
    } else if (this.running && !this.props.running) {
      this.running = false
      clearInterval(this.timer)
    }
  }
  startClock() {
    this.timer = setInterval(() => {
      const { elapsedTime, duration } = this.props
      const newTime = elapsedTime + 1
      this.props.setElapsedTime(newTime)
      if (newTime >= duration) {
        clearInterval(this.timer)
        this.props.toggleRunning()
        this.running = false
      }
    }, 1000)
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

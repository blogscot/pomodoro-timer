import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleRunning } from '../actions'
import Timer from './Timer'
import Display from './Display'
import styles from './Clock.module.css'

class Clock extends Component {
  currentTime = 0
  running = false
  timer = null
  state = {
    currentTime: 0,
  }
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
      const newTime = this.state.currentTime + 1
      this.setState({
        currentTime: newTime,
      })
      if (newTime >= this.props.duration) {
        clearInterval(this.timer)
        this.props.toggleRunning()
        this.running = false
      }
    }, 1000)
  }
  render() {
    let { currentTime } = this.state
    let { duration } = this.props
    const remainingTime = duration - currentTime
    return (
      <div className={styles.clock}>
        <Display seconds={remainingTime}></Display>
        <Timer total={duration} current={currentTime} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  running: state.running,
  duration: state.duration,
})

const mapDispatchToProps = dispatch => ({
  toggleRunning: () => dispatch(toggleRunning()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Clock)

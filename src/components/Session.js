import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setDuration, setBreakDuration } from '../actions'
import styles from './Session.module.css'

class Session extends Component {
  increment = () => {
    if (this.props.running) return
    if (this.props.pomodoro) {
      if (this.props.duration < 3600) {
        this.props.setDuration(this.props.duration + 60)
      }
    } else {
      if (this.props.breakDuration < 1800) {
        this.props.setBreakDuration(this.props.breakDuration + 60)
      }
    }
  }
  decrement = () => {
    if (this.props.running) return
    if (this.props.pomodoro) {
      if (this.props.duration > 60) {
        this.props.setDuration(this.props.duration - 60)
      }
    } else {
      if (this.props.breakDuration > 0) {
        this.props.setBreakDuration(this.props.breakDuration - 60)
      }
    }
  }
  render() {
    const duration = this.props.pomodoro
      ? this.props.duration
      : this.props.breakDuration
    const minutesSeconds = `${duration / 60}:00`
    return (
      <div>
        <div className={styles.title}>{this.props.title}</div>
        <div className={styles.session}>
          <span className={styles.down} onClick={this.decrement}>
            <img
              className={styles.invert}
              src="./icons/arrow-up.svg"
              alt="down arrow"
            />
          </span>
          <span className={styles.duration}>{minutesSeconds}</span>
          <span className={styles.up} onClick={this.increment}>
            <img src="./icons/arrow-up.svg" alt="up arrow" />
          </span>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  running: state.running,
  duration: state.duration,
  breakDuration: state.breakDuration,
})

const mapDispatchToProps = dispatch => ({
  setDuration: duration => dispatch(setDuration(duration)),
  setBreakDuration: duration => dispatch(setBreakDuration(duration)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Session)

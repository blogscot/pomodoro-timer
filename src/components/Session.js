import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setDuration, setBreakDuration } from '../actions'
import styles from './Session.module.css'

class Session extends Component {
  constructor(props) {
    super(props)
    this.state = {
      duration: this.props.duration,
      breakDuration: this.props.breakDuration,
    }
  }
  increment = () => {
    if (this.props.running) return
    let newDuration
    if (this.props.pomodoro) {
      newDuration = this.state.duration + 60
      this.setState({ duration: newDuration })
      this.props.setDuration(newDuration)
    } else {
      newDuration = this.state.breakDuration + 60
      this.setState({ breakDuration: newDuration })
      this.props.setBreakDuration(newDuration)
    }
  }
  decrement = () => {
    if (this.props.running) return
    let newDuration
    if (this.props.pomodoro) {
      if (this.state.duration > 60) {
        newDuration = this.state.duration - 60
        this.setState({ duration: newDuration })
        this.props.setDuration(newDuration)
      }
    } else {
      if (this.state.breakDuration > 0) {
        newDuration = this.state.breakDuration - 60
        this.setState({ breakDuration: newDuration })
        this.props.setBreakDuration(newDuration)
      }
    }
  }
  render() {
    const duration = this.props.pomodoro
      ? this.state.duration
      : this.state.breakDuration
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

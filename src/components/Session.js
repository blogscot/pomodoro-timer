import React, { Component } from 'react'
import styles from './Session.module.css'

class Session extends Component {
  constructor(props) {
    super(props)
    this.state = {
      minutes: this.props.duration,
    }
  }
  increment = () => this.setState({ minutes: this.state.minutes + 1 })
  decrement = () => {
    if (this.state.minutes > 1) {
      this.setState({ minutes: this.state.minutes - 1 })
    }
  }
  render() {
    const minutesSeconds = `${this.state.minutes}:00`
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

export default Session

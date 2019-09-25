import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleRunning } from '../actions'
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
    console.log('reset')
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
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlPanel)

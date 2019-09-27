import React from 'react'
import { connect } from 'react-redux'
import { SESSION_TIMER } from '../actions'
import styles from './Activity.module.css'

function Activity(props) {
  const activity = props.currentTimer === SESSION_TIMER ? 'work' : 'break'
  return <div className={styles.activity}>{activity}</div>
}

const mapStateToProps = state => ({
  currentTimer: state.timerType,
})

export default connect(mapStateToProps)(Activity)

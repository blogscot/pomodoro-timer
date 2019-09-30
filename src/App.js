import React from 'react'
import { connect } from 'react-redux'
import Activity from './components/Activity'
import Clock from './components/Clock'
import ControlPanel from './components/ControlPanel'
import Session from './components/Session'
import './App.css'

function App(props) {
  const opacity = props.running ? '0.2' : '1'
  return (
    <div className="App">
      <h1>Pomodoro Clock</h1>
      <div style={{ opacity }} id="sessions">
        <Session title="session Length" pomodoro />
        <Session title="break Length" />
      </div>
      <Activity />
      <Clock />
      <ControlPanel />
    </div>
  )
}

const mapStateToProps = state => ({
  running: state.running,
})

export default connect(mapStateToProps)(App)

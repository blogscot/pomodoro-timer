import React from 'react'
import Activity from './components/Activity'
import Clock from './components/Clock'
import ControlPanel from './components/ControlPanel'
import Session from './components/Session'
import './App.css'

function App() {
  return (
    <div className="App">
      <div id="sessions">
        <Session title="session Length" pomodoro />
        <Session title="break Length" />
      </div>
      <Activity />
      <Clock />
      <ControlPanel />
    </div>
  )
}

export default App

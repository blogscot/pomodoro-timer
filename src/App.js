import React from 'react'
import Clock from './components/Clock'
import Session from './components/Session'
import ControlPanel from './components/ControlPanel'
import './App.css'

function App() {
  return (
    <div className="App">
      <div id="sessions">
        <Session title="session Length" pomodoro />
        <Session title="break Length" />
      </div>
      <Clock />
      <ControlPanel />
    </div>
  )
}

export default App

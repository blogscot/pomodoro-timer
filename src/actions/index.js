export const TOGGLE_RUNNING = 'TOGGLE_RUNNING'
export const SET_DURATION = 'SET_DURATION'
export const SET_BREAK_DURATION = 'SET_REST_DURATION'
export const SET_ELAPSED_TIME = 'SET_ELAPSED_TIME'

export const SELECT_TIMER = 'SELECT_TIMER'
export const POMODORO_TIMER = 'POMODORO_TIMER'
export const BREAK_TIMER = 'BREAK_TIMER'

export const toggleRunning = () => ({
  type: TOGGLE_RUNNING,
})

export const setDuration = duration => ({
  type: SET_DURATION,
  duration,
})

export const setElapsedTime = elapsedTime => ({
  type: SET_ELAPSED_TIME,
  elapsedTime,
})

export const setBreakDuration = breakDuration => ({
  type: SET_BREAK_DURATION,
  breakDuration,
})

export const selectTimer = timerType => ({
  type: SELECT_TIMER,
  timerType,
})

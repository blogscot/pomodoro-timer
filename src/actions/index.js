export const TOGGLE_RUNNING = 'TOGGLE_RUNNING'
export const RESET_DURATION = 'RESET_DURATION'
export const SET_DURATION = 'SET_DURATION'
export const SET_BREAK_DURATION = 'SET_REST_DURATION'

export const toggleRunning = () => ({
  type: TOGGLE_RUNNING,
})

export const resetDuration = () => ({
  type: RESET_DURATION,
})

export const setDuration = duration => ({
  type: SET_DURATION,
  duration,
})

export const setBreakDuration = break_duration => ({
  type: SET_BREAK_DURATION,
  break_duration: break_duration,
})

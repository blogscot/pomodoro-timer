export const TOGGLE_RUNNING = 'TOGGLE_RUNNING'
export const RESET_DURATION = 'RESET_DURATION'
export const SET_DURATION = 'SET_DURATION'

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

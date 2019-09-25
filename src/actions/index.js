export const TOGGLE_RUNNING = 'TOGGLE_RUNNING'
export const RESET_TIMER = 'RESET_TIMER'
export const SET_TIMER = 'SET_TIMER'

export const toggleRunning = () => ({
  type: TOGGLE_RUNNING,
})

export const resetTimer = () => ({
  type: RESET_TIMER,
})

export const setTimer = duration => ({
  type: SET_TIMER,
  duration,
})

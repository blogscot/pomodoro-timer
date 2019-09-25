import { TOGGLE_RUNNING, RESET_TIMER, SET_TIMER } from '../actions'
const defaultState = {
  running: false,
  timer: 300,
}

const pomodoro = (state = defaultState, action) => {
  switch (action.type) {
    case TOGGLE_RUNNING:
      return {
        ...state,
        running: !state.running,
      }
    case RESET_TIMER:
      return {
        ...state,
        timer: 0,
      }
    case SET_TIMER:
      return {
        ...state,
        timer: action.duration,
      }
    default:
      return state
  }
}

export default pomodoro

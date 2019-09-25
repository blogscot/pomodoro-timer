import { TOGGLE_RUNNING, RESET_DURATION, SET_DURATION } from '../actions'
const defaultState = {
  running: false,
  duration: 60,
}

const pomodoro = (state = defaultState, action) => {
  switch (action.type) {
    case TOGGLE_RUNNING:
      return {
        ...state,
        running: !state.running,
      }
    case RESET_DURATION:
      return {
        ...state,
        duration: 0,
      }
    case SET_DURATION:
      return {
        ...state,
        duration: action.duration,
      }
    default:
      return state
  }
}

export default pomodoro

import {
  TOGGLE_RUNNING,
  RESET_DURATION,
  SET_DURATION,
  SET_BREAK_DURATION,
} from '../actions'

const defaultState = {
  running: false,
  duration: 15 * 60,
  break_duration: 2 * 60,
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
    case SET_BREAK_DURATION:
      return {
        ...state,
        break_duration: action.break_duration,
      }
    default:
      return state
  }
}

export default pomodoro

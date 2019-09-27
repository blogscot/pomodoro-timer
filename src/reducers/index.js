import {
  TOGGLE_RUNNING,
  SET_DURATION,
  SET_BREAK_DURATION,
  SELECT_TIMER,
  SET_ELAPSED_TIME,
  SESSION_TIMER,
  BREAK_TIMER,
} from '../actions'

const defaultState = {
  running: false,
  elapsedTime: 0,
  duration: 10,
  breakDuration: 20,
  timerType: SESSION_TIMER,
}

const pomodoro = (state = defaultState, action) => {
  switch (action.type) {
    case TOGGLE_RUNNING:
      return {
        ...state,
        running: !state.running,
      }
    case SET_DURATION:
      return {
        ...state,
        duration: action.duration,
      }
    case SET_BREAK_DURATION:
      return {
        ...state,
        breakDuration: action.breakDuration,
      }
    case SELECT_TIMER:
      const { timerType } = action
      if (timerType === SESSION_TIMER || timerType === BREAK_TIMER) {
        return {
          ...state,
          timerType,
        }
      }
      return state
    case SET_ELAPSED_TIME:
      return {
        ...state,
        elapsedTime: action.elapsedTime,
      }
    default:
      return state
  }
}

export default pomodoro

import {
  TOGGLE_RUNNING,
  SET_DURATION,
  SET_BREAK_DURATION,
  SELECT_TIMER,
  SET_ELAPSED_TIME,
  POMODORO_TIMER,
  BREAK_TIMER,
} from '../actions'

const defaultState = {
  running: false,
  elapsedTime: 0,
  duration: 15 * 60,
  breakDuration: 2 * 60,
  timerType: POMODORO_TIMER,
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
      if (timerType === POMODORO_TIMER || timerType === BREAK_TIMER) {
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

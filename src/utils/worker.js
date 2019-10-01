/* eslint-disable no-restricted-globals */
export default () => {
  let timerID = null
  self.addEventListener('message', e => {
    if (!e) return
    if (e.data === 'start') {
      timerID = setInterval(() => {
        postMessage('tick')
      }, 1000)
    } else if (e.data === 'stop') {
      clearInterval(timerID)
      postMessage('timer stopped')
    }
  })
}

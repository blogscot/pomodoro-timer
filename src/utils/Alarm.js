import AlarmSound from '../assets/audio/alarm.mov'

class Alarm {
  constructor() {
    this.audio = new Audio(AlarmSound)
    this.audio.load()
  }
  play() {
    this.audio.play()
  }
  stop() {
    this.audio.pause()
    this.audio.load()
  }
}

export default new Alarm()

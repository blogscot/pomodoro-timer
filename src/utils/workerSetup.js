export default class WebWorker {
  constructor(worker) {
    const blob = new Blob([`(${worker})()`])
    return new Worker(URL.createObjectURL(blob))
  }
}

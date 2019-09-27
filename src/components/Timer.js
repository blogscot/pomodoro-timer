import React, { Component } from 'react'

class Timer extends Component {
  height = 300
  width = 300
  startAngle = -0.5 * Math.PI
  endAngle = 1.5 * Math.PI
  canvas = null
  componentDidMount() {
    this.canvas = document.querySelector('#myCanvas')
    this.context = this.canvas.getContext('2d')
    this.drawTimer(this.context, this.startAngle, this.endAngle)
  }
  componentDidUpdate() {
    const context = this.canvas.getContext('2d')
    const { total, current } = this.props
    const fraction = (total - current) / total
    const currentAngle = this.endAngle - 2 * Math.PI * fraction
    context.clearRect(0, 0, this.width, this.height)
    this.drawBackground(context)
    this.drawTimer(context, currentAngle, this.endAngle)
  }
  drawTimer = (context, startAngle, endAngle) => {
    context.beginPath()
    context.arc(150, 150, 100, startAngle, endAngle)
    context.lineWidth = 5
    context.strokeStyle = 'green'
    context.stroke()
  }
  drawBackground = context => {
    context.beginPath()
    context.arc(150, 150, 100, this.startAngle, this.endAngle)
    context.lineWidth = 5
    context.strokeStyle = '#eee'
    context.stroke()
  }
  render() {
    return (
      <div>
        <canvas id="myCanvas" width={this.width} height={this.height}></canvas>
      </div>
    )
  }
}

export default Timer

class Ball {
  constructor(options) {
    this.w = options.w
    this.h = options.h
    this.x = options.x
    this.y = options.y 
    this.radius = options.radius
    this.fillStyle = options.fillStyle
    this.strokeStyle = options.strokeStyle
    this.lineWidth = options.lineWidth
    return this
  }
  drawChart(ctx) {
    ctx.save()
    // 转换坐标原点到目标点
    ctx.translate(this.x, this.y)
    ctx.fillStyle = this.fillStyle
    ctx.strokeStyle = this.strokeStyle
    this.lineWidth ? ctx.lineWidth = this.lineWidth : ''
    ctx.beginPath()
    ctx.arc(0, 0, this.radius, 0, Math.PI * 2)
    ctx.closePath()
    ctx.fill()
    // ctx.stroke()
    ctx.restore()
  }
  render(ctx) {
    this.drawChart(ctx)
  }
}
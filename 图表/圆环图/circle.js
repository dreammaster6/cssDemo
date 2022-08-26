class CircleChart {
  // 构造函数 默认值
  constructor(options) {
    // canvas绘制元素中心点
    this.x = options.x
    this.y = options.y
    // canvas元素宽高
    this.W = options.W
    this.H = options.H
    // 绘制圆的半径
    this.radius = options.radius
    // 描边颜色
    this.strokeStyle = options.strokeStyle
    // 填充颜色
    this.fillStyle = options.fillStyle
    // 描边宽度
    this.lineWidth = options.lineWidth
  }
  // 绘制图表
  drawChart({ ctx, lineWidth, radius, startAngel, endAngel, isfill, isStroke, strokeStyle, fillStyle, gradientLine, lineCap } = options) {
    ctx.save()
    ctx.translate(this.x, this.y)
    ctx.lineWidth = lineWidth || this.lineWidth || 1
    ctx.strokeStyle = strokeStyle || gradientLine || this.strokeStyle
    ctx.fillStyle = fillStyle || gradientLine || this.fillStyle
    ctx.lineCap = lineCap || 'butt'
    ctx.beginPath()
    ctx.arc(0, 0, radius || this.radius, startAngel, endAngel)
    isStroke ? ctx.stroke() : '';
    isfill ? ctx.fill() : '';
    ctx.closePath()
    ctx.restore()
  }
  // 绘制文本
  drawText({ ctx, textContent, gradientLine, fillStyle, x, y } = options) {
    ctx.save()
    ctx.font = '15px Digital-7Italic'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillStyle = fillStyle || gradientLine || this.fillStyle
    ctx.fillText(textContent, x, y)
    ctx.restore()
  }
  // 绘制图片
  drawImg({ ctx, x, y, width, height, imgSrc } = options) {
    const img = new Image()
    img.onload = function () {
      ctx.drawImage(img, x, y, width, height)
    }
    img.src = imgSrc
    // ctx.drawImage(img, x, y, width, height)
  }
  // 创建渐变色容器
  createLinearGradient({ x1, y1, x2, y2, ctx, fn } = coodrObj) {
    let gradientLine = ctx.createLinearGradient(x1, y1, x2, y2)
    fn(gradientLine)
    return gradientLine
  }
  // 渲染函数
  render(ctx, textContent) {
  }
}

class CircleChartOne extends CircleChart {
  render(ctx, textContent) {
    // 不缩放画布，图像很模糊，所以缩放一下画布
    ctx.save()
    ctx.scale(2, 2)
    let speed = 0
    let progress = 0
    let time = setInterval(() => {
      if (progress >= Number(textContent)) {
        clearInterval(time)
      }
      if (progress / textContent > 0.95) {
        speed = 1
      } else if (progress / textContent > 0.7) {
        speed = Number(textContent) * 0.03
      } else {
        speed = Number(textContent) * 0.05
      }
      // 清楚画布
      ctx.clearRect(0, 0, this.W, this.H)
      // 绘制背景圆圈
      this.drawChart(
        {
          ctx,
          radius: 27,
          startAngel: Math.PI * 0,
          endAngel: Math.PI * 2,
          isfill: false,
          isStroke: true
        }
      )
      // 绘制进度条圆圈
      this.drawChart({
        ctx,
        radius: 27,
        lineWidth: 3,
        startAngel: Math.PI * 3 / 2,
        endAngel: Math.PI * 3 / 2 + Math.PI * 2 * progress / 100,
        isfill: false,
        isStroke: true,
        lineCap: 'round',
        gradientLine: this.createLinearGradient(
          {
            x1: 0,
            y1: 0,
            x2: 54,
            y2: 54,
            ctx: ctx,
            fn: (res) => {
              res.addColorStop(0, 'rgba(68, 222, 197, 1)')
              res.addColorStop(0.5, 'rgba(78, 188, 250, 1)')
              return res
            }
          }
        )
      })
      // 绘制文本
      this.drawText(
        {
          ctx: ctx,
          textContent: progress.toFixed(0) + '%',
          gradientLine: this.createLinearGradient(
            {
              x1: 15,
              y1: 20,
              x2: 45,
              y2: 45,
              ctx: ctx,
              fn: (res) => {
                res.addColorStop(0, 'rgba(68, 222, 197, 1)')
                res.addColorStop(0.5, 'rgba(78, 188, 250, 1)')
                return res
              }
            }
          ),
          x: 32,
          y: 32
        }
      )
      progress += speed
    }, 20)
    // ctx.restore()
  }
}

class CircleChartTwo extends CircleChart {
  render(ctx, textContent) {
    let isOnloadImg = false
    ctx.save()
    ctx.scale(2, 2)
    let speed = 0
    let progress = 0
    let time = setInterval(() => {
      if (progress >= Number(textContent)) {
        clearInterval(time)
      }
      if (progress / textContent < 0.5) {
        speed = textContent * 0.5 / 10
      } else if (progress / textContent >= 0.5 && progress / textContent <= 0.8) {
        speed = textContent * 0.3 / 10
      } else {
        speed = textContent * 0.2 / 10
      }
      ctx.clearRect(0, 0, this.W, this.H)
      this.drawImg(
        {
          ctx: ctx,
          x: this.x - 16 / 2,
          y: this.y - 16 / 2 - 10,
          width: 16,
          height: 16,
          imgSrc: 'http://134.96.249.161:9990/dtdp-res/component/images/jifang/flash.svg'
        })
      this.drawChart({
        ctx,
        radius: 28,
        lineWidth: 2,
        startAngel: Math.PI * 0,
        endAngel: Math.PI * 2,
        isfill: true,
        isStroke: true,
        lineCap: 'round',
      })
      this.drawText(
        {
          ctx: ctx,
          textContent: progress.toFixed(2),
          gradientLine: this.createLinearGradient(
            {
              x1: 15,
              y1: 20,
              x2: 45,
              y2: 45,
              ctx: ctx,
              fn: (res) => {
                res.addColorStop(0, 'rgba(68, 222, 197, 1)')
                res.addColorStop(0.5, 'rgba(78, 188, 250, 1)')
                return res
              }
            }
          ),
          x: 32,
          y: 32 + 5
        }
      )
      this.drawText(
        {
          ctx: ctx,
          textContent: 'bps',
          fillStyle: 'rgba(97, 138, 158, 1)',
          x: 32,
          y: 32 + 18
        }
      )
      if (progress > Number(textContent)) {
        progress = Number(textContent)
      }
      progress += speed
    }, 20)
  }
}

class CircleChartThree extends CircleChart {
  render(ctx, textContent) {
    ctx.save()
    ctx.scale(2, 2)
    let speed = 0
    let progress = 0
    let time = setInterval(() => {
      if (progress >= Number(textContent)) {
        clearInterval(time)
      }
      if (progress / textContent < 0.5) {
        speed = textContent * 0.5 / 10
      } else if (progress / textContent >= 0.5 && progress / textContent <= 0.8) {
        speed = textContent * 0.3 / 10
      } else {
        speed = textContent * 0.2 / 10
      }
      if (progress > Number(textContent)) {
        progress = Number(textContent)
      }
      ctx.clearRect(0, 0, this.W, this.H)
      this.drawChart({
        ctx,
        radius: 30,
        lineWidth: 1,
        startAngel: Math.PI * 0,
        endAngel: Math.PI * 2,
        isfill: true,
        isStroke: true,
        lineCap: 'round',
      })
      this.drawText(
        {
          ctx: ctx,
          textContent: progress.toFixed(0) + '%',
          gradientLine: this.createLinearGradient(
            {
              x1: 15,
              y1: 20,
              x2: 45,
              y2: 45,
              ctx: ctx,
              fn: (res) => {
                res.addColorStop(0, 'rgba(68, 222, 197, 1)')
                res.addColorStop(0.5, 'rgba(78, 188, 250, 1)')
                return res
              }
            }
          ),
          x: 32,
          y: 32
        }
      )
      progress += speed
    }, 20)
  }
}
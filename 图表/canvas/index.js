// getImageData

let drawing = document.getElementById('canvas2')

if (drawing.getContext) {
    var context = drawing.getContext("2d"),
    image = canvasEl,
    imageData, data, i, len, average, red, green, blue, alpha;
    // 绘制原始图像
    context.drawImage(image, 0, 0)
    // 取得图像数据
    imageData = context.getImageData(0,0, image.width, image.height)
    data = imageData.data
    for (let i = 0, len = data.length; i < len; i+=4) {
        red = data[i]
        green = data[i+1]
        blue = data[i+2]
        alpha = data[i+3]
        // 求得rgb平均值
        average = Math.floor((red + blue + green) / 3)
        // 设置颜色值，透明度不变
        data[i] = average
        data[i+1] = average
        data[i+2] = average
    }
    // 写回数据
    imageData.data = data
    context.putImageData(imageData, 0, 0)
}
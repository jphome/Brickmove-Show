// page/tool/field_angle/view_angle/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    width: 0,
    height: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.line_color = 'white'
    this.angle = options.angle
    this.drawAngle(this.angle)

    this.interval = setInterval(this.drawAngle, 300)
  },
  onUnload: function () {
    clearInterval(this.interval)
  },
  drawAngle: function(e) {
    var angle = this.angle
    var that = this
    var line_color = this.line_color
    if (line_color=='white') {
      line_color = 'yellow'
    } else {
      line_color = 'white'
    }
    this.line_color = line_color

    // console.log("角度： ", angle, "°")

    wx.getSystemInfo({
      success: function (res) {
        that.width = res.windowWidth
        that.height = res.windowHeight
        // console.log(res.model)
        // console.log(res.windowWidth)
        // console.log(res.pixelRatio)
      }
    })

    var startP = {
      x: 0,
      y: 0
    }
    var endP = {
      x: 0,
      y: 0
    }
    startP.x = that.width/2
    startP.y = that.height
    var endY = that.height - (Math.tan(Math.PI/180*(90-angle/2))*that.width/2)

    this.ctx = wx.createContext();
    this.ctx.setStrokeStyle(line_color)
    this.ctx.setFillStyle('red')
    this.ctx.setLineWidth(3)  // 线宽3px
    this.ctx.beginPath(); //开始一个新的路径

    endP.x = 0
    endP.y = endY
    this.ctx.moveTo(startP.x, startP.y);  //路径的起点
    this.ctx.lineTo(endP.x, endP.y);  //路径的终点

    endP.x = that.width
    endP.y = endY
    this.ctx.moveTo(startP.x, startP.y);  //路径的起点
    this.ctx.lineTo(endP.x, endP.y);  //路径的终点

    this.ctx.stroke();  //对当前路径进行描边
    this.ctx.closePath(); //关闭当前路径

    var tmp1 = Math.PI+Math.PI/180*(90-angle/2)
    var tmp2 = tmp1 + Math.PI/180*angle
    this.ctx.beginPath(); //开始一个新的路径
    this.ctx.arc(startP.x, startP.y, 50, tmp1, tmp2)

    this.ctx.setFontSize(20)
    this.ctx.fillText(angle+'°', startP.x-10, startP.y-160)
    this.ctx.stroke();  //对当前路径进行描边
    this.ctx.closePath(); //关闭当前路径

    wx.drawCanvas({
      canvasId:'CanvasAngle', //画布标识，对应<canvas/>的cavas-id
      actions: this.ctx.getActions()  //导出context绘制的直线并显示到页面
    });
  },
  drawLine: function() {

  }
})

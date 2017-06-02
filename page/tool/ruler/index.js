// page/tool/ruler/index.js
Page({
  data: {
    chart: {
      'iPhone 6': {
        inch: 4.7,  // 对角线inch
        x: 9, // 比例：宽
        y: 16,  // 比例：长
        W: 750,
        H: 1334,
      },
      'iPhone 6s<iPhone8,1>': {
        inch: 4.7,  // 对角线inch
        x: 9, // 比例：宽
        y: 16,  // 比例：长
        W: 750,
        H: 1334,
      },
    }
  },

  onLoad: function (options) {
    var that = this
    wx.getSystemInfo({
      success: function (res) {
        that.pixelRatio = res.pixelRatio
        that.model = res.model
        that.width = res.windowWidth
        that.height = res.windowHeight
      }
    })

    // console.log(that.model)

    var tmp1 = this.data.chart[that.model]
    // console.log(tmp1)
    var pixnum_per_mm = tmp1.H / that.pixelRatio / (tmp1.inch*25.4 / Math.sqrt(Math.pow(tmp1.x, 2) + Math.pow(tmp1.y, 2)) * tmp1.y)
    var num = parseInt(pixnum_per_mm)
    // console.log(pixnum_per_mm)
    // console.log(num)

    var startP = {
      x: 1,
      y: that.height-3,
    }
    var endP = {
      x: 1,
      y: that.height-500,
    }
    this.ctx = wx.createContext();
    this.ctx.setStrokeStyle('red')
    this.ctx.setLineWidth(3)  // 线宽3px
    this.ctx.beginPath(); //开始一个新的路径
    this.ctx.moveTo(startP.x, startP.y);  //路径的起点
    this.ctx.lineTo(endP.x, endP.y);  //路径的终点

    this.ctx.moveTo(startP.x, startP.y);  //路径的起点
    this.ctx.lineTo(18, startP.y);  //路径的终点
    this.ctx.setFontSize(14)
    this.ctx.setFillStyle('#ff0000')
    this.ctx.fillText("1CM", 27, startP.y)

    this.ctx.moveTo(startP.x, startP.y-60);  //路径的起点
    this.ctx.lineTo(18, startP.y-60);  //路径的终点
    this.ctx.fillText("2CM", 27, startP.y-60)

    this.ctx.moveTo(startP.x, startP.y-120);  //路径的起点
    this.ctx.lineTo(18, startP.y-120);  //路径的终点
    this.ctx.fillText("3CM", 27, startP.y-120)

    this.ctx.moveTo(startP.x, startP.y-180);  //路径的起点
    this.ctx.lineTo(18, startP.y-180);  //路径的终点
    this.ctx.fillText("4CM", 27, startP.y-180)

    this.ctx.moveTo(startP.x, startP.y-240);  //路径的起点
    this.ctx.lineTo(18, startP.y-240);  //路径的终点
    this.ctx.fillText("5CM", 27, startP.y-240)

    this.ctx.moveTo(startP.x, startP.y-300);  //路径的起点
    this.ctx.lineTo(18, startP.y-300);  //路径的终点
    this.ctx.fillText("6CM", 27, startP.y-300)

	this.ctx.moveTo(startP.x, startP.y-360);  //路径的起点
    this.ctx.lineTo(18, startP.y-360);  //路径的终点
    this.ctx.fillText("7CM", 27, startP.y-360)

    this.ctx.moveTo(startP.x, startP.y-420);  //路径的起点
    this.ctx.lineTo(18, startP.y-420);  //路径的终点
    this.ctx.fillText("8CM", 27, startP.y-420)

    this.ctx.stroke();  //对当前路径进行描边
    this.ctx.closePath(); //关闭当前路径

    wx.drawCanvas({
      canvasId:'CanvasRuler', //画布标识，对应<canvas/>的cavas-id
      actions: this.ctx.getActions()  //导出context绘制的直线并显示到页面
    });
  },
})
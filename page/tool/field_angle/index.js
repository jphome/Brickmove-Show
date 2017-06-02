// page/tool/field_angle/index.js
Page({
  data: {
  	angle: 0,
    angles: [73.1, 46, 35.5, 22, 15]
  },

  onLoad: function(options) {
    // 页面初始化 options为页面跳转所带来的参数
  },

  input_angle:function(e) {
	this.setData({
		angle: e.detail.value
	})
  }
})
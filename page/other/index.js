//index.js
//获取应用实例
var app = getApp()
Page({
	data: {
		shareData: {
			title: '扶我起来，搬砖去',
			path: '/page/other/index'
		},
	},
	onShareAppMessage: function () {
		return this.data.shareData
	}
})

// page/tool/Brickmove_Tools/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    func_list: [
      '多画面预览实况图像',
      '批量激活设备',
      '批量修改设备IP地址',
      '批量配置OSD',
      '便捷修改电脑IP地址'
    ],
    func_text: '',
    desc_list :[
      '本软件纯天然绿色无污染！',
      '本软件无任何依赖，单exe文件！',
      '确保不要放到中文文件夹中使用！！',
      '打开本软件前确保电脑网络已连通',
      '如果要使用本地实用工具，确保用管理员权限运行本软件',
      '适用平台：xp(32/64位)、win7(32/64位)、win10(64位)',
      '可能不会再系统地去维护它了┓(;´_｀)┏'
    ],
    desc_text: '',
    tech_list: [
      '开发语言：python',
      '打包工具：PyInstaller',
      'IDE: eric',
      'GUI：PyQt4',
      'SDK：海康sdk',
      '开源：GitHub 搜 Brickmove-Tool'
    ],
    tech_text: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var i = 0
    var tmp = []
    var tmp_s = ''
    var list = this.data.func_list
    for (i in list) {
      tmp.push('• ' + list[i])
    }
    tmp_s = tmp.join('\n')

    this.setData({
      func_text: tmp_s
    })

    list = this.data.desc_list
    tmp = []
    for (i in list) {
      tmp.push('• ' + list[i])
    }
    tmp_s = tmp.join('\n')

    this.setData({
      desc_text: tmp_s
    })

    list = this.data.tech_list
    tmp = []
    for (i in list) {
      tmp.push('• ' + list[i])
    }
    tmp_s = tmp.join('\n')

    this.setData({
      tech_text: tmp_s
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})
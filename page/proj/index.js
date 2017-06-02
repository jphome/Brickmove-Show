Page({
  data: {
    shareData: {
      title: '扶我起来，搬砖去',
      path: '/page/proj/index'
    },
    list: [
      {
        id: 'zto_express',
        name: '中通快递（6个项目）',
        cities: {
			haining: '1000+ 路',
			jiaxing: '200+ 路',
			hefei: '560+ 路',
			zhengzhou: '750+ 路',
			wuhan: '560+ 路',
			jingzhou: '200+ 路',
		}
      }, {
        id: 'zto_freight',
        name: '中通快运（19个项目）',
        open: false,
		cities: {
			hangzhou: '1 个',
			hebei: '1 个',
			hubei: '1 个',
			beijing: '1 个',
			tianjin: '1 个',
			sichuan: '2 个',
			shandong: '3 个',
			dongbei: '4 个',
			jiangsu: '5 个',
		}
      }
    ],
    trans_name: {
      haining: '海宁',
      jiaxing: '嘉兴',
      hefei: '合肥',
      zhengzhou: '郑州',
      wuhan: '武汉',
      jingzhou: '荆州',

      jiangsu: '江苏',
      shandong: '山东',
      sichuan: '四川',
      beijing: '北京',
      tianjin: '天津',
      dongbei: '东北',
      hangzhou: '杭州',
      hebei: '河北',
      hubei: '湖北'
    }
  },
  kindToggle: function (e) {
    var id = e.currentTarget.id, list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list: list
    });
  },
  onShareAppMessage: function () {
    return this.data.shareData
  }
})


var wxlocker = require("../../../util/wxlocker.js");

Page({
  onLoad: function(options) {
	this.setData({
	  city: options.region
	});
	wxlocker.lock.init();
    this.initState();
  },
  data: {
    index: 0,
    unlockSucc: false,
	cities: {
	  jiangsu: ['苏州', '南通', '南京', '常州', '徐州'],
	  dongbei: ['辽宁盘锦', '辽宁沈阳', '吉林长春', '黑龙江哈尔滨'],
	  shandong: ['青岛', '潍坊', '济南'],
	  sichuan: ['成都', '南充'],
	  beijing: ['北京'],
	  tianjin: ['天津'],
	  hangzhou: ['杭州'],
	  hebei: ['石家庄'],
	  hubei: ['武汉']
	},
	detail: {
	  hangzhou: {
	    0: {
		  name: '中通快运杭州分拨',
		  address: '浙江省嘉兴市海宁市盐仓镇之江路118号',
		  longitude: 120.386161,
		  latitude: 30.361477,
		  relative: {
		  	0: ['分拨经理', '耿协斌', 18025960510],
		  	1: ['监控负责人', '黄主管', 18768404276],
		  },
		  exam_date: '--',
		  nvr: 10,
		  point: '302+4'
		}
	  },
	  jiangsu: {
	    0: {
		  name: '中通快运苏州分拨',
		  address: '江苏省苏州市虎丘区新镇路518号普洛斯物流园',
		  longitude: 120.471038,
		  latitude: 31.39295,
		  relative: {
		  	0: ['分拨经理', '罗亨新', 15681166660],
		  	1: ['监控负责人', '某某', 15301546932],
		  },
		  exam_date: '2017.3.18',
		  nvr: 9,
		  point: '283+4',
		  cad: 'http://pan.baidu.com/share/link?shareid=2247946496?uk=3779250347'
		},
	    1: {
		  name: '中通快运南通分拨',
		  address: '江苏省南通市港闸区幸余路888号宝湾物流园',
		  longitude: 120.864386,
		  latitude: 32.075879,
		  relative: {
		  	0: ['分拨经理', '王光华', 18506583043],
		  	// 1: ['监控负责人', '某某', ],
		  },
		  exam_date: '2017.2.8',
		  nvr: 4,
		  point: '124+2',
		  cad: ''
		},
		2: {
		  name: '中通快运南京分拨',
		  address: '江苏省南京市江宁区湖熟工业园区咸周璐88号中通快递园区内',
		  longitude: 118.950293,
		  latitude: 31.859111,
		  relative: {
		  	0: ['分拨经理', '张总', 15058570363],
		  	1: ['监控负责人', '小胖', 17751572118],
		  },
		  exam_date: '2017.2.14',
		  nvr: 4,
		  point: '117+2',
		  cad: ''
		},
		3: {
		  name: '中通快运常州分拨',
		  address: '江苏省常州市钟楼区龙城大道2039号厂区',
		  longitude: 119.905772,
		  latitude: 31.833023,
		  relative: {
		  	0: ['分拨经理', '潘飞', 13914067876],
		  	// 1: ['监控负责人', '某某', ],
		  },
		  exam_date: '2017.3.17',
		  nvr: 5,
		  point: '156+1',
		  cad: ''
		},
		4: {
		  name: '中通快运徐州分拨',
		  address: '江苏省徐州市铜山区张集镇104国道南侧博源国际寄宿学校斜对面',
		  longitude: 117.340320,
		  latitude: 34.153863,
		  relative: {
		  	0: ['分拨经理', '于从辉', 13401808606],
		  	// 1: ['监控负责人', '某某', 15301546932],
		  },
		  exam_date: '2017.3.1',
		  nvr: 4,
		  point: '116+2',
		  cad: ''
		}
	  },
	  dongbei: {
		0: {
		  name: '中通快运盘锦分拨',
		  address: '辽宁省盘锦市盘山县太平镇方山街',
		  longitude: 122.005117,
		  latitude: 41.254264,
		  relative: {
		  	0: ['分拨经理', '刘东明', 18506583107],
		  	// 1: ['监控负责人', '某某', 15301546932],
		  },
		  exam_date: '2017.3.30',
		  nvr: 1,
		  point: '25+2',
		  cad: ''
		},
		1: {
		  name: '中通快运沈阳分拨',
		  address: '辽宁省沈阳市东陵区祝科街45-1号普洛斯浑南现代产业物流园',
		  longitude: 123.565200,
		  latitude: 41.761616,
		  relative: {
		  	0: ['分拨经理', '穆震', 13904038705],
		  	1: ['监控负责人', '王可心', 15714034463],
		  },
		  exam_date: '2017.3.29',
		  nvr: 4,
		  point: '112',
		  cad: ''
		},
		2: {
		  name: '中通快运长春分拨',
		  address: '吉林省长春市经济技术开发区泉州北街与淄博路口',
		  longitude: 125.429189,
		  latitude: 43.901879,
		  relative: {
		  	0: ['分拨经理', '李林', 15330751099],
		  	1: ['监控负责人', '梁斌', 18843188650],
		  },
		  exam_date: '2017.3.29',
		  nvr: 2,
		  point: '51+2',
		  cad: ''
		},
		3: {
		  name: '中通快运哈尔滨分拨',
		  address: '黑龙江省哈尔滨市香坊区学府路518号龙园招待所院内',
		  longitude: 126.630105,
		  latitude: 45.652888,
		  relative: {
		  	0: ['分拨经理', '高士学', 15988103404],
		  	// 1: ['监控负责人', '梁斌', 18843188650],
		  },
		  exam_date: '2017.3.28',
		  nvr: 2,
		  point: '50+2',
		  cad: ''
		}
	  },
	  shandong: {
		0: {
		  name: '中通快运青岛分拨',
		  address: '山东省青岛市即墨市南泉镇华骏物流园公路港项目N4号库',
		  longitude: 120.286437,
		  latitude: 36.362359,
		  relative: {
		  	0: ['分拨经理', '殷杰', ],
		  	// 1: ['监控负责人', '梁斌', 18843188650],
		  },
		  exam_date: '2017.3.1',
		  nvr: 5,
		  point: '144+2',
		  cad: ''
		},
		1: {
		  name: '中通快运潍坊分拨',
		  address: '山东省潍坊市潍城经济开发区东风西街10669号',
		  longitude: 118.989011,
		  latitude: 36.717966,
		  relative: {
		  	// 0: ['分拨经理', '某某', ],
		  	0: ['监控负责人', '任工', 15505455752],
		  },
		  exam_date: '2017.3.2',
		  nvr: 4,
		  point: '121+2',
		  cad: ''
		},
		2: {
		  name: '中通快运济南分拨',
		  address: '山东省济南市济阳县崔寨立交邓官村盖世济北库区GSJB-6号库',
		  longitude: 117.110429,
		  latitude: 36.848851,
		  relative: {
		  	0: ['分拨经理', '乔汉玉', 18805392108],
		  	// 1: ['监控负责人', '任工', 15505455752],
		  },
		  exam_date: '2017.3.2',
		  nvr: 6,
		  point: '168+4',
		  cad: ''
		}
	  },
	  hebei: {
		0: {
		  name: '中通快运石家庄分拨',
		  address: '石家庄市新华区杜北乡上京村南利得物流园',
		  longitude: 114.426656,
		  latitude: 38.111809,
		  relative: {
		  	0: ['分拨经理', '姜锐剑', 13313317022],
		  	// 1: ['监控负责人', '任工', 15505455752],
		  },
		  exam_date: '2017.3.4',
		  nvr: 5,
		  point: '128+2',
		  cad: ''
		}
	  },
	  hubei: {
		0: {
		  name: '中通快运武汉分拨',
		  address: '武汉市东西湖去走马岭食品三路畅达神州工业园',
		  longitude: 114.023661,
		  latitude: 30.630029,
		  relative: {
		  	0: ['分拨经理', '田应飞', 18571509984],
		  	// 1: ['监控负责人', '任工', 15505455752],
		  },
		  exam_date: '2017.4.26',
		  nvr: 6,
		  point: '158+4',
		  cad: ''
		}
	  },
	  sichuan: {
		0: {
		  name: '中通快运成都分拨',
		  address: '成都市双流区西南航空港开发区西航港大道1589号',
		  longitude: 103.986964,
		  latitude: 30.501023,
		  relative: {
		  	0: ['分拨经理', '王文军', 13551388057],
		  	// 1: ['监控负责人', '任工', 15505455752],
		  },
		  exam_date: '2016.12.24',
		  nvr: 7,
		  point: '212+4',
		  cad: ''
		},
		1: {
		  name: '中通快运南充分拨',
		  address: '南充市高坪区物流大道三段88号南充传化公路港',
		  longitude: 106.180634,
		  latitude: 30.835078,
		  relative: {
		  	0: ['分拨经理', '王海龙', 18280568005],
		  	1: ['分拨经理', '王海龙', 18506583109],
		  },
		  exam_date: '2016.12.23',
		  nvr: 3,
		  point: '70+3',
		  cad: ''
		}
	  },
	  beijing: {
		0: {
		  name: '中通快运北京分拨',
		  address: '北京市通州区马驹桥镇京东商城华北物流中心',
		  longitude: 116.607477,
		  latitude: 39.755194,
		  relative: {
		  	0: ['分拨经理', '舒冠琦', 13331159271],
		  	1: ['监控负责人', '小李', 18500208834],
		  },
		  exam_date: '2017.3.3',
		  nvr: 5,
		  point: '144+4',
		  cad: ''
		}
	  },
	  tianjin: {
	    0: {
		  name: '中通快运天津分拨',
		  address: '天津市津南区开拓道海尔仓库',
		  longitude: 117.34849,
		  latitude: 38.94394,
		  relative: {
		  	0: ['分拨经理', '金帅', 15167056638],
		  	// 1: ['监控负责人', '小李', 18500208834],
		  },
		  exam_date: '2017.3.3',
		  nvr: 5,
		  point: '156+0',
		  cad: ''
		}
	  }
	}
  },
  bindPickerChange: function(e) {
    this.setData({
      index: e.detail.value
    })
  },
  openLocation: function (e) {
	console.log(e.target.dataset.address)
    wx.openLocation({
      longitude: Number(e.target.dataset.longitude),
      latitude: Number(e.target.dataset.latitude),
      name: e.target.dataset.name,
      address: e.target.dataset.address
    })
  },
  makePhoneCall: function (e) {
    var phone_num = e.target.dataset.num
	console.log(phone_num)
    wx.makePhoneCall({
      phoneNumber: String(phone_num),
      success: function () {
        console.log("成功拨打电话")
      }
    })
  },
  initState:function(){
    var unlockSucc = wxlocker.lock.unlockSucc;
    this.setData({
      unlockSucc: unlockSucc
    });
  },
  touchS:function(e){//touchstart事件绑定
    wxlocker.lock.bindtouchstart(e);
  },
  touchM:function(e){//touchmove事件绑定
    wxlocker.lock.bindtouchmove(e);
  },
  touchE:function(e){//touchend事件绑定
    wxlocker.lock.bindtouchend(e,this.lockSucc);
  },
  lockSucc:function(){//解锁成功的回调函数
    console.log("解锁成功！");
    this.setData({
    	unlockSucc: true
    })
  }
})

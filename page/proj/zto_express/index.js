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
    unlockSucc:false,
	cities: {
	  haining: ['海宁'],
	  jiaxing: ['嘉兴'],
	  hefei: ['合肥'],
	  zhengzhou: ['郑州'],
	  wuhan: ['武汉'],
	  jingzhou: ['荆州']
	},
	detail: {
	  haining: {
	    0: {
		  name: '中通快递海宁分拨',
		  address: '浙江省嘉兴市海宁市盐仓镇之江路118号',
		  longitude: 120.386161,
		  latitude: 30.361477,
		  relative: {
		  	0: ['监察部领导', '李义龙', 18816640045],
		  	1: ['监察部', '方婷', 18297627188],
		  	2: ['IT', '小蔡', 13656672905],
		  	3: ['IT', '袁工', 13656672905],
		  	4: ['运营部', '季冬冬', 18651362867],
		  }
		}
	  },
	  jiaxing: {
	    0: {
		  name: '中通快递嘉兴分拨',
		  address: '浙江省嘉兴市南湖区大桥镇大桥工业区欧嘉路29号',
		  longitude: 120.886986,
		  latitude: 30.736574,
		  relative: {
		  	0: ['负责人', '陈新', 13732560199],
		  	1: ['分拨经理', '王卫国', 13586336745],
		  }
		}
	  },
	  hefei: {
	    0: {
		  name: '中通快递合肥分拨',
		  address: '安徽省合肥市肥东县撮镇镇龙塘商贸物流园新世界路与喻闸路交口',
		  longitude: 117.426344,
		  latitude: 31.843993,
		  relative: {
		  	0: ['监察部领导', '徐勇', 18656053965],
		  	1: ['监察部', '朱兆详', 15005605505],
		  	2: ['IT', '某某', 13965095537],
		  	3: ['监察部离职', '张毅', 15209863811],
		  	4: ['监察部离职', '王星宇', 17756986956],
		  }
		}
	  },
	  zhengzhou: {
	    0: {
		  name: '中通快递郑州分拨',
		  address: '河南省郑州市中牟县郑庵镇新安路10号中通快递',
		  longitude: 113.909335,
		  latitude: 34.704141,
		  relative: {
		  	0: ['IT部', '王志炜', 18520128806],
		  	1: ['IT部', '王志炜', 15538095988],
		  	2: ['IT部', '刘工', 13837832543],
		  }
		}
	  },
	  wuhan: {
	    0: {
		  name: '中通快递武汉分拨',
		  address: '河北省武汉市东西湖区东吴大道3500中通快递',
		  longitude: 114.022753,
		  latitude: 30.667148,
		  manager: ['肖工', 18615935596],
		  user: ['', ],
		  relative: {
		  	0: ['监察部', '肖工', 18615935596],
		  	1: ['监察部', '李玉燕', 15021626869],
		  	2: ['IT', '蔡工', 18071071747],
		  	3: ['IT', '张飞', 18771390639],
		  	4: ['资产管理', '章伟军', 18071072940],
		  	5: ['甲方代表', '邵总', 18968176286],
		  	6: ['小麻木', '大爷', 13377897429],
		  	7: ['川渝住宿', '老板娘', 15994235596],
		  	8: ['金博大', '厦工', 18717108715],
		  	9: ['供应商', '山特ups', 15972127972],
		  }
		}
	  },
	  jingzhou: {
	    0: {
		  name: '中通快递荆州分拨',
		  address: '湖北省荆州市沙市区东方大道2号路',
		  longitude: 112.355637,
		  latitude: 30.338518,
		  relative: {
		  	0: ['地磅小伙', '张兴侨', 15271236841],
		  	1: ['IT', '吴工', 13617271250],
		  	2: ['小麻木', '锣场方向', 15107210435],
		  	3: ['小麻木', '沙岑路方向', 15872107249],
		  }
		}
	  },
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

// page/tool/storage_cal/index.js

import { $wuxXnumber } from '../../../components/wux'

Page({
	data:{
		tabs: ['计算保存时间', '计算磁盘空间'],
		activeIndex: 0,
		sliderOffset: 0,
		sliderLeft: 45,
		result: '',
		result_noshow: true,
		
		time_unit: '天',
		hdd_unit: 'T',
		bitrate_or_res: 'bitrate',
		bitrate: ['512Kbps', '1Mbps', '2Mbps', '3Mbps', '4Mbps', '5Mbps', '6Mbps', '自定义'],
		enc_type: ['H.264', 'H.265', 'Smart H.264'],
		res: ['QCIF', 'CIF', '4CIF', '1MP/720P', '1.3MP/960P', '2MP/1080P', '3MP/QXGA', '4MP', '5Mp', '6MP', '4K/8MP'],
		index_bitrate: 2,
		index_enc: 0,
		index_res: 4,
		storage_time: '',
		hdd_size: '',

		model: [
			['QCIF', '176*144', 128, 128],
			['CIF', '352*288', 256, 256],
			['4CIF', '704*576', 1, 716],
			['1MP/720P', '1280*720', 2, 1433],
			['1.3MP/960P', '1280*960', 2, 1433],
			['2MP/1080P', '1920*1080', 4, 2],
			['3MP/QXGA', '2048*1536', 5, 2.5],
			['4MP', '2560*1440', 6.5, 3.25],
			['5MP', '2560*1920', 9, 4.5],
			['6MP', '3072*2048', 11, 5.5],
			['4K/8MP', '4096*2160', 16, 8],
		],
		Bitrate_H264: {
			'QCIF': 128,
			'CIF': 256,
			'4CIF': 1024,
			'1MP/720P': 2048,
			'1.3MP/960P': 2048,
			'2MP/1080P': 4096,
			'3MP/QXGA': 5120,
			'4MP': 6656,
			'5MP': 9216,
			'6MP': 11264,
			'4K/8MP': 16384
		},
		Bitrate_H265: {
			'QCIF': 128,
			'CIF': 256,
			'4CIF': 716,
			'1MP/720P': 1433,
			'1.3MP/960P': 1433,
			'2MP/1080P': 2048,
			'3MP/QXGA': 2560,
			'4MP': 3328,
			'5MP': 4608,
			'6MP': 5632,
			'4K/8MP': 8192
		},
		Bitrate_SH264: {
			'QCIF': 122,
			'CIF': 244,
			'4CIF': 832,
			'1MP/720P': 1440,
			'1.3MP/960P': 1440,
			'2MP/1080P': 2048,
			'3MP/QXGA': 2560,
			'4MP': 3172,
			'5MP': 4158,
			'6MP': 5082,
			'4K/8MP': 6560
		},

	},
	onLoad:function(options){
		// 页面初始化 options为页面跳转所带来的参数
		$wuxXnumber.init('num_ipc', {
			disabled: !1, 	// 可输入
			longpress: !0,	// 长按快速加减
			min: 1,	// 最小值为1
			max: 1000,	// 最大值为1000
			value: 1,	// 初始值为1
			className: 'custom-xnumber', 
		})
	},
	radioChange:function(e){
		this.setData({
			bitrate_or_res: e.detail.value
		})
	},
	switch1Change:function(e){
		var val = '周'
		if (e.detail.value)
		{
			val = '天'
		}
		this.setData({
			time_unit: val
		})
	},
	switch2Change:function(e){
		var val = 'G'
		if (e.detail.value)
		{
			val = 'T'
		}
		this.setData({
			hdd_unit: val
		})
	},
	tabClick: function (e) {
		this.setData({
			sliderOffset: e.currentTarget.offsetLeft,
			activeIndex: e.currentTarget.id
		});
	},
	bindPickerChange_bitrate: function(e) {
		this.setData({
			index_bitrate: e.detail.value
		})
	},
	bindPickerChange_enc: function(e) {
		this.setData({
			index_enc: e.detail.value
		})
	},
	bindPickerChange_res: function(e) {
		this.setData({
			index_res: e.detail.value
		})
	},
	input_storage_time: function(e){
		this.setData({
			storage_time: e.detail.value
		})
	},
	input_hdd_size: function(e){
		this.setData({
			hdd_size: e.detail.value
		})
	},
	formSubmit: function(e){
		console.log('form发生了submit事件，携带数据为：', e.detail.value)
		var output = "";
		for (var key in e.detail.value) {
			if (output == "") {
				output = key + e.detail.value[key];
			}
			else {
				output += " | " + key + '=' + e.detail.value[key];
			}
		}

		var param = e.detail.value
		var tmp = 0
		if (this.data.activeIndex == 0)	// 计算保存时间
		{
			this.setData({
				result: output,
				result_noshow: false
			})
			
			var tmpstr = ''
			var hdd_unit = 1
			if (param.hdd_unit)
			{
				hdd_unit = 930
			}
			
			// 折算码率
			var paramx = 0
			if (param.bitrate_or_res == 'bitrate')	// 通过码率计算
			{
				if (param.bitrate == '0')	// 码率=512Kbps
				{
					paramx = 0.5
				}
				else	// 码率=1/2/3/4/5/6Mbps
				{
					paramx = parseInt(param.bitrate)
				}
			}
			else	// 通过分辨率计算
			{
				if (param.encode_type == 0) {
					paramx = this.data.Bitrate_H264[param.res] / 1024
				} else if (param.encode_type == 1) {
					paramx = this.data.Bitrate_H265[param.res] / 1024
				} else if (param.encode_type == 2) {
					paramx = this.data.Bitrate_SH264[param.res] / 1024
				}
			}

			// 1T硬盘按930GB折算
			tmp = this.data.hdd_size *hdd_unit*1024*8 / parseInt(param.num_ipc) / paramx
			
			if (tmp<60)
			{
				tmpstr = tmp.toString() + " 秒"
			}
			else if (tmp<3600)
			{
				var m = parseInt(tmp/60)
				var s = parseInt(tmp%60)
				tmpstr = m.toString()+" 分"+s.toString()+" 秒"
			}
			else if (tmp<86400)
			{
				var h = parseInt(tmp/3600)
				var m = parseInt((tmp-h*3600)/60)
				var s = parseInt((tmp-h*3600)%60)
				tmpstr = h.toString()+" 小时"+m.toString()+" 分"+s.toString()+" 秒"
			}
			else
			{
				var d = parseInt(tmp/86400)
				var h = parseInt((tmp-d*86400)/3600)
				var m = parseInt((tmp-d*86400-h*3600)/60)
				var s = parseInt((tmp-d*86400-h*3600)%60)
				tmpstr = d.toString()+" 天"+h.toString()+" 小时"+m.toString()+" 分"+s.toString()+" 秒"
			}
			this.setData({
				result: "计算录像时间约为：" + tmpstr,
				result_noshow: false
			})
		}
		else	// 计算磁盘空间
		{
			var time_unit = 7
			if (param.time_unit)
			{
				time_unit = 1
			}

			// 折算码率
			var paramx = 0
			if (param.bitrate_or_res == 'bitrate')	// 通过码率计算
			{
				if (param.bitrate == '0')	// 码率=512Kbps
				{
					paramx = 0.5
				}
				else	// 码率=1/2/3/4/5/6Mbps
				{
					paramx = parseInt(param.bitrate)
				}
			}
			else// 通过分辨率计算
			{
				if (param.encode_type == 0) {
					paramx = this.data.Bitrate_H264[param.res] / 1024
				} else if (param.encode_type == 1) {
					paramx = this.data.Bitrate_H265[param.res] / 1024
				} else if (param.encode_type == 2) {
					paramx = this.data.Bitrate_SH264[param.res] / 1024
				}
			}

			tmp = parseInt(param.num_ipc) * paramx*time_unit / 8 * 3600 * 24 * parseInt(this.data.storage_time) / 1024

			this.setData({
				result: "计算录像大小约为：" + tmp.toString() + " GB",
				result_noshow: false
			})
		}
	},
	formReset: function(e){
		console.log('form发生了reset事件，携带数据为：', e.detail.value)
		this.setData({
			result_noshow: true,
			result: '',

			time_unit: '天',
			hdd_unit: 'G',
			bitrate_or_res: 'bitrate',
			index_bitrate: 2,
			index_enc: 0,
			index_res: 4,
			storage_time: '',
			hdd_size: '',
		})
	}
})

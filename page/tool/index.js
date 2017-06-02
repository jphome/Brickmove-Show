Page({
	data: {
		shareData: {
			title: '扶我起来，搬砖去',
			path: '/page/tool/index'
		},
		tools: [
			{
				title: 'focal_length', 
				remark: '焦距', 
				url: '/page/tool/focal_length/index', 
				icon: '../../assets/images/focal_length.png', 
			},
			{
				title: 'storage_cal', 
				remark: '录像计算', 
				url: '/page/tool/storage_cal/index', 
				icon: '../../assets/images/storage_cal.png', 
			},
			{
				title: 'field_angle', 
				remark: '视场角', 
				url: '/page/tool/field_angle/index', 
				icon: '../../assets/images/field_angle.png', 
			},
			{
				title: 'ups_cal', 
				remark: 'UPS计算', 
				url: '/page/tool/ups_cal/index', 
				icon: '../../assets/images/ups_cal.png', 
			},
			{
				title: 'repair_service',
				remark: '尺子',
				url: '/page/tool/ruler/index',
				icon: '../../assets/images/ruler.png',
			},
			{
				title: 'repair_service', 
				remark: '售后维护', 
				url: '/page/tool/repair_service/index', 
				icon: '../../assets/images/repair_service.png', 
			},
			{
				title: 'Brickmove_Tools', 
				remark: '搬砖工具.exe', 
				url: '/page/tool/Brickmove_Tools/index', 
				icon: '../../image/hammer.png', 
			},
		],
	},
	onShareAppMessage: function () {
		return this.data.shareData
	}
})
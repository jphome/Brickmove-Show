// page/tool/focal_length/index.js

import { $wuxXnumber } from '../../../components/wux'

Page({
  data:{
    tabs: ['计算焦距', '计算物体距离'],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 45,
    result: '',
    result_show: true,

    length_unit: '宽',
  },
  onLoad:function(options){
    $wuxXnumber.init('distance', {
     disabled: !1, 
      className: 'custom-xnumber', 
    }),
    $wuxXnumber.init('size', {
      disabled: !1, 
      className: 'custom-xnumber', 
    }),
    $wuxXnumber.init('focal', {
      disabled: !1, 
      className: 'custom-xnumber', 
    })
  },
  switchChange:function(){
    var val = this.data.length_unit
    this.setData({
      length_unit: val=='宽'?'高':'宽'
    })
  },
  formSubmit:function(e){
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
    this.setData({
      result: output,
      result_show: false
    })
  },
  formReset:function(e){
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    this.setData({
      result_show: true
    })

    
  },
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  }
})
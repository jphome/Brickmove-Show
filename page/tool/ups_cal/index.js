import { $wuxDialog } from '../../../components/wux'

Page({
  data:{
    hiddenModal: true,
    power_list: [],
    // ups_cfglist: [1,2,3,6,10,15,20,30,40,60,80],
    ups_cfglist: ['640','1280','1920','3840','6400','9600','12800','19200','25600','38400'],
    img_url: '',
    ups_power: '6000VA/5400W',
    ups_capa: '1KVA',
    ups_capalist: ['1KVA','2KVA','3KVA','6KVA','10KVA','15KVA','20KVA','30KVA','40KVA','60KVA','80KVA'],
    team_3: [72,114,195,300,390,600,900],
    team_6: [144,228,390,600,780,1200,1800],
    team_8: [192,304,520,800,1040,1600,2400],
    team_16: [384,608,1040,1600,2080,3200,4800],
    team_32: [768,1216,2080,3200,2160,6400,9600],
    team_index: 0,
    ups_team_num: 0,
    ups_bnum_perteam: 0,
    ups_batt_type: 24,

    ups_time: 4,
    ups_ratio: 60,
    time: '02小时 00分钟',
    time_s: 2,
    ups_s: {
      'C1KS': ['1000VA/800W', 800, '+3组26AH 36V电池'],
      'C1KRS': ['1000VA/800W', 800, '+3组26AH 36V电池'],
    }
  },

  onLoad:function(options) {
    var ups_cfglist = this.data.ups_cfglist
    var power_list = []
    var i = 0
    var j = 0
    for (i in ups_cfglist) {
      if (i == 0) {
        power_list.push('<'+ups_cfglist[0]+'w')
      } else if (i > 9) {
        power_list.push('>'+ups_cfglist[9]+'w')
      } else {
        j = i - 1
        power_list.push(ups_cfglist[j]+'-'+ups_cfglist[i]+'w')
      }
      
    }
    this.setData({
      power_list: power_list
    })
  },

  listenerConfirm:function() {
    this.setData({
      hiddenModal: true
    })
  },

  bindTimeChange:function(e) {
    var tmp = e.detail.value
    var s = tmp.split(':')
    var time_s = parseInt(s[0]) + parseInt(s[1])/60
    tmp = tmp.replace(':', '小时 ')
    tmp += '分钟'
    this.setData({
      time: tmp,
      time_s: time_s
    })
  },

  choose_power:function(e) {
    var index = e.target.dataset.index
    var type = e.target.dataset.type
    var ups_capa = this.data.ups_capalist[index]
    var ups_bnum_perteam = 0
    
    var team = []
    if (index == 0) {
      team = this.data.team_3
      ups_bnum_perteam = 3
    } else if (index == 1) {
      team = this.data.team_6
      ups_bnum_perteam = 6
    } else if (index == 2) {
      team = this.data.team_8
      ups_bnum_perteam = 8
    } else if (index>=3 && index<=6) {
      team = this.data.team_16
      ups_bnum_perteam = 16
    } else if (index>=7 && index<=10) {
      team = this.data.team_32
      ups_bnum_perteam = 32
    }
    console.log(team)

    this.setData({
      ups_capa: ups_capa,
      ups_bnum_perteam: ups_bnum_perteam
    })

    // console.log(type)
    if (type == 1) {  // 立式
      this.setData({
        img_url : "../resources/ups-11.jpg"
      })
    } else {  // 机架式
      this.setData({
        img_url : "../resources/ups-22.jpg"
      })
    }

    var i = 0
    var time = this.data.time_s  // 后备时间(s)
    // console.log(time)
    var watt = [] // 细分功率范围
    for (i in team) {
      watt.push(team[i]*12/time)
    }
    // console.log(watt)

    const modal_show = (content) => {
      var tmp = content
      var ups_ratio = 60
      var ups_team_num = 0
      var ups_batt_type = 24

      if (tmp < 4) {
        ups_team_num = 1
      } else if (tmp < 6) {
        ups_team_num = 2
      } else {
        ups_team_num = 9
      }

      if (tmp == 0) {
        ups_batt_type = 24
      } else if (tmp == 1) {
        ups_batt_type = 38
      } else if (tmp==2 || tmp==4) {
        ups_batt_type = 65
      } else {
        ups_batt_type = 100
      }


      this.setData({
        hiddenModal: false,
        team_index: tmp,
        ups_team_num: ups_team_num,
        ups_batt_type: ups_batt_type,
      })
    }

    var j =0
    var buttons = []
    console.log(watt)
    for (i in watt) {
      if (i == 0) {
        if ((index==0) || (watt[0] > this.data.ups_cfglist[index-1])) {
          const ind = i
          buttons.push({
            text: '小于'+watt[i]+'瓦', 
            onTap(e) {
              modal_show(ind)
            },
          })
        }
      } else if (i == 7) {

      } else {
        j = i - 1
        if ((watt[j] < this.data.ups_cfglist[index]) || (watt[j+1] > this.data.ups_cfglist[index-1])) {
          console.log(i)
          const ind = i
          const power_use = watt[i]
          const power_design = this.data.ups_cfglist[index-1]
          buttons.push({
            text: watt[i-1]+'-'+watt[i]+'瓦', 
            onTap(e) {
              modal_show(ind)
            },
          })
        } else {
          buttons.push({})
        }
      }
    }

    $wuxDialog.open({
      title: '选择系统需要的功率',
      content: '谢谢',
      verticalButtons: !0, 
      buttons: buttons
    })
  }
})
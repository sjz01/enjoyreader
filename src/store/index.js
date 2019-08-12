import Vue from 'vue'
import Vuex from 'vuex'
import wanglei from './wanglei'
import qianyao from './qianyao'
import bole from './bole'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    myTitle: "静享阅读",
    name:"bole",
    myData:[],
    myData2:[],
    myData3:[],
    content:null,
    content2:null,
    content3:null,
    id:null,
    title:[],
    img:[],
    MYKEY : "UO7HqNE0Soz+hpOL8Yo2RGnCPQTgsJeZ/px06Q",
    id:64
  },
  mutations: {
    changeMytitle:(state,payload)=>{
      state.myTitle = payload.title;
    }
  },
  actions: {

  },
  modules:{
    wanglei,qianyao,bole
  }
})

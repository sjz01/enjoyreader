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
    content:null,
    myData2:[],
    myData3:[],
    content2:null,
    content3:null,
    id:null

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

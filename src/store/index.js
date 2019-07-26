import Vue from 'vue'
import Vuex from 'vuex'
import wanglei from './wanglei'
import qianyao from './qianyao'
import bole from './bole'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    myTitle: "书城"
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

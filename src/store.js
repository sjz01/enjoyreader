import Vue from 'vue'
import Vuex from 'vuex'

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

  }
})

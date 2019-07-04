import Vue from 'vue';
import Vuex from 'vuex';
import {getMenus} from '../Ajax/api'

Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    test:'test'
  },
  getters:{

  },
  mutations:{
    Test(state,data){
      state.test = '测试'
    }
  },
  actions:{
    getMenus({commit},test){
      return Promist( (resolve,reject) => {
        Ajax().then( ({data}) => {
          commit('Test',data)
          resolve(data);
        })
      })
    }
  }
});
export default store;
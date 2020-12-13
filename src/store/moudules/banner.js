import {bannerlist} from '../../util/req'
const state = {
  arr:[],
};
const mutations = {
  bannerlistM(state,res){
    state.arr = res
  },
};
const actions = {
  // 获取菜单列表
  bannerlistA(context) {
    bannerlist().then(res => {
      context.commit("bannerlistM", res.data.list);
    }); 
  },

};
const getters = {
  bannerlistG(state){
    return state.arr
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
  namespaced: true
};

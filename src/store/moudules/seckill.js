import {secklist} from '../../util/req'
const state = {
  arr:[],
};
const mutations = {
  secklistM(state,res){
    state.arr = res
  },
};
const actions = {
  // 获取菜单列表
  secklistA(context){
    secklist().then((res)=>{
      context.commit('secklistM',res.data.list)
    })
  }
};
const getters = {
  secklistG(state){
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

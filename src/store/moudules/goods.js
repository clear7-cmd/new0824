import {goodscount,goodslist} from '../../util/req'
const state = {
  total: 0,
  size:2,
  arr:[],
  page:1,
};
const mutations = {
  goodscountM(state, res) {
    state.total = res;
  },
  setSize(state,res){
    state.size = res
  },
  goodslistM(state,res){
    state.arr = res
  },
  page1(state,res){
    state.page = res
  }
};
const actions = {
  // 获取菜单列表
  goodscountA(context) {
    goodscount().then(res => {
      context.commit("goodscountM", res.data.list[0].total);
    }); 
  },
  goodslistA(context){
    goodslist({size:context.state.size,page:context.state.page}).then(res => {
      context.commit("goodslistM", res.data.list);
    }); 
  },
  goodss(context,size){
    goodslist({size:size,page:context.state.page}).then(res => {
      context.commit("goodslistM", res.data.list);
    }); 
  },
  goods(context,e){
    context.commit('page1',e)
    context.dispatch('goodslistA')
  }

};
const getters = {
  count(state) {
    return state.total;
  },
  goodslistG(state){
    return state.arr
  },
  pageG(state){
    return state.page
  },
  sizeG(state){
    return state.size
  }
};

export default {
  state,
  mutations,
  actions,
  getters,
  namespaced: true
};

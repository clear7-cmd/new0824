import {memberlist} from '../../util/req'
const state = {
  arr: [],
};
const mutations = {
  memberlist(state, res) {
    state.arr = res;
  },

};
const actions = {
  // 获取菜单列表
  memberlistA(context) {
    memberlist({istree:true}).then(res => {
      context.commit("memberlist", res.data.list);
    });
  },

};
const getters = {
  memberlistG(state) {
    return state.arr;
  },

};

export default {
  state,
  mutations,
  actions,
  getters,
  namespaced: true
};

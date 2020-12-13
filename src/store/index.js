import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import menu from './moudules/menu.js'
import role from './moudules/role.js'
import manger from './moudules/manger.js'
import spec from './moudules/spec.js'
import classify from './moudules/classify.js'
import goods from './moudules/goods.js'
import vip from './moudules/vip.js'
import banner from './moudules/banner.js'
import seckill from './moudules/seckill.js'
export default new Vuex.Store({
        modules:{
            menu,
            role,
            manger,
            classify,
            spec,
            goods,
            vip,
            banner,
            seckill
        }
})
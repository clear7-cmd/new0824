import axjos from 'axios'
import qs from 'qs'
axjos.interceptors.response.use(res=>{
    console.log('=================='+res.config.url+'=====================');
    console.log(res);
    return res
})
const api = '/api'
export const addition = (data)=>{
   return axjos({
       url:api+'/api/menuadd',
       method:'post',
       data:data
   })
}
export const rend = (data)=>{
    return axjos({
        url:api+'/api/menulist',
        method:"get",
        params:data
    })
}
export const info = (data)=>{
    return axjos({
        url:api+'/api/menuinfo',
        method:"get",
        params:data
    })
}
export const dit = (data)=>{
    return axjos({
        url:api+'/api/menuedit',
        method:"post",
        data:data
    })
}
export const menudelete = (data)=>{
    return axjos({
        url:api+'/api/menudelete',
        method:"post",
        data:data
    })
}
export const roleadd = (data)=>{
    return axjos({
        url:api+'/api/roleadd',
        method:"post",
        data:data
    })
}
export const rolelist = ()=>{
    return axjos({
        url:api+'/api/rolelist',
        method:"get",
    })
}
export const roleinfo = (id)=>{
    return axjos({
        url:api+'/api/roleinfo',
        method:"get",
        params:id
    })
}
export const roledelete = (id)=>{
    return axjos({
        url:api+'/api/roledelete',
        method:"post",
        data:id
    })
}
export const roleedit = (data)=>{
    return axjos({
        url:api+'/api/roleedit',
        method:"post",
        data:data
    })
}
export const useradd = (data)=>{
    return axjos({
        url:api+'/api/useradd',
        method:"post",
        data:data
    })
}
export const usercount = ()=>{
    return axjos({
        url:api+'/api/usercount',
        method:"GET",
    })
}
export const userlist = (data)=>{
    return axjos({
        url:api+'/api/userlist',
        method:"GET",
        params:data
    })
}
export const userinfo = (uid)=>{
    return axjos({
        url:api+'/api/userinfo',
        method:"GET",
        params:uid
    })
}
export const useredit = (data)=>{
    return axjos({
        url:api+'/api/useredit',
        method:"POST",
        data:data
    })
}
export const userdelete = (data)=>{
    return axjos({
        url:api+'/api/userdelete',
        method:"POST",
        data:data
    })
}
// 添加
export const cateadd = (data)=>{
    var form  = new FormData()
    for(var i in data){
        form.append(i,data[i])
    }
    return axjos({
        url:api+'/api/cateadd',
        method:"POST",
        data:form
    })
}
// 获取列表
export const catelist = (data)=>{
    return axjos({
        url:api+'/api/catelist',
        method:"GET",
        params:data
    })
}
// 获取一条数据
export const cateinfo = (data)=>{
    return axjos({
        url:api+'/api/cateinfo',
        method:"GET",
        params:data
    })
}
// 修改
export const cateedit = (data)=>{
    var form = new FormData()
    for(var i in data){
        form.append(i,data[i])
    }
    return axjos({
        url:api+'/api/cateedit',
        method:"post",
        data:form
    })
}
// 删除
export const catedelete = (data)=>{
    return axjos({
        url:api+'/api/catedelete',
        method:"post",
        data:data
    })
}
//添加
export const specsadd = (data)=>{
    return axjos({
        url:api+'/api/specsadd',
        method:"post",
        data:data
    })
}
//获取总数
export const specscount = ()=>{
    return axjos({
        url:api+'/api/specscount',
        method:"get",
    })
}
// 分页页面
export const specslist = (data)=>{
    return axjos({
        url:api+'/api/specslist',
        method:"get",
        params:data
    })
}
//添加一条数据
export const specsinfo = (id)=>{
    return axjos({
        url:api+'/api/specsinfo',
        method:"get",
        params:id
    })
}
//编辑
export const specsedit = (data)=>{
    return axjos({
        url:api+'/api/specsedit',
        method:"post",
        data:data
    })
}
//删除
export const specsdelete = (data)=>{
    return axjos({
        url:api+'/api/specsdelete',
        method:"post",
        data:data
    })
}
//管理员登录
export const userlogin = (data)=>{
    return axjos({
        url:api+'/api/userlogin',
        method:"post",
        data:data
    })
}
//商品管理添加
export const goodsadd = (data)=>{
    var form = new FormData()
    for(var i in data){
        form.append(i,data[i])
    }
    return axjos({
        url:api+'/api/goodsadd',
        method:"post",
        data:form
    })
}
//获取总数
export const goodscount = ()=>{
    return axjos({
        url:api+'/api/goodscount',
        method:"get",
    })
}
//获取分页
export const goodslist = (data)=>{
    return axjos({
        url:api+'/api/goodslist',
        method:"get",
        params:data
    })
}
//获取一条数据
export const goodsinfo = (data)=>{
    return axjos({
        url:api+'/api/goodsinfo',
        method:"get",
        params:data
    })
}
//修改
export const goodsedit = (data)=>{
    var form = new FormData()
    for(var i in data){
        form.append(i,data[i])
    }
    return axjos({
        url:api+'/api/goodsedit',
        method:"post",
        data:form
    })
}
//删除
export const goodsdelete = (data)=>{
    return axjos({
        url:api+'/api/goodsdelete',
        method:"POST",
        data:data
    })
}
//vip会员渲染页面
export const memberlist = ()=>{
    return axjos({
        url:api+'/api/memberlist',
        method:"get",
    })
}
//vip会员获取一条数据
export const memberinfo = (data)=>{
    return axjos({
        url:api+'/api/memberinfo',
        method:"GET",
        params:data
    })
}
//vip编辑
export const memberedit = (data)=>{
    return axjos({
        url:api+'/api/memberedit',
        method:"post",
        data:data
    })
}
//轮播图添加
export const banneradd = (data)=>{
    var form = new FormData()
    for(var i in data){
        form.append(i,data[i])
    }
    return axjos({
        url:api+'/api/banneradd',
        method:"post",
        data:form
    })
}
//轮播图渲染
export const bannerlist = ()=>{
    return axjos({
        url:api+'/api/bannerlist',
        method:"GET",
    })
}
//获取一条数据
export const bannerinfo = (data)=>{
    return axjos({
        url:api+'/api/bannerinfo',
        method:"GET",
        params:data
    })
}
//修改数据
export const banneredit = (data)=>{
    var form = new FormData()
    for(var i in data){
        form.append(i,data[i])
    }
    return axjos({
        url:api+'/api/banneredit',
        method:"post",
        data:form
    })
}
//删除
export const bannerdelete = (data)=>{
    return axjos({
        url:api+'/api/bannerdelete',
        method:"post",
        data:data
    })
}
//限时秒杀添加
export const seckadd = (data)=>{
    return axjos({
        url:api+'/api/seckadd',
        method:"post",
        data:data
    })
}
//渲染列表
export const secklist = ()=>{
    return axjos({
        url:api+'/api/secklist',
        method:"get",
    })
}
//获取一条数据
export const seckinfo = (data)=>{
    return axjos({
        url:api+'/api/seckinfo',
        method:"get",
        params:data
    })
}
//提交修改的数据
export const seckedit = (data)=>{
    return axjos({
        url:api+'/api/seckedit',
        method:"POST",
        data:data
    })
}
//删除数据
export const seckdelete = (data)=>{
    return axjos({
        url:api+'/api/seckdelete',
        method:"POST",
        data:data
    })
}
<template>
  <div>
    <el-dialog :title="'管理员' + show.tit" :visible.sync="show.isshow">
      <el-form :model="form">
        <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input v-model="form.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动期限" :label-width="formLabelWidth">
          <div class="block">
            <el-date-picker
              v-model="value1"
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            >
            </el-date-picker>
          </div>
        </el-form-item>
        <el-form-item label="一级分类" :label-width="formLabelWidth">
          <el-select
            v-model="form.first_cateid"
            placeholder="-请选择--"
            @change="change"
          >
            <el-option
              v-for="item in catelistG"
              :key="item.id"
              :label="item.catename"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="二级分类" :label-width="formLabelWidth">
          <el-select
            v-model="form.second_cateid"
            placeholder="-请选择--"
            @change="change1"
          >
            <el-option
              v-for="item in sid"
              :key="item.id"
              :label="item.catename"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品" :label-width="formLabelWidth">
          <el-select v-model="form.goodsid" placeholder="-请选择--">
            <el-option
              v-for="item in shop"
              :key="item.id"
              :label="item.goodsname"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="状态" :label-width="formLabelWidth">
          <el-switch
            v-model="form.status"
            active-color="#13ce66"
            inactive-color="#ff4949"
            :active-value="1"
            :inactive-value="2"
          >
          </el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="show.isshow = false">取 消</el-button>
        <el-button @click="add" v-if="show.tit != '编辑'">确定</el-button>
        <el-button @click="edit" v-else>修改</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { seckadd, seckinfo,seckedit } from "../../../util/req";
import { mapActions, mapGetters } from "vuex";
export default {
  props: ["show"],
  components: {},
  data() {
    return {
      sid: [],
      shop: [],
      form: {
        title: "",
        first_cateid: 0,
        second_cateid: 0,
        goodsid: 0,
        begintime: "",
        endtime: "",
        status: 0
      },
      value1: "",
      wrap: {},
      formLabelWidth: "120px"
    };
  },
  computed: {
    ...mapGetters({
      catelistG: "classify/catelistG",
      goodslistG: "goods/goodslistG"
    })
  },
  methods: {
    ...mapActions({
      catelistA: "classify/catelistA",
      goodss: "goods/goodss",
      secklistA:'seckill/secklistA'
    }),
    change() {
      console.log(this.form.first_cateid);
      this.sid = this.catelistG.find(item => {
        return item.id == this.form.first_cateid;
      }).children;
    },
    change1() {
      console.log(this.form.second_cateid);
      this.goodslistG.forEach(item => {
        if (item.second_cateid == this.form.second_cateid) {
          this.shop.push(item);
        }
      });
      console.log(this.shop);
    },
    //添加数据
    add() {
      //因为嫌转换时间戳太麻烦，就把后台的数据库改了
      //如果添加运行不了请把后台数据库的长度改了
      //老师辛苦了
      this.form.begintime = this.value1[0];
      this.form.endtime = this.value1[1];
      console.log(this.form);
      seckadd(this.form).then(res => {
        this.secklistA()
        this.show.isshow = false;
      });
    },
    look(id) {
      this.show.tit = "编辑";
      this.show.isshow = true;

      console.log(id);
      seckinfo({ id: id }).then(res => {
        this.form = res.data.list;
        this.value1 = [this.form.begintime, this.form.endtime];
        this.form.id = id;
      });
    },
    //修改
    edit() {
      this.form.begintime = this.value1[0];
      this.form.endtime = this.value1[1];
      seckedit(this.form).then(res => {
        this.show.isshow = false;
        this.secklistA()
      });
    },
    empty() {
      this.form = {
        title: "",
        first_cateid: null,
        second_cateid: null,
        goodsid: null,
        begintime: "",
        endtime: "",
        status: 0
      };
    }
  },
  mounted() {
    this.catelistA();
    this.goodss("");
  }
};
</script>
<style></style>

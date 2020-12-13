<template>
  <div>
    <el-dialog :title="'管理员' + show.tit" :visible.sync="show.isshow">
      <el-form :model="form">
        <el-form-item label="手机号" :label-width="formLabelWidth">
          <el-input v-model="form.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="昵称" :label-width="formLabelWidth">
          <el-input v-model="form.nickname" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input
            placeholder="请输入密码"
            v-model="form.password"
            show-password
          ></el-input>
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
        <el-button @click="edit" >修改</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { memberinfo,memberedit } from "../../../util/req";
import { mapActions, mapGetters } from "vuex";
export default {
  props: ["show"],
  components: {},
  data() {
    return {
      form: {
        nickname: "",
        username: "",
        password: "",
        status: 0
      },
      wrap: {},
      formLabelWidth: "120px"
    };
  },
  computed: {
    ...mapGetters({
      memberlistG: "vip/memberlistG"
    })
  },
  methods: {
    ...mapActions({
      memberlistA: "vip/memberlistA"
    }),
    look(id) {
      this.show.tit = "编辑";
      this.show.isshow = true;
      memberinfo({ uid: id }).then(res => {
        this.form = res.data.list;
        this.form.uid = id;
      });
    },
    edit() {
      memberedit(this.form).then(res => {
        this.show.isshow = false
        this.memberlistA()

      });
    },
    empty() {
      this.form = {
        nickname: "",
        phone: "",
        password: "",
        status: 0
      };
    }
  },
  mounted() {
  }
};
</script>
<style></style>

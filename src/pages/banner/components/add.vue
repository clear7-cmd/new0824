<template>
  <div>
    <el-dialog :title="'管理员' + show.tit" :visible.sync="show.isshow">
      <el-form :model="form">
        <el-form-item label="标题" :label-width="formLabelWidth">
          <el-input v-model="form.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="图片" :label-width="formLabelWidth">
          <el-upload
            class="avatar-uploader"
            action="#"
            :show-file-list="false"
            :on-change="handleAvatarSuccess"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
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
import { banneradd,bannerinfo,banneredit } from "../../../util/req";
import { mapActions, mapGetters } from "vuex";
export default {
  props: ["show"],
  components: {},
  data() {
    return {
      imageUrl:"",
      form: {
        title: "",
        img: "",
        status: 0
      },
      formLabelWidth: "120px"
    };
  },
  computed: {
    ...mapGetters({

    })
  },
  methods: {
    ...mapActions({
       bannerlistA: "banner/bannerlistA"
    }),
    handleAvatarSuccess(file){
      this.imageUrl = URL.createObjectURL(file.raw)
      this.form.img = file.raw
    },
    add() {
      banneradd(this.form).then(res => {
        this.show.isshow = false;
        this.bannerlistA()
      });
    },
    look(id) {
      this.show.tit = "编辑";
      this.show.isshow = true;
      bannerinfo({ id: id }).then(res => {
        this.form = res.data.list;
        this.imageUrl = this.$event+this.form.img
        this.form.id = id;
      });
    },
    edit() {
      banneredit(this.form).then(res => {
        this.show.isshow = false
        this.bannerlistA()

      });
    },
    empty() {
      this.form = {
        title: "",
        img: "",
        status: 0
      };
      this.imageUrl = ""
    }
  },
  mounted() {
    
  }
};
</script>
<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

<template>
  <div>
    <el-dialog
      :title="'管理员' + show.tit"
      :visible.sync="show.isshow"
      @opened="changeEditor"
    >
      <el-form :model="form">
        <el-form-item label="一级分类" :label-width="formLabelWidth">
          <el-select
            v-model="form.first_cateid"
            placeholder="--请选择--"
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
          <el-select v-model="form.second_cateid" placeholder="-请选择--">
            <el-option
              v-for="item in secomd.children"
              :key="item.id"
              :label="item.catename"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品分类" :label-width="formLabelWidth">
          <el-input v-model="form.goodsname" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="价格" :label-width="formLabelWidth">
          <el-input v-model="form.price" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="市场价格" :label-width="formLabelWidth">
          <el-input v-model="form.market_price" autocomplete="off"></el-input>
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
        <el-form-item label="商品规格" :label-width="formLabelWidth">
          <el-select
            v-model="form.specsid"
            placeholder="-请选择--"
            @change="changesid"
          >
            <el-option
              v-for="item in specslistG"
              :key="item.id"
              :label="item.specsname"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="规格属性" :label-width="formLabelWidth">
          <el-select v-model="form.specsattr" placeholder="-请选择--" multiple>
            <el-option
              v-for="item in sid.attrs"
              :key="item"
              :label="item"
              :value="item"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="是否新品" :label-width="formLabelWidth">
          <template>
            <el-radio v-model="form.isnew" :label="1">是</el-radio>
            <el-radio v-model="form.isnew" :label="2">否</el-radio>
          </template>
        </el-form-item>
        <el-form-item label="是否热卖" :label-width="formLabelWidth">
          <template>
            <el-radio v-model="form.ishot" :label="1">是</el-radio>
            <el-radio v-model="form.ishot" :label="2">否</el-radio>
          </template>
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
        <el-form-item label="商品描述" :label-width="formLabelWidth">
          <div id="div1" v-if="show.isshow"></div>
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
import E from "wangeditor";
import { goodsadd, goodsinfo, goodsedit } from "../../../util/req";
import { mapActions, mapGetters } from "vuex";
export default {
  props: ["show"],
  components: {},
  data() {
    return {
      secomd: [],
      sid: [],
      imageUrl: "",
      form: {
        first_cateid: 0,
        second_cateid: 0,
        goodsname: "",
        price: "",
        market_price: "",
        img: "",
        description: "",
        specsid: "",
        specsattr: "",
        isnew: 0,
        ishot: 0,
        status: 0
      },
      wrap: {},
      formLabelWidth: "120px"
    };
  },
  computed: {
    ...mapGetters({
      listG: "role/listG",
      catelistG: "classify/catelistG",
      specslistG: "spec/specslistG",
      count: "goods/count",
      goodslistG: "goods/goodslistG"
    })
  },
  methods: {
    handleAvatarSuccess(res) {
      this.imageUrl = URL.createObjectURL(res.raw);
      this.form.img = res.raw;
    },
    ...mapActions({
      // listA: "role/listA",
      userA: "manger/userA",
      countA: "manger/countA",
      catelistA: "classify/catelistA",
      specslistA: "spec/specslistA",
      goodscountA: "goods/goodscountA",
      goodslistA: "goods/goodslistA",
    }),
    change() {
      this.secomd = this.catelistG.find(item => {
        return item.id == this.form.first_cateid;
      });
    },
    changesid() {
      this.form.specsattr = [];
      this.sid = this.specslistG.find(item => {
        return item.id == this.form.specsid;
      });
    },
    // 添加
    add() {
      this.form.description = this.editor.txt.html();
      this.form.specsattr = JSON.stringify(this.form.specsattr);
      goodsadd(this.form).then(res => {
        this.show.isshow = false;
        this.goodscountA()
        this.goodslistA()
      });
    },
    look(id) {
      this.show.tit = "编辑";
      this.show.isshow = true;
      goodsinfo({ id: id }).then(res => {
        this.form = res.data.list;
        this.form.specsattr = JSON.parse(this.form.specsattr);
        this.imageUrl = this.$event + this.form.img;
        this.form.id = id;
      });
    },
    edit() {
      // this.form.description =  this.editor.txt.html()
      this.form.specsattr = JSON.stringify(this.form.specsattr);
      goodsedit(this.form).then(res => {
        this.show.isshow = false;
        this.goodslistA()
      });
    },
    empty() {
      this.form = {
        first_cateid: null,
        second_cateid: null,
        goodsname: "",
        price: "",
        market_price: "",
        img: "",
        description: "",
        specsid: "",
        specsattr: "",
        isnew: 0,
        ishot: 0,
        status: 0
      };
      this.imageUrl = "";
    },
    changeEditor() {
      this.editor = new E("#div1");
      this.editor.create();
      this.editor.txt.html(this.form.description);
    }
  },
  mounted() {
    this.catelistA();
    this.specslistA("");
  }
};
</script>
<style scope>
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

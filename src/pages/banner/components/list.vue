<template>
  <div>
    <el-table
      :data="bannerlistG"
      style="width: 100%;margin-bottom: 20px;"
      row-key="id"
      border
      default-expand-all
      class="tab"
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
      <el-table-column prop="id" label="编号" width="180"> </el-table-column>
      <el-table-column prop="title" label="轮播图标签" width="180">
      </el-table-column>
      <el-table-column label="图片">
        <template slot-scope="scope">
          <img :src="$event+scope.row.img" alt="" />
        </template>
      </el-table-column>
      <el-table-column label="状态">
        <template slot-scope="scope">
          <el-button type="primary" v-if="scope.row.status == 1"
            >启用</el-button
          >
          <el-button type="danger" v-else>禁用</el-button>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary" @click="redact(scope.row.id)"
            >编辑</el-button
          >
          <el-button type="danger" @click="dele(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { bannerlist,bannerdelete } from "../../../util/req";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      bannerlistG: "banner/bannerlistG"
    })
  },
  methods: {
    ...mapActions({
      bannerlistA: "banner/bannerlistA"
    }),
    redact(id) {
      this.$emit("emit", id);
    },
    dele(id) {
      bannerdelete({ id: id }).then(res => {
        this.bannerlistA()
      });
    }
  },
  mounted() {
    this.bannerlistA();
  }
};
</script>
<style scoped>
img{
  width: 100px;

}
</style>

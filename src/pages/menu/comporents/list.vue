<template>
  <div>
    <el-table
      :data="rendG"
      style="width: 100%;margin-bottom: 20px;"
      row-key="id"
      border
      default-expand-all
      class="tab"
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
      <el-table-column prop="id" label="菜单编号" width="180">
      </el-table-column>
      <el-table-column prop="title" label="菜单名称" width="180">
      </el-table-column>
      <el-table-column prop="icon" label="菜单图标"> </el-table-column>
      <el-table-column prop="url" label="菜单地址"> </el-table-column>
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
          <el-button type="danger"  @click="dele(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { menudelete } from "../../../util/req";
export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions({
      rendA: "menu/rendA"
    }),
    fu(scope) {
      console.log(scope.row);
    },
    redact(id) {
      this.$emit("emit", id);
    },
    dele(id) {
      console.log(id);
      menudelete({id:id}).then((res)=>{
           this.rendA()
      })
    }
  },
  computed: {
    ...mapGetters({
      rendG: "menu/rendG"
    })
  },

  mounted() {
    this.rendA();
  }
};
</script>
<style>
.tab {
  margin-top: 20px;
}
</style>

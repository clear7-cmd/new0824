<template>
  <div>
    <el-table
      :data="secklistG"
      style="width: 100%;margin-bottom: 20px;"
      row-key="id"
      border
      default-expand-all
      class="tab"
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
      <el-table-column prop="title" label="活动名称" width="180">
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
import { seckdelete } from "../../../util/req";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      secklistG: "seckill/secklistG"
    })
  },
  methods: {
    ...mapActions({
      secklistA: "seckill/secklistA"
    }),
    redact(id) {
      this.$emit("emit", id);
    },
    dele(id) {
      seckdelete({ id: id }).then(res => {
        this.secklistA();
      });
    }
  },
  mounted() {
    this.secklistA();
  }
};
</script>
<style></style>

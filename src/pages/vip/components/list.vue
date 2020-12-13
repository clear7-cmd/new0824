<template>
  <div>
    <el-table
      :data="memberlistG"
      style="width: 100%;margin-bottom: 20px;"
      row-key="id"
      border
      default-expand-all
      class="tab"
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
      <el-table-column prop="id" label="用户编号" width="180">
      </el-table-column>
      <el-table-column prop="nickname" label="昵称" width="180">
      </el-table-column>
      <el-table-column prop="phone" label="手机号"> </el-table-column>
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
          <el-button type="primary" @click="redact(scope.row.uid)"
            >编辑</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { usercount, userdelete } from "../../../util/req";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {},
  data() {
    return {
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
    redact(id) {
      this.$emit("emit", id);
    },
  },
  mounted() {
    this.memberlistA();
  }
};
</script>
<style></style>

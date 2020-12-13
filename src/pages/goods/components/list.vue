<template>
  <div>
    <el-table
      :data="goodslistG"
      style="width: 100%;margin-bottom: 20px;"
      row-key="id"
      border
      default-expand-all
      class="tab"
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
      <el-table-column prop="id" label="商品编号" width="180">
      </el-table-column>
      <el-table-column prop="goodsname" label="商品名称" width="180">
      </el-table-column>
      <el-table-column prop="price" label="商品价格"> </el-table-column>
      <el-table-column prop="market_price" label="市场价格" width="180">
      </el-table-column>
      <el-table-column label="图片" width="180">
        <template slot-scope="scope">
          <img :src="$event+scope.row.img" alt="">
        </template>
      </el-table-column>
      <el-table-column label="是否新品">
        <template slot-scope="scope">
          <el-button type="primary" v-if="scope.row.isnew == 1">是</el-button>
          <el-button type="danger" v-else>否</el-button>
        </template>
      </el-table-column>
      <el-table-column label="是否热卖">
        <template slot-scope="scope">
          <el-button type="primary" v-if="scope.row.ishot == 1">是</el-button>
          <el-button type="danger" v-else>否</el-button>
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
      <el-table-column label="操作" width="180">
        <template slot-scope="scope">
          <el-button type="primary" @click="redact(scope.row.id)"
            >编辑</el-button
          >
          <el-button type="danger" @click="dele(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      :current-page="pageG"
      layout="prev, pager, next"
      :total="count"
      :page-size="sizeG"
      @current-change="fu"
    >
    </el-pagination>
  </div>
</template>
<script>
import { usercount, userdelete,goodsdelete } from "../../../util/req";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {},
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters({
      count: "goods/count",
      goodslistG: "goods/goodslistG",
      pageG:'goods/pageG',
      sizeG:'goods/sizeG'
    })
  },
  methods: {
    ...mapActions({
      goodscountA: "goods/goodscountA",
      goodslistA: "goods/goodslistA",
      goods: "goods/goods"
    }),
    fu(e) {
      this.goods(e)
    },
    redact(id) {
      this.$emit("emit", id);
    },
    dele(e) {
      console.log(e);
      goodsdelete({id:e}).then(res => {
        this.goods(1);
        this.goodscountA();
      });
    }
  },
  mounted() {
    this.goodscountA();
    this.goods(1);
  }
};
</script>
<style>
img{
  width: 50px;
  height: 50px;
}
</style>

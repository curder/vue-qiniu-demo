<template>
  <el-card class="box-card">
    <el-page-header title="" content="账号列表"></el-page-header>
    <el-table
      class="mt-6 w-full"
      :data="tableData"
      border>
      <el-table-column
        fixed
        prop="id"
        label="ID"
        width="50">
      </el-table-column>
      <el-table-column
        prop="email"
        label="账号邮箱"
        width="200">
      </el-table-column>
      <el-table-column
        prop="description"
        label="描述">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>
<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: mapState({
    tableData: (state) => state.accountModule.list,
  }),

  data() {
    return {};
  },

  mounted() {
    this.list();
  },

  methods: {
    ...mapActions('accountModule', { list: 'retrieveAccounts' }),
  },
};
</script>

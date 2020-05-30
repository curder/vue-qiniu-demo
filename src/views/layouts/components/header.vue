<template>
  <el-header height="" class="flex justify-end h-12 items-center bg-gray-100">
    <el-dropdown trigger="click">
      <span class="el-dropdown-link">欢迎，<strong>{{ userInfo.username }}</strong><i
        class="el-icon-arrow-down el-icon--right"></i></span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-header>
</template>
<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: mapState({
    userInfo: (state) => state.userModule.userInfo,
  }),

  methods: {
    ...mapActions('userModule', {
      userLogout: 'logout',
    }),

    logout() {
      this.userLogout().then(() => {
        // 跳转到登录页
        this.$router.push({ name: 'login' });
      });
    },
  },
};
</script>

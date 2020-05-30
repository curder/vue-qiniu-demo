<template>
  <div class="login-container">
    <el-col :span="5">
      <el-card class="box-card" shadow="hover">
        <div class="title-container">
          <h3 class="title">欢迎回来</h3>
        </div>
        <el-form ref="loginForm"
                 :model="loginForm"
                 class="login-form"
                 autocomplete="on"
                 @submit="handleLogin"
                 label-position="left">

          <el-form-item prop="username">
            <el-input
              ref="name"
              v-model="loginForm.name"
              placeholder="输入登录用户名或邮箱地址"
              type="text"
              tabindex="1"
              autocomplete="on"
            />
          </el-form-item>

          <el-form-item prop="password">
            <el-input
              ref="password"
              v-model="loginForm.password"
              placeholder="输入密码"
              tabindex="2"
              autocomplete="on"
            />
          </el-form-item>

          <el-button type="primary"
                     class="w-full mb-6"
                     @click.native.prevent="handleLogin">登录
          </el-button>

        </el-form>
      </el-card>
    </el-col>
  </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      loginForm: {
        name: 'curder',
        password: 'aaaaaa',
      },
    };
  },

  methods: {
    ...mapActions('userModule', { userLogin: 'login' }),

    handleLogin() {
      this.userLogin(this.loginForm)
        // eslint-disable-next-line no-unused-vars
        .then((data) => {
          // 跳转到首页
          this.$router.push({ name: 'dashboard' });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style lang="scss">
.login-container {
  @apply flex items-center justify-center min-h-screen;

  .title-container {
    @apply text-center text-2xl;
  }

  .login-form {
    @apply mt-4;
  }
}

</style>

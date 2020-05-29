<template>
  <el-container class="flex min-h-screen">
    <side-bar></side-bar>
    <el-container class="is-vertical">
      <page-header></page-header>
      <el-main class="bg-gray-200">
        <router-view/>
      </el-main>
      <page-footer></page-footer>
    </el-container>
  </el-container>
</template>
<script>
import SideBar from '@/views/layouts/components/sidebar.vue';
import PageHeader from '@/views/layouts/components/header.vue';
import PageFooter from '@/views/layouts/components/footer.vue';

export default {
  components: {
    SideBar,
    PageHeader,
    PageFooter,
  },
};
</script>

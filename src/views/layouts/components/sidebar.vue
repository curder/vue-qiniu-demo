<template>
  <el-aside class="w-56 bg-gray-300" width="">

    <div class="h-12 flex justify-center items-center text-xl text-gray-700">
      <router-link :to="{ name : 'dashboard'}">七牛云数据管理</router-link>
    </div>

    <el-menu>
      <el-menu-item class="bg-gray-200" index="1">
        <router-link class="block w-full" :to="{name: 'accounts'}"><i class="el-icon-key"></i>账号管理
        </router-link>
      </el-menu-item>
      <el-menu-item class="bg-gray-200" index="2"><i class="el-icon-takeaway-box"></i> 存储桶管理
      </el-menu-item>
      <el-menu-item class="bg-gray-200" index="3"><i class="el-icon-coin"></i> 域名管理</el-menu-item>
    </el-menu>
  </el-aside>
</template>
<script>
export default {};
</script>

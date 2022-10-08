<template>
  <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
    <div class="logo" />
    <my-menu></my-menu>
  </a-layout-sider>
</template>
<script>
import {Layout} from 'ant-design-vue';
import Menu from "../Menu/Menu.vue";
export default {
  name: "Sider",
  components: {
      [Layout.Sider.name]:Layout.Sider,
      // 自定义组件
    "my-menu": Menu,
  },
  props: {
      collapsed: {
          type: Boolean,
          default: false
      }
  }
};
</script>
<style lang="less" scoped>
.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
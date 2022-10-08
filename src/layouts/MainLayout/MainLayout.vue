<template>
  <a-layout id="layout">
    <!-- 侧边栏 -->
    <my-sider :collapsed="collapsed"></my-sider>
    <!-- 右侧主体 -->
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <my-header :collapsed="collapsed" @handlerTrigger="handlerTrigger"></my-header>
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        <router-view></router-view>
      </a-layout-content>
      <a-layout-footer>2020-08-07底部</a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import {Layout} from 'ant-design-vue'
import Header from './components/Header/Header.vue'
import Sider from './components/Sider/Sider.vue'
export default {
  name: "MainLayout",
  components:{
      [Layout.name]:Layout,
      [Layout.Header.name]:Layout.Header,
      [Layout.Content.name]:Layout.Content,
      [Layout.Footer.name]:Layout.Footer,
      [Layout.Sider.name]:Layout.Sider,
      // 自定义组件
      'my-sider':Sider,
      'my-header':Header
  },
  data() {
    return {
      collapsed: false,
    };
  },
  methods:{
    handlerTrigger(collapsed){
      this.collapsed = collapsed;
    }
  }
};
</script>
<style lang="less" scoped>
#layout {
    height: 100vh;
}
</style>
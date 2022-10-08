<template>
  <div>
    <a-icon
      class="trigger"
      :type="collapsed ? 'menu-unfold' : 'menu-fold'"
      @click="() => (this.$emit('handlerTrigger',!collapsed))"
    />
    <my-user></my-user>
  </div>
</template>
<script>
import User from './components/User.vue'
import {Icon} from 'ant-design-vue'
export default {
  name: "Header",
  components: {
    [Icon.name]:Icon,
    'my-user': User
  },
  props:{
      collapsed: {
          type: Boolean,
          default: false
      }
  }
};
</script>
<style lang="less" scoped>
.trigger {
  float: left;
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}
.trigger:hover {
  color: #1890ff;
}
</style>
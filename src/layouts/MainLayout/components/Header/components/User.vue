<template>
  <div class="user">
    <a-avatar style="backgroundColor:#87d068" icon="user" />
    <a-dropdown class="ml5">
      <a class="ant-dropdown-link" @click="e => e.preventDefault()">
        Admin
      </a>
      <a-menu slot="overlay">
        <a-menu-item>
          <a href="javascript:;">1st menu item</a>
        </a-menu-item>
        <a-menu-item>
          <a href="javascript:;">2nd menu item</a>
        </a-menu-item>
        <a-menu-item>
          <a href="javascript:;">3rd menu item</a>
        </a-menu-item>
      </a-menu>
    </a-dropdown>
  </div>
</template>
<script>
import { Avatar, Dropdown, Menu } from "ant-design-vue";
export default {
  name: "User",
  components: {
    [Avatar.name]: Avatar,
    [Dropdown.name]: Dropdown,
    [Menu.name]: Menu,
    [Menu.Item.name]: Menu.Item
  },
};
</script>
<style lang="less" scoped>
.user {
  float: right;
  padding: 0 15px;
}
</style>